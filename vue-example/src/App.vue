<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FeedVideo from './components/FeedVideo.vue'
import SingleVideo from './components/SingleVideo.vue'
import '@blinkoo/components'
import { BlinkooWebInit, BlinkooFeedConfiguration } from '@blinkoo/components'

const isInitialized = ref(false)
const shownItem = ref(1)

const initBlinkooComponents = async () => {
  await BlinkooWebInit.init({
    assetsPath: 'blinkoo-assets/',
    customApiBasePath: 'http://localhost:4000', // only for development, remove parameter in production
  })
  isInitialized.value = true
}

const configurations: BlinkooFeedConfiguration = {
  isCreatorEnabled: true,
}

onMounted(() => {
  initBlinkooComponents()
})
</script>

<template>
  <div v-if="isInitialized">
    <div style="height: 600px">
      <FeedVideo
        v-if="shownItem === 1"
        title="Explore"
        :aspectRatio="0.5625"
        :configurations="configurations"
      />
      <SingleVideo
        v-else
        postId="POST_ID"
        title="single video"
        :aspectRatio="1"
      />
    </div>
  </div>
  <button @click="shownItem = 1">Show feed</button>
  <button @click="shownItem = 2">Show single video</button>
</template>
