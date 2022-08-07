<script setup lang="ts">
import { reactive, inject } from "vue";
import { useGeo } from "@/composable/useGeo";
import InputText from "primevue/inputtext";
import { CityKey } from "@/symbols/index.js";

const { loading, getCityAsync } = useGeo();

const cityProvider = inject(CityKey);

const form: { cityName: string } = reactive({
  cityName: "",
});

const onSubmit = () => {
  getCityAsync({ cityName: form.cityName }).then((cityList) => {
    cityProvider?.onAdd(cityList[0]);
    form.cityName = "";
  });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="p-input-icon-left new-city">
      <i class="icon pi pi-spin pi-spinner" v-if="loading" />
      <i class="icon pi pi-search" v-else />
      <InputText type="text" v-model="form.cityName" placeholder="New city" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.icon {
  z-index: 3;
}

.new-city {
  margin: 10px;
  width: 275px;
}
.new-city input {
  border-radius: 10px;
  height: 40px;
  width: 100%;
}
</style>
