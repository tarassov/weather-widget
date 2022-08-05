<script setup lang="ts">
import { ref } from "vue";
import CityPreview from "./CityPreview.vue";
import draggable from "vuedraggable";
import { computed } from "vue";

const cities = ref<Array<{ index: number } | TCity>>([
  { name: "London", index: 1 },
  { name: "Saint Petersburg", index: 2 },
  { name: "Maiami", index: 3 },
  { name: "New Yourk", index: 4 },
  { name: "Tbilisi", index: 5 },
]);

const drag = ref(false);

const list = ref(cities);

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
  };
});
</script>

<template>
  <div class="settings-container"><h3>Settings</h3></div>
  <draggable
    :list="list"
    item-key="index"
    class="list-group"
    ghost-class="ghost"
    handle=".handle"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element }">
      <div>
        <CityPreview :city="element" />
      </div>
    </template>
  </draggable>
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
</style>
