import type { InjectionKey } from "vue";
export declare const CityKey: InjectionKey<{
    onRemove: (index: number) => void;
    onAdd: (city: TCity) => void;
}>;
