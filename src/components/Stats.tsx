import { imgPlaceholder1, imgPlaceholder2 } from '../assets/images';

interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="border border-white flex flex-col justify-between p-8 h-full">
      <p className="font-bebas text-xl leading-[1.4] text-white">{label}</p>
      <div className="flex flex-col gap-4 mt-8">
        <p className="font-bebas text-[80px] leading-[1.2] text-if-accent text-right">{value}</p>
        <hr className="border-white/30" />
        <p className="font-inter font-normal text-base text-white text-right">{description}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-if-bg py-[112px] px-8 md:px-16">
      <div className="max-w-content mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1 flex flex-col gap-4">
            <p className="font-roboto font-semibold text-base text-white">Proof</p>
            <h2 className="font-bebas text-[48px] leading-[1.2] text-white">
              Real people. Real strength. Real community.
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <p className="font-inter font-normal text-lg text-white leading-relaxed">
              We don't measure success in mirrors. Our members lift heavier, move better, and show up because they belong here. These numbers tell the story.
            </p>
            <div>
              <button className="border border-white text-white font-bebas text-base px-6 py-3 hover:bg-white hover:text-if-bg transition-colors">
                See all results
              </button>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 - tall card */}
          <div className="flex flex-col gap-0">
            <StatCard
              label="Members training consistently"
              value="87%"
              description="Return within their first year of joining"
            />
          </div>

          {/* Stat 2 - image + card */}
          <div className="flex flex-col gap-8">
            <div className="aspect-[3/2] overflow-hidden">
              <img src={imgPlaceholder1} alt="Training" className="w-full h-full object-cover" />
            </div>
            <StatCard
              label="Average strength gains"
              value="3 months"
              description="Time to see measurable progress"
            />
          </div>

          {/* Stat 3 - card + image */}
          <div className="flex flex-col gap-8">
            <StatCard
              label="Coach retention rate"
              value="94%"
              description="Same coaches leading sessions year after year"
            />
            <div className="aspect-[3/2] overflow-hidden">
              <img src={imgPlaceholder2} alt="Coaching" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
