import { Figma, Palette, Smartphone, Layers, Wand2, Code2, Database, Globe, Github } from "lucide-react";

export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    role: string;
    year: string;
    image?: string;
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
        title: "Générateur de CV",
        description:
            "Application web de création et d'export de CV personnalisables, adossée à une API dédiée.",
        tags: ["Web", "Full-Stack", "SaaS"],
        role: "Développeur Front-End & API",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
        color: "from-cyan-500/20 to-blue-500/20",
        context:
            "Permettre à chacun de créer un CV professionnel et de l'exporter en PDF sans effort de mise en page.",
        solution:
            "Un éditeur web avec templates modulaires et prévisualisation en temps réel, connecté à une API REST gérant les données et la génération des documents.",
        results: [
            "Édition en temps réel avec prévisualisation instantanée",
            "Export PDF fidèle au rendu à l'écran",
            "Architecture front / API découplée et réutilisable",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "API REST"],
    },
    {
        id: 2,
        title: "Pokédex Web",
        description:
            "Site web d'exploration du Pokédex, alimenté par une API maison servant les données des Pokémon.",
        tags: ["Web", "API REST", "React"],
        role: "Développeur Front-End & API",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=800&h=600&fit=crop",
        color: "from-red-500/20 to-yellow-500/20",
        context:
            "Offrir une interface fluide pour parcourir, rechercher et filtrer l'ensemble des Pokémon.",
        solution:
            "Une SPA performante consommant une API REST dédiée, avec recherche, filtres par type et fiches détaillées.",
        results: [
            "Recherche et filtres instantanés",
            "API REST maison servant les données",
            "Interface responsive et animée",
        ],
        stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "API REST"],
    },
    {
        id: 3,
        title: "Clone Netflix",
        description:
            "Reproduction de l'interface Netflix avec catalogue dynamique, catégories et lecture de bandes-annonces.",
        tags: ["Web", "Streaming", "Next.js"],
        role: "Développeur Front-End",
        year: "2024",
        image: "/images/netflix.png",
        color: "from-neutral-500/20 to-red-600/20",
        context:
            "Recréer l'expérience d'une plateforme de streaming pour approfondir la consommation d'API et l'UI dynamique.",
        solution:
            "Une interface fidèle à Netflix avec carrousels par catégorie, données de films tierces et lecture des bandes-annonces.",
        results: [
            "UI fidèle avec carrousels dynamiques",
            "Intégration d'une API de films tierce",
            "Navigation fluide et responsive",
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "API REST"],
    },
    {
        id: 4,
        title: "Pokémon Market Scan",
        description:
            "Application mobile de scan de cartes Pokémon pour suivre leur cote et gérer sa collection.",
        tags: ["Mobile", "React Native", "Scan"],
        role: "Développeur Mobile",
        year: "2025",
        image: "/images/scan-poke.png",
        color: "from-purple-500/20 to-indigo-500/20",
        context:
            "Aider les collectionneurs à identifier une carte et à connaître sa valeur de marché en un scan.",
        solution:
            "Une app mobile qui scanne les cartes, récupère leur cote via API et permet de constituer et suivre sa collection.",
        results: [
            "Scan et reconnaissance des cartes",
            "Cote de marché en temps réel via API",
            "Gestion et suivi de la collection",
        ],
        stack: ["React Native", "TypeScript", "API REST"],
    },
];

export const skillCategories = [
    {
      title: "Front-End",
      icon: Code2,
      skills: [
        { name: "React / Next.js", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "JavaScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Palette },
      ],
    },
    {
      title: "Mobile & Back-end",
      icon: Database,
      skills: [
        { name: "React Native", icon: Smartphone },
        { name: "Node.js", icon: Database },
        { name: "API REST", icon: Globe },
      ],
    },
    {
      title: "Outils & IA",
      icon: Wand2,
      skills: [
        { name: "Figma", icon: Figma },
        { name: "GitHub", icon: Github },
        { name: "Cursor", icon: Layers },
        { name: "Claude", icon: Wand2 },
      ],
    },
  ];