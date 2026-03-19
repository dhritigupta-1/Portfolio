import React from "react"
import { achievements } from "../constants"

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-10 md:px-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 italic">
        Achievements
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="p-8 border border-white/10 rounded-2xl
hover:border-accent hover:shadow-lg hover:shadow-accent/20
transition duration-500 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-secondary text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements