import type {
  NavLink,
  PainPoint,
  Service,
  Step,
  Stat,
  Testimonial,
  PricingTier,
  FAQItem,
  CompanyInfo,
} from "@/types";

export const COMPANY: CompanyInfo = {
  name: "LexumSoft",
  tagline: "The #1 Digital Marketing Agency for Plumbing & HVAC Companies",
  phone: "+923282828885",
  email: "waqar@lexumsoft.com",
  url: "https://www.lexumsoft.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Results", href: "/#results" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "PhoneOff",
    title: "Your Phone Stops Ringing After 5 PM",
    stat: "85% of callers won't call back",
    description:
      "When potential customers can't reach you, they call your competitor. Every missed call is a lost job worth $500–$5,000.",
  },
  {
    icon: "Monitor",
    title: "Your Website Looks Like It's from 2010",
    stat: "75% judge credibility by website design",
    description:
      "An outdated website doesn't just look bad — it actively drives away the high-value customers you want most.",
  },
  {
    icon: "SearchX",
    title: "You're Invisible on Google",
    stat: "97% search online for local services",
    description:
      "If you're not on page one of Google, you don't exist. Your competitors are stealing the leads that should be yours.",
  },
  {
    icon: "DollarSign",
    title: "You're Wasting Money on Ads That Don't Convert",
    stat: "40% of ad budgets are wasted on average",
    description:
      "Generic marketing agencies don't understand your industry. You're paying for clicks that never turn into booked jobs.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "website-design-development",
    icon: "Globe",
    title: "Website Design & Development",
    description:
      "Custom, conversion-optimized websites built specifically for plumbing and HVAC companies that turn visitors into leads.",
    features: [
      { text: "Mobile-first responsive design" },
      { text: "Built-in lead capture forms" },
      { text: "Speed-optimized for Google rankings" },
      { text: "Service area pages for local SEO" },
    ],
  },
  {
    slug: "online-presence-management",
    icon: "Search",
    title: "Complete Online Presence Management",
    description:
      "Dominate local search results with comprehensive SEO and online presence management tailored for home service businesses.",
    features: [
      { text: "Google Business Profile optimization" },
      { text: "Local SEO & citation building" },
      { text: "Review generation & management" },
      { text: "Monthly performance reporting" },
    ],
  },
  {
    slug: "ad-campaign-management",
    icon: "BarChart3",
    title: "Ad Campaign Management",
    description:
      "Targeted Google Ads and Local Services Ads campaigns that deliver qualified leads at the lowest possible cost per lead.",
    features: [
      { text: "Google Ads & Local Services Ads" },
      { text: "Geo-targeted campaigns" },
      { text: "Call tracking & attribution" },
      { text: "Continuous optimization & A/B testing" },
    ],
  },
  {
    slug: "after-hours-ai-receptionist",
    icon: "PhoneCall",
    title: "After-Hours AI Receptionist",
    description:
      "Never miss another lead. Our AI receptionist answers calls, books appointments, and qualifies leads when your team is off the clock.",
    features: [
      { text: "Natural-sounding AI voice" },
      { text: "Appointment scheduling" },
      { text: "Lead qualification & routing" },
      { text: "After-hours & overflow coverage" },
    ],
  },
  {
    slug: "24-7-ai-receptionist",
    icon: "Bot",
    title: "24/7 AI Receptionist",
    description:
      "Full-time AI-powered call handling that ensures every single call is answered, qualified, and booked — around the clock.",
    features: [
      { text: "24/7/365 call answering" },
      { text: "Intelligent job dispatching" },
      { text: "Emergency call prioritization" },
      { text: "CRM & calendar integration" },
    ],
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Book Your Free Audit",
    description:
      "We analyze your current marketing, website, and online presence to identify exactly where you're losing leads and revenue.",
  },
  {
    number: 2,
    title: "We Build Your Growth Engine",
    description:
      "Our team builds and launches your custom marketing system — website, ads, SEO, and AI receptionist — all optimized for your market.",
  },
  {
    number: 3,
    title: "Watch Your Phone Ring",
    description:
      "Sit back as qualified leads pour in. Track every call, form submission, and booked job in your real-time dashboard.",
  },
];

export const STATS: Stat[] = [
  { value: 200, suffix: "+", label: "Clients Served" },
  { value: 2.5, prefix: "$", suffix: "M+", label: "Revenue Generated for Clients", decimals: 1 },
  { value: 847, suffix: "%", label: "Average Client ROI" },
  { value: 4.9, suffix: "/5", label: "Client Satisfaction Rating", decimals: 1 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mike Johnson",
    company: "Johnson Plumbing Co.",
    role: "Owner",
    rating: 5,
    quote:
      "Before LexumSoft, we were getting maybe 10 calls a week. Now we're averaging 45+ qualified leads per week. We had to hire two more technicians just to keep up with demand.",
    result: "350% increase in qualified leads",
  },
  {
    name: "Sarah Williams",
    company: "Williams HVAC Solutions",
    role: "Marketing Director",
    rating: 5,
    quote:
      "We wasted $30K on a generic marketing agency before finding LexumSoft. In the first 60 days, they generated more leads than we got in 6 months with the other guys. They actually understand our industry.",
    result: "$180K in new revenue in 90 days",
  },
  {
    name: "David Chen",
    company: "ProFlow Plumbing & Heating",
    role: "Founder",
    rating: 5,
    quote:
      "The AI receptionist alone paid for our entire package. We were missing 40% of our after-hours calls. Now every single call gets answered and booked. It's like having a full-time receptionist for a fraction of the cost.",
    result: "40% more booked jobs from after-hours calls",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$997",
    period: "/mo",
    description: "Perfect for small shops ready to establish their online presence",
    features: [
      "Basic 5-page website",
      "Google Business Profile setup",
      "Basic local SEO",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$1,997",
    period: "/mo",
    popular: true,
    description: "For growing companies ready to dominate their local market",
    features: [
      "Advanced website + landing pages",
      "Google Ads management",
      "Advanced local SEO",
      "After-hours AI receptionist",
      "Review generation system",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    cta: "Start Growing",
  },
  {
    name: "Dominator",
    price: "$3,497",
    period: "/mo",
    description: "For established companies ready to become the market leader",
    features: [
      "Premium website + ongoing updates",
      "Google Ads + Local Services Ads",
      "Comprehensive SEO strategy",
      "24/7 AI receptionist",
      "Review management & response",
      "Weekly strategy calls",
      "Dedicated account manager",
      "Competitor monitoring",
    ],
    cta: "Dominate Now",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How is LexumSoft different from other marketing agencies?",
    answer:
      "We exclusively serve plumbing and HVAC companies. This means every strategy, ad campaign, and website we build is informed by years of data and experience in your specific industry. Generic agencies spread themselves thin across dozens of industries — we go deep in yours.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients see a significant increase in leads within the first 30 days. Google Ads campaigns typically start generating calls within the first week. SEO results build over 3-6 months, but we focus on quick wins first to deliver immediate ROI.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. We operate on month-to-month agreements because we believe in earning your business every single month. We're confident enough in our results that we don't need to lock you in.",
  },
  {
    question: "What is the 90-Day ROI Guarantee?",
    answer:
      "If you don't see a positive return on your investment within 90 days, we will continue working for free until we deliver. We track every lead, call, and booked job so there's complete transparency on your ROI.",
  },
  {
    question: "How does the AI receptionist work?",
    answer:
      "Our AI receptionist uses advanced natural language processing to answer calls, qualify leads, schedule appointments, and route emergency calls. It sounds natural and professional, and integrates directly with your scheduling system and CRM.",
  },
  {
    question: "Can I keep my existing website?",
    answer:
      "Absolutely. If you already have a website you're happy with, we can optimize it for conversions and SEO instead of building a new one. We'll audit your current site and recommend the best path forward.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We work with plumbing and HVAC companies across the entire United States. Our strategies are tailored to your specific service area, whether you're in a major metro or a smaller market.",
  },
  {
    question: "How do you track results?",
    answer:
      "Every client gets access to a real-time dashboard showing calls, form submissions, cost per lead, booked jobs, and ROI. We use call tracking, form tracking, and CRM integration to attribute every lead back to its source.",
  },
];

export const BUDGET_OPTIONS = [
  "Under $1,000/mo",
  "$1,000 - $2,000/mo",
  "$2,000 - $3,500/mo",
  "$3,500+/mo",
  "Not sure yet",
];

export const TRUCK_OPTIONS = ["1-3", "4-10", "11-25", "25+"];
