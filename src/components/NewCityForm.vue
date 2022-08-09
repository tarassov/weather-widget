<script setup lang="ts">
import { reactive, inject, ref } from "vue";
import { useGeo } from "@/composable/useGeo";
import InputText from "primevue/inputtext";
import { CityKey } from "@/symbols/index.js";
import CitySuggestion from "./CitySuggestion.vue";

const { loading, getCityAsync } = useGeo();

const suggestions = ref<Array<TCity>>();

const cityProvider = inject(CityKey);

const form: { cityName: string } = reactive({
  cityName: "",
});

const onInput = (event: Event) => {
  if (!form.cityName.length) {
    suggestions.value = [];
  } else {
    getCityAsync({ cityName: form.cityName, limit: 3 }).then((cityList) => {
      suggestions.value = cityList;
    });
  }
};
const onSelect = (city: TCity) => {
  cityProvider?.onAdd(city);
  form.cityName = "";
  suggestions.value = [];
};
const onSubmit = () => {
  getCityAsync({ cityName: form.cityName, limit: 1 }).then((cityList) => {
    cityProvider?.onAdd(cityList[0]);
    form.cityName = "";
  });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="p-input-icon-left new-city">
      <i class="new-city-icon pi spinner" v-if="loading"><Spinner /></i>
      <i class="new-city-icon" v-else><mdi:magnify /> </i>
      <InputText
        type="text"
        v-model="form.cityName"
        placeholder="New city"
        @input="onInput"
      />
    </div>
  </form>
  <CitySuggestion
    v-for="(suggestion, index) in suggestions"
    :key="index"
    :city="suggestion"
    @click="onSelect"
  />
</template>

<style scoped>
.new-city-icon {
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
.spinner {
  display: inline;
}
</style>
