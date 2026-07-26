import React, { useEffect } from 'react'
import { SITE } from '../config/site.js'

export default function Home({ navigateTo }) {
  useEffect(() => {
    // About image observer
    const imgObserver = new IntersectionObserver(
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const animatedEls = document.querySelectorAll('.scroll-animate-img')
    animatedEls.forEach((el) => imgObserver.observe(el))

    // ── Expertise cards: slide in/out on mobile ──────────────────────────────
    const cards = Array.from(
      document.querySelectorAll('[data-expertise-card]')
    )

    function updateCards() {
      if (window.innerWidth >= 1024) {
        // Desktop: clear all data-slide attrs, cards render normally
        cards.forEach((el) => el.removeAttribute('data-slide'))
        return
      }

      const vh = window.innerHeight

      cards.forEach((el) => {
        const dir = el.dataset.expertiseCard // 'left' or 'right'
        const rect = el.getBoundingClientRect()
        const prev = el.dataset.slide || ''

        // Card is in view
        if (rect.top < vh * 0.9 && rect.bottom > vh * 0.1) {
          if (prev !== `${dir}-in`) {
            el.dataset.slide = `${dir}-in`
          }
        } else {
          // Card is out of view — only animate out if it was visible
          const nextState = `${dir}-out`
          if (prev === `${dir}-in` && prev !== nextState) {
            el.dataset.slide = nextState
          } else if (!prev || prev === `${dir}-out`) {
            // Never seen yet — keep hidden without animation
            el.dataset.slide = `${dir}-hidden`
          }
        }
      })
    }

    // Set initial hidden state immediately so there's no flash
    if (window.innerWidth < 1024) {
      cards.forEach((el) => {
        el.dataset.slide = `${el.dataset.expertiseCard}-hidden`
      })
    }

    // Run once after paint to catch cards already in viewport on load
    requestAnimationFrame(() => {
      requestAnimationFrame(updateCards)
    })

    window.addEventListener('scroll', updateCards, { passive: true })
    window.addEventListener('resize', updateCards, { passive: true })

    return () => {
      animatedEls.forEach((el) => imgObserver.unobserve(el))
      window.removeEventListener('scroll', updateCards)
      window.removeEventListener('resize', updateCards)
    }
  }, [])

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home" className="relative overflow-x-hidden bg-slate-50">
        {/* Background Decorations */}
        <div className="absolute top-20 -left-24 h-72 w-72 rounded-full bg-teal-100 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-50"></div>

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center rounded-full bg-teal-100 px-5 py-2 text-sm font-medium text-teal-700">
                <i className="ri-heart-pulse-line mr-2"></i>
                Registered Nurse
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
                Fatima Gibba,
                <span className="block text-teal-700">RN, BSN</span>
              </h1>

              {/* Mobile Profile Image — after RN, BSN, before text */}
              <div className="relative mt-8 flex flex-col items-center justify-center overflow-visible px-2 py-10 lg:hidden">
                <div className="relative flex w-full max-w-[340px] justify-center overflow-visible">
                  <div className="absolute aspect-square w-[min(300px,80vw)] rounded-full bg-teal-100"></div>

                  <div className="relative z-10 aspect-square w-[min(300px,80vw)] overflow-hidden rounded-full border-4 border-white shadow-2xl animate-profile-entry">
                    <img
                      src="/images/profile-image.jpeg"
                      alt="Fatima Gibba"
                      className="h-full w-full object-cover object-top animate-profile-shake"
                    />
                  </div>

                  <div className="absolute -left-4 top-10 z-20 max-w-[150px] rounded-2xl bg-white p-3 shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-full bg-teal-100 p-2">
                        <i className="ri-award-line text-lg text-teal-700 animate-pulse"></i>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-900">Registered Nurse</h4>
                        <p className="text-[10px] text-slate-500">RN License</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 right-0 z-20 max-w-[165px] rounded-2xl bg-white p-3 shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-full bg-cyan-100 p-2">
                        <i className="ri-hospital-line text-lg text-teal-700"></i>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-900">Clinical Training</h4>
                        <p className="text-[10px] leading-tight text-slate-500">Psychiatric • Emergency • Community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
                Compassionate Registered Nurse delivering exceptional patient care through empathy, professionalism and
                evidence-based nursing practice. Passionate about improving patient outcomes while creating a safe and
                supportive healthcare environment.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href={SITE.cv}
                  download={SITE.cvFileName}
                  className="rounded-full bg-teal-700 px-8 py-4 font-medium text-white transition hover:bg-teal-800"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => navigateTo('home', 'contact')}
                  className="rounded-full border border-teal-700 px-8 py-4 font-medium text-teal-700 transition hover:bg-teal-700 hover:text-white cursor-pointer"
                >
                  Contact Me
                </button>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 grid grid-cols-3 gap-6">
                <div>
                  <h2 className="text-4xl font-bold text-slate-900">450+</h2>
                  <p className="mt-2 text-sm text-slate-500">Clinical Hours</p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-slate-900">6+</h2>
                  <p className="mt-2 text-sm text-slate-500">Clinical Rotations</p>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-slate-900">RN</h2>
                  <p className="mt-2 text-sm text-slate-500">Licensed Nurse</p>
                </div>
              </div>
            </div>

            {/* RIGHT — desktop only */}
            <div className="relative hidden flex-col items-center justify-center lg:flex">
              <div className="relative flex justify-center">
                {/* Background Shape */}
                <div className="absolute h-[500px] w-[500px] rounded-full bg-teal-100"></div>

                {/* Main Image */}
                <div className="relative z-10 h-[385px] w-[380px] overflow-hidden rounded-full border-4 border-white shadow-2xl animate-profile-entry md:h-[435px] md:w-[430px]">
                  <img
                    src="/images/profile-image.jpeg"
                    alt="Fatima Gibba"
                    className="h-full w-full object-cover object-top animate-profile-shake"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -left-5 top-12 z-20 rounded-2xl bg-white p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-teal-100 p-3">
                      <i className="ri-award-line text-2xl text-teal-700 animate-pulse"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Registered Nurse</h4>
                      <p className="text-sm text-slate-500">RN License</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 right-0 z-20 rounded-2xl bg-white p-5 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-cyan-100 p-3">
                      <i className="ri-hospital-line text-2xl text-teal-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Clinical Training</h4>
                      <p className="text-sm text-slate-500">Psychiatric • Emergency • Community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-x-20">
            {/* LEFT IMAGE */}
            <div className="relative flex flex-col items-center justify-center overflow-visible lg:justify-self-center">
              <div className="relative w-[min(300px,calc(100vw-3rem))] sm:w-[380px] md:w-[420px] lg:w-[480px]">
                <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-teal-100 blur-3xl opacity-60 lg:h-80 lg:w-80"></div>

                <div className="relative z-10 aspect-square w-full overflow-hidden rounded-[50px] shadow-2xl border-4 border-white scroll-animate-img">
                  <img
                    src="/images/home-image.jpeg"
                    alt="Fatima Gibba nursing"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="absolute bottom-0 left-1/2 z-20 w-[calc(100%-1.5rem)] max-w-[240px] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-xl sm:left-auto sm:right-0 sm:w-auto sm:max-w-none sm:translate-x-0 sm:p-6 sm:-right-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="shrink-0 rounded-full bg-teal-100 p-2.5 sm:p-4">
                      <i className="ri-user-heart-line text-xl sm:text-3xl text-teal-700"></i>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 sm:text-xl">Patient First</h4>
                      <p className="text-xs text-slate-500 sm:text-sm">Compassionate Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:justify-self-center">
              <span className="inline-flex rounded-full bg-teal-100 px-5 py-2 text-sm font-medium text-teal-700">
                About Me
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                Dedicated to providing <span className="text-teal-700">exceptional healthcare</span> with compassion.
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                I am Fatima Gibba, a Registered Nurse with a Bachelor of Science in Nursing. My passion is centered
                around delivering safe, evidence-based care while supporting patients and their families through every
                stage of their healthcare journey.
              </p>

              <p className="mt-5 text-lg leading-9 text-slate-600">
                Through clinical experience in psychiatric care, emergency nursing, and community health, I have
                developed strong assessment skills, clinical judgment, and a commitment to improving patient outcomes.
              </p>

              {/* Skills */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-3">
                    <i className="ri-check-line text-xl text-teal-700"></i>
                  </div>
                  <span className="font-medium text-slate-700">Patient Care</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-3">
                    <i className="ri-check-line text-xl text-teal-700"></i>
                  </div>
                  <span className="font-medium text-slate-700">Clinical Assessment</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-3">
                    <i className="ri-check-line text-xl text-teal-700"></i>
                  </div>
                  <span className="font-medium text-slate-700">Emergency Response</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-teal-100 p-3">
                    <i className="ri-check-line text-xl text-teal-700"></i>
                  </div>
                  <span className="font-medium text-slate-700">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section id="expertise" className="bg-slate-50 py-24 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-teal-100 px-5 py-2 text-sm font-medium text-teal-700">
              Nursing Expertise
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Specialized care focused on <span className="text-teal-700">patient wellbeing</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Providing professional nursing services through clinical knowledge, compassionate care, and
              evidence-based healthcare practices.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 — slides from left */}
            <div data-expertise-card="left" className="rounded-3xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                <i className="ri-heart-pulse-line text-3xl text-teal-700"></i>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">Patient Care</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Delivering compassionate bedside care while ensuring comfort, safety, and positive patient experiences.
              </p>
            </div>

            {/* Card 2 — slides from right */}
            <div data-expertise-card="right" className="rounded-3xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                <i className="ri-first-aid-kit-line text-3xl text-teal-700"></i>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">Emergency Care</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Applying quick clinical judgment and critical thinking during urgent healthcare situations.
              </p>
            </div>

            {/* Card 3 — slides from left */}
            <div data-expertise-card="left" className="rounded-3xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100">
                <i className="ri-medicine-bottle-line text-3xl text-teal-700"></i>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">Medication Management</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Ensuring safe medication administration while monitoring patient responses and outcomes.
              </p>
            </div>

            {/* Card 4 — slides from right */}
            <div data-expertise-card="right" className="rounded-3xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                <i className="ri-community-line text-3xl text-teal-700"></i>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">Community Health</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Supporting preventive care, health education, and wellness programs within communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-teal-100 px-5 py-2 text-sm font-medium text-teal-700">
              Clinical Experience
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Hands-on experience in <span className="text-teal-700">diverse healthcare settings</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Building clinical expertise through patient-centered care, teamwork, and evidence-based nursing practices.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Experience 1 */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-teal-100 p-4">
                  <i className="ri-hospital-line text-3xl text-teal-700"></i>
                </div>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-slate-900">Psychiatric Nursing</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Provided compassionate, comprehensive psychiatric care by conducting mental state examinations, assisting
                in therapeutic interventions, and supporting patients recovering from acute psychological distress.
                Developed safe-care plans and promoted therapeutic milieu environments.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700 animate-pulse"></i>
                  Mental state examinations (MSE)
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Therapeutic communication
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Milieu safety management
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-cyan-100 p-4">
                  <i className="ri-alarm-warning-line text-3xl text-teal-700"></i>
                </div>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-slate-900">Emergency Nursing</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Assisted healthcare teams in emergency situations, supporting rapid assessment, patient stabilization,
                and critical care procedures. Responded rapidly to changing clinical presentations with precision.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Emergency response
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Vital signs monitoring
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Team coordination
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-teal-100 p-4">
                  <i className="ri-community-line text-3xl text-teal-700"></i>
                </div>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-slate-900">Community Health</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Participated in health education programs, preventive care initiatives, and community wellness
                activities. Guided patients towards healthy choices with informative support.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Health education
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Patient guidance
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-check-line text-teal-700"></i>
                  Community outreach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & CERTIFICATIONS ================= */}
      <section id="education" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="inline-flex rounded-full bg-teal-100 px-5 py-2 text-sm font-medium text-teal-700">
              Education & Certifications
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Professional training built on <span className="text-teal-700">knowledge and excellence</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Academic achievements and professional certifications supporting safe, skilled, and effective nursing
              practice.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {/* Education */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-teal-100 p-4">
                  <i className="ri-graduation-cap-line text-3xl text-teal-700"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Education</h3>
                  <p className="text-slate-500">Academic Background</p>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <div className="border-l-4 border-teal-600 pl-6">
                  <h4 className="text-xl font-bold text-slate-900">Bachelor of Science in Nursing (BSN)</h4>
                  <p className="mt-2 font-medium text-teal-700">University of The Gambia</p>
                  <p className="mt-2 text-sm text-slate-500">2022 - 2026</p>
                  <p className="mt-4 leading-7 text-slate-600">
                    Completed comprehensive nursing education focused on clinical practice, patient safety, healthcare
                    assessment, and evidence-based care.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="text-xl font-bold text-slate-900">Nursing Clinical Training</h4>
                  <p className="mt-2 font-medium text-teal-700">Hospital Rotation Program</p>
                  <p className="mt-2 text-sm text-slate-500">450+ Clinical Hours</p>
                  <p className="mt-4 leading-7 text-slate-600">
                    Developed practical skills through rotations in psychiatric, emergency, and community healthcare
                    environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="rounded-2xl bg-cyan-100 p-4">
                  <i className="ri-award-line text-3xl text-teal-700"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
                  <p className="text-slate-500">Professional Credentials</p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-4">
                    <i className="ri-checkbox-circle-fill text-2xl text-teal-700"></i>
                    <div>
                      <h4 className="font-semibold text-slate-900">Registered Nurse License (RN)</h4>
                      <p className="text-sm text-slate-500">Active Professional License</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-4">
                    <i className="ri-checkbox-circle-fill text-2xl text-teal-700"></i>
                    <div>
                      <h4 className="font-semibold text-slate-900">Bachelor of Science in Nursing (BSN)</h4>
                      <p className="text-sm text-slate-500">University of The Gambia (UTG)</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-center gap-4">
                    <i className="ri-checkbox-circle-fill text-2xl text-teal-700"></i>
                    <div>
                      <h4 className="font-semibold text-slate-900">Associate Certificate in Nursing</h4>
                      <p className="text-sm text-slate-500">Professional Certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
