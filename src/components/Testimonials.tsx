import { imgAvatar1, imgAvatar2, imgAvatar3, imgTestiLogo1, imgTestiLogo2, imgChevronRight } from '../assets/images';

interface TestimonialProps {
  logo: string;
  quote: string;
  avatar: string;
  name: string;
  role: string;
}

function TestimonialCard({ logo, quote, avatar, name, role }: TestimonialProps) {
  return (
    <div className="border border-if-muted flex flex-col gap-8 p-8 flex-1">
      <div className="flex flex-col gap-12">
        <div className="h-12 flex items-center">
          <img src={logo} alt="" className="h-5 w-auto object-contain" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-roboto font-normal text-lg text-white leading-relaxed">{quote}</p>
          <div className="flex items-center gap-5">
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover shrink-0" />
            <div className="flex flex-col">
              <p className="font-roboto font-semibold text-base text-white">{name}</p>
              <p className="font-roboto font-normal text-base text-white">{role}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="flex items-center gap-2 text-if-accent font-roboto text-base hover:opacity-80 transition-opacity">
          Read story
          <img src={imgChevronRight} alt="" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

const testimonials = [
  {
    logo: imgTestiLogo1,
    quote: '"I came in thinking I knew how to lift. The coaches showed me I was doing it wrong. Six months later, my squat went up forty pounds and my knees stopped hurting."',
    avatar: imgAvatar1,
    name: 'Marcus Chen',
    role: 'Software engineer',
  },
  {
    logo: imgTestiLogo2,
    quote: '"This isn\'t a gym where you feel like a number. The people here actually care. I\'ve made real friends and I look forward to showing up."',
    avatar: imgAvatar2,
    name: 'Sarah Williams',
    role: 'Marketing manager',
  },
  {
    logo: imgTestiLogo1,
    quote: '"The programming works. I\'ve never been stronger. And the coaches push you hard but they know when to back off. That balance is rare."',
    avatar: imgAvatar3,
    name: 'David Rodriguez',
    role: 'Finance analyst',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-if-bg py-[112px] px-8 md:px-16">
      <div className="max-w-content mx-auto flex flex-col gap-20">
        {/* Header */}
        <div className="flex flex-col gap-6 max-w-copy">
          <h2 className="font-bebas text-[64px] leading-[1.2] text-if-accent">Real voices</h2>
          <p className="font-inter font-normal text-lg text-white leading-relaxed">
            Hear from members who've made the change
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
