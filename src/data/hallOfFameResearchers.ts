export type HallOfFameResearcher = {
    name: string;
    linkedIn: string;
    reportCount: number;
    flagIcon?: string;
};

/** Validated researchers with accepted reports. Sorted by report count in the UI. */
export const hallOfFameResearchers: HallOfFameResearcher[] = [
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
];
