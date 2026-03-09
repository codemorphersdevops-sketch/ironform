import { useState } from 'react';
import { imgTabPane } from '../assets/images';

const programs = [
  {
    id: 'foundational',
    title: 'Foundational membership',
    description:
      'Four sessions per week with full access to our programming.\nPerfect for building the habit and learning proper form from our coaches.',
  },
  {
    id: 'unlimited',
    title: 'Unlimited membership',
    description:
      'Train as much as you want. Come in early, stay late, show up whenever\nit fits your schedule. For people serious about consistency.',
  },
  {
    id: 'oneonone',
    title: 'One-on-one coaching',
    description:
      'Work directly with a coach who builds your program and tracks your progress. For those who want personalized attention and faster results.',
  },
];

export default function Programs() {
  const [active, setActive] = useState('foundational');

  return (
    <section className="bg-if-card py-[112px] px-8 md:px-16">
      <div className="max-w-content mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-8 items-center max-w-copy mx-auto text-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-bebas text-[48px] leading-[1.2] text-if-accent">
              Pick your path forward
            </h2>
            <p className="font-inter font-normal text-lg text-white leading-relaxed">
              Whether you're starting out or already strong, we have a membership that fits. No long contracts. No surprises.
            </p>
          </div>
          <button className="bg-if-accent text-white font-bebas text-base px-6 py-3 rounded-[5px] hover:opacity-90 transition-opacity">
            Compare
          </button>
        </div>

        {/* Component */}
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* Image */}
          <div className="flex-1 aspect-square overflow-hidden w-full max-w-[600px]">
            <img src={imgTabPane} alt="Training" className="w-full h-full object-cover" />
          </div>

          {/* Programs list */}
          <div className="flex-1 flex flex-col text-white">
            {programs.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`text-left border-b border-white/30 py-6 flex flex-col gap-4 transition-opacity ${
                  active === p.id ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <h3 className="font-bebas text-[36px] leading-[1.3]">{p.title}</h3>
                <p className="font-inter font-normal text-base leading-relaxed whitespace-pre-line">{p.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
