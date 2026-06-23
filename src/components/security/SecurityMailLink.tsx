"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { SECURITY_EMAIL, getSecurityMailtoUrl, openSecurityEmail } from "@/constants/securityContact";

export async function copySecurityEmail() {
    await navigator.clipboard.writeText(SECURITY_EMAIL);
}

type SecurityMailLinkProps = {
    children?: ReactNode;
    subject?: string;
    style?: CSSProperties;
    className?: string;
};

export function SecurityMailLink({
    children = SECURITY_EMAIL,
    subject,
    style,
    className,
}: SecurityMailLinkProps) {
    const mailtoUrl = getSecurityMailtoUrl(subject);

    return (
        <a
            href={mailtoUrl}
            className={className}
            style={style}
            onClick={(event) => {
                event.preventDefault();
                openSecurityEmail(subject);
            }}
        >
            {children}
        </a>
    );
}

type SecurityCopyEmailButtonProps = {
    className?: string;
    style?: CSSProperties;
};

export function SecurityCopyEmailButton({
    className = "btn-animate",
    style,
}: SecurityCopyEmailButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await copySecurityEmail();
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.prompt("Copy this email address:", SECURITY_EMAIL);
        }
    };

    return (
        <button
            type="button"
            className={className}
            style={{
                border: "none",
                cursor: "pointer",
                ...style,
            }}
            onClick={handleCopy}
            aria-label={`Copy ${SECURITY_EMAIL} to clipboard`}
        >
            <span>{copied ? "Copied!" : SECURITY_EMAIL}</span>
        </button>
    );
}
