import os from "node:os";
import { Cache, environment, } from "@raycast/api";
import { Transaction, TransactionsResponse } from "./types";
import fetch from "node-fetch";
import { network_configs } from "./networkConfig";
// import Parser from "rss-parser";
// import { CacheEntry, Topic } from "./types";

// The HNRSS service caches responses for 5 minutes: https://github.com/hnrss/hnrss/issues/71
const CACHE_DURATION_IN_MS = 5 * 60 * 1_000;

const cache = new Cache();

export function validateHash(hash: string) {
    return hash.length === 66 && hash.startsWith("0x");
}

export async function getTransactions(hash: string): Promise<TransactionsResponse> {
    try {
        if (!validateHash(hash)) {
            return { transactions: [] };
        }

        const response = await fetch(`https://api.tenderly.co/api/v1/search?query=${hash}`)
        const transactions: TransactionsResponse | {} = (await response.json()) as TransactionsResponse | {};
        if ("transactions" in transactions) {
            // Property "transactions" exists in the "transactions" object
            // Add your code here
            return transactions;
        } else {
            // Property "transactions" does not exist in the "transactions" object
            // Add your code here
            return { transactions: [] };
        }
    } catch (error) {
        console.error("Failed to fetch transactions", error);
        throw error;
    }
}
export function openInTenderly(transaction: Transaction) {
    const network = network_configs[transaction.network_id];
    return `https://dashboard.tenderly.co/tx/${network.slug ?? network.networkName.toLowerCase().replace(" ", "-")}/${transaction.hash}`;
}