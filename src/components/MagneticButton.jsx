import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MagneticButton({ children, className, onClick, href, download, target, rel }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = buttonRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(el, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const props = {
    ref: buttonRef,
    className: `inline-block ${className}`,
    onClick,
  };

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }

  return <button {...props}>{children}</button>;
}
