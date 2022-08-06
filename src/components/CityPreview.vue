<script setup lang="ts">
import { CityKey } from "@/symbols";
import { inject } from "vue";

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
      <VButton
        class="handle p-button-rounded p-button-text p-button-plain"
        icon="pi pi-bars"
      />
      <p>{{ city.name }}</p>
    </div>
    <VButton
      class="p-button-rounded p-button-text p-button-plain"
      icon="pi  pi-trash"
      @click="removeClick"
    />
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
  padding-top: 10px;
}
</style>
