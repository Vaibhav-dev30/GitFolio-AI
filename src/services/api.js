// Mock API Service for Phase 1

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockUser = {
  name: "Alex Developer",
  role: "Full Stack Engineer",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  bio: "Building digital products and exploring AI. Open source contributor.",
  location: "San Francisco, CA"
};

const mockProjects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "A carbon footprint monitoring dashboard built with React and D3.js. Helps companies track and reduce their emissions.",
    status: "Completed",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=80"
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    description: "Automated PR review bot that uses LLMs to suggest improvements and catch bugs before merging.",
    status: "In Progress",
    tags: ["Python", "OpenAI", "GitHub Actions"],
    githubUrl: "#",
    liveUrl: null,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80"
  },
  {
    id: 3,
    title: "FinTech UI Kit",
    description: "A comprehensive design system and component library specifically tailored for financial applications.",
    status: "Completed",
    tags: ["Figma", "React", "Storybook", "TailwindCSS"],
    githubUrl: "#",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=500&q=80"
  }
];

const mockSkills = [
  { category: "Frontend", items: ["React", "Vue", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"], level: 90 },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Express", "GraphQL"], level: 85 },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis"], level: 75 },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "Vercel"], level: 70 },
  { category: "AI & ML", items: ["OpenAI API", "LangChain", "TensorFlow basics"], level: 60 }
];

const mockGithubData = {
  username: "alexdev",
  followers: 1240,
  following: 45,
  publicRepos: 42,
  contributionsLastYear: 1845,
  topLanguages: [
    { name: "JavaScript", percentage: 45 },
    { name: "TypeScript", percentage: 30 },
    { name: "Python", percentage: 15 },
    { name: "CSS", percentage: 10 }
  ],
  recentActivity: [
    { type: "PushEvent", repo: "alexdev/ai-reviewer", date: "2 hours ago" },
    { type: "PullRequestEvent", repo: "facebook/react", date: "1 day ago" },
    { type: "CreateEvent", repo: "alexdev/fintech-kit", date: "3 days ago" }
  ]
};

const mockAnalytics = {
  profileStrength: 85,
  portfolioCompletion: 90,
  totalProjects: 12,
  totalSkills: 24,
  monthlyViews: 1245,
  recentUpdates: 5
};

export const api = {
  getUser: async () => {
    await delay(300);
    return mockUser;
  },
  getProjects: async () => {
    await delay(500);
    return mockProjects;
  },
  getSkills: async () => {
    await delay(400);
    return mockSkills;
  },
  getGithubData: async () => {
    await delay(600);
    return mockGithubData;
  },
  getAnalytics: async () => {
    await delay(300);
    return mockAnalytics;
  }
};
