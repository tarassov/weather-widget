import type { InjectionKey } from "vue";

export const CityKey: InjectionKey<{ onRemove: (index: number) => void }> =
  Symbol("city");
