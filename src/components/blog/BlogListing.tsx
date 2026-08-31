"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import {
    blogHref,
    blogTaxonomy,
    formatBlogDate,
    getAllPostsSorted,
    getFeaturedPosts,
    getLatestPost,
    getPostsForCategory,
    getPostsForSubcategory,
    getTopPosts,
    type BlogPost,
} from "@/data/blog-posts";

const FONT = '"Pp Neue Montreal", sans-serif';
const HERO_IMAGE =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2400&h=1400&fit=crop&q=90&fm=webp";

export default function BlogListing() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [showTop, setShowTop] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeSub, setActiveSub] = useState<string | null>(null);

    const latest = getLatestPost();
    const featured = getFeaturedPosts();
    const allPosts = getAllPostsSorted();
    const topPosts = getTopPosts(5);
    const activeGroup = blogTaxonomy.find((c) => c.id === activeCategory) ?? null;
    const postCols = isMobile || isTablet ? "1fr" : "1fr 1fr";

    const filteredPosts = (() => {
        if (activeCategory && activeSub) return getPostsForSubcategory(activeCategory, activeSub);
        if (activeCategory) return getPostsForCategory(activeCategory);
        return allPosts;
    })();

    useEffect(() => {
        const check = () => {
            const w = window.innerWidth;
            setIsMobile(w < 960);
            setIsTablet(w >= 960 && w < 1100);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 500);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function selectCategory(id: string) {
        if (activeCategory === id) {
            setActiveCategory(null);
            setActiveSub(null);
            return;
        }
        setActiveCategory(id);
        setActiveSub(null);
        // Show Category / Clear Filter just under the hero
        requestAnimationFrame(() => {
            document.getElementById("blog-categories")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    function clearFilter() {
        setActiveCategory(null);
        setActiveSub(null);
    }

    const categoryGroups =
        activeGroup && !activeSub
            ? activeGroup.subs
                  .map((sub) => ({
                      sub,
                      posts: getPostsForSubcategory(activeGroup.id, sub.id),
                  }))
                  .filter((g) => g.posts.length > 0)
            : null;

    const singleSubPosts =
        activeCategory && activeSub ? getPostsForSubcategory(activeCategory, activeSub) : null;
    const singleSubLabel = activeSub
        ? activeGroup?.subs.find((s) => s.id === activeSub)?.label ?? null
        : null;

    return (
        <div
            style={{
                backgroundColor: "#f9f7f4",
                minHeight: "100vh",
                fontFamily: FONT,
                width: "100%",
            }}
        >
            {/* Full-viewport hero — Latest / Featured start only after scroll */}
            <section
                id="blog-hero"
                style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100svh",
                    height: "100svh",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={HERO_IMAGE}
                    alt="ISO auditing and compliance insights"
                    fill
                    priority
                    sizes="100vw"
                    quality={90}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(105deg, rgba(8,18,14,0.72) 0%, rgba(8,18,14,0.45) 48%, rgba(8,18,14,0.28) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        boxSizing: "border-box",
                        minHeight: "100svh",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        /* Clear fixed navbar so copy never sits under the logo */
                        paddingTop: "calc(var(--page-top-offset) + 1.5rem)",
                        paddingBottom: isMobile ? "3rem" : "4rem",
                        paddingLeft: isMobile ? "1.25rem" : "2.5rem",
                        paddingRight: isMobile ? "1.25rem" : "2.5rem",
                    }}
                >
                    <div style={{ maxWidth: "820px" }}>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                            style={{
                                margin: "0 0 0.85rem",
                                color: "rgba(255,255,255,0.85)",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                fontFamily: FONT,
                            }}
                        >
                            ISO Auditing &amp; Compliance Blog
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.05 }}
                            style={{
                                margin: "0 0 1rem",
                                color: "#fff",
                                fontSize: isMobile ? "2rem" : "3.15rem",
                                fontWeight: 600,
                                lineHeight: 1.15,
                                letterSpacing: "-0.025em",
                                fontFamily: FONT,
                            }}
                        >
                            Insights for Better ISO Auditing
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.12 }}
                            style={{
                                margin: 0,
                                color: "rgba(255,255,255,0.9)",
                                fontSize: isMobile ? "0.98rem" : "1.1rem",
                                lineHeight: 1.75,
                                maxWidth: "640px",
                                fontFamily: FONT,
                            }}
                        >
                            Practical guidance on ISO audits, compliance, management systems and continuous improvement.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Second section: Latest + Featured — hidden while a category filter is active */}
            {!activeCategory ? (
                <section
                    style={{
                        maxWidth: "1180px",
                        margin: "0 auto",
                        padding: isMobile ? "3rem 1.25rem 1.5rem" : "4.5rem 2rem 2rem",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1.35fr 1fr",
                            gap: isMobile ? "2.5rem" : "2.75rem",
                            alignItems: "start",
                        }}
                    >
                        <div>
                            <SectionHeading>Latest Post</SectionHeading>
                            <LatestCard post={latest} isMobile={isMobile} />
                        </div>
                        <div>
                            <SectionHeading>Featured Posts</SectionHeading>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.35rem" }}>
                                {featured.map((post, index) => (
                                    <FeaturedCard key={post.slug} post={post} delay={index * 0.06} isMobile={isMobile} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}

            {/* Category header sits above the grid (empty space beside it); posts align with Categories */}
            <section
                id="blog-categories"
                style={{
                    maxWidth: "1320px",
                    margin: "0 auto",
                    padding: isMobile ? "2.5rem 1.25rem 0" : "3.25rem 2rem 0",
                    scrollMarginTop: "0.75rem",
                }}
            >
                {activeGroup ? (
                    <div
                        style={{
                            maxWidth: isMobile ? "100%" : "320px",
                            marginBottom: isMobile ? "2rem" : "2.5rem",
                        }}
                    >
                        <h2
                            style={{
                                margin: "0 0 0.4rem",
                                fontSize: isMobile ? "1.55rem" : "1.85rem",
                                fontWeight: 600,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.25,
                                fontFamily: FONT,
                            }}
                        >
                            <span style={{ color: "#111827" }}>Category: </span>
                            <span style={{ color: "#6B7280" }}>{activeGroup.label}</span>
                            {singleSubLabel ? (
                                <span style={{ color: "#9CA3AF" }}> · {singleSubLabel}</span>
                            ) : null}
                        </h2>
                        <button
                            type="button"
                            onClick={clearFilter}
                            style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                                color: "#006644",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                textDecoration: "underline",
                                textUnderlineOffset: "3px",
                                cursor: "pointer",
                                fontFamily: FONT,
                            }}
                        >
                            Clear Filter
                        </button>
                    </div>
                ) : null}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : isTablet ? "280px minmax(0, 1fr)" : "320px minmax(0, 1fr)",
                        gap: isMobile ? "2rem" : "2.5rem",
                        /* Stretch sidebar to posts height so Top Posts can sit at the bottom */
                        alignItems: isMobile ? "start" : "stretch",
                        paddingBottom: isMobile ? "1.5rem" : "2rem",
                    }}
                >
                    <aside
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            maxWidth: "100%",
                            minWidth: 0,
                            minHeight: isMobile ? undefined : "100%",
                            boxSizing: "border-box",
                        }}
                    >
                        {/*
                          Sticky track ends above Top Posts — Categories unsticks before
                          Top Posts enters, so nothing slides underneath.
                        */}
                        <div
                            style={{
                                flex: isMobile ? "0 0 auto" : "1 1 auto",
                                minHeight: 0,
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    position: isMobile ? "relative" : "sticky",
                                    top: isMobile
                                        ? undefined
                                        : "max(1rem, calc((100svh - 34rem) / 2))",
                                    zIndex: 20,
                                    background: "#f9f7f4",
                                    paddingBottom: "1rem",
                                }}
                            >
                                <SectionHeading>Categories</SectionHeading>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.7rem",
                                        width: "100%",
                                    }}
                                >
                                    {blogTaxonomy.map((cat) => {
                                        const selected = activeCategory === cat.id;
                                        return (
                                            <button
                                                key={cat.id}
                                                type="button"
                                                onClick={() => selectCategory(cat.id)}
                                                style={{
                                                    position: "relative",
                                                    display: "block",
                                                    width: "100%",
                                                    height: 58,
                                                    border: selected
                                                        ? "1.5px solid rgba(255,255,255,0.85)"
                                                        : "1.5px solid transparent",
                                                    padding: 0,
                                                    borderRadius: 11,
                                                    overflow: "hidden",
                                                    cursor: "pointer",
                                                    fontFamily: FONT,
                                                    boxShadow: "0 4px 14px rgba(15,23,42,0.07)",
                                                    boxSizing: "border-box",
                                                }}
                                            >
                                                <img
                                                    src={cat.image}
                                                    alt=""
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                        display: "block",
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        background: selected
                                                            ? "linear-gradient(90deg, rgba(0,46,29,0.92), rgba(0,102,68,0.55))"
                                                            : "linear-gradient(90deg, rgba(8,18,14,0.8), rgba(8,18,14,0.38))",
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        gap: "0.75rem",
                                                        padding: "0 1.1rem",
                                                        color: "#fff",
                                                        fontWeight: 600,
                                                        fontSize: "0.92rem",
                                                        letterSpacing: "0.01em",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <span style={{ lineHeight: 1.2 }}>{cat.label}</span>
                                                    {selected ? (
                                                        <span
                                                            aria-hidden
                                                            style={{
                                                                width: 20,
                                                                height: 20,
                                                                borderRadius: "50%",
                                                                background: "#fff",
                                                                color: "#006644",
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontSize: "0.72rem",
                                                                fontWeight: 800,
                                                                flexShrink: 0,
                                                            }}
                                                        >
                                                            ✓
                                                        </span>
                                                    ) : (
                                                        <span style={{ width: 20, flexShrink: 0 }} aria-hidden />
                                                    )}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Last-section only — sits below the sticky track, parallel with final blogs */}
                        <div
                            style={{
                                flex: "0 0 auto",
                                marginTop: isMobile ? "2.25rem" : 0,
                                paddingTop: isMobile ? 0 : "2rem",
                                width: "100%",
                                position: "relative",
                                zIndex: 30,
                                background: "#f9f7f4",
                            }}
                        >
                            <h2
                                style={{
                                    margin: "0 0 1.15rem",
                                    fontSize: "clamp(1.4rem, 2.1vw, 1.7rem)",
                                    fontWeight: 600,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.15,
                                    color: "#0B1F17",
                                    fontFamily: FONT,
                                }}
                            >
                                Top Posts
                            </h2>
                            <ol
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    listStyle: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.15rem",
                                    width: "100%",
                                }}
                            >
                                {topPosts.map((post, index) => (
                                    <li key={post.slug} style={{ width: "100%" }}>
                                        <TopPostRow post={post} index={index} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>

                    <div style={{ minWidth: 0 }}>
                        {!activeGroup ? (
                            filteredPosts.length === 0 ? (
                                <p style={{ color: "#6B7280", fontFamily: FONT }}>No posts yet.</p>
                            ) : (
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: postCols,
                                        gap: isMobile ? "1.5rem" : "1.75rem 1.5rem",
                                    }}
                                >
                                    {filteredPosts.map((post, index) => (
                                        <ExplorePostCard key={post.slug} post={post} index={index} />
                                    ))}
                                </div>
                            )
                        ) : singleSubPosts ? (
                            <div>
                                <SubcategoryHeading>{singleSubLabel}</SubcategoryHeading>
                                {singleSubPosts.length === 0 ? (
                                    <p style={{ color: "#6B7280", fontFamily: FONT }}>No posts in this topic yet.</p>
                                ) : (
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: postCols,
                                            gap: isMobile ? "1.5rem" : "1.75rem 1.5rem",
                                        }}
                                    >
                                        {singleSubPosts.map((post, index) => (
                                            <ExplorePostCard key={post.slug} post={post} index={index} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
                                {categoryGroups?.map(({ sub, posts }) => (
                                    <div key={sub.id}>
                                        <button
                                            type="button"
                                            onClick={() => setActiveSub(sub.id)}
                                            style={{
                                                display: "block",
                                                width: "100%",
                                                textAlign: "left",
                                                background: "none",
                                                border: "none",
                                                padding: 0,
                                                margin: "0 0 1.15rem",
                                                cursor: "pointer",
                                                fontFamily: FONT,
                                            }}
                                        >
                                            <SubcategoryHeading as="span">{sub.label}</SubcategoryHeading>
                                        </button>
                                        <div
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: postCols,
                                                gap: isMobile ? "1.5rem" : "1.75rem 1.5rem",
                                            }}
                                        >
                                            {posts.map((post, index) => (
                                                <ExplorePostCard key={`${sub.id}-${post.slug}`} post={post} index={index} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />

            <motion.button
                type="button"
                aria-label="Back to top"
                initial={false}
                animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 12, pointerEvents: showTop ? "auto" : "none" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                    position: "fixed",
                    right: isMobile ? "1rem" : "1.5rem",
                    bottom: isMobile ? "1rem" : "1.5rem",
                    zIndex: 50,
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "none",
                    background: "#006644",
                    color: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 10px 28px rgba(0,102,68,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </motion.button>
        </div>
    );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2
            style={{
                margin: "0 0 1.35rem",
                fontSize: "clamp(1.55rem, 2.4vw, 1.9rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#111827",
                fontFamily: FONT,
            }}
        >
            {children}
        </h2>
    );
}

/** Subtopic group label — clearly distinct from Categories / post titles */
function SubcategoryHeading({
    children,
    as = "h3",
}: {
    children: React.ReactNode;
    as?: "h3" | "span";
}) {
    const Tag = as;
    return (
        <div
            style={{
                margin: as === "h3" ? "0 0 1.15rem" : 0,
                padding: "0.65rem 0 0.85rem 0.9rem",
                borderLeft: "3px solid #006644",
                borderBottom: "1px solid #e5e0d8",
            }}
        >
            <p
                style={{
                    margin: "0 0 0.28rem",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#006644",
                    fontFamily: FONT,
                }}
            >
                Topic
            </p>
            <Tag
                style={{
                    display: "block",
                    margin: 0,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    lineHeight: 1.3,
                    color: "#374151",
                    fontFamily: FONT,
                }}
            >
                {children}
            </Tag>
        </div>
    );
}

function MetaRow({
    post,
    showReadTime = true,
    compact = false,
}: {
    post: BlogPost;
    showReadTime?: boolean;
    compact?: boolean;
}) {
    const authorStyle: React.CSSProperties = {
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#9CA3AF",
        fontFamily: FONT,
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: compact ? "flex-start" : "space-between",
                alignItems: "center",
                gap: compact ? "0.65rem" : "0.75rem",
                flexWrap: "wrap",
                marginTop: "0.85rem",
            }}
        >
            {post.author.trim().toLowerCase() === "mathew chiweda" ? (
                <Link href="/author/mathew-chiweda" style={{ ...authorStyle, textDecoration: "none" }}>
                    By {post.author}
                </Link>
            ) : (
                <span style={authorStyle}>By {post.author}</span>
            )}
            {compact ? (
                <span style={{ color: "#D1D5DB", fontSize: "0.65rem", lineHeight: 1 }} aria-hidden>
                    ·
                </span>
            ) : null}
            <span
                style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    fontFamily: FONT,
                }}
            >
                {showReadTime ? `${formatBlogDate(post.datePublished)} · ${post.readTime}` : formatBlogDate(post.datePublished)}
            </span>
        </div>
    );
}

function LatestCard({ post, isMobile }: { post: BlogPost; isMobile: boolean }) {
    return (
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div>
                <Link href={blogHref(post.slug)} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div
                    style={{
                        borderRadius: "1.35rem",
                        overflow: "hidden",
                        marginBottom: "1.1rem",
                        position: "relative",
                        aspectRatio: isMobile ? "16 / 11" : "16 / 10",
                    }}
                >
                    <HoverImage src={post.image} alt={post.title} />
                </div>
                </Link>
                <Link href={blogHref(post.slug)} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <h2
                    style={{
                        margin: 0,
                        fontSize: isMobile ? "1.45rem" : "1.85rem",
                        fontWeight: 600,
                        color: "#111827",
                        lineHeight: 1.25,
                        letterSpacing: "-0.02em",
                        fontFamily: FONT,
                    }}
                >
                    {post.title}
                </h2>
                </Link>
                <MetaRow post={post} showReadTime={false} compact />
            </div>
        </motion.div>
    );
}

function FeaturedCard({ post, delay, isMobile }: { post: BlogPost; delay: number; isMobile: boolean }) {
    return (
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "110px 1fr" : "128px 1fr",
                    gap: "0.95rem",
                    alignItems: "start",
                }}
            >
                <Link href={blogHref(post.slug)} style={{ display: "block" }}>
                    <div style={{ borderRadius: "0.85rem", overflow: "hidden", position: "relative", aspectRatio: "4 / 3" }}>
                        <HoverImage src={post.image} alt={post.title} />
                    </div>
                </Link>
                <div>
                    <Link href={blogHref(post.slug)} style={{ textDecoration: "none", color: "inherit" }}>
                    <h3
                        style={{
                            margin: "0 0 0.45rem",
                            fontSize: isMobile ? "0.98rem" : "1.08rem",
                            fontWeight: 600,
                            color: "#111827",
                            lineHeight: 1.3,
                            letterSpacing: "-0.015em",
                            fontFamily: FONT,
                        }}
                    >
                        {post.title}
                    </h3>
                    </Link>
                    <p
                        style={{
                            margin: "0 0 0.55rem",
                            fontSize: "0.86rem",
                            color: "#6B7280",
                            lineHeight: 1.55,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            fontFamily: FONT,
                        }}
                    >
                        {post.excerpt}
                    </p>
                    <MetaRow post={post} showReadTime={false} />
                </div>
            </div>
        </motion.div>
    );
}

function ExplorePostCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: Math.min(index % 4, 3) * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            style={{
                background: "#fff",
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid rgba(232, 228, 223, 0.9)",
                boxShadow: "0 10px 28px rgba(15, 23, 42, 0.06)",
                height: "100%",
                minWidth: 0,
                maxWidth: "100%",
                width: "100%",
                boxSizing: "border-box",
                transition: "box-shadow 0.35s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 22px 48px rgba(15, 23, 42, 0.14)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(15, 23, 42, 0.06)";
            }}
        >
            <Link href={blogHref(post.slug)} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                <div
                    style={{
                        position: "relative",
                        aspectRatio: "16 / 11",
                        background: "#e8e4df",
                        overflow: "hidden",
                    }}
                >
                    <HoverImage src={post.image} alt={post.title} />
                </div>
                <div style={{ padding: "1.15rem 1.25rem 1.35rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <p
                        style={{
                            margin: "0 0 0.55rem",
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#9CA3AF",
                            fontFamily: FONT,
                        }}
                    >
                        {formatBlogDate(post.datePublished)} · {post.readTime}
                    </p>
                    <h3
                        style={{
                            margin: "0 0 1rem",
                            fontSize: "1.12rem",
                            fontWeight: 600,
                            color: "#111827",
                            lineHeight: 1.35,
                            letterSpacing: "-0.015em",
                            fontFamily: FONT,
                            flex: 1,
                        }}
                    >
                        {post.title}
                    </h3>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            color: "#006644",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            fontFamily: FONT,
                        }}
                    >
                        Explore
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}

function TopPostRow({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
            <Link
                href={blogHref(post.slug)}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "grid",
                    gridTemplateColumns: "1.6rem 1fr",
                    gap: "0.55rem",
                    alignItems: "flex-start",
                    width: "100%",
                }}
            >
                <span
                    style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#006644",
                        lineHeight: 1.35,
                        fontFamily: FONT,
                        letterSpacing: "-0.02em",
                    }}
                >
                    {index + 1}.
                </span>
                <div style={{ minWidth: 0 }}>
                    <p
                        style={{
                            margin: "0 0 0.35rem",
                            fontWeight: 600,
                            color: "#0B1F17",
                            fontSize: "0.98rem",
                            lineHeight: 1.35,
                            letterSpacing: "-0.015em",
                            fontFamily: FONT,
                        }}
                    >
                        {post.title}
                    </p>
                    <p
                        style={{
                            margin: 0,
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#8A9399",
                            fontFamily: FONT,
                        }}
                    >
                        {post.readTime} · {formatBlogDate(post.datePublished)}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}

function HoverImage({ src, alt }: { src: string; alt: string }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transform: hovered ? "scale(1.06)" : "scale(1)",
                    transition: "transform 0.65s cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
            />
        </div>
    );
}
