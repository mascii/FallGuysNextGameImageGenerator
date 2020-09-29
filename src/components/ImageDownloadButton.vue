<template>
  <button type="button" @click="download" class="button button-outline">
    PNG ({{ imageWidth }} x {{ imageHeight }})
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const FILE_NAME = "fall_guys_next_game.png";

export default defineComponent({
  name: "ImageDownloadButton",
  props: {
    imageWidth: {
      type: Number,
      default: 1920,
    },
    imageHeight: {
      type: Number,
      default: 1080,
    },
  },
  methods: {
    download() {
      const svg = document.querySelector("svg");
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      canvas.width = this.imageWidth;
      canvas.height = this.imageHeight;

      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.setAttribute("download", FILE_NAME);
        a.dispatchEvent(new MouseEvent("click"));
      };
      image.src =
        "data:image/svg+xml;charset=utf-8;base64," +
        btoa(unescape(encodeURIComponent(svgData)));
    },
  },
});
</script>
