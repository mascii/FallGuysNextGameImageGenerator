<template>
  <button
    type="button"
    :style="{
      'background-color': typeColor,
      'border-color': typeColor,
    }"
    @click="changeColor"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../store";

export default defineComponent({
  name: "ChangeColorButton",
  setup(props) {
    const { typeColor, changeColor } = useStore();

    return {
      typeColor,
      changeColor,
    };
  },
});
</script>
