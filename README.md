## Hi there 👋
// Celo-HT Website — GitHub-ready scaffold // This single-file scaffold contains the repo files separated by markers. // To create the repo: copy each file block into the corresponding file path.

// -------- FILE: package.json -------- { "name": "celo-ht-website", "version": "0.1.0", "private": true, "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview", "lint": "eslint . --ext .ts,.tsx,.js,.jsx" }, "dependencies": { "react": "^18.2.0", "react-dom": "^18.2.0", "react-router-dom": "^6.14.1" }, "devDependencies": { "@types/react": "^18.2.20", "@types/react-dom": "^18.2.7", "typescript": "^5.4.2", "vite": "^5.0.0", "tailwindcss": "^4.0.0", "postcss": "^8.4.0", "autoprefixer": "^10.4.0" } }

// -------- FILE: public/index.html -------- <!doctype html>

<html lang="ht">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Celo HT — Fòmasyon & Solisyon Peman sou Celo pou Kominote Ayisyen" />
    <title>Celo HT</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>// -------- FILE: tailwind.config.cjs -------- module.exports = { content: ['./index.html', './src/**/*.{ts,tsx}'], theme: { extend: { colors: { gold: '#D4AF37' } } }, plugins: [] }

// -------- FILE: src/main.tsx -------- import React from 'react' import { createRoot } from 'react-dom/client' import { BrowserRouter } from 'react-router-dom' import App from './App' import './styles/globals.css'

createRoot(document.getElementById('root')!).render( <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode> )

// -------- FILE: src/App.tsx -------- import React from 'react' import { Routes, Route } from 'react-router-dom' import Header from './components/Header' import Footer from './components/Footer' import Home from './pages/Home' import About from './pages/About' import Services from './pages/Services' import Blog from './pages/Blog' import Contact from './pages/Contact'

export default function App(){ return ( <div className="min-h-screen bg-black text-white"> <Header /> <main className="max-w-6xl mx-auto px-6 py-10"> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/services" element={<Services />} /> <Route path="/blog" element={<Blog />} /> <Route path="/contact" element={<Contact />} /> </Routes> </main> <Footer /> </div> ) }

// -------- FILE: src/components/Header.tsx -------- import React from 'react' import { Link } from 'react-router-dom'

export default function Header(){ return ( <header className="border-b border-gray-800"> <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"> <div className="flex items-center gap-4"> <img src="/src/assets/logo-gold-on-black.svg" alt="Celo HT" className="w-12 h-12" /> <div> <div className="text-xl font-semibold">Celo HT</div> <div className="text-xs text-gray-300">Finans dijital pou kominote Ayisyen</div> </div> </div> <nav className="hidden md:flex gap-6 text-gray-200"> <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/services">Services</Link> <Link to="/blog">Blog</Link> <Link to="/contact">Contact</Link> </nav> </div> </header> ) }

// -------- FILE: src/components/Footer.tsx -------- import React from 'react'

export default function Footer(){ return ( <footer className="border-t border-gray-800 mt-12"> <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-400 flex justify-between"> <div>© {new Date().getFullYear()} Celo HT — Tout dwa rezève</div> <div>Made with ♥ for the Haitian community</div> </div> </footer> ) }

// -------- FILE: src/components/ServiceCard.tsx -------- import React from 'react'

export default function ServiceCard({title, desc}:{title:string, desc:string}){ return ( <div className="rounded-xl p-6 bg-gray-900 border border-gray-800"> <h5 className="font-semibold">{title}</h5> <p className="mt-2 text-gray-300 text-sm">{desc}</p> </div> ) }

// -------- FILE: src/pages/Home.tsx -------- import React from 'react' import { Link } from 'react-router-dom'

export default function Home(){ return ( <section> <h1 className="text-4xl font-bold">Celo HT — Finans dijital pou tout moun</h1> <p className="mt-4 text-gray-300">Nou edike ak sipòte kominote ayisyen pou itilize kriptomonè ak zouti finansye sou rezo Celo. Antre nan yon mouvman ki fè peman pi aksesib, pi vit, ak plis transparan.</p>

<div className="mt-8 grid md:grid-cols-3 gap-6">
    <div className="col-span-2">
      <h2 className="text-2xl font-semibold">Sa nou ofri</h2>
      <p className="mt-2 text-gray-300">Fòmasyon pratik, devlopman teknik, ak konsiltasyon stratejik pou biznis, ONG, ak moun.</p>
    </div>
    <aside>
      <Link to="/contact" className="inline-block px-5 py-3 rounded-xl bg-gold text-black font-semibold">Kontakte nou</Link>
    </aside>
  </div>
</section>

) }

// -------- FILE: src/pages/About.tsx -------- import React from 'react'

export default function About(){ return ( <section> <h1 className="text-3xl font-bold">Sou Celo HT</h1> <p className="mt-4 text-gray-300">Celo HT se yon inisyativ pou pote solisyon finansye sou blockchain bay kominote Ayisyen. Nou kwè teknoloji dwe itil pou moun, pa sèlman pou moun ki deja gen aksè — se pou sa nou konsantre sou edikasyon, entegrasyon lokal, ak acha fasil atravè telefòn.</p>

<h2 className="mt-6 text-xl font-semibold">Vision & Valè</h2>
  <p className="mt-2 text-gray-300">Yon peyi kote tout moun gen opsyon pou fè peman dijital fasil, san depans twòp, epi ak respè pou sekirite. Nou kenbe etik kominote, transparans, ak enklizyon.</p>

  <h2 className="mt-6 text-xl font-semibold">Ekip</h2>
  <p className="mt-2 text-gray-300">Ekip la gen ekspètiz nan devlopman Web3, fòmasyon, ak kolaborasyon lokal. Nou travay ak patnè teknik ak ONG pou solisyon pratik.</p>
</section>

) }

// -------- FILE: src/pages/Services.tsx -------- import React from 'react' import ServiceCard from '../components/ServiceCard'

export default function Services(){ return ( <section> <h1 className="text-3xl font-bold">Sèvis nou yo</h1> <div className="mt-6 grid md:grid-cols-3 gap-6"> <ServiceCard title="Fòmasyon & Atelye" desc="Sesyon pratik sou kòman pou itilize pòch Celo, sekirite, ak komès debaz." /> <ServiceCard title="Konsiltasyon" desc="Analiz bezwen, plan entegrasyon peman, ak evalyasyon risk." /> <ServiceCard title="Devlopman" desc="Kreyasyon DApp, APIs, entegrasyon POS, ak solisyon mobil." /> </div> </section> ) }

// -------- FILE: src/pages/Blog.tsx -------- import React from 'react'

export default function Blog(){ return ( <section> <h1 className="text-3xl font-bold">Blog & Resous</h1> <p className="mt-4 text-gray-300">Telechaje gid an Kreyòl sou kòman pou itilize pòch, kou sou lekti tablo kripto, ak FAQ sou entegrasyon peman.</p> <ul className="mt-4 list-disc list-inside text-gray-300"> <li>Kòman pou itilize pòch Celo: Gid pratik pou debutan</li> <li>5 risk pou w konnen anvan w antre nan kripto</li> <li>Entegrasyon peman Celo pou ti biznis nan Ayiti</li> </ul> </section> ) }

// -------- FILE: src/pages/Contact.tsx -------- import React from 'react'

export default function Contact(){ return ( <section> <h1 className="text-3xl font-bold">Kontakte nou</h1> <p className="mt-4 text-gray-300">Pou mande sèvis, kolaborasyon, oswa sipò teknik, voye yon mesaj ba nou.</p> <p className="mt-2 text-gray-300">Imèl: <a href="mailto:celoht3@gmail.com" className="text-gold">celoht3@gmail.com</a></p> </section> ) }

// -------- FILE: src/styles/globals.css -------- @tailwind base; @tailwind components; @tailwind utilities;

html, body, #root { height: 100%; } body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto; }

// -------- FILE: src/assets/logo-gold-on-black.svg -------- <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"> <rect width="100%" height="100%" fill="#000"/> <circle cx="60" cy="60" r="40" fill="#D4AF37" /> <text x="100" y="120" fill="#D4AF37" font-size="36" font-family="Inter, sans-serif" text-anchor="middle">Celo</text> </svg>

// -------- FILE: README.md --------

Celo HT Website

Project scaffold for Celo HT — React + Vite + Tailwind. Copy files into a GitHub repo and deploy on Vercel or Netlify.

Local dev

npm install
npm run dev


---

// END OF SCAFFOLD

/* Next steps I can do for you:

Generate a ZIP of this repo so you can download and push to GitHub.

Push these files directly to a GitHub repo if you give me the repo URL and permissions. */



<!--
**Celo-HT/Celo-HT** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
