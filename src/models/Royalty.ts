enum RoyaltyType {
    PERCENT = "Percent",
    UNIT = "Unit"
}

export class Royalty {
    value: number;
    royaltyType: RoyaltyType;
    royaltyComment: string;
}