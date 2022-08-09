<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

const props = defineProps<{ cities: Array<TCity> }>();

const drag = ref(false);
</script>

<template>
  <div class="settings-container">
    <h3>Settings</h3>
  </div>
  <draggable
    :list="cities"
    item-key="name"
    class="cities-list"
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
  <NewCityForm />
</template>

<style scoped>
.settings-container {
  max-height: inherit;
  padding-top: 15px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.cities-list {
  max-height: -webkit-calc(100% - 100px);
  max-height: -moz-calc(100% - 100px);
  max-height: calc(100% - 100px);

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
