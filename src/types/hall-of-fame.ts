export type HallOfFameResearcher = {
    id: string;
    name: string;
    linkedIn: string;
    reportCount: number;
    flagIcon?: string;
};

export type HallOfFameResearcherInput = Omit<HallOfFameResearcher, "id"> & {
    id?: string;
};
