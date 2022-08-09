<script setup lang="ts">
import { CityKey } from "@/symbols";
import { inject } from "vue";
import Button from "primevue/button";

const props = defineProps<{ city: TCity; index: number }>();
const emit = defineEmits<{
  (e: "remove_click", index: number): void;
}>();

const cityProvider = inject(CityKey);

const removeClick = () => {
  cityProvider?.onRemove(props.index);
};
</script>

<template>
  <div class="city-container">
    <div class="city-name">
      <Button
        class="handle p-button-rounded p-button-text p-button-plain"
        icon="pi pi-bars"
      >
        <prime:bars />
      </Button>
      <p>{{ city.name }}, {{ city.country }}</p>
    </div>
    <Button
      class="p-button-rounded p-button-text p-button-plain"
      @click="removeClick"
    >
      <mdi:trash-can-outline />
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.city-container {
  background-color: var(--v-card-color);
  border-radius: 10px;
  box-shadow: 2px 2px 1px rgb(181, 181, 179);
  margin: 10px 10px 5px 10px;
  height: 46px;
  display: flex;
  justify-content: space-between;
}
.city-name {
  padding-top: 0px;
  display: flex;
  justify-content: flex-start;
}
.city-name p {
  padding-top: 15px;
}
</style>
