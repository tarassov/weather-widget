<script setup lang="ts">
import { useSettings } from "@/composable/useSettings";
import { onMounted } from "vue";
const props = defineProps<{ api_key: string }>();
const { setValue } = useSettings();
setValue("api_key", props.api_key);
</script>

<template>
  <MainLayout></MainLayout>
</template>

<style src="../assets/base.css"></style>
<style src="primevue/resources/themes/md-light-indigo/theme.css"></style>
<style src="primevue/resources/primevue.min.css" ;></style>
<style src="primeicons/primeicons.css"></style>
