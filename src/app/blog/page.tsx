"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const newResources = [
    {
        id: "new-1",
        title: "How AI agents are transforming business workflows",
        date: "November 20, 2025",
        image: "/images/blog-ai-transform.png",
        link: "#",
        featured: true
    },
    {
        id: "new-2",
        title: "Simplifying complex workflows through adaptive AI systems",
        date: "November 20, 2025",
        image: "/images/blog-complex-workflows.png",
        link: "#",
        featured: false
    },
    {
        id: "new-3",
        title: "Unlock possibilities with intelligent process automation",
        date: "November 20, 2025",
        image: "/images/blog-process-automation.png",
        link: "#",
        featured: false
    }
];

const existingResources = [
    {
        id: 1,
        title: "Internal Audit Best Practices For Small Businesses",
        date: "November 20, 2025",
        image: "/images/blog-small-business.png",
        link: "#"
    },
    {
        id: 2,
        title: "Empowering A Culture Of Continuous Improvement Through Audit",
        date: "November 20, 2025",
        image: "/images/blog-continuous-improvement.png",
        link: "#"
    },
    {
        id: 3,
        title: "How To Train And Motivate Internal Auditors Without Burning Them Out",
        date: "November 20, 2025",
        image: "/images/blog-auditor-training.png",
        link: "#"
    }
];

const BlogCard = ({ item, isHorizontal = false }: { item: any, isHorizontal?: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: '#fff',
                borderRadius: '1.5rem',
                border: '1px solid #F3F4F6',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: isHorizontal ? 'row' : 'column',
                boxShadow: isHovered ? '0 20px 40px -15px rgba(0, 0, 0, 0.08)' : '0 4px 6px -1px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                cursor: 'pointer',
                height: isHorizontal ? '100%' : 'auto',
                position: 'relative'
            }}
        >
            {/* Image Container */}
            <div style={{ 
                width: isHorizontal ? '160px' : '100%', 
                minWidth: isHorizontal ? '160px' : '100%',
                height: isHorizontal ? 'auto' : '180px', 
                overflow: 'hidden',
                position: 'relative'
            }}>
                <motion.img
                    src={item.image}
                    alt={item.title}
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    onError={(e) => {
                         // Fallback placeholder if image is still not moving
                         e.currentTarget.src = `https://via.placeholder.com/800x500/006644/ffffff?text=${encodeURIComponent(item.title)}`;
                    }}
                />
            </div>

            {/* Content Container */}
            <div style={{ padding: isHorizontal ? '1.25rem 1.5rem' : '1.75rem 1.75rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 400 }}>{item.date}</span>
                </div>
                <h3 style={{
                    fontSize: isHorizontal ? '1.1rem' : '1.25rem',
                    fontWeight: 500,
                    color: '#111827',
                    marginBottom: isHorizontal ? '1rem' : '2rem',
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                    fontFamily: '"Pp Neue Montreal", sans-serif'
                }}>
                    {item.title}
                </h3>

                {/* Bottom Link Area */}
                <div style={{ marginTop: 'auto' }}>
                    {/* Horizontal Line */}
                    <div style={{ 
                        width: '100%', 
                        height: '2px', // Further increased thickness
                        backgroundColor: '#F3F4F6', 
                        marginBottom: '1rem' 
                    }} />
                    
                    <Link href={item.link} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#006644',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        position: 'relative',
                        paddingBottom: '2px'
                    }}>
                        Learn more
                        <motion.svg 
                            animate={{ x: isHovered ? 4 : 0 }}
                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </motion.svg>
                        
                        {/* Animated Underline */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '1.5px',
                            backgroundColor: '#006644',
                            width: '100%',
                            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.3s ease'
                        }} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default function BlogPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const featuredPost = newResources[0];
    const sidePosts = newResources.slice(1);

    return (
        <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: '"Pp Neue Montreal", sans-serif' }}>
            {/* Hero Section */}
            <section style={{ padding: isMobile ? "5.5rem 0 2.5rem" : "8rem 0 4rem", backgroundColor: "#f8f9fa", textAlign: "center" }}>
                <div style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            color: '#006644',
                            fontSize: '0.82rem',
                            fontWeight: 500,
                            letterSpacing: '0.01em',
                            marginBottom: '0.85rem'
                        }}
                    >
                        <span style={{ fontSize: '1rem' }}>✦</span>
                        Blog
                        <span style={{ fontSize: '1rem' }}>✦</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: isMobile ? '2.2rem' : '3rem',
                            fontWeight: 500,
                            color: '#111827',
                            letterSpacing: '-0.025em',
                            margin: '0 auto',
                            maxWidth: "800px",
                            lineHeight: 1.1,
                            fontFamily: '"Pp Neue Montreal", sans-serif'
                        }}
                    >
                        Success Stories Powered By Intelligent AI Agents
                    </motion.h1>
                </div>
            </section>

            {/* Featured Grid Section */}
            <section style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem 2rem" : "0 2rem 3rem" }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1.8fr 1.2fr',
                    gap: isMobile ? '1rem' : '1.5rem'
                }}>
                    {/* Large Featured Card (Popular Blog) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        onMouseEnter={() => setIsFeaturedHovered(true)}
                        onMouseLeave={() => setIsFeaturedHovered(false)}
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '1.5rem',
                            border: '1px solid #F3F4F6',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            boxShadow: isFeaturedHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.03)',
                            transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
                        }}
                    >
                        {/* Diagonal Ribbon for "Popular blog" */}
                        <div style={{ 
                            position: "absolute", 
                            top: 0, 
                            left: 0, 
                            zIndex: 10,
                            width: "85px",
                            height: "85px",
                            overflow: "hidden"
                        }}>
                             <div style={{
                                backgroundColor: "#006644",
                                color: "#fff",
                                textAlign: "center",
                                transform: "rotate(-45deg) translate(-25px, 10px)",
                                width: "120px",
                                padding: "4px 0",
                                fontSize: "0.65rem",
                                fontWeight: 500,
                                boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
                                pointerEvents: "none"
                             }}>
                                Popular blog
                             </div>
                        </div>

                        <div style={{ height: isMobile ? '200px' : '280px', overflow: 'hidden', position: 'relative' }}>
                            <motion.img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                animate={{ scale: isFeaturedHovered ? 1.05 : 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.currentTarget.src = `https://via.placeholder.com/1200x800/006644/ffffff?text=${encodeURIComponent(featuredPost.title)}`;
                                }}
                            />
                        </div>
                        <div style={{ padding: isMobile ? '1.25rem' : '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006644" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 400 }}>{featuredPost.date}</span>
                            </div>
                            <h2 style={{
                                fontSize: isMobile ? '1.5rem' : '1.8rem',
                                fontWeight: 500,
                                color: '#111827',
                                marginBottom: '1.5rem',
                                lineHeight: 1.2,
                                letterSpacing: '-0.02em'
                            }}>
                                {featuredPost.title}
                            </h2>
                            <div style={{ marginTop: 'auto' }}>
                                <div style={{ width: '100%', height: '2px', backgroundColor: '#F3F4F6', marginBottom: '1.25rem' }} />
                                <Link href="#" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#006644',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    position: 'relative'
                                }}>
                                    Learn more
                                    <motion.svg 
                                        animate={{ x: isFeaturedHovered ? 6 : 0 }}
                                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </motion.svg>
                                    
                                    <div style={{
                                        position: 'absolute',
                                        bottom: -2,
                                        left: 0,
                                        height: '2px',
                                        backgroundColor: '#006644',
                                        width: '100%',
                                        transform: isFeaturedHovered ? 'scaleX(1)' : 'scaleX(0)',
                                        transformOrigin: 'left',
                                        transition: 'transform 0.3s ease'
                                    }} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Cards Column */}
                    <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1.25rem' }}>
                        {sidePosts.map((post) => (
                            <BlogCard key={post.id} item={post} isHorizontal={!isMobile} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Existing Blogs Grid */}
            <section style={{ maxWidth: "1260px", margin: "0 auto", padding: isMobile ? "0 1.25rem 3rem" : "0 2rem 6rem" }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: isMobile ? '1.5rem' : '2rem'
                }}>
                    {existingResources.map((item) => (
                        <BlogCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
}
