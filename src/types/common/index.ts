export interface TData<T> {
    code: number;
    data: T;
    msg: string;
    errorCode?: number;
    timestamp?: number;
}

export interface TPage<T> {
    total: number;
    size: number;
    current: number;
    records: T[];
}
