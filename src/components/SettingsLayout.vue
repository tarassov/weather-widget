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
  <NewCityForm />
</template>

<style lang="scss" scoped>
.settings-container {
  padding-top: 15px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.cities-list {
  max-height: -webkit-calc(100vh - 100px);
  max-height: -moz-calc(100vh - 100px);
  max-height: calc(100vh - 100px);
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
