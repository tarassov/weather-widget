<script setup lang="ts">
const props = defineProps<{ city: TCity }>();
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
  </div>
</template>

<style lang="scss" scoped>
.city-container {
  background-color: var(--v-card-color);
  margin: 10px 10px 5px 10px;
  height: 46px;
  display: flex;
  justify-content: flex-start;
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
