import React, { useState } from 'react'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // null or { src, alt }

  const outreachImages = [
    { src: 'images/community-outreach.png', alt: 'Community Outreach Photo 1' },
    ...Array.from({ length: 11 }, (_, i) => ({ src: '', alt: `Outreach Spot ${i + 2}` })),
  ]

  const clinicalImages = [
    { src: 'images/psychiatric-nursing.png', alt: 'Clinical Ward Session' },
    { src: 'images/emergency-nursing.png', alt: 'Emergency Simulation Lab' },
    ...Array.from({ length: 10 }, (_, i) => ({ src: '', alt: `Clinical Spot ${i + 3}` })),
  ]

  const openLightbox = (src, alt) => {
    if (src) {
      setLightbox({ src, alt })
    }
  }

  const closeLightbox = () => {
    setLightbox(null)
  }

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-50 py-16">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-teal-50 blur-3xl opacity-60"></div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center rounded-full bg-teal-100 px-5 py-2 text-sm font-medium text-teal-700">
            <i className="ri-gallery-line mr-2"></i> Clinical & Outreach Portfolio
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Fatima's Nursing <span className="text-teal-700">Gallery</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore visual highlights of clinical assignments, community outreach events, ward sessions, and student life.
          </p>
        </div>
      </section>

      {/* ================= GALLERY SECTIONS ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* ================= PORTION 1: COMMUNITY OUTREACH ================= */}
          <div className="mb-24">
            <div className="border-b border-slate-100 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <i className="ri-user-shared-line text-teal-700"></i>
                Community Outreach
              </h2>
              <p className="mt-2 text-slate-500">
                Public health programs, educational campaigns, and screening drives in local communities.
              </p>
            </div>

            {/* 4 per row grid */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {outreachImages.map((img, idx) => {
                if (img.src) {
                  return (
                    <div
                      key={idx}
                      onClick={() => openLightbox(img.src, img.alt)}
                      className="gallery-item group overflow-hidden rounded-2xl aspect-square bg-slate-50 border border-slate-200 relative cursor-pointer"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i className="ri-zoom-in-line text-white text-3xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition duration-300"></i>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div
                      key={idx}
                      className="gallery-item group overflow-hidden rounded-2xl aspect-square bg-slate-50 border border-slate-200 border-dashed relative cursor-default flex items-center justify-center hover:bg-slate-100 hover:border-teal-500 transition duration-300"
                    >
                      <div className="placeholder-overlay text-center text-slate-400 group-hover:text-teal-700 transition">
                        <i className="ri-image-add-line text-3xl block mb-2"></i>
                        <span className="text-xs font-semibold">{img.alt}</span>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>

          {/* ================= PORTION 2: CLINICAL PRACTICE & SCHOOL DAYS ================= */}
          <div>
            <div className="border-b border-slate-100 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <i className="ri-hospital-line text-teal-700"></i>
                Clinical Practice & School Days
              </h2>
              <p className="mt-2 text-slate-500">
                Milestone sessions in hospital wards, high-fidelity nursing emergency simulation labs, and university
                school days.
              </p>
            </div>

            {/* 4 per row grid */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {clinicalImages.map((img, idx) => {
                if (img.src) {
                  return (
                    <div
                      key={idx}
                      onClick={() => openLightbox(img.src, img.alt)}
                      className="gallery-item group overflow-hidden rounded-2xl aspect-square bg-slate-50 border border-slate-200 relative cursor-pointer"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i className="ri-zoom-in-line text-white text-3xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition duration-300"></i>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div
                      key={idx}
                      className="gallery-item group overflow-hidden rounded-2xl aspect-square bg-slate-50 border border-slate-200 border-dashed relative cursor-default flex items-center justify-center hover:bg-slate-100 hover:border-teal-500 transition duration-300"
                    >
                      <div className="placeholder-overlay text-center text-slate-400 group-hover:text-teal-700 transition">
                        <i className="ri-image-add-line text-3xl block mb-2"></i>
                        <span className="text-xs font-semibold">{img.alt}</span>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 transition-all duration-300 animate-fadeIn"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-teal-400 transition cursor-pointer"
            aria-label="Close Gallery Image"
          >
            <i className="ri-close-line"></i>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center gap-6"
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl scale-100 transition-transform duration-300"
            />
            <div className="text-center text-white px-4">
              <h4 className="text-2xl font-bold mb-2">{lightbox.alt || 'Nursing Gallery Image'}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
