import {
  imgLogoWide,
  imgFacebook,
  imgInstagram,
  imgTwitterX,
  imgLinkedIn,
  imgYoutube,
} from '../assets/images';

const navCol1 = ['Free trial', 'Memberships', 'Our coaches', 'Member stories', 'Training programs'];
const navCol2 = ['Facility tour', 'Community', 'Contact us', 'FAQ', 'Careers'];

export default function Footer() {
  return (
    <footer className="bg-if-bg py-20 px-8 md:px-16">
      <div className="max-w-content mx-auto flex flex-col gap-20">
        {/* Top content */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Brand column */}
          <div className="flex-1 flex flex-col gap-8">
            <img src={imgLogoWide} alt="IRONFORM" className="h-9 w-auto object-contain self-start" />
            <div className="flex flex-col gap-6 text-white">
              <div className="flex flex-col gap-1 text-sm">
                <p className="font-roboto font-semibold">Address</p>
                <p className="font-roboto font-normal">Level 1, 12 Sample St, Sydney NSW 2000</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className="font-roboto font-semibold">Contact</p>
                <div className="flex flex-col underline">
                  <a href="tel:18001234567" className="font-roboto font-normal hover:text-if-muted">1800 123 4567</a>
                  <a href="mailto:hello@ironform.com" className="font-roboto font-normal hover:text-if-muted">hello@ironform.com</a>
                </div>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { src: imgFacebook, alt: 'Facebook' },
                { src: imgInstagram, alt: 'Instagram' },
                { src: imgTwitterX, alt: 'X / Twitter' },
                { src: imgLinkedIn, alt: 'LinkedIn' },
                { src: imgYoutube, alt: 'YouTube' },
              ].map(({ src, alt }) => (
                <a key={alt} href="#" aria-label={alt} className="opacity-70 hover:opacity-100 transition-opacity">
                  <img src={src} alt={alt} className="w-6 h-6 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex gap-6 flex-wrap">
            <div className="flex flex-col min-w-[140px]">
              {navCol1.map((link) => (
                <a key={link} href="#" className="font-roboto font-semibold text-sm text-white py-2 hover:text-if-muted transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col min-w-[140px]">
              {navCol2.map((link) => (
                <a key={link} href="#" className="font-roboto font-semibold text-sm text-white py-2 hover:text-if-muted transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-8">
          <hr className="border-white/20" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white text-sm font-roboto font-normal">
            <p>© 2025 IRONFORM. All rights reserved.</p>
            <div className="flex gap-6 underline">
              <a href="#" className="hover:text-if-muted transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-if-muted transition-colors">Terms of service</a>
              <a href="#" className="hover:text-if-muted transition-colors">Cookies settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
