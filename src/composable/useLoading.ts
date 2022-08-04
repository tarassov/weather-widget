import { ref } from "vue";
type WrappableFunction = (...args: unknown[]) => unknown;

export function useLoading<T extends WrappableFunction>(func: T) {
  const loading = ref<boolean>(true);

  const wrapper = async (...args: Parameters<T>) => {
    loading.value = true;
    const res = await func(args);
    loading.value = false;
    return res as ReturnType<T>;
  };

  return { loading, wrapper };
}
