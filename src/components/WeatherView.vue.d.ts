declare const _sfc_main: import("vue").DefineComponent<{
    city: {
        type: null;
        required: true;
    };
}, {
    props: {
        city: TCity;
    };
    city: import("vue").ComputedRef<TCity>;
    imgUrl: import("vue").ComputedRef<string>;
    description: import("vue").ComputedRef<string>;
    windStyle: import("vue").ComputedRef<string>;
    windDescription: import("vue").ComputedRef<string>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    city: {
        type: null;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
