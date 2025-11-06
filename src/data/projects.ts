export type Category = 'Development' | 'ML' | 'Creative' | 'Game Dev';

export const projects = [
  // Development
  {
    title: 'ChemLMS – Learning Platform',
    slug: 'chemlms',
    category: 'Development' as Category,
    cover: '/covers/ChemLMS – Learning Platform.png',
    tags: ['Next.js','Supabase','Tailwind'],
    repo: 'https://github.com/Sahancoder/chem-lms-web',
    demo: '',
    desc: 'Quizzes, notes, certificates, YouTube lecture integration, RLS-secured data.'
  },
  {
    title: 'Blockchain Voting System',
    slug: 'blockchain-voting',
    category: 'Development' as Category,
    cover: '/covers/Blockchain Voting System.png',
    tags: ['Spring Boot','Web3','Ethereum','MySQL'],
    repo: 'https://github.com/Sahancoder', // replace exact repo if different
    demo: '',
    desc: 'Identity-verified ballots, one-vote rule, testnet-ready architecture.'
  },
  {
    title: 'ESP32 LED Control (IoT)',
    slug: 'esp32-led',
    category: 'Development' as Category,
    cover: '/covers/ESP32 LED Control.png',
    tags: ['ESP32','REST','MQTT','C'],
    repo: 'https://github.com/Sahancoder', // replace exact repo
    demo: '',
    desc: 'Firmware + REST endpoints to control LEDs via Wi-Fi with simple dashboard.'
  },

  // ML
  {
    title: 'Calcify – AI Math Solver',
    slug: 'calcify',
    category: 'ML' as Category,
    cover: '/covers/Calcify.png',
    tags: ['React','Python','OCR','AI'],
    repo: 'https://github.com/Sahancoder/Calcify-',
    demo: '',
    desc: 'Camera → OCR → symbolic solver with step-by-step explanations.'
  },
  {
    title: 'Karate Jogai Out-of-Bounds Detector',
    slug: 'karate-yolov8',
    category: 'ML' as Category,
    cover: '/covers/Karate-Jogai-Out-of-Bounds-Detector.png',
    tags: ['YOLOv8','CV','Edge'],
    repo: 'https://github.com/Sahancoder', // replace exact repo
    demo: '',
    desc: 'Boundary detection, mAP/FPS metrics, confusion matrix and edge notes.'
  },
  {
    title: 'Face Recognition (Eigenfaces)',
    slug: 'eigenfaces',
    category: 'ML' as Category,
    cover: '/covers/Face Recognition.png',
    tags: ['OpenCV','PCA','Python'],
    repo: 'https://github.com/Sahancoder', // replace exact repo
    demo: '',
    desc: 'Preprocessing, PCA model, per-class accuracy, real-time webcam demo.'
  },

  // Creative (Figma/Behance)
  {
    title: 'PayPop Mobile Banking UI',
    slug: 'paypop-ui',
    category: 'Creative' as Category,
    cover: '/covers/PayPop Mobile Banking UI.png',
    tags: ['Figma','Design System'],
    repo: '',
    demo: 'https://www.behance.net/sahanviranga',
    desc: 'Modern banking app interface with clean visual hierarchy.'
  },
  {
    title: 'E-Learning Platform UI',
    slug: 'elearn-ui',
    category: 'Creative' as Category,
    cover: '/covers/E-Learning Platform.png',
    tags: ['Figma','Web UI'],
    repo: '',
    demo: 'https://www.behance.net/sahanviranga',
    desc: 'Educational platform screens and responsive layouts.'
  },

  // Game Dev
  {
    title: 'URacing – F1-style Prototype',
    slug: 'uracing',
    category: 'Game Dev' as Category,
    cover: '/covers/URacing.png',
    tags: ['Unity','C#','Physics'],
    repo: 'https://github.com/Sahancoder', // replace exact repo
    demo: '',
    desc: 'Lap timing system, car physics tuning, and track checkpoints.'
  },
  {
    title: '3D Multiplayer Starter (RavanaX)',
    slug: 'ravanax',
    category: 'Game Dev' as Category,
    cover: '/covers/3D Multiplayer Starter.png',
    tags: ['React Three Fiber','WebGL'],
    repo: 'https://github.com/Sahancoder', // replace exact repo
    demo: '',
    desc: 'Starter pack for 3D worlds; camera controls + basic networking hooks.'
  }
]
