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
  <draggable
    :list="cities"
    item-key="index"
    class="list-group"
    ghost-class="ghost"
    animation="200"
    handle=".handle"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element }">
      <CityPreview :city="element" />
    </template>
  </draggable>
  <form @submit.prevent="onSubmit">
    <span class="p-input-icon-left">
      <i class="icon pi pi-search" />
      <InputText type="text" v-model="form.cityName" placeholder="New city" />
    </span>
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
.not-draggable {
  cursor: no-drop;
}
.icon {
  z-index: 3;
}
</style>
