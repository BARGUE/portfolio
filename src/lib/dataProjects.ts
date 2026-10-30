export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    role: string;
    year: string;
    /** Dégradé de fond de la maquette affichée sur la carte. */
    gradient: string;
    /** Visuel affiché sur la carte à la place de la maquette (chemin dans /public). */
    image?: string;
    /** "contain" affiche le visuel en entier sur le dégradé au lieu de remplir la carte. */
    imageFit?: "cover" | "contain";
    context: string;
    solution: string;
    results: string[];
    stack: string[];
    liveUrl?: string;
    repoUrl?: string;
    repoFrontUrl?: string;
    repoBackUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "CVBuilder",
        description:
            "Application de création de CV : éditeur guidé en 7 étapes, 9 templates, export PDF et import de CV assisté par IA.",
        tags: ["Web", "Full-Stack", "SaaS"],
        role: "Développeur Front-End & API",
        year: "2025",
        gradient: "linear-gradient(135deg, #1aa37a, #0b3a2e)",
        image: "/images/cv-computer.png",
        context:
            "Permettre à chacun de créer un CV professionnel et de l'exporter en PDF sans effort de mise en page.",
        solution:
            "Un éditeur guidé en 7 étapes avec aperçu en temps réel, interface bilingue FR/EN et import d'un CV existant assisté par IA (API Claude).",
        results: [
            "9 templates avec aperçu en temps réel",
            "Export PDF côté client",
            "Authentification par cookie httpOnly et routes protégées",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Zod", "next-intl"],
        repoFrontUrl: "https://github.com/BARGUE/cv-builder",
        repoBackUrl: "https://github.com/BARGUE/api-cv-builder",
    },
    {
        id: 2,
        title: "Pokédex",
        description:
            "Catalogue bilingue paginé avec recherche, filtres, fiches détaillées et comparateur, en rendu serveur avec revalidation ISR.",
        tags: ["Web", "Next.js", "ISR"],
        role: "Développeur Front-End & API",
        year: "2025",
        gradient: "",
        image: "/images/pokedex-logo.png",
        imageFit: "contain",
        context:
            "Offrir une interface fluide pour parcourir, rechercher et filtrer l'ensemble des Pokémon.",
        solution:
            "Des Server Components avec revalidation ISR pour la performance, une UI accessible construite sur Radix et un déploiement sur Vercel.",
        results: [
            "Recherche, filtres et pagination",
            "Comparateur de 3 Pokémon",
            "Rendu serveur et revalidation ISR",
        ],
        stack: ["Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "Radix UI", "Framer Motion", "Vercel"],
        liveUrl: "https://pokedex-dev.xyz",
        repoFrontUrl: "https://github.com/BARGUE/pokedex",
        repoBackUrl: "https://github.com/BARGUE/api-pokedex",
    },
    {
        id: 3,
        title: "Clone Netflix",
        description:
            "Reproduction de l'interface Netflix avec catalogue dynamique, catégories et lecture de bandes-annonces.",
        tags: ["Web", "Streaming", "Next.js"],
        role: "Développeur Front-End",
        year: "2024",
        gradient: "linear-gradient(135deg, #ffffff, #ececec)",
        image: "/images/netflix.png",
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
        liveUrl: "https://netflix-git-main-maylkirian-7523s-projects.vercel.app",
        repoUrl: "https://github.com/BARGUE/netflix",
    },
    {
        id: 4,
        title: "Poke Scan",
        description:
            "Application mobile de scan de cartes Pokémon : identification par IA, cotes réelles du marché et suivi de sa collection.",
        tags: ["Mobile", "React Native", "IA"],
        role: "Développeur Mobile",
        year: "2025",
        gradient: "linear-gradient(135deg, #6c8cff, #1c2a66)",
        image: "/images/scan-poke.png",
        context:
            "Aider les collectionneurs à identifier une carte et à connaître sa valeur de marché en un scan.",
        solution:
            "Un scan par caméra ou galerie identifié par IA (Claude Vision), avec les cotes Cardmarket / TCGplayer récupérées via un proxy Cloudflare Worker : aucune clé API dans l'app.",
        results: [
            "Identification des cartes par IA",
            "Cotes réelles Cardmarket / TCGplayer",
            "Historique, collection par set et thème clair / sombre",
        ],
        stack: ["React Native", "Expo", "React", "AsyncStorage", "Cloudflare Workers"],
        repoUrl: "https://github.com/BARGUE/poke-scan-mobile",
    },
    {
        id: 5,
        title: "Liste de Courses",
        description:
            "Application mobile qui génère en un tap le planning des repas et la liste de courses associée, utilisable hors ligne.",
        tags: ["Mobile", "React Native", "Cuisine"],
        role: "Développeur Mobile",
        year: "2025",
        gradient: "linear-gradient(135deg, #f0b455, #5a3f12)",
        image: "/images/hero.png",
        context:
            "Simplifier l'organisation des repas d'une famille, sans oublier d'ingrédients au moment des courses.",
        solution:
            "Des recettes traduites en français, en unités métriques et aux quantités adaptées au foyer, avec un cache SQLite hors ligne et un design system maison.",
        results: [
            "Planning de repas et liste de courses générés en un tap",
            "Cache SQLite utilisable hors ligne",
            "Builds et mises à jour OTA via EAS",
        ],
        stack: ["React Native", "Expo", "TypeScript", "SQLite", "EAS Build / Update", "Cloudflare Workers"],
        repoUrl: "https://github.com/BARGUE/shopping-family",
    },
];

/** Un projet est full-stack quand j'ai aussi écrit son API. */
export const isFullStack = (project: Project) =>
    Boolean(project.repoBackUrl) || project.stack.includes("Node.js");

type TechGroup =
    | "Front-End"
    | "Mobile"
    | "Data & état"
    | "UI / Design system"
    | "Back-End & outils";

// Chaque technologie citée dans le `stack` d'un projet est décrite ici :
// la section Compétences est construite à partir des projets, donc ajouter
// une techno à un projet suffit à la faire apparaître dans le portfolio.
// Une techno peut appartenir à plusieurs groupes (TypeScript sert au web comme
// au mobile) ; le premier est celui où elle est mise en avant.
const techGroups: Record<string, TechGroup[]> = {
    React: ["Front-End"],
    "Next.js": ["Front-End"],
    TypeScript: ["Front-End", "Mobile"],
    "next-intl": ["Front-End"],
    "React Native": ["Mobile"],
    Expo: ["Mobile"],
    "EAS Build / Update": ["Mobile"],
    "TanStack Query": ["Data & état"],
    "API REST": ["Data & état"],
    SQLite: ["Data & état"],
    AsyncStorage: ["Data & état"],
    Zod: ["Data & état"],
    "Tailwind CSS": ["UI / Design system"],
    "Radix UI": ["UI / Design system"],
    "Framer Motion": ["UI / Design system"],
    "Cloudflare Workers": ["Back-End & outils"],
    Vercel: ["Back-End & outils"],
};

// Compétences du CV qu'aucun projet du portfolio n'illustre encore :
// elles s'affichent après celles issues des projets.
const cvOnlySkills: Record<string, TechGroup[]> = {
    JavaScript: ["Front-End"],
    "HTML5 / CSS3": ["Front-End"],
    "React Hook Form": ["Data & état"],
    Figma: ["UI / Design system"],
    "Adobe XD": ["UI / Design system"],
    "Node.js": ["Back-End & outils"],
    "Git / GitHub": ["Back-End & outils"],
};
Object.assign(techGroups, cvOnlySkills);

const groupTitles: TechGroup[] = [
    "Front-End",
    "Mobile",
    "Data & état",
    "UI / Design system",
    "Back-End & outils",
];

const usageByTech = projects.reduce<Record<string, number>>(
    (acc, project) => {
        for (const tech of project.stack) {
            acc[tech] = (acc[tech] ?? 0) + 1;
        }
        return acc;
    },
    Object.fromEntries(Object.keys(cvOnlySkills).map((tech) => [tech, 0])),
);

// Techno principale du groupe d'abord, puis la plus utilisée,
// puis ordre alphabétique à égalité.
const techSkillsByGroup = groupTitles.map((title) => ({
    title,
    skills: Object.keys(usageByTech)
        .filter((tech) => (techGroups[tech] ?? ["Back-End & outils"]).includes(title))
        .sort((a, b) => {
            const primary = (tech: string) => (techGroups[tech]?.[0] === title ? 0 : 1);
            return (
                primary(a) - primary(b) ||
                usageByTech[b] - usageByTech[a] ||
                a.localeCompare(b)
            );
        }),
}));

export const skillCategories: { title: string; skills: string[] }[] = [
    ...techSkillsByGroup,
    { title: "Workflow IA", skills: ["Claude Code"] },
];
