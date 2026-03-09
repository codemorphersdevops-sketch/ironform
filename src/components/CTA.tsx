import { imgCtaImage } from '../assets/images';

export default function CTA() {
  return (
    <section className="bg-if-card py-[112px] px-8 md:px-16">
      <div className="max-w-content mx-auto flex flex-col gap-20 items-center">
        {/* Content */}
        <div className="flex flex-col gap-8 items-center max-w-copy text-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-bebas text-[48px] leading-[1.2] text-if-accent">
              Stop waiting. Start lifting.
            </h2>
            <p className="font-inter font-normal text-lg text-white leading-relaxed">
              Your first session is free. No credit card. No commitment.<br />
              Just show up and see what we're about.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-if-accent text-white font-bebas text-base px-6 py-3 rounded-[5px] hover:opacity-90 transition-opacity">
              Claim trial
            </button>
            <button className="border border-white text-white font-bebas text-base px-6 py-3 rounded-[5px] hover:bg-white hover:text-if-bg transition-colors">
              Questions
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img src={imgCtaImage} alt="IRONFORM gym" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
