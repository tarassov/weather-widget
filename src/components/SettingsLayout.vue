<script setup lang="ts">
import { reactive, ref } from "vue";
import CityPreview from "./CityPreview.vue";
import draggable from "vuedraggable";
import InputText from "primevue/inputtext";

const props = defineProps<{ cities: Array<TCity> }>();

const emit = defineEmits({
  add: (city: TCity) => {
    if (city.name) {
      return true;
    } else {
      console.warn("No city name passed!");
      return false;
    }
  },
});

const form: { cityName: string } = reactive({
  cityName: "",
});

const drag = ref(false);

const onSubmit = () => {
  emit("add", { name: form.cityName });
  form.cityName = "";
};
</script>

<template>
  <div class="settings-container">
    <h3>Settings</h3>
  </div>
  <div class="cities-list">
    <draggable
      :list="cities"
      item-key="name"
      class="list-group"
      ghost-class="ghost"
      animation="200"
      handle=".handle"
      @start="drag = true"
      @end="drag = false"
    >
      <template #item="{ element, index }">
        <CityPreview :city="element" :index="index" />
      </template>
    </draggable>
  </div>
  <form @submit.prevent="onSubmit">
    <div class="p-input-icon-left new-city">
      <i class="icon pi pi-search" />
      <InputText type="text" v-model="form.cityName" placeholder="New city" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.settings-container {
  padding-top: 15px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
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
.cities-list {
  height: -webkit-calc(100vh - 100px);
  height: -moz-calc(100vh - 100px);
  height: calc(100vh - 100px);
  overflow-y: scroll;
  overflow-x: hidden;
}

.cities-list::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: var(--background-color);
}

.cities-list::-webkit-scrollbar-thumb {
  background: var(--v-scroll-color);
}
</style>
