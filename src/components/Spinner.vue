<script setup lang="ts"></script>
<template>
  <div class="loader"></div>
</template>

<style>
.loader {
  border: 1px solid #050205;
  border-top: 1px solid #cdcdce;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  z-index: 3;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
