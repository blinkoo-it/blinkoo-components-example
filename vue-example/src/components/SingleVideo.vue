<script setup lang="ts">
import { BlinkooSingleVideoElement } from '@blinkoo/components'
import { ref } from 'vue'
import '@blinkoo/components'

// props definition
withDefaults(
  defineProps<{
    environment?: string
    customBaseUrl?: string
    externalCustomerId?: string
    utmSource?: string
    utmCampaign?: string
    referrer?: string
    componentId?: string
    postId?: string
    autoplay?: boolean
    muted?: boolean
    showCreator?: boolean
  }>(),
  {
    // default values
    environment: undefined,
    customBaseUrl: undefined,
    assetsPath: undefined,
    externalCustomerId: undefined,
    utmSource: undefined,
    utmCampaign: undefined,
    referrer: undefined,
    componentId: undefined,
    postId: undefined,
    autoplay: undefined,
    muted: undefined,
    showCreator: undefined,
  },
)

// reference to the web component
const singleVideoRef = ref<BlinkooSingleVideoElement | null>(null)

// Expose methods for parent components to use
const togglePlay = () => singleVideoRef.value?.togglePlay()

defineExpose({
  togglePlay,
})
</script>

<template>
  <blinkoo-single-video
    ref="singleVideoRef"
    :environment="environment"
    :custom-base-url="customBaseUrl"
    :external-customer-id="externalCustomerId"
    :utm-source="utmSource"
    :utm-campaign="utmCampaign"
    :referrer="referrer"
    :component-id="componentId"
    :post-id="postId"
    :autoplay="autoplay"
    :muted="muted"
    :show-creator="showCreator"
  />
</template>
