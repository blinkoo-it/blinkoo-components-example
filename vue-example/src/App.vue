<script setup>
import { ref, onMounted } from "vue";
import Feed from "./components/Feed.vue";
import SingleVideo from "./components/SingleVideo.vue";
import "@blinkoo/components";
import { BlinkooWebInit } from "@blinkoo/components";

const isInitialized = ref(false);
const shownItem = ref(1);

const initBlinkooComponents = async () => {
    await BlinkooWebInit.init({
        apiKey: "YOUR_API_KEY",
        assetsPath: "blinkoo-assets/"
    });
    isInitialized.value = true;
};

onMounted(() => {
    initBlinkooComponents();
});
</script>

<template>
    <div v-if="isInitialized">
        <div style="height: 600px;">
            <Feed v-if="shownItem === 1" title="Explore" :aspectRatio="0.5625" />
            <SingleVideo v-else postId="POST_ID" title="single video" :aspectRatio="1" />
        </div>
    </div>
    <button @click="shownItem = 1">Show feed</button>
    <button @click="shownItem = 2">Show single video</button>
</template>
