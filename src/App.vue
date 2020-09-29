<template>
  <h1>FallGuysNextGameImageGenerator</h1>
  <div class="parameters">
    <div>Title: <input type="text" v-model="state.title" /></div>
    <div>
      Type:
      <div class="flex">
        <input type="text" v-model="state.type" class="type" />
        <ChangeColorButton>Change Color</ChangeColorButton>
      </div>
    </div>
    <div>
      How To Play:
      <textarea v-model="state.howToPlay" class="howtoplay_textarea" />
    </div>
    <div>
      Image:
      <ImageUploadButton class="button button-outline">
        Choose File
      </ImageUploadButton>
    </div>
  </div>
  <div class="svg_container">
    <FallGuysNextGameImage />
  </div>

  <div class="download_buttons">
    Download:
    <ImageDownloadButton :image-width="1920" :image-height="1080" />
    <ImageDownloadButton :image-width="1600" :image-height="900" />
    <ImageDownloadButton :image-width="1366" :image-height="768" />
    <ImageDownloadButton :image-width="1280" :image-height="720" />
    <ImageDownloadButton :image-width="1176" :image-height="664" />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";

import { createStore, storeKey } from "./store";

import FallGuysNextGameImage from "./components/FallGuysNextGameImage.vue";
import ChangeColorButton from "./components/ChangeColorButton.vue";
import ImageDownloadButton from "./components/ImageDownloadButton.vue";
import ImageUploadButton from "./components/ImageUploadButton.vue";

export default defineComponent({
  name: "App",
  components: {
    FallGuysNextGameImage,
    ChangeColorButton,
    ImageDownloadButton,
    ImageUploadButton,
  },
  setup() {
    const store = createStore();
    provide(storeKey, store);

    const { state } = store;
    return {
      state,
    };
  },
});
</script>

<style scoped>
h1 {
  font-size: 24px;
}

.parameters {
  max-width: 500px;
  margin: auto;
}

.flex {
  display: flex;
}

input.type {
  margin-right: 10px;
}

.svg_container {
  max-width: 1000px;
  margin: auto;
}

.howtoplay_textarea {
  height: 120px;
  resize: vertical;
}

.download_buttons {
  margin: 20px 0;
}
.download_buttons > button {
  display: block;
  margin: 10px auto;
}
</style>
