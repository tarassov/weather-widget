interface UseGeoProps {
    cityName: string;
    limit: number;
}
export declare function useGeo(): {
    loading: import("vue").Ref<boolean>;
    getCityAsync: ({ cityName, limit, }: UseGeoProps) => Promise<Array<TCity>>;
};
export {};
