<template>
  <button type="button" v-bind="$attrs" @click="onClick">
    <slot />
  </button>
  <input
    type="file"
    style="display: none"
    @change="uploadImage"
    ref="fileInput"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useStore } from "../store";

export default defineComponent({
  name: "ImageUploadButton",
  setup(props) {
    const { uploadImage } = useStore();

    const fileInput = ref<HTMLInputElement>();
    const onClick = () => {
      fileInput.value!.dispatchEvent(new MouseEvent("click"));
    };

    return {
      uploadImage,
      fileInput,
      onClick,
    };
  },
});
</script>
