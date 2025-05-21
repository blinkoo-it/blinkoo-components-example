<script setup lang="ts">
import { BlinkooInsightElement } from '@blinkoo/components'
import { ref } from 'vue'
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
  },
)

// reference to the web component
const insightRef = ref<BlinkooInsightElement | null>(null)

// Expose methods for parent components to use
const sendCustomEvent = (eventName: string, obj: Record<string, string>) =>
  insightRef.value?.sendCustomEvent(eventName, obj)

defineExpose({
  sendCustomEvent,
})
</script>

<template>
  <blinkoo-insight
    ref="insightRef"
    :environment="environment"
    :custom-base-ur="customBaseUrl"
    :assets-path="assetsPath"
    :external-user-id="externalUserId"
    :utm-source="utmSource"
    :utm-campaign="utmCampaign"
    :referrer="referrer"
    :component-id="componentId"
  />
</template>
