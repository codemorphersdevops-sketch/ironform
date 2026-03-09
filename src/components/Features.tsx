import { useState } from 'react';
import { imgPlaceholder3 } from '../assets/images';

const tabs = [
  {
    id: 'coaching',
    label: 'Coaching',
    title: 'Coaches who actually\nknow your name',
    body: 'Every session is led by coaches with real experience. They watch your movement, adjust your form, and push you when you need it. No certification mill here.',
    cta: 'Meet the team',
    image: imgPlaceholder3,
  },
  {
    id: 'programming',
    label: 'Programming',
    title: 'Programming built\nfor real progress',
    body: 'Our programs are designed around compound movements and progressive overload. No random workouts. No wasted sessions. Just a clear path to getting stronger.',
    cta: 'View programs',
    image: imgPlaceholder3,
  },
  {
    id: 'community',
    label: 'Community',
    title: 'A community that\nshows up for you',
    body: 'Training alone is hard. Training with people who challenge and support you is different. Our community is the reason most of our members never leave.',
    cta: 'Meet the members',
    image: imgPlaceholder3,
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState('coaching');
  const tab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-if-bg py-[112px] px-8 md:px-16">
      <div className="max-w-content mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-8 items-center max-w-copy mx-auto text-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-bebas text-[48px] leading-[1.2] text-if-accent">
              What makes IRONFORM different
            </h2>
            <p className="font-inter font-normal text-lg text-white leading-relaxed">
              We built this gym for people who train seriously but aren't chasing trophies. No ego, no noise, just the work.
            </p>
          </div>
          <button className="bg-if-accent text-white font-bebas text-base px-6 py-3 rounded-[5px] hover:opacity-90 transition-opacity">
            Explore programs
          </button>
        </div>

        {/* Tab container */}
        <div className="flex flex-col gap-16">
          {/* Tab menu */}
          <div className="flex items-center justify-center gap-6">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`font-roboto text-base text-white py-2 border-b transition-colors ${
                  activeTab === t.id ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="border border-black flex flex-col md:flex-row h-auto md:h-[640px] overflow-hidden">
            {/* Left panel */}
            <div className="bg-if-dark flex-1 flex flex-col justify-center gap-8 p-8 md:p-12">
              <div className="flex flex-col gap-4 max-w-[560px]">
                <p className="font-inter font-semibold text-base text-white">{tab.label}</p>
                <div className="flex flex-col gap-6 text-white">
                  <h3 className="font-bebas text-[48px] leading-[1.2] whitespace-pre-line">{tab.title}</h3>
                  <p className="font-inter font-normal text-base leading-relaxed">{tab.body}</p>
                </div>
              </div>
              <button className="bg-if-accent text-white font-bebas text-base px-6 py-3 self-start hover:opacity-90 transition-opacity">
                {tab.cta}
              </button>
            </div>
            {/* Right panel - image */}
            <div className="flex-1 overflow-hidden">
              <img src={tab.image} alt={tab.label} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
