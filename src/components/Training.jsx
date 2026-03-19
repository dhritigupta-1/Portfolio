import React from "react"
import { training } from "../constants"
import { BookOpen, Calendar, Eye, Download } from "lucide-react"

const Training = () => {
  const isSingleCertificate = training.length === 1

  return (
    <section id="training" className="section-shell scroll-mt-28 py-24 px-6 sm:px-10 md:px-24">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 italic">
        Training & <span className="text-accent">Learning</span>
      </h2>

      <div
        className={`max-w-6xl mx-auto grid gap-8 ${
          isSingleCertificate ? "grid-cols-1 place-items-center" : "md:grid-cols-2"
        }`}
      >

        {training.map((item, index) => (

          <div
            key={index}
            className="
              w-full
              max-w-2xl
              glass-panel
              p-6
              rounded-2xl
              backdrop-blur-xl
              border border-gray-200 dark:border-white/10
              hover:-translate-y-1
              hover:border-accent
              hover:shadow-xl hover:shadow-accent/20
              transition duration-500
            "
          >

            {/* Image Preview */}
            {item.image && (
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            )}

            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="text-accent" size={20} />
              <h3 className="text-lg font-bold">
                {item.title}
              </h3>
            </div>

            {/* Platform */}
            <p className="text-accent text-sm mb-2">
              {item.platform}
            </p>

            {/* Duration */}
            <div className="flex items-center gap-2 text-xs mb-3 text-theme-secondary">
              <Calendar size={14} className="text-accent" />
              {item.duration}
            </div>

            {/* Description */}
            <p className="text-sm text-theme-secondary leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Buttons */}
            {item.pdf && (
              <div className="flex gap-4">

                {/* View */}
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm hover:scale-105 transition"
                >
                  <Eye size={16} />
                  View
                </a>

                {/* Download */}
                <a
                  href={item.pdf}
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent text-sm hover:scale-105 transition"
                >
                  <Download size={16} />
                  Download
                </a>

              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  )
}

export default Training