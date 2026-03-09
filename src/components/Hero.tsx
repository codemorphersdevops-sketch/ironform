import { imgHero } from '../assets/images';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[900px] flex items-center justify-center overflow-hidden px-8 md:px-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={imgHero} alt="" className="absolute w-full h-full object-cover max-w-none" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[768px] gap-8 w-full">
        <div className="flex flex-col gap-6 text-white w-full">
          <h1 className="font-bebas text-[40px] md:text-[56px] leading-[1.2]">
            Train seriously. Build strength.{' '}
            <span className="block">Join the community.</span>
          </h1>
          <p className="font-inter font-normal text-lg leading-relaxed">
            IRONFORM is where young professionals get real results.<br />
            No machines, no mirrors, no excuses. Just solid coaching and people who show up.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-if-accent text-white font-bebas text-base px-6 py-3 rounded-[5px] hover:opacity-90 transition-opacity">
            Start free trial
          </button>
          <button className="border border-white text-white font-bebas text-base px-6 py-3 rounded-[5px] hover:bg-white hover:text-if-bg transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
