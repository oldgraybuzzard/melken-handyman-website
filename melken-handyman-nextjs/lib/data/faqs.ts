export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "General Questions",
  "Pricing & Payment",
  "Service Details",
  "Customer Experience",
  "Specialty Services"
];

export const faqs: FAQ[] = [
  // General Questions
  {
    id: "1",
    category: "General Questions",
    question: "What kind of services do you offer?",
    answer: "We offer a wide range of general handyman services including drywall repair, pressure cleaning, gutter cleaning, light electrical and plumbing, appliance installation, smart home setup, rental turnovers, safety upgrades for aging-in-place, and more. We do not perform any licensed, structural, or hazardous work."
  },
  {
    id: "2",
    category: "General Questions",
    question: "Are you licensed and insured?",
    answer: "In Florida, general handyman work under $2,500 does not require a contractor's license. We carry general liability insurance and are fully compliant with Florida regulations. For jobs requiring licensed work (e.g., major electrical or plumbing), we can refer you to trusted licensed professionals."
  },
  {
    id: "3",
    category: "General Questions",
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all projects. Contact us by phone, email, or through our online form to schedule your estimate."
  },
  // Pricing & Payment
  {
    id: "4",
    category: "Pricing & Payment",
    question: "How much do you charge?",
    answer: "Our standard rate is $85 per hour with a 2-hour minimum. Larger projects may be quoted at a flat rate. We'll always provide a clear estimate before starting any work."
  },
  {
    id: "5",
    category: "Pricing & Payment",
    question: "Do you require a deposit?",
    answer: "For projects over $200, we require a 50% deposit to schedule the work and purchase materials. The remaining balance is due upon completion."
  },
  {
    id: "6",
    category: "Pricing & Payment",
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, Venmo, Zelle, and all major credit cards for your convenience."
  },
  {
    id: "7",
    category: "Pricing & Payment",
    question: "What is your cancellation policy?",
    answer: "We understand that plans change. Please provide at least 24 hours' notice if you need to reschedule. Cancellations with less than 24 hours' notice may incur a $50 fee."
  },
  // Service Details
  {
    id: "8",
    category: "Service Details",
    question: "What are your service hours?",
    answer: "We typically work Monday through Friday, 8 AM to 5 PM. Weekend and evening appointments may be available upon request for an additional fee."
  },
  {
    id: "9",
    category: "Service Details",
    question: "Do I need to be home during the work?",
    answer: "For most jobs, yes, we prefer you to be home. However, for trusted repeat customers or property managers, we can arrange to work while you're away with proper access arrangements."
  },
  {
    id: "10",
    category: "Service Details",
    question: "Do you guarantee your work?",
    answer: "Yes! We stand behind our work with a 30-day workmanship warranty. If you're not satisfied with the quality, we'll make it right. (Note: This does not cover product defects or damage caused by misuse.)"
  },
  // Customer Experience
  {
    id: "11",
    category: "Customer Experience",
    question: "How do you ensure safety and respect in my home?",
    answer: "We treat every home with respect. We wear shoe covers, clean up our work area, and follow all safety protocols. We're also happy to work around your schedule and any specific house rules you may have."
  },
  {
    id: "12",
    category: "Customer Experience",
    question: "Do you take photos of your work?",
    answer: "We may take before-and-after photos for our records and marketing purposes, but only with your explicit consent. Your privacy is important to us."
  },
  // Specialty Services
  {
    id: "13",
    category: "Specialty Services",
    question: "Do you offer aging-in-place or safety upgrades?",
    answer: "Yes! We offer grab bar installation, step modifications, lighting improvements, and other safety enhancements to support clients who want to age comfortably and safely in their homes."
  },
  {
    id: "14",
    category: "Specialty Services",
    question: "Can you help with rental property turnovers?",
    answer: "Absolutely. We offer basic and comprehensive turnover services for property managers and landlords, including cleaning, minor repairs, fixture updates, and safety checks."
  }
];

