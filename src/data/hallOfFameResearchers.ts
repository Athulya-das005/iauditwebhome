export type HallOfFameResearcher = {
    name: string;
    linkedIn: string;
    reportCount: number;
    flagIcon?: string;
    pinToTop?: boolean;
};

/** Validated researchers with accepted reports. Pinned entries first, then by report count. */
export const hallOfFameResearchers: HallOfFameResearcher[] = [
    {
        name: "Yash K. Jare",
        linkedIn: "https://www.linkedin.com/in/yash-jare-3136b124b/",
        reportCount: 2,
        flagIcon: "/india-flag.png",
        pinToTop: true,
    },
    {
        name: "Santhosh Kumar",
        linkedIn: "https://www.linkedin.com/in/connectwithsanthosh/",
        reportCount: 3,
    },
    {
        name: "Rince K J",
        linkedIn: "https://www.linkedin.com/in/rincekj17",
        reportCount: 1,
    },
    {
        name: "Ankit Pandey",
        linkedIn: "https://www.linkedin.com/in/ankit-pandey-b1697928a",
        reportCount: 1,
        flagIcon: "/india-flag.png",
    },
    {
        name: "Huntersoham",
        linkedIn: "https://www.linkedin.com/in/huntersoham",
        reportCount: 1,
    },
];
