import { ref } from "vue";
type WrappableFunction<TParameters, TResult> = (
  ...args: TParameters[]
) => TResult;

export function useLoading<TParameters, TResult>(
  func: WrappableFunction<TParameters, TResult>
) {
  const loading = ref<boolean>(true);

  const wrapper = async (args: TParameters) => {
    loading.value = true;
    const res = await func(args);
    loading.value = false;
    return res as TResult;
  };

  return { loading, wrapper };
}
