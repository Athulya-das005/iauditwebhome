export type HallOfFameResearcher = {
    name: string;
    linkedIn?: string;
    twitter?: string;
    report: string;
    date: string;
};

/** Add validated researchers here as reports are closed. */
export const hallOfFameResearchers: HallOfFameResearcher[] = [];
