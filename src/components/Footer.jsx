import React from 'react'

export default function Footer({ navigateTo }) {
  return (
    <footer id="contact" className="bg-slate-900 pt-16 pb-12 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3 border-b border-slate-800 pb-12">
          {/* Column 1: Info */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <i className="ri-heart-pulse-line text-teal-400"></i>
              <span>Fatima Gibba<span className="text-teal-400 font-normal">, RN</span></span>
            </div>
            <p className="mt-4 text-sm leading-6">
              Registered Nurse specializing in Psychiatric care, emergency nursing, and community outreach.
            </p>
          </div>

          {/* Column 2: Precise Contact */}
          <div>
            <span className="text-white text-base font-semibold block mb-4">Contact for Healthcare Enquiries</span>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-teal-400"></i>
                <a href="mailto:fatimagibba@email.com" className="hover:text-teal-300 transition">
                  fatimagibba432@email.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-teal-400"></i>
                <span>+220 531 6067</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-teal-400"></i>
                <span>Banjullinding, The Gambia</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Connection */}
          <div>
            <h4 className="text-white font-semibold text-base uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/15552345678"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-teal-700 hover:text-white transition"
                aria-label="WhatsApp"
              >
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-teal-700 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-teal-700 hover:text-white transition"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Fatima Gibba. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => navigateTo('home', 'home')}
              className="hover:text-teal-300 transition cursor-pointer bg-transparent border-none p-0 text-slate-400"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('home', 'about')}
              className="hover:text-teal-300 transition cursor-pointer bg-transparent border-none p-0 text-slate-400"
            >
              About
            </button>
            <button
              onClick={() => navigateTo('gallery')}
              className="hover:text-teal-300 transition cursor-pointer bg-transparent border-none p-0 text-slate-400"
            >
              Gallery
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
