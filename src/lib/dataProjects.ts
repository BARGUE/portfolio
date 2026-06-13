import { Figma, Palette, Smartphone, Layers, Wand2, Code2, Database, Globe } from "lucide-react";

export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    role: string;
    year: string;
    image: string;
    color: string;
    context: string;
    solution: string;
    results: string[];
    stack: string[];
    liveUrl?: string;
    repoUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Fintech Dashboard",
        description:
            "Interface de gestion financière moderne avec visualisation de données en temps réel.",
        tags: ["UI/UX", "Web", "Dashboard"],
        role: "Lead Designer & Frontend Dev",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        color: "from-cyan-500/20 to-blue-500/20",
        context:
            "Une startup fintech avait besoin d'une interface intuitive pour permettre à ses utilisateurs de gérer leurs investissements.",
        solution:
            "Design d'un dashboard modulaire avec des widgets personnalisables, graphiques interactifs et notifications en temps réel.",
        results: [
            "+45% d'engagement utilisateur",
            "-30% de temps pour effectuer des actions clés",
            "NPS de 72",
        ],
        stack: ["React", "TypeScript", "TailwindCSS", "Recharts", "Framer Motion"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
    {
        id: 2,
        title: "E-commerce Luxe",
        description:
            "Boutique en ligne haut de gamme avec une expérience d'achat immersive.",
        tags: ["E-commerce", "Branding", "Mobile"],
        role: "UI/UX Designer",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        color: "from-purple-500/20 to-pink-500/20",
        context:
            "Une marque de luxe souhaitait refondre son expérience e-commerce pour mieux refléter son positionnement premium.",
        solution:
            "Création d'une expérience shopping immersive avec des animations fluides, une navigation intuitive et un checkout optimisé.",
        results: [
            "+60% de conversion",
            "+25% de panier moyen",
            "Temps de session x2",
        ],
        stack: ["Next.js", "Shopify", "GSAP", "Sanity CMS"],
        liveUrl: "https://example.com",
    },
    {
        id: 3,
        title: "App Mobile Santé",
        description:
            "Application de suivi santé et bien-être avec coaching personnalisé.",
        tags: ["Mobile", "UI/UX", "HealthTech"],
        role: "Product Designer",
        year: "2023",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        color: "from-green-500/20 to-emerald-500/20",
        context:
            "Une startup HealthTech voulait créer une app de coaching santé accessible et motivante.",
        solution:
            "Design d'une app gamifiée avec suivi des objectifs, rappels intelligents et communauté intégrée.",
        results: [
            "50K+ téléchargements",
            "4.8 étoiles App Store",
            "85% de rétention à 30 jours",
        ],
        stack: ["React Native", "Firebase", "Node.js", "Figma"],
    },
    {
        id: 4,
        title: "Plateforme SaaS B2B",
        description:
            "Solution de gestion de projet collaborative pour équipes distribuées.",
        tags: ["SaaS", "Web", "Collaboration"],
        role: "Frontend Developer",
        year: "2023",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        color: "from-orange-500/20 to-yellow-500/20",
        context:
            "Une entreprise B2B avait besoin d'une plateforme de collaboration pour ses clients grands comptes.",
        solution:
            "Développement d'une interface performante avec gestion des permissions, tableaux Kanban et intégrations tierces.",
        results: [
            "200+ entreprises clientes",
            "Temps de réponse < 100ms",
            "99.9% uptime",
        ],
        stack: ["Vue.js", "GraphQL", "PostgreSQL", "Docker"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
];

export const skillCategories = [
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "Figma", icon: Figma },
        { name: "UI Design", icon: Layers },
        { name: "UX Research", icon: Wand2 },
        { name: "Prototyping", icon: Smartphone },
      ],
    },
    {
      title: "Développement",
      icon: Code2,
      skills: [
        { name: "React / Next.js", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "TailwindCSS", icon: Palette },
        { name: "Node.js", icon: Database },
      ],
    },
    {
      title: "Outils",
      icon: Globe,
      skills: [
        { name: "Git / GitHub", icon: Code2 },
        { name: "Notion", icon: Layers },
        { name: "Framer", icon: Wand2 },
        { name: "Webflow", icon: Globe },
      ],
    },
  ];