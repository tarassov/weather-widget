import { ref, watch, type Ref } from "vue";
type WrappableFunction = (...args: unknown[]) => unknown;

// type TLoadingResult<T extends WrappableFunction> = {
//   loading: Ref<boolean>;
//   wrapper: (...args: Parameters<T>) => ReturnType<T>;
// };

export function useLoading<T extends WrappableFunction>(func: T) {
  const loading = ref<boolean>(true);

  const wrapper = async (...args: Parameters<T>) => {
    loading.value = true;
    console.log("loading");
    console.log(loading);
    const res = await func(args);
    loading.value = false;
    console.log("loaded");
    return res as ReturnType<T>;
  };

  return { loading, wrapper };
}
