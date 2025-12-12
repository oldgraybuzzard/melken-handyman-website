export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "drywall-repair",
    title: "Drywall Repair",
    description: "Professional drywall repair and patching services",
    icon: "🔨",
    details: [
      "Hole and crack repair",
      "Texture matching",
      "Water damage repair",
      "Popcorn ceiling removal",
      "Drywall installation",
      "Taping and mudding",
      "Sanding and finishing",
      "Paint-ready preparation"
    ],
    cta: "Get an Estimate"
  },
  {
    id: "pressure-cleaning",
    title: "Pressure Cleaning",
    description: "High-quality pressure washing for homes and driveways",
    icon: "💧",
    details: [
      "Driveway cleaning",
      "Sidewalk washing",
      "Deck and patio cleaning",
      "House exterior washing",
      "Fence cleaning",
      "Concrete surface cleaning",
      "Mold and mildew removal",
      "Eco-friendly cleaning solutions"
    ],
    cta: "Get an Estimate"
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Keep your gutters flowing freely",
    icon: "🏠",
    details: [
      "Debris removal",
      "Downspout clearing",
      "Gutter inspection",
      "Minor gutter repairs",
      "Gutter guard installation",
      "Leak detection",
      "Proper water flow verification",
      "Seasonal maintenance"
    ],
    cta: "Get an Estimate"
  },
  {
    id: "light-electrical",
    title: "Light Electrical",
    description: "Basic electrical work and fixture installation",
    icon: "💡",
    details: [
      "Light fixture installation",
      "Ceiling fan installation",
      "Outlet and switch replacement",
      "GFCI outlet installation",
      "Dimmer switch installation",
      "Light bulb replacement",
      "Basic troubleshooting",
      "Safety inspections"
    ],
    cta: "Get an Estimate"
  },
  {
    id: "light-plumbing",
    title: "Light Plumbing",
    description: "Minor plumbing repairs and installations",
    icon: "🚰",
    details: [
      "Faucet repair and replacement",
      "Toilet repair and installation",
      "Sink installation",
      "Garbage disposal installation",
      "Leak repairs",
      "Drain cleaning",
      "Showerhead replacement",
      "Water line connections"
    ],
    cta: "Get an Estimate"
  },
  {
    id: "appliance-installation",
    title: "Appliance Installation",
    description: "Professional appliance installation services",
    icon: "🔌",
    details: [
      "Dishwasher installation",
      "Microwave mounting",
      "Range hood installation",
      "Garbage disposal installation",
      "Water heater installation",
      "Washer/dryer hookup",
      "Refrigerator installation",
      "Proper connections and testing"
    ],
    cta: "Get an Estimate"
  },
  {
    id: "smart-home",
    title: "Smart Home Setup",
    description: "Smart home device installation and configuration",
    icon: "📱",
    details: [
      "Smart thermostat installation",
      "Smart doorbell setup",
      "Security camera installation",
      "Smart lock installation",
      "Voice assistant setup",
      "Smart lighting installation",
      "Home automation configuration",
      "Network optimization"
    ],
    cta: "Get an Estimate"
  },
  {
    id: "rental-turnover",
    title: "Rental Turnover",
    description: "Complete turnover services for rental properties",
    icon: "🔑",
    details: [
      "Minor repairs",
      "Paint touch-ups",
      "Fixture replacement",
      "Deep cleaning coordination",
      "Safety inspections",
      "Lock changes",
      "Smoke detector testing",
      "Move-in ready preparation"
    ],
    cta: "Get an Estimate"
  }
];

