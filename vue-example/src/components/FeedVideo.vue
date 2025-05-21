<script setup lang="ts">
import { ref } from 'vue'
import { BlinkooFeedElement } from '@blinkoo/components'
import '@blinkoo/components'

// props definition
withDefaults(
  defineProps<{
    environment?: string
    customBaseUrl?: string
    assetsPath?: string
    externalUserId?: string
    utmSource?: string
    utmCampaign?: string
    referrer?: string
    componentId?: string
    title?: string
    filters?: string
    playlist?: string
    position?: number
    autoplay?: boolean
    muted?: boolean
    showCreator?: boolean
  }>(),
  {
    // default values
    environment: undefined,
    customBaseUrl: undefined,
    assetsPath: undefined,
    externalUserId: undefined,
    utmSource: undefined,
    utmCampaign: undefined,
    referrer: undefined,
    componentId: undefined,
    title: undefined,
    filters: undefined,
    playlist: undefined,
    position: undefined,
    autoplay: undefined,
    muted: undefined,
    showCreator: undefined,
  },
)

// reference to the web component
const blinkooFeedRef = ref<BlinkooFeedElement | null>(null)

// Expose methods for parent components to use
const togglePlay = () => blinkooFeedRef.value?.togglePlay()
const next = () => blinkooFeedRef.value?.next()
const previous = () => blinkooFeedRef.value?.previous()

defineExpose({
  togglePlay,
  next,
  previous,
})
</script>

<template>
  <blinkoo-feed
    ref="blinkooFeedRef"
    :environment="environment"
    :custom-base-url="customBaseUrl"
    :assets-path="assetsPath"
    :external-user-id="externalUserId"
    :utm-source="utmSource"
    :utm-campaign="utmCampaign"
    :referrer="referrer"
    :component-id="componentId"
    :title="title"
    :filters="filters"
    :playlist="playlist"
    :position="position"
    :autoplay="autoplay"
    :muted="muted"
    :show-creator="showCreator"
  />
</template>
