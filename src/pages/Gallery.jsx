import React, { useState, useEffect } from 'react'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // null or { src, alt }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const animatedEls = document.querySelectorAll('.scroll-animate-img')
    animatedEls.forEach((el) => observer.observe(el))

    return () => {
      animatedEls.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const outreachImages = Array.from({ length: 9 }, (_, i) => ({
    src: `/images/community-image-${i + 1}.jpeg`,
    alt: 'Community Outreach',
    tag: 'Community Outreach'
  }))

  const clinicalImages = Array.from({ length: 9 }, (_, i) => ({
    src: `/images/ward-and-school-image-${i + 1}.jpeg`,
    alt: 'Clinical Practice & School Days',
    tag: 'Ward & School Days'
  }))

  const openLightbox = (src, alt) => {
    if (src) {
      setLightbox({ src, alt })
    }
  }

  const closeLightbox = () => {
    setLightbox(null)
  }

  return (
    <div className="bg-slate-50/50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-20">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-teal-50/80 blur-3xl opacity-60"></div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-700 uppercase mb-4 border border-teal-100/50">
            <i className="ri-gallery-line mr-1.5"></i> Clinical & Outreach Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Fatima's Nursing <span className="text-teal-700">Gallery</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            Visual highlights of clinical assignments, community outreach events, hospital ward sessions, and academic life.
          </p>
        </div>
      </section>

      {/* ================= GALLERY SECTIONS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* ================= PORTION 1: COMMUNITY OUTREACH ================= */}
          <div className="mb-24">
            <div className="border-b border-slate-200/60 pb-5 mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-teal-600"></span>
                Community Outreach
              </h2>
              <p className="mt-2 text-slate-500">
                Public health programs, educational campaigns, and screening drives in local communities.
              </p>
            </div>

            {/* 3 columns design */}
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {outreachImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(img.src, img.alt)}
                  className="group relative overflow-hidden rounded-2xl aspect-square bg-slate-100 border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-350 cursor-pointer scroll-animate-img animate-profile-entry"
                  style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Premium overlay with subtle gradients */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-teal-950/90 via-slate-950/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6">
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-350 delay-75">
                      {img.tag}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug transform translate-y-3 group-hover:translate-y-0 transition-transform duration-350 delay-100">
                      {img.alt}
                    </h3>
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-350 delay-75">
                      <i className="ri-zoom-in-line text-base"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PORTION 2: CLINICAL PRACTICE & SCHOOL DAYS ================= */}
          <div>
            <div className="border-b border-slate-200/60 pb-5 mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-emerald-600"></span>
                Clinical Practice & School Days
              </h2>
              <p className="mt-2 text-slate-500">
                Milestone sessions in hospital wards, high-fidelity nursing emergency simulation labs, and university school days.
              </p>
            </div>

            {/* 3 columns design */}
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {clinicalImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(img.src, img.alt)}
                  className="group relative overflow-hidden rounded-2xl aspect-square bg-slate-100 border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-350 cursor-pointer scroll-animate-img animate-profile-entry"
                  style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Premium overlay with subtle gradients */}
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-slate-950/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-6">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-350 delay-75">
                      {img.tag}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug transform translate-y-3 group-hover:translate-y-0 transition-transform duration-350 delay-100">
                      {img.alt}
                    </h3>
                    <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-350 delay-75">
                      <i className="ri-zoom-in-line text-base"></i>
                    </div>
                  </div>
                </div>
              ))}
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
