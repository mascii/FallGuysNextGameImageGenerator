import { reactive, computed, inject, InjectionKey, readonly } from "vue";

const TYPE_COLORS = ["#00EC6A", "#FFC67A", "#71BBB3", "#E65D2B"];

const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const createStore = () => {
  const state = reactive({
    title: "フルーツパニック",
    type: "レース",
    typeColorIndex: 0,
    howToPlay:
      "飛びまわるフルーツを\nよけながらベルト\nコンベアを進んで、\nゴールまでたどり着け！",
    image: "", // data URI scheme
  });

  return {
    state,
    readonlyState: readonly(state),

    typeColor: computed(() => {
      return TYPE_COLORS[state.typeColorIndex];
    }),

    changeColor() {
      state.typeColorIndex = (state.typeColorIndex + 1) % TYPE_COLORS.length;
    },
    async uploadImage(event) {
      const files: FileList = event.target.files || event.dataTransfer.files;
      const file = files[0];
      state.image = await getBase64(file);
    },
  };
};

export const storeKey: InjectionKey<ReturnType<typeof createStore>> = Symbol("store");

export const useStore = () => {
  const store = inject(storeKey);
  if (!store) {
    throw new Error("store is not provided.");
  }
  return store;
};
