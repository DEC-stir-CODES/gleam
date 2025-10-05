export const mockData = {
  company: {
    name: "Gleam Behavioral Health",
    tagline: "Holistic Mental Health Care That Transforms Lives",
    mission: "At Gleam Behavioral Health, we provide high-quality, holistic mental health services to individuals living with severe and persistent mental illness and co-occurring disorders. Our mission is rooted in long-term recovery—not just treatment. We are committed to reducing re-hospitalization and relapse by equipping our clients with the tools, education, and support they need to improve their quality of life both in treatment—and beyond.",
    phone: "(555) 123-4567",
    email: "info@gleambh.com",
    address: "123 Recovery Way, Wellness City, WC 12345"
  },
  
  services: [
    {
      id: 1,
      title: "Partial Hospitalization Program (PHP)",
      description: "Intensive daily treatment providing comprehensive care while allowing patients to return home each evening. Our PHP offers 6+ hours of structured therapy daily.",
      duration: "6+ hours daily, 5-7 days/week",
      audience: "Adults & Adolescents",
      features: ["Individual Therapy", "Group Therapy", "Family Therapy", "Psychiatric Care", "Case Management"]
    },
    {
      id: 2,
      title: "Intensive Outpatient Program (IOP)",
      description: "Flexible treatment program designed for individuals who need structured support while maintaining work, school, or family responsibilities.",
      duration: "3+ hours, 3-5 days/week",
      audience: "Adults & Adolescents",
      features: ["Evidence-Based Therapy", "Skill Building Groups", "Relapse Prevention", "Family Support", "Medication Management"]
    },
    {
      id: 3,
      title: "Dual Diagnosis Treatment",
      description: "Specialized care for individuals with co-occurring mental health and substance use disorders, addressing both conditions simultaneously.",
      duration: "Integrated with PHP/IOP",
      audience: "Adults",
      features: ["Integrated Treatment", "Addiction Counseling", "Trauma-Informed Care", "Peer Support", "Recovery Planning"]
    },
    {
      id: 4,
      title: "Crisis Stabilization",
      description: "Immediate support and intervention for individuals experiencing mental health crises, preventing hospitalization when possible.",
      duration: "As needed, 24/7 availability",
      audience: "All ages",
      features: ["24/7 Crisis Line", "Mobile Crisis Response", "Safety Planning", "Emergency Assessment", "Rapid Access to Care"]
    }
  ],
  
  statistics: [
    {
      number: "85%",
      label: "Reduction in Re-hospitalization",
      description: "Among clients who complete our programs"
    },
    {
      number: "92%",
      label: "Client Satisfaction Rate",
      description: "Based on post-treatment surveys"
    },
    {
      number: "15+",
      label: "Years of Experience",
      description: "Serving our community with excellence"
    },
    {
      number: "500+",
      label: "Lives Transformed",
      description: "Clients served annually across all programs"
    }
  ],
  
  testimonials: [
    {
      id: 1,
      quote: "Gleam Behavioral Health gave me the tools I needed to rebuild my life. The staff genuinely cared about my recovery, and the program flexibility allowed me to maintain my job while getting the help I needed.",
      author: "Sarah M.",
      program: "IOP Graduate"
    },
    {
      id: 2,
      quote: "After years of in and out of hospitals, Gleam's PHP program finally broke the cycle. I've been stable for over two years now, and I credit their holistic approach to my success.",
      author: "Michael R.",
      program: "PHP Graduate"
    },
    {
      id: 3,
      quote: "The dual diagnosis program addressed both my depression and substance use. For the first time, I felt like someone understood the whole picture of my struggles.",
      author: "Jennifer L.",
      program: "Dual Diagnosis Program"
    }
  ],
  
  team: [
    {
      id: 1,
      name: "Dr. Amanda Chen",
      role: "Medical Director",
      credentials: "MD, Board-Certified Psychiatrist",
      bio: "15+ years specializing in severe mental illness and crisis intervention"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Clinical Director",
      credentials: "LCSW, CADC",
      bio: "Expert in dual diagnosis treatment and trauma-informed care"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Program Coordinator",
      credentials: "LPC, NCC",
      bio: "Specializes in adolescent mental health and family therapy"
    }
  ],
  
  faqData: [
    {
      question: "What insurance do you accept?",
      answer: "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. Our admissions team will verify your benefits prior to starting treatment."
    },
    {
      question: "How do I start treatment?",
      answer: "You can call our 24/7 crisis line at (555) 123-4567 or complete our online assessment. We offer same-day assessments and rapid access to care for those in crisis."
    },
    {
      question: "What's the difference between PHP and IOP?",
      answer: "PHP (Partial Hospitalization Program) is more intensive with 6+ hours of daily treatment, while IOP (Intensive Outpatient Program) offers 3+ hours of treatment 3-5 days per week, allowing more flexibility for work or school."
    },
    {
      question: "Do you treat adolescents?",
      answer: "Yes, we offer specialized programs for adolescents ages 13-17, with age-appropriate groups and family involvement components."
    },
    {
      question: "How long does treatment last?",
      answer: "Treatment length varies based on individual needs, but typical programs range from 2-12 weeks. Our clinical team works with you to determine the appropriate level and duration of care."
    }
  ],
  
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "For Providers", href: "/providers" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" }
  ]
};