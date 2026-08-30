/* ================================================================
   EDIT EVERYTHING HERE — this single file drives both index.html
   and works.html. Change names, copy, projects, skills, tools and
   contact details freely; both pages read from this same object.
   ================================================================ */
const CONFIG = {
  name: "John Saju",
  role: "UI/UX Designer & Visual Storyteller",
  tagline: "Crafting interfaces worth reading twice.",
  issueLine: "Est. 2024 — Vol. I, No. 07",
  maskheadShort: "JO",

  award: {
    ribbon: "Award",
    eyebrow: "Breaking — Design News",
    headline: "Young Designer Wins Design Institute Award",
    dateline: "BELFAST, 2025 —",
    excerpt: "Led the design direction for a group project that went on to win the Institute Designers Ireland Award 2025 for Best Service Design Project.",
    excerpt2: "Judges praised his ability to translate complex systems into interfaces that feel almost inevitable: simple, humane, and quietly confident.",
    fullText: [
      "An experience that strengthened my collaborative skills and ability to design at both strategic and detailed levels.",
      "\u201cGood design disappears,\u201d Saju said in his acceptance remarks. \u201cThe goal was never to make something look clever — it was to make the right decision the easiest one to make.\u201d",
      "The committee singled out his research process, which combined direct field observation with rapid, disposable prototyping — a habit he credits with keeping his work honest."
    ],
    photo: {
      // Swap this for a real photo any time — set url to an image link
      // (e.g. from the award ceremony) and it will be used automatically.
      url: "",
      caption: "Photograph: Award Ceremony 2025"
    }
  },

  works: {
    eyebrow: "Works",
    headline: "The Young Man's Best Works",
    blurb: "Six projects, one habit: start from the person under pressure and work backward to the interface. Fintech, healthcare, civic services, and a design system built to hold it all together. Read on for the full run.",
    photo: {
      // Swap this for a real photo any time — set url to an image link
      // (e.g. a hero shot from one of the projects) and it will be used
      // automatically.
      url: "",
      caption: "A look at the work"
    }
  },

  projects: [
    { tag:"Fintech · Product", title:"Ledger", blurb:"A redesigned expense workflow that cut approval time for finance teams by more than half.", diagram:"browser" },
    { tag:"Healthcare · App", title:"Pulse", blurb:"A patient intake app rebuilt around clarity, reducing form abandonment in early trials.", diagram:"mobile" },
    { tag:"Civic · Platform", title:"Commons", blurb:"A public services portal connecting twelve departments behind one consistent interface.", diagram:"flow" },
    { tag:"Data · Dashboard", title:"Meridian", blurb:"An operations dashboard turning noisy telemetry into a handful of decisions worth making.", diagram:"chart" },
    { tag:"Research · System", title:"Fieldnote", blurb:"A lightweight research repository built for teams who never had time to file their notes.", diagram:"nodes" },
    { tag:"Brand · Design System", title:"Typeset", blurb:"A component and type system unifying six product teams under one visual language.", diagram:"swatch" }
  ],

  about: [
    "I am a UI/UX designer passionate about creating meaningful, user-centred design solutions that truly address real needs.",
    "As an empathic thinker and natural problem-solver, I enjoy understanding users deeply and turning insights into intuitive, well-crafted experiences. I served as the designer for a group project that won the Ireland Designer Institute Award 2025 for Best Service Design Project, a milestone that strengthened my ability to collaborate and design at both strategic and detailed levels.",
    "I completed my master\u2019s in UX Design from Ulster University in Belfast, where I refined my skills in research, interaction design, and service design. Before that, I earned my undergraduate degree in Animation and Visual Effects from Mahatma Gandhi University in Kerala, India, which built my foundation in visual storytelling and aesthetics.",
    "I combine creativity, empathy, and evidence-based thinking to design solutions that are not only functional but also meaningful and engaging."
  ],

  aboutPhoto: {
    // Swap this for a real photo any time — replace the src on the
    // <img id="about-photo-img"> tag, or point this url at your image
    // and it will be used automatically.
    url: "",
    caption: "John Saju, UI/UX Designer"
  },

  skills: [
    { name:"Design", items:["Interaction Design","Design Systems","Information Architecture","Visual Design"] },
    { name:"Prototyping", items:["Figma"] },
    { name:"Research", items:["Usability Testing","Field Studies","Journey Mapping","A/B Testing"] },
    { name:"Bonus Skills", items:["Video Editing","Motion Design","Graphic Design"] }
  ],

  tools: [
    { name:"Figma", logo:"figma" },
    { name:"Adobe Photoshop", logo:"photoshop" },
    { name:"Premiere Pro", logo:"premiere" },
    { name:"After Effects", logo:"aftereffects" }
  ],

  contact: {
    lede: "Have a project? A suggestion? Or just wanna hire me? Reach out right now.",
    email: "sajujohn2903@gmail.com",
    phone: "",
    location: "Belfast, Northern Ireland",
    socials: [
      { label:"LinkedIn", url:"#" },
      { label:"Dribbble", url:"#" },
      { label:"Instagram", url:"#" }
    ],
    finePrint: `© ${new Date().getFullYear()} The Design Times. All rights reserved. Printed digitally, read anywhere.`
  },

  colors: { bg:"#E2E3E3", accent:"#B20202", ink:"#363536", muted:"#B3ADAD" }
};
