import type { InjectionKey } from "vue";

export const CityKey: InjectionKey<{
  onRemove: (index: number) => void;
  onAdd: (city: TCity) => void;
}> = Symbol("city");
