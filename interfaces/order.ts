export type OrderStatusResult = {
    status: "PENDING" | "COMPLETED" | "FAILED" | "COMPLETED_EXPIRED";
    downloadLinkIds?: string[] | null;
    userId?: number | null;
};
