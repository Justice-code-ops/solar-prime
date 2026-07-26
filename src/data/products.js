const products = [
  {
    id: 1,
    category: "solar_panels",
    name: "550W Mono Solar Panel",
    description: "High-efficiency solar panel for homes and businesses.",
    images:[
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMOOLRpSYAyQpcVqp_J1KtGTRwe7zsBSuXwciOO1PtA&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewXO001DmwFm7pHNQoZ1StYMgKEPcRnRq1dTOasTXIw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFps9cFl-khF-jdl7zy1rRYsuDK8b18BkMYhmVJKIexA&s=10"
    ],
    price: 'N165,000.00',
    specifications: {
      power: "550W",
      warranty: "2 months",
      efficiency: "21.3%",
      cellType: "MonoCrystalline"
    },
    features: [
      "High Efficiency",
      "Weather Resistance",
      "25-year performance waranty",
      "Easy Installation"
    ]
  },

  {
    id: 2,
    category: "inverters",
    name: "5kVA Hybrid Inverter",
    description: "Reliable hybrid inverter for uninterrupted power.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnm1GVdQJmM1Ap5XQBqy2y1hOuqfDEvto1t9o5vUWQCw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGYBHYKz7UEYxLxggy2_j0rlt_QOkuTLQWX0L55NBPw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcvI5HRPc769xJp7YvJZ6rR3dQwyjUeijnz-Uuso6IQ&s=10"
    ],
    price: 'N650,000.00',
    specifications: {
      power: "550W",
      warranty: "2 months",
      efficiency: "21.3%",
      cellType: "MonoCrystalline"
    },
    features: [
      "Pure sine wave output",
      "Support Lithium batteries",
      "LCD Display",
      "Wifi Monitoring"
    ]
  },

  {
    id: 3,
    category: "batteries",
    name: "200Ah Lithium Battery",
    description: "Long-lasting lithium battery with excellent performance.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mbWpqqABgu_1D8KacfjMuBkLODx1HQg06H9ATyNMzg&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLLx9Ewvk1f4zz4HEUxyur4kzN8EoVQkbddE6tovCIw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDvNygzVijPvZSGU-asV5BXc2z3I_DO-qr4GFODAyUw&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHQ7H1-TWesQX6aUvE_b_K6aL7ph9mF-qDIXbakTjeQ&s=10"
    ],
    price: 'N2,300,000.00',
    features: [
      "Provides 6,000+ cycles at 80% depth of discharge (DOD).",
      "Supports rapid charge and discharge rates (up to 100A–200A max depending on the model).",
      " Available in various configurations including 12V, 24V, and 48V/51.2V systems.",
      "Delivers strong continuous power (e.g., 5,120W continuous for larger 48V models)"
    ],
    specifications: {
      power: "550W",
      warranty: "2 months",
      efficiency: "21.3%",
      cellType: "MonoCrystalline"
    }
  },
  {
    id: 4,
    category: "solar_panels",
    name: "450W Poly Solar Panel",
    description: "Cost-effective polycrystalline panel ideal for residential setups.",
    images: [
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N135,000.00",
    specifications: {
      power: "450W",
      warranty: "10 years",
      efficiency: "19.5%",
      cellType: "PolyCrystalline"
    },
    features: [
      "Cost-effective energy generation",
      "Sturdy aluminum frame",
      "High wind resistance",
      "Anti-reflective glass coating"
    ]
  },
  {
    id: 5,
    category: "solar_panels",
    name: "600W Bifacial Mono Panel",
    description: "Dual-sided panel capturing sunlight from both sides for up to 30% extra yield.",
    images: [
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N210,000.00",
    specifications: {
      power: "600W",
      warranty: "12 years",
      efficiency: "22.8%",
      cellType: "Bifacial Mono"
    },
    features: [
      "Dual-sided power generation",
      "Enhanced low-light performance",
      "Tempered double-glass design",
      "PID resistant"
    ]
  },
  {
    id: 6,
    category: "solar_panels",
    name: "200W Flexible Solar Panel",
    description: "Ultra-lightweight bendable solar panel for RVs, marine, and camping.",
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N85,000.00",
    specifications: {
      power: "200W",
      warranty: "5 years",
      efficiency: "20.1%",
      cellType: "Flexible Mono"
    },
    features: [
      "Bends up to 30 degrees",
      "Ultra-thin profile (2.5mm)",
      "IP67 waterproof junction box",
      "Lightweight portable setup"
    ]
  },
  {
    id: 7,
    category: "solar_panels",
    name: "100W Portable Foldable Panel",
    description: "Foldable solar briefcase with built-in kickstand and USB ports.",
    images: [
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N55,000.00",
    specifications: {
      power: "100W",
      warranty: "2 years",
      efficiency: "22.0%",
      cellType: "Monocrystalline"
    },
    features: [
      "Direct USB-A & Type-C output",
      "Water-resistant fabric casing",
      "Adjustable kickstands for optimal angle",
      "Compact suitcase handle"
    ]
  },
  {
    id: 8,
    category: "inverters",
    name: "3.5kVA Hybrid Inverter",
    description: "Mid-sized hybrid inverter suitable for basic household electronics and lights.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N420,000.00",
    specifications: {
      power: "3500W",
      warranty: "2 years",
      efficiency: "93%",
      systemVoltage: "24V"
    },
    features: [
      "Pure sine wave output",
      "Overload and short circuit protection",
      "Smart battery charger design",
      "Cold start function"
    ]
  },
  {
    id: 9,
    category: "inverters",
    name: "10kVA Three-Phase Inverter",
    description: "Heavy-duty commercial inverter capable of driving 3-phase machinery.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N1,850,000.00",
    specifications: {
      power: "10000W",
      warranty: "5 years",
      efficiency: "97.5%",
      systemVoltage: "48V"
    },
    features: [
      "Three-phase output balance",
      "High surge capability",
      "RS485/CAN communication",
      "Parallel operation up to 6 units"
    ]
  },
  {
    id: 10,
    category: "inverters",
    name: "1.5kVA Pure Sine Inverter",
    description: "Entry-level off-grid inverter ideal for TV, fans, and laptop charging.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N180,000.00",
    specifications: {
      power: "1500W",
      warranty: "1 year",
      efficiency: "90%",
      systemVoltage: "12V"
    },
    features: [
      "Low idle power consumption",
      "Thermal protection shutdown",
      "LED status indicators",
      "Quiet cooling fans"
    ]
  },
  {
    id: 11,
    category: "inverters",
    name: "12kW Grid-Tie Inverter",
    description: "High-yield grid-tie inverter designed to feedback excess power into grid.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N1,450,000.00",
    specifications: {
      power: "12000W",
      warranty: "5 years",
      efficiency: "98.2%",
      systemVoltage: "High Voltage DC"
    },
    features: [
      "Dual MPPT tracking trackers",
      "Integrated anti-islanding",
      "Remote cloud portal control",
      "IP65 outdoor rating"
    ]
  },
  {
    id: 12,
    category: "batteries",
    name: "100Ah 12V LiFePO4 Battery",
    description: "Compact lithium iron phosphate battery for small off-grid setups.",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N480,000.00",
    specifications: {
      capacity: "100Ah",
      voltage: "12.8V",
      warranty: "3 years",
      cycleLife: "4000+ cycles"
    },
    features: [
      "Built-in Smart BMS protection",
      "Lightweight drop-in lead replacement",
      "Deep 90% DOD capability",
      "Maintenance-free"
    ]
  },
  {
    id: 13,
    category: "batteries",
    name: "220Ah Tubular Gel Battery",
    description: "Deep cycle maintenance-free gel battery built for frequent power outages.",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N320,000.00",
    specifications: {
      capacity: "220Ah",
      voltage: "12V",
      warranty: "1 year",
      cycleLife: "1800 cycles"
    },
    features: [
      "Heavy duty grid plates",
      "Excellent thermal tolerance",
      "Zero water topping required",
      "Low self-discharge rate"
    ]
  },
  {
    id: 14,
    category: "batteries",
    name: "10kWh Wall-Mounted Powerwall",
    description: "Sleek wall-mounted energy storage system for modern smart homes.",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N3,800,000.00",
    specifications: {
      capacity: "200Ah",
      voltage: "51.2V",
      warranty: "10 years",
      cycleLife: "6000+ cycles"
    },
    features: [
      "Modular expansion capability",
      "Built-in LCD touchscreen display",
      "Integrated active balancing BMS",
      "Ultra-slim space-saving footprint"
    ]
  },
  {
    id: 15,
    category: "charge_controllers",
    name: "60A MPPT Solar Charge Controller",
    description: "Maximizes energy harvest from panels to charge 12V/24V/48V battery banks.",
    images: [
      "https://images.unsplash.com/photo-1558441719-67055468869c?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N115,000.00",
    specifications: {
      current: "60A",
      maxPVInput: "150V",
      efficiency: "98%",
      warranty: "2 years"
    },
    features: [
      "Ultra-fast tracking speed",
      "4-Stage charging algorithm",
      "Backlit LCD display screen",
      "Temperature compensation probe"
    ]
  },
  {
    id: 16,
    category: "charge_controllers",
    name: "100A Heavy-Duty MPPT Controller",
    description: "High-current charge controller for large-scale solar arrays.",
    images: [
      "https://images.unsplash.com/photo-1558441719-67055468869c?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N210,000.00",
    specifications: {
      current: "100A",
      maxPVInput: "190V",
      efficiency: "98.5%",
      warranty: "3 years"
    },
    features: [
      "RS485 communication port",
      "Lithium battery wake-up feature",
      "Cast aluminum heatsink cooling",
      "Comprehensive electronic protection"
    ]
  },
  {
    id: 17,
    category: "charge_controllers",
    name: "30A PWM Charge Controller",
    description: "Budget-friendly controller for small cabin or street lighting systems.",
    images: [
      "https://images.unsplash.com/photo-1558441719-67055468869c?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N25,000.00",
    specifications: {
      current: "30A",
      maxPVInput: "50V",
      efficiency: "80%",
      warranty: "1 year"
    },
    features: [
      "Dual USB 5V outputs",
      "Automatic 12V/24V detection",
      "Programmable load timers",
      "Overcharge/over-discharge guard"
    ]
  },
  {
    id: 18,
    category: "solar_lighting",
    name: "300W All-In-One Solar Street Light",
    description: "Integrated solar street light with motion sensor and remote control.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N75,000.00",
    specifications: {
      power: "300W LED",
      battery: "30Ah LifePO4",
      ipRating: "IP67 Waterproof",
      warranty: "2 years"
    },
    features: [
      "PIR motion sensor dimming",
      "Zero electricity wiring needed",
      "Dusk-to-dawn auto operation",
      "High brightness SMD LEDs"
    ]
  },
  {
    id: 19,
    category: "solar_lighting",
    name: "Solar Flood Light 100W",
    description: "Bright perimeter security light equipped with an external solar panel.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N42,000.00",
    specifications: {
      power: "100W LED",
      battery: "12Ah LifePO4",
      ipRating: "IP66",
      warranty: "1 year"
    },
    features: [
      "5-meter extension cable",
      "Wireless remote control",
      "Rugged die-cast aluminum body",
      "Timer settings (3h/5h/8h)"
    ]
  },
  {
    id: 20,
    category: "solar_pumps",
    name: "1.5HP Submersible Solar Water Pump",
    description: "Direct-drive DC solar pump for borehole irrigation and livestock watering.",
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N380,000.00",
    specifications: {
      power: "1100W",
      maxHead: "80 meters",
      flowRate: "5,000 L/hr",
      warranty: "2 years"
    },
    features: [
      "Brushless DC motor",
      "MPPT pump controller included",
      "Dry-run protection sensor",
      "Stainless steel body casing"
    ]
  },
  {
    id: 21,
    category: "solar_pumps",
    name: "3HP Surface Solar Irrigation Pump",
    description: "High-flow surface pump ideal for agricultural crop watering.",
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N620,000.00",
    specifications: {
      power: "2200W",
      maxHead: "35 meters",
      flowRate: "18,000 L/hr",
      warranty: "2 years"
    },
    features: [
      "High volume water transfer",
      "Solar array direct operation",
      "Cast iron pump housing",
      "Over-voltage shutdown"
    ]
  },
  {
    id: 22,
    category: "accessories",
    name: "MC4 Connector Pair (10 Pairs)",
    description: "Standard waterproof connectors for solar panel wiring.",
    images: [
      "https://images.unsplash.com/photo-1558441719-67055468869c?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N12,000.00",
    specifications: {
      currentRating: "30A",
      voltage: "1000V DC",
      ipRating: "IP68",
      warranty: "1 year"
    },
    features: [
      "Snap-in locking mechanism",
      "UV-resistant plastic",
      "Silver-plated copper contacts",
      "Flame retardant class UL94-V0"
    ]
  },
  {
    id: 23,
    category: "accessories",
    name: "6mm² Twin Core Solar Cable (100m)",
    description: "Double-insulated UV resistant copper cable designed for outdoor solar PV.",
    images: [
      "https://images.unsplash.com/photo-1558441719-67055468869c?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N95,000.00",
    specifications: {
      crossSection: "6.0mm²",
      voltageRating: "1.5kV DC",
      length: "100 meters",
      warranty: "5 years"
    },
    features: [
      "Tinned flexible copper conductor",
      "Weather & oil resistant jacket",
      "Halogen-free insulation",
      "High temperature rating (-40°C to +90°C)"
    ]
  },
  {
    id: 24,
    category: "accessories",
    name: "Aluminum Solar Panel Rail Mount Kit",
    description: "Roof mounting hardware kit for installing 4 standard solar panels.",
    images: [
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N68,000.00",
    specifications: {
      material: "Anodized AL6005-T5",
      windLoad: "Up to 60m/s",
      tiltAngle: "10 - 30 degrees",
      warranty: "10 years"
    },
    features: [
      "Corrosion-resistant construction",
      "Includes mid and end clamps",
      "Suitable for tile and tin roofs",
      "Pre-assembled components"
    ]
  },
  {
    id: 25,
    category: "accessories",
    name: "6-Way Solar Combiner Box",
    description: "Protection box housing DC breakers, surge protectors, and fuses.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N110,000.00",
    specifications: {
      inputs: "6 String",
      outputs: "1 String",
      ipRating: "IP65",
      warranty: "2 years"
    },
    features: [
      "Integrated Type II DC Surge Arrester",
      "15A DC fuses for string protection",
      "100A DC isolator switch",
      "Transparent cover design"
    ]
  },
  {
    id: 26,
    category: "portable_power",
    name: "500W Portable Power Station",
    description: "Compact lithium generator for camping, tailgating, and emergency backup.",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N280,000.00",
    specifications: {
      capacity: "518Wh",
      acOutput: "500W Pure Sine",
      weight: "6.2 kg",
      warranty: "2 years"
    },
    features: [
      "Multiple AC, DC & USB outputs",
      "Recharge via solar panel or wall socket",
      "Built-in emergency LED flashlight",
      "BMS safety monitor"
    ]
  },
  {
    id: 27,
    category: "portable_power",
    name: "2000W Solar Generator System",
    description: "High-capacity power station able to run refrigerators and heavy appliances.",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N1,150,000.00",
    specifications: {
      capacity: "2048Wh",
      acOutput: "2000W (4000W Surge)",
      weight: "22 kg",
      warranty: "3 years"
    },
    features: [
      "Fast 0-80% solar charging in 2 hours",
      "LiFePO4 battery cell longevity",
      "App control via Bluetooth/WiFi",
      "UPS function with <20ms switch"
    ]
  },
  {
    id: 28,
    category: "solar_lighting",
    name: "Solar Garden Landscape Lights (4 Pack)",
    description: "Decorative warm-white solar stake lights for walkways and gardens.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N22,000.00",
    specifications: {
      power: "5W per light",
      battery: "1200mAh Ni-MH",
      ipRating: "IP65",
      warranty: "1 year"
    },
    features: [
      "Stainless steel finish",
      "Automatic light sensor switch",
      "8-10 hours night illumination",
      "No wiring needed"
    ]
  },
  {
    id: 29,
    category: "solar_panels",
    name: "300W Flexible Marine Solar Panel",
    description: "Rugged marine-grade flexible panel resistant to saltwater corrosion.",
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N120,000.00",
    specifications: {
      power: "300W",
      warranty: "3 years",
      efficiency: "21.0%",
      cellType: "ETFE Flexible"
    },
    features: [
      "Non-slip ETFE coating",
      "Saltwater and UV protection",
      "Pre-drilled mounting eyelets",
      "Walk-on durable design"
    ]
  },
  {
    id: 30,
    category: "inverters",
    name: "8kW Off-Grid Parallel Inverter",
    description: "Robust off-grid inverter featuring dual MPPT inputs and parallel expansion.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N1,100,000.00",
    specifications: {
      power: "8000W",
      warranty: "3 years",
      efficiency: "95%",
      systemVoltage: "48V"
    },
    features: [
      "RGB status lighting indicator",
      "Built-in Wi-Fi monitoring module",
      "Works with or without batteries",
      "High PV input voltage range (500VDC)"
    ]
  },
  {
    id: 31,
    category: "batteries",
    name: "200Ah AGM Deep Cycle Battery",
    description: "Affordable maintenance-free AGM battery for standby UPS and solar power.",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N210,000.00",
    specifications: {
      capacity: "200Ah",
      voltage: "12V",
      warranty: "1 year",
      cycleLife: "1200 cycles"
    },
    features: [
      "Absorbed Glass Mat technology",
      "Low internal resistance",
      "Spill-proof sealed construction",
      "Wide operating temperature"
    ]
  },
  {
    id: 32,
    category: "solar_lighting",
    name: "Solar Powered Indoor Ceiling Light",
    description: "Indoor solar shed/room lamp with wall-mounted pull switch and solar collector.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N28,000.00",
    specifications: {
      power: "60W LED",
      battery: "6000mAh LiFePO4",
      ipRating: "IP44 (Indoor)",
      warranty: "1 year"
    },
    features: [
      "Adjustable brightness settings",
      "Daytime lighting mode option",
      "Includes remote and manual switch",
      "Long 5-meter lead wire"
    ]
  },
  {
    id: 33,
    category: "accessories",
    name: "DC Circuit Breaker 63A 2-Pole",
    description: "Dedicated DC miniature circuit breaker for isolating battery and controller.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N8,500.00",
    specifications: {
      ratedCurrent: "63A",
      voltage: "500V DC",
      mounting: "DIN Rail",
      warranty: "1 year"
    },
    features: [
      "Fast arc extinguishing system",
      "Flame-retardant housing",
      "Visual status window indicator",
      "Standard 35mm DIN rail mount"
    ]
  },
  {
    id: 34,
    category: "accessories",
    name: "1000V DC Surge Protective Device (SPD)",
    description: "Protect solar inverters and electronics against lightning voltage surges.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N18,000.00",
    specifications: {
      voltage: "1000V DC",
      dischargeCurrent: "20kA - 40kA",
      mounting: "DIN Rail",
      warranty: "1 year"
    },
    features: [
      "Pluggable protection module",
      "Thermal disconnect safety device",
      "Color code indicator switch",
      "Fast response time (<25ns)"
    ]
  },
  {
    id: 35,
    category: "solar_panels",
    name: "700W N-Type TopCon Solar Panel",
    description: "Next-gen TopCon solar technology delivering ultra-high power conversion.",
    images: [
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N270,000.00",
    specifications: {
      power: "700W",
      warranty: "15 years",
      efficiency: "23.2%",
      cellType: "N-Type TopCon"
    },
    features: [
      "Zero light-induced degradation (LID)",
      "Better temperature coefficient (-0.30%)",
      "Maximum space power density",
      "30-year linear performance warranty"
    ]
  },
  {
    id: 36,
    category: "inverters",
    name: "2kW Portable Pure Sine Wave Inverter",
    description: "Compact DC-to-AC power converter for vehicle or workshop use.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N140,000.00",
    specifications: {
      power: "2000W",
      warranty: "1 year",
      efficiency: "91%",
      systemVoltage: "12V DC to 220V AC"
    },
    features: [
      "Dual AC standard sockets",
      "Digital LED voltage readout",
      "Anodized aluminum casing",
      "Smart thermal cooling fan"
    ]
  },
  {
    id: 37,
    category: "batteries",
    name: "400Ah 3.2V LiFePO4 Prismatic Cell",
    description: "Individual DIY lithium cell for building custom battery bank configurations.",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N110,000.00",
    specifications: {
      capacity: "400Ah",
      voltage: "3.2V",
      warranty: "2 years",
      cycleLife: "4000+ cycles"
    },
    features: [
      "Includes busbars and screws",
      "Grade-A manufacturer cell",
      "Explosion-proof safety valve",
      "Ideal for DIY solar storage"
    ]
  },
  {
    id: 38,
    category: "charge_controllers",
    name: "40A Waterproof MPPT Controller",
    description: "IP67 sealed waterproof controller designed for harsh damp environments.",
    images: [
      "https://images.unsplash.com/photo-1558441719-67055468869c?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N85,000.00",
    specifications: {
      current: "40A",
      maxPVInput: "100V",
      efficiency: "97.5%",
      warranty: "2 years"
    },
    features: [
      "Fully potted enclosure IP67",
      "Bluetooth mobile app monitoring",
      "Aluminum heatsink chassis",
      "Automatic battery chemistry detection"
    ]
  },
  {
    id: 39,
    category: "solar_lighting",
    name: "Solar CCTV Camera Street Light",
    description: "Security floodlight with embedded 4G Wi-Fi CCTV camera and motion alerts.",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N160,000.00",
    specifications: {
      resolution: "1080p HD",
      battery: "20Ah LifePO4",
      connectivity: "4G / Wi-Fi",
      warranty: "1 year"
    },
    features: [
      "Real-time mobile app streaming",
      "Two-way audio intercom",
      "Night vision IR & White LEDs",
      "Solar powered zero-wire setup"
    ]
  },
  {
    id: 40,
    category: "solar_pumps",
    name: "Solar Swimming Pool Pump 1HP",
    description: "Direct solar DC pool circulation pump saving continuous grid power costs.",
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N310,000.00",
    specifications: {
      power: "750W",
      maxFlow: "15,000 L/hr",
      voltage: "72V DC",
      warranty: "2 years"
    },
    features: [
      "High speed centrifugal impeller",
      "Integrated leaf strainer basket",
      "Quiet operation motor",
      "MPPT pump controller included"
    ]
  },
  {
    id: 41,
    category: "accessories",
    name: "Smart Solar Energy Meter (Wi-Fi)",
    description: "Real-time DIN rail power meter for monitoring solar yield and energy consumption.",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N35,000.00",
    specifications: {
      voltage: "110V - 240V AC",
      maxCurrent: "100A (via CT)",
      connectivity: "Wi-Fi 2.4GHz",
      warranty: "1 year"
    },
    features: [
      "Tracks kWh generation & usage",
      "Tuya/Smart Life app support",
      "Historical data cloud logging",
      "Overload alarm alerts"
    ]
  },
  {
    id: 42,
    category: "accessories",
    name: "Solar Panel Cleaning Robot Brush",
    description: "Automated rotary brush tool for maintaining solar array clean efficiency.",
    images: [
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N450,000.00",
    specifications: {
      power: "24V DC Rechargeable",
      cleaningWidth: "60cm",
      weight: "8.5 kg",
      warranty: "1 year"
    },
    features: [
      "Dual rotating micro-fiber heads",
      "Telescopic handle up to 7.5m",
      "Waterless or wet cleaning capability",
      "Increases panel yield up to 25%"
    ]
  },
  {
    id: 43,
    category: "portable_power",
    name: "Solar Backpack with 14W Charger",
    description: "Everyday backpack with an integrated solar panel for charging phones on the go.",
    images: [
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80"
    ],
    price: "N38,000.00",
    specifications: {
      panelPower: "14W Mono",
      output: "5V / 2.1A USB",
      capacity: "30 Liters",
      warranty: "1 year"
    },
    features: [
      "Water-resistant nylon fabric",
      "Dedicated padded laptop compartment",
      "Pass-through charging cable port",
      "Lightweight travel design"
    ]
  }
]

export default products