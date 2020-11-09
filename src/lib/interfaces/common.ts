interface PaginationInfo {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
}
export type HttpResponse<DataType> = {
    info: PaginationInfo;
    results: DataType[];
}
