import { type ComputedRef } from "vue";
export declare function useWeather(city: ComputedRef<TCity>): {
    loading: import("vue").Ref<boolean>;
    weatherData: import("vue").Ref<{
        base: string;
        coord: {
            lon: number;
            lat: number;
        };
        clouds: {
            all: number;
        };
        main: {
            feels_like: number;
            humidity: number;
            pressure: number;
            temp: number;
            temp_max: number;
            temp_min: number;
        };
        weather: {
            description: string;
            icon: string;
            id: number;
            main: string;
        }[];
        sys: {
            type: number;
            id: number;
            country: string;
            sunrise: number;
            sunset: number;
        };
        visibility: number;
        dt: number;
        id: number;
        name: string;
        cod: number;
        timezone: number;
        wind: {
            deg: number;
            speed: number;
        };
    } | null>;
    error: import("vue").Ref<boolean>;
};
