export type Skill = { name: string; icon: string; tone?: string; level: 'Advanced'|'Intermediate'|'Beginner' };

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'logos:react', level: 'Advanced' },
  { name: 'Next.js', icon: 'logos:nextjs-icon', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', level: 'Advanced' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'Advanced' },

  // Backend & DB
  { name: 'Java', icon: 'logos:java', level: 'Advanced' },
  { name: 'Spring Boot', icon: 'logos:spring-icon', level: 'Advanced' },
  { name: 'JavaScript', icon: 'logos:javascript', level: 'Advanced' },
  { name: 'Node.js', icon: 'logos:nodejs-icon', level: 'Intermediate' },
  { name: 'Supabase', icon: 'logos:supabase-icon', level: 'Intermediate' },
  { name: 'PostgreSQL', icon: 'logos:postgresql', level: 'Intermediate' },

  // AI/ML
  { name: 'Python', icon: 'logos:python', level: 'Advanced' },
  { name: 'OpenCV', icon: 'logos:opencv', level: 'Intermediate' },
  { name: 'TensorFlow', icon: 'logos:tensorflow', level: 'Intermediate' },
  { name: 'PyTorch', icon: 'logos:pytorch-icon', level: 'Intermediate' },

  // Tools & DevOps
  { name: 'GitHub', icon: 'mdi:github', level: 'Advanced' },
  { name: 'Vercel', icon: 'simple-icons:vercel', level: 'Advanced' },
  { name: 'n8n', icon: 'simple-icons:n8n', level: 'Intermediate' },
  { name: 'Postman', icon: 'logos:postman-icon', level: 'Advanced' },
  { name: 'Firebase', icon: 'vscode-icons:file-type-firebase', level: 'Intermediate' },
  { name: 'Docker', icon: 'logos:docker-icon', level: 'Intermediate' },

  // Creative & 3D
  { name: 'Figma', icon: 'logos:figma', level: 'Advanced' },
  { name: 'Blender', icon: 'logos:blender', level: 'Intermediate' },
  { name: 'Three.js', icon: 'skill-icons:threejs-light', level: 'Intermediate' },
  { name: 'Unity', icon: 'mdi:unity', level: 'Intermediate' },
];
