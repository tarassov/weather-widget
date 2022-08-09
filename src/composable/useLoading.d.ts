declare type WrappableFunction<TParameters, TResult> = (...args: TParameters[]) => TResult;
export declare function useLoading<TParameters, TResult>(func: WrappableFunction<TParameters, TResult>): {
    loading: import("vue").Ref<boolean>;
    wrapper: (args: TParameters) => Promise<TResult>;
};
export {};
