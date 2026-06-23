"use client";

import type { CSSProperties, ReactNode } from "react";
import { SECURITY_EMAIL, getSecurityMailtoUrl, openSecurityEmail } from "@/constants/securityContact";

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

type SecurityReportButtonProps = {
    label: string;
    className?: string;
    style?: CSSProperties;
    subject?: string;
};

export function SecurityReportButton({
    label,
    className = "btn-animate",
    style,
    subject,
}: SecurityReportButtonProps) {
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
            <span>{label}</span>
        </a>
    );
}
