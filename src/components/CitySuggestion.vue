<script setup lang="ts">
const props = defineProps<{ city: TCity }>();
const emit = defineEmits<{
  (e: "click", city: TCity): void;
}>();

const onClick = () => {
  emit("click", props.city);
};
</script>

<template>
  <div class="new-city-suggestion" @click="onClick">
    {{ city.name }}, {{ city.country }}
  </div>
</template>

<style scoped>
.new-city-suggestion {
  padding-bottom: 5px;
  margin: 0 20px 0 20px;
}
.new-city-suggestion:hover {
  cursor: pointer;
  background-color: var(--v-card-color);
  border: 1px;
  border-radius: 10px;
}
</style>
