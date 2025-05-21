<script setup lang="ts">
import { ref } from 'vue'
import FeedVideo from './components/FeedVideo.vue'
import SingleVideo from './components/SingleVideo.vue'
import InsightElement from './components/InsightElement.vue'

const shownItem = ref(1)
const showCreator = ref(false)
const videoRef = ref<InstanceType<typeof FeedVideo> | null>(null)
const singleVideoRef = ref<InstanceType<typeof SingleVideo> | null>(null)
const insightRef = ref<InstanceType<typeof InsightElement> | null>(null)

const feedTogglePlay = () => videoRef.value?.togglePlay()
const feedNext = () => videoRef.value?.next()
const feedPrevious = () => videoRef.value?.previous()
const videoTogglePlay = () => singleVideoRef.value?.togglePlay()
const toggleCreator = () => (showCreator.value = !showCreator.value)
const sendCustomEvent = () =>
  insightRef.value?.sendCustomEvent('evento di prova', { key: 'value' })
</script>

<template>
  <div>
    <div style="height: 600px">
      <FeedVideo
        v-if="shownItem === 1"
        ref="videoRef"
        title="Explore"
        assets-path="blinkoo-assets"
        custom-base-url="http://localhost:4000"
        :show-creator="showCreator"
      />
      <SingleVideo
        v-else
        ref="singleVideoRef"
        assets-path="blinkoo-assets"
        custom-base-url="http://localhost:4000"
        post-id="0af11de1-5061-4b20-a292-1269ed1b0a0e"
        :show-creator="showCreator"
      />
      <InsightElement
        ref="insightRef"
        assets-path="blinkoo-assets"
        custom-base-url="http://localhost:4000"
      />
    </div>
  </div>
  <button @click="shownItem = 1">Show feed</button>
  <button @click="shownItem = 2">Show single video</button>
  <button @click="toggleCreator()">Toggle creator</button>
  <button @click="feedTogglePlay()">Feed toggle play</button>
  <button @click="feedNext()">Next</button>
  <button @click="feedPrevious()">Previous</button>
  <button @click="videoTogglePlay()">Video toggle play</button>
  <button @click="sendCustomEvent()">Send event</button>
</template>
