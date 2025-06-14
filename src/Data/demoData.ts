import { TBlogData, TProjectsData } from "@/types";

export const blogsData: TBlogData[] = [
  {
    _id: "blog-1",
    title: "Capture Breathtaking Landscape Photography",
    description:
      "Master the art of landscape photography with tips on lighting, composition, and camera settings. Discover how to use natural elements to create stunning visuals.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

    isFeatured: true,
    content:
      "Landscape photography is all about capturing the beauty of the natural world. Start by using a small aperture (f/8 f/16) to ensure everything from the foreground to the horizon is in sharp focus. Use a tripod to avoid blur, especially in low light. The golden hour (shortly after sunrise or before sunset) provides the best lighting. Use leading lines and foreground elements like rocks or trees to add depth. Don't forget to explore different weather conditions fog, clouds, or storms can add drama to your shots.",
  },
  {
    _id: "blog-2",
    title: "Essential Portrait Photography Techniques",
    description:
      "Learn how to take professional-quality portraits using natural light, background blur, and subject focus. Perfect for beginners and intermediates.",
    image: "https://images.unsplash.com/photo-1660665416754-e0c780103b3c",
    isFeatured: false,
    content:
      "Portrait photography captures the personality and emotion of your subject. Use a wide aperture (f/1.8 f/2.8) to blur the background and focus attention on the eyes. Shoot during golden hour or in diffused light for flattering skin tones. Guide your subject to relax and express themselves naturally. Position your camera at eye level and use the rule of thirds to enhance composition. Reflectors and soft boxes can help control shadows and highlights.",
  },
  {
    _id: "blog-3",
    title: "Night Photography Essentials",
    description:
      "Unlock the secrets of night photography with long exposure, manual settings, and creative lighting techniques.",
    image: "https://images.unsplash.com/photo-1611443609367-15892f03e715",

    isFeatured: true,
    content:
      "Night photography requires patience and the right gear. Use a tripod and a remote shutter release to avoid camera shake. Set your camera to manual mode, and start with settings like ISO 800 3200, f/2.8, and a shutter speed of 10 30 seconds. Use manual focus and shoot in RAW for better editing flexibility. Street lights, car trails, and stars can become stunning subjects. Experiment with light painting or capture the Milky Way for a magical effect.",
  },
  {
    _id: "blog-4",
    title: "Top Tips for Travel Photography",
    description:
      "Travel smarter and capture unforgettable moments with these expert travel photography tips for all skill levels.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    isFeatured: false,
    content:
      "Travel photography is about telling the story of your journey. Scout locations in advance and pack light but essential gear. A versatile zoom lens, spare batteries, and memory cards are must-haves. Wake up early to catch soft morning light and avoid crowds. Capture details like local food, signs, and textures along with wide scenic shots. Always respect local cultures and ask permission before photographing people.",
  },
  {
    _id: "blog-5",
    title: "Mastering the Art of Street Photography",
    description:
      "Explore the dynamic world of street photography, where candid moments and spontaneous scenes come alive.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

    isFeatured: true,
    content:
      "Street photography thrives on authenticity. Use a compact camera or wide-angle lens to remain unobtrusive. Keep your settings ready for quick action—try aperture priority with f/8 and auto ISO. Focus on gestures, expressions, and interactions that tell a story. Be patient and observant. Good street photographers blend in and shoot without disrupting the environment. Always respect privacy laws and avoid confrontational behavior.",
  },
  {
    _id: "blog-5",
    title: "Beginner's Guide to Macro Photography",
    description:
      "Discover the fascinating world of macro photography and how to capture incredible close-up shots with precision.",
    image: "https://images.unsplash.com/photo-1660665416754-e0c780103b3c",
    isFeatured: false,
    content:
      "Macro photography reveals details invisible to the naked eye. Use a dedicated macro lens and a sturdy tripod for sharpness. Set a small aperture (f/8 f/16) for better depth of field. Manual focus gives you more control. Shoot in natural light or use a ring light to avoid harsh shadows. Focus on textures, patterns, or insects. Patience is key subjects are small and movements are magnified at such close distances.",
  },
];

export const recentProjects: TProjectsData[] = [
  {
    _id: "6650b1fa46c7ae001fb84301",
    name: "Modern Brand Identity",
    description:
      "Complete branding for a modern tech startup, including logo, typography, and color palette.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1611443609367-15892f03e715",
    ],
    timeline: "Jan 2024 - Mar 2024",
    tags: ["branding", "logo", "typography"],
    category: "Brand Identity",
    tools: ["Adobe Illustrator", "Figma", "Photoshop"],
    client: "TechNova Inc.",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/techbranddesign",
  },
  {
    _id: "6650b1fa46c7ae001fb84302",
    name: "Social Media Campaign",
    description:
      "Designed engaging visuals and storyboards for a seasonal marketing campaign on Instagram and Facebook.",
    images: [
      "https://images.unsplash.com/photo-1747913647304-9f298ff28ff4",
      "https://images.unsplash.com/photo-1747549721349-9a2643a44340",
    ],
    timeline: "Feb 2024 - Apr 2024",
    tags: ["social media", "marketing", "ads"],
    category: "Digital Marketing",
    tools: ["Photoshop", "Canva", "After Effects"],
    client: "GlowFit Apparel",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/glowfitmedia",
  },
  {
    _id: "6650b1fa46c7ae001fb84303",
    name: "Event Poster Series",
    description:
      "Created a set of promotional posters for an international tech summit.",
    images: [
      "https://images.unsplash.com/photo-1747549721349-9a2643a44340",
      "https://plus.unsplash.com/premium_photo-1747375615029-515941ee7a99",
    ],
    timeline: "Mar 2024 - Mar 2024",
    tags: ["poster", "print", "event"],
    category: "Print Design",
    tools: ["Adobe InDesign", "Photoshop"],
    client: "Global Tech Summit 2024",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/techsummitposters",
  },
  {
    _id: "6650b1fa46c7ae001fb84304",
    name: "UI Kit for Mobile App",
    description:
      "Developed a complete UI component kit for a fitness tracking mobile app.",
    images: [
      "https://images.unsplash.com/photo-1746424919579-7c119aaa8e61",
      "https://images.unsplash.com/photo-1747913647304-9f298ff28ff4",
    ],
    timeline: "Apr 2024 - May 2024",
    tags: ["UI", "mobile", "fitness"],
    category: "UI/UX Design",
    tools: ["Figma", "Sketch"],
    client: "PulseTrack",
    status: "Ongoing",
    binanceProfileUrl: "https://www.behance.net/fituikit",
  },
  {
    _id: "6650b1fa46c7ae001fb84305",
    name: "Packaging Design",
    description:
      "Crafted eye-catching packaging designs for a new eco-friendly skincare product line.",
    images: [
      "https://images.unsplash.com/photo-1745563115146-aec349b7cadf",
      "https://plus.unsplash.com/premium_photo-1747375615029-515941ee7a99",
    ],
    timeline: "May 2024 - Jun 2024",
    tags: ["packaging", "eco", "skincare"],
    category: "Product Design",
    tools: ["Illustrator", "Photoshop"],
    client: "GreenGlow Organics",
    status: "In Development",
    binanceProfileUrl: "https://www.behance.net/greenglowpackaging",
  },
  {
    _id: "6650b1fa46c7ae001fb84305",
    name: "Packaging Design 2",
    description:
      "Crafted eye-catching packaging designs for a new eco-friendly skincare product line.",
    images: [
      "https://images.unsplash.com/photo-1747647098060-c78991b97260",
      "https://plus.unsplash.com/premium_photo-1747375615029-515941ee7a99",
    ],
    timeline: "May 2024 - Jun 2024",
    tags: ["packaging", "eco", "skincare"],
    category: "Product Design",
    tools: ["Illustrator", "Photoshop"],
    client: "GreenGlow Organics",
    status: "In Development",
    binanceProfileUrl: "https://www.behance.net/greenglowpackaging",
  },
  {
    _id: "6651c2a947f7bb002fb94310",
    name: "Brand Identity for TechHive",
    description:
      "Developed a full brand identity for a SaaS startup, including logo, typography, and color system.",
    images: [
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
      "https://images.unsplash.com/photo-1747549721349-9a2643a44340",
    ],
    timeline: "Feb 2024 - Mar 2024",
    tags: ["branding", "tech", "logo"],
    category: "Brand Identity",
    tools: ["Figma", "Illustrator"],
    client: "TechHive",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/techhivebranding",
  },
  {
    _id: "6651c2b947f7bb002fb94311",
    name: "Minimal Coffee Packaging",
    description:
      "Designed a clean and minimalistic coffee bag packaging for a luxury coffee brand.",
    images: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      "https://plus.unsplash.com/premium_photo-1746101506623-60f66e1da8b4",
    ],
    timeline: "Jan 2024 - Feb 2024",
    tags: ["packaging", "minimal", "coffee"],
    category: "Product Design",
    tools: ["Photoshop", "Cinema 4D"],
    client: "Barista Luxe",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/baristaluxe",
  },
  {
    _id: "6651c2c947f7bb002fb94312",
    name: "Fashion Label Rebranding",
    description:
      "Led the rebranding of an urban fashion label with bold typography and visual storytelling.",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1747586181200-96551a018ed1",
    ],
    timeline: "Mar 2024 - Apr 2024",
    tags: ["rebrand", "fashion", "visual identity"],
    category: "Brand Identity",
    tools: ["Figma", "After Effects"],
    client: "Noir Urban",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/noirurban",
  },
  {
    _id: "6651c2d947f7bb002fb94313",
    name: "Organic Juice Label Design",
    description:
      "Created colorful and vibrant label designs for a line of organic fruit juices.",
    images: [
      "https://plus.unsplash.com/premium_photo-1747038385188-2f345c630fcb",
    ],
    timeline: "Apr 2024 - May 2024",
    tags: ["packaging", "label", "organic"],
    category: "Product Design",
    tools: ["Illustrator", "InDesign"],
    client: "Nature’s Sip",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/naturessip",
  },
  {
    _id: "6651c2e947f7bb002fb94314",
    name: "Luxury Skincare Branding",
    description:
      "Delivered a luxury-themed brand guideline, packaging mockups, and digital assets.",
    images: [
      "https://images.unsplash.com/photo-1747681476477-8f8df64a863d",
      "https://images.unsplash.com/photo-1748100377329-429f657842de",
    ],
    timeline: "Dec 2023 - Jan 2024",
    tags: ["luxury", "branding", "skincare"],
    category: "Brand Identity",
    tools: ["Photoshop", "XD", "Figma"],
    client: "Léclair Paris",
    status: "Completed",
    binanceProfileUrl: "https://www.behance.net/leclairparis",
  },
];
