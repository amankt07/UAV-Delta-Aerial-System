import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020202] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity"
            >
              <svg width="64" height="64" viewBox="0 0 100 100" fill="currentColor" className="text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 L20 85 L35 85 L50 50 L65 85 L80 85 Z" />
              </svg>
              <div className="flex flex-col justify-center">
                <span className="text-2xl md:text-3xl font-bold tracking-widest leading-none text-white">DELTA AERIAL</span>
                <span className="text-base md:text-lg tracking-[0.2em] text-white/50 leading-none mt-2">SYSTEMS</span>
              </div>
            </Link>
            <p className="text-aerospace-offwhite/50 font-mono text-sm max-w-sm">
              UAV DESIGN · BUILD · TEST
            </p>
            <p className="mt-8 text-aerospace-offwhite/40 text-xs leading-relaxed max-w-md">
              Team credentials reflect the founders' prior professional experience. This proposal is independent of, and is not endorsed or issued by, any current or former employer.
            </p>
          </div>

          <div>
            <h4 className="text-white font-mono tracking-widest text-sm mb-6">EXPLORE</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#capabilities" className="text-aerospace-offwhite/60 hover:text-white transition-colors text-sm">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="#track-record" className="text-aerospace-offwhite/60 hover:text-white transition-colors text-sm">
                  Track Record
                </Link>
              </li>
              <li>
                <Link href="#partnership" className="text-aerospace-offwhite/60 hover:text-white transition-colors text-sm">
                  Partnership Model
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono tracking-widest text-sm mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:adarshktiwari3@gmail.com" className="text-aerospace-offwhite/60 hover:text-aerospace-cyan transition-colors text-sm">
                  adarshktiwari3@gmail.com
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-aerospace-offwhite/60 hover:text-white transition-colors text-sm">
                  Start a Programme
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-aerospace-offwhite/40 text-xs font-mono">
            © {new Date().getFullYear()} Delta Aerial Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 text-aerospace-offwhite/40 text-xs font-mono">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
