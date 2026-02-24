"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="section-bg" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>iAudit</div>
                        <p className="text-muted" style={{ lineHeight: 1.6 }}>
                            Built by certified auditors, for ISO audits.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Platform</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link href="#features" className="text-muted">Features</Link></li>
                            <li><Link href="#benefits" className="text-muted">Benefits</Link></li>
                            <li><Link href="#pricing" className="text-muted">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link href="#" className="text-muted">About Us</Link></li>
                            <li><Link href="#" className="text-muted">Contact</Link></li>
                            <li><Link href="#" className="text-muted">Support</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1rem' }}>Stay Compliant</h4>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="email" placeholder="Enter your email" style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border)', flex: 1 }} />
                            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Go</button>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    © {new Date().getFullYear()} iAudit. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
