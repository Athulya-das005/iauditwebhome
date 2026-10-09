import type { MetadataRoute } from "next";
import { blogHref, blogPosts } from "@/data/blog-posts";
import { industries } from "@/data/industries";

const SITE_URL = "https://www.iaudit.global";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type StaticPage = { path: string; changeFrequency: ChangeFrequency; priority: number };

/**
 * Public, indexable pages that are not generated from data files.
 * Leave out: /admin/* (authenticated), redirects (/iso-audit-assessments),
 * noindex tools (*\/workspace), pages that currently return 404 (/industries hub,
 * /iaudit-global-vs-*), and the root /iso-*-audit-management-software duplicates whose
 * canonical is the /standards/* version. Individual /industries/* pages come from data below.
 */
const STATIC_PAGES: StaticPage[] = [
    { path: "/", changeFrequency: "weekly", priority: 1 },

    // Product / features
    { path: "/audit-management-software-built-by-auditors", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pdca-cycle-audit-software", changeFrequency: "monthly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },

    // ISO standards
    { path: "/standards/iso-9001-audit-management-software", changeFrequency: "monthly", priority: 0.9 },
    { path: "/standards/iso-14001-audit-management-software", changeFrequency: "monthly", priority: 0.9 },
    { path: "/standards/iso-45001-audit-management-software", changeFrequency: "monthly", priority: 0.9 },
    { path: "/iso-14001-2026", changeFrequency: "monthly", priority: 0.8 },
    { path: "/iso-9001-2026-transition", changeFrequency: "monthly", priority: 0.8 },

    // Free tools
    { path: "/iso-14001-2026-self-assessment-tool", changeFrequency: "monthly", priority: 0.8 },
    { path: "/iso-audit-assessments/gap-analysis", changeFrequency: "monthly", priority: 0.8 },
    { path: "/iso-audit-assessments/gap-analysis/checklist", changeFrequency: "monthly", priority: 0.6 },
    { path: "/iso-14001-2026-self-assessment-tool/checklist", changeFrequency: "monthly", priority: 0.6 },

    // Case studies
    { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
    { path: "/case-studies/apex-engineering", changeFrequency: "monthly", priority: 0.7 },
    { path: "/case-studies/meridian-infrastructure", changeFrequency: "monthly", priority: 0.7 },

    // Company
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { path: "/author/mathew-chiweda", changeFrequency: "weekly", priority: 0.6 },

    // Cyphers (penetration testing)
    { path: "/cyphers", changeFrequency: "monthly", priority: 0.7 },

    // Trust & security
    { path: "/trust-and-security", changeFrequency: "monthly", priority: 0.6 },
    { path: "/security/vulnerability-disclosure-policy", changeFrequency: "yearly", priority: 0.4 },
    { path: "/security/hall-of-fame", changeFrequency: "monthly", priority: 0.4 },

    // Legal
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

function absolute(path: string) {
    return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const latestPostDate = blogPosts.reduce<Date | null>((latest, post) => {
        const date = new Date(post.datePublished);
        return !latest || date > latest ? date : latest;
    }, null);

    const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map(({ path, changeFrequency, priority }) => ({
        url: absolute(path),
        lastModified: now,
        changeFrequency,
        priority,
    }));

    const blogIndex: MetadataRoute.Sitemap = [
        {
            url: absolute("/blog"),
            lastModified: latestPostDate ?? now,
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: absolute(blogHref(post.slug)),
        lastModified: new Date(post.datePublished),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const industryEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
        url: absolute(`/industries/${industry.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticEntries, ...blogIndex, ...blogEntries, ...industryEntries];
}
