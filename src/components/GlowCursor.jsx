import { useEffect } from "react"

export default function GlowCursor(){

  useEffect(()=>{
    
    // Check if device supports hover
    if (window.matchMedia("(hover: none)").matches) return;

    const cursor = document.createElement("div")
    cursor.className="cursor"
    document.body.appendChild(cursor)

    let rafId = 0
    let nextX = 0
    let nextY = 0

    const render = () => {
      cursor.style.left = nextX + "px"
      cursor.style.top = nextY + "px"
      rafId = 0
    }

    const moveCursor = (e) => {
      nextX = e.clientX
      nextY = e.clientY

      if (!rafId) {
        rafId = requestAnimationFrame(render)
      }
    }

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, input, textarea, select, [role='button']")) {
        cursor.classList.add("hover-glow");
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, input, textarea, select, [role='button']")) {
        cursor.classList.remove("hover-glow");
      }
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
      if (document.body.contains(cursor)) document.body.removeChild(cursor)
    }

  },[])

  return null
}