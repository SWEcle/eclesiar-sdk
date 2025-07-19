import { CountryStatisticType, RankingItem } from "@/types";

export interface StatisticsApi {
    getStatistics({ statistic }: { statistic: CountryStatisticType }): Promise<RankingItem[]>;
}