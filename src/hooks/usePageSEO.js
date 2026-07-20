import { useEffect } from 'react'
import { SITE, PAGE_SEO } from '../config/site.js'

function setMeta(attr, value, attrName = 'name') {
  if (!value) return
  let el = document.querySelector(`meta[${attrName}="${attr}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrName, attr)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href) {
  if (!href) return
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(data) {
  let el = document.getElementById('site-jsonld')
  if (!el) {
    el = document.createElement('script')
    el.id = 'site-jsonld'
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function usePageSEO(page) {
  useEffect(() => {
    const meta = PAGE_SEO[page] || PAGE_SEO.home
    const baseUrl = SITE.url || window.location.origin
    const pagePath = page === 'gallery' ? '/#gallery' : '/'
    const pageUrl = `${baseUrl.replace(/\/$/, '')}${pagePath}`
    const imageUrl = `${baseUrl.replace(/\/$/, '')}${SITE.image}`

    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('keywords', SITE.keywords)
    setMeta('author', `${SITE.name}, ${SITE.credentials}`)

    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', pageUrl, 'property')
    setMeta('og:image', imageUrl, 'property')
    setMeta('og:locale', SITE.locale, 'property')
    setMeta('og:site_name', SITE.name, 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', imageUrl)

    setCanonical(pageUrl)

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE.name,
      jobTitle: 'Registered Nurse',
      description: SITE.description,
      image: imageUrl,
      url: baseUrl,
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Banjullinding',
        addressCountry: 'GM',
      },
      knowsAbout: [
        'Psychiatric Nursing',
        'Emergency Nursing',
        'Community Health',
        'Patient Care',
        'Clinical Assessment',
      ],
      sameAs: [SITE.instagram, SITE.whatsapp].filter(Boolean),
    })
  }, [page])
}
