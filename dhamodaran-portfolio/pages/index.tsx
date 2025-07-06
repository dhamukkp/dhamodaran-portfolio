// Dhamodaran's Personal Portfolio (Next.js Template)
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Github, Linkedin, Sun, Moon, Twitter } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8 font-sans transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold">Dhamodaran</h1>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline">Home</Link>
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#experience" className="hover:underline">Experience</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Dhamodaran</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Designing Equitable Learning Systems through Engineering, Automation & Maker Pedagogy
          </p>
        </header>

        <section id="about" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="mb-2">
            I’m a Project Associate and Curator at Aarvam Learning Lab (Payir Trust), where I build community-driven
            Makerspace ecosystems, mentor school teachers in edtech and AI integration, and design educational toys and ICT kits.
            My background spans mechanical engineering, 3D printing, Google Workspace automation, and strategic capacity-building
            for underserved learners.
          </p>
          <p>
            I believe that learning must be engineered, humanized, and open to all.
          </p>
        </section>

        <section id="experience" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Payir Trust / Aarvam Learning Lab (Present):</strong> Designing Makerspace curricula, managing vendor coordination, mentoring teachers in digital tools and AI models, developing ICT kits and educational toys, prototyping inventory dashboards and automation tools for Neighbourhood Learning Centers.</li>
            <li><strong>Frigate Engineering Services:</strong> Led New Product Development (e.g., heat deception device), managed vendor sourcing, coordinated supply chains, and prepared detailed quotations.</li>
            <li><strong>MAMCET:</strong> Assistant Professor — Established 3D printing lab, mentored hackathon teams including IIT-PAL series finalists, led CSR teacher development programs, and founded a student design club.</li>
            <li><strong>MIET Engineering College:</strong> Assistant Professor & Researcher — Set up CAD/CAM labs, delivered Autodesk training, and published papers in manufacturing and design domains.</li>
            <li><strong>Ambigai Engineering Works:</strong> Mechanical Engineer — Focused on CAD automation, cutting plan preparation, reverse engineering, jig design, and third-party inspection management.</li>
            <li><strong>Entrepreneurship:</strong> Delivered precision impact specimens and components using surface grinding for BHEL, Harihara Alloys, and Sri Energy Valves.</li>
            <li><strong>Naan Mudhalvan Project:</strong> Facilitator — Conducted faculty development training in 3D printing, IoT, and Industry 4.0; established prototype and IoT labs across educational institutions.</li>
            <li><strong>NDT Certification:</strong> Level II Inspector — Delivered quality inspection services and industry-focused guest lectures to polytechnic students.</li>
          </ul>
        </section>

        <section id="projects" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Notion dashboard prototypes for grassroots education systems</li>
            <li>Google Sheets + Apps Script inventory automation tools</li>
            <li>Micro:bit weather station for rural schools</li>
            <li>Unity and AR/VR exploration for immersive STEM learning</li>
          </ul>
        </section>

        <section id="contact" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mb-2">Let's connect — I'm open to collaborations, speaking engagements, and consulting on STEAM, maker education, and digital workflows.</p>
          <div className="flex space-x-4 mt-4">
            <Link href="mailto:dhamodaranhk90@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6" />
            </Link>
            <Link href="https://github.com/dhamukkp" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/dhamodarankkp/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="https://x.com/dhamukkp" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </section>

        <footer className="mt-20 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Dhamodaran — Powered by Next.js & Vercel
        </footer>
      </div>
    </main>
  );
}
