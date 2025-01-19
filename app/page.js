import AboutMe from '@/components/AboutMe';
import NameTitle from '@/components/NameTitle';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white text-center font-sans">
        {/* Profielfoto */}
        <img
          src="/profile.png"
          alt="Daan Frankhuizen"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />

        <NameTitle />

=        <Link href="#about">
          <p className="mt-6 px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300">
            Learn More About Me
          </p>
        </Link>

        <div className="absolute bottom-4 right-4 flex space-x-4">
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/daan.frankhuizen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.976.975 1.248 2.242 1.31 3.608.058 1.266.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.334 2.633-1.31 3.608-.975.976-2.242 1.248-3.608 1.31-1.266.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.334-3.608-1.31-.976-.975-1.248-2.242-1.31-3.608C2.175 15.583 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.849.062-1.366.334-2.633 1.31-3.608.975-.976 2.242-1.248 3.608-1.31 1.266-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.331.014 7.053.073c-1.609.071-3.136.382-4.364 1.609C1.462 3.339 1.151 4.867 1.08 6.475.992 7.753.978 8.177.978 12c0 3.822.014 4.247.073 5.525.071 1.608.382 3.136 1.609 4.364 1.228 1.228 2.756 1.538 4.364 1.609 1.278.058 1.703.073 5.525.073 3.822 0 4.247-.014 5.525-.073 1.608-.071 3.136-.382 4.364-1.609 1.228-1.228 1.538-2.756 1.609-4.364.058-1.278.073-1.703.073-5.525 0-3.822-.014-4.247-.073-5.525-.071-1.608-.382-3.136-1.609-4.364C19.136 1.455 17.608 1.145 16 1.074 14.722 1.015 14.297 1 12 1zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 2.324a3.838 3.838 0 110 7.676 3.838 3.838 0 010-7.676zm6.406-1.71a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
            </svg>
          </a>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/daanfrankhuizen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M20.452 20.452h-3.912v-5.569c0-1.328-.024-3.038-1.852-3.038-1.852 0-2.136 1.445-2.136 2.939v5.668h-3.911v-11.452h3.752v1.563h.05c.523-.99 1.803-2.034 3.711-2.034 3.967 0 4.7 2.611 4.7 6.013v5.91zM5.337 8.771c-1.257 0-2.276-1.018-2.276-2.276s1.019-2.276 2.276-2.276c1.257 0 2.276 1.018 2.276 2.276 0 1.258-1.019 2.276-2.276 2.276zM6.927 20.452h-3.18v-11.452h3.18v11.452zM22.225 0h-20.451c-.975 0-1.774.798-1.774 1.774v20.451c0 .976.799 1.774 1.774 1.774h20.451c.976 0 1.774-.798 1.774-1.774v-20.451c0-.976-.798-1.774-1.774-1.774z" />
            </svg>
          </a>
        </div>
      </div>

      {/* About Me Sectie */}
      <div>
        <AboutMe />
      </div>
    </>
  );
}
