<script setup lang="ts">
import { BlinkooWebUtils, BlinkooFeedConfiguration } from '@blinkoo/components'

const props = withDefaults(
  defineProps<{
    title?: string
    filters?: string
    playlistFilter?: string
    aspectRatio?: number
    feedPosition?: number
    configurations?: BlinkooFeedConfiguration
  }>(),
  {
    // default values
    title: '',
    filters: undefined,
    playlistFilter: undefined,
    aspectRatio: undefined,
    feedPosition: undefined,
    configurations: undefined,
  },
)
const serializedConfiguration: string | undefined = props.configurations
  ? BlinkooWebUtils.encodeObject(props.configurations)
  : undefined
console.log('FeedVideo config', props.configurations, serializedConfiguration)
</script>

<template>
  <blinkoo-feed
    :title="title"
    :filters="filters"
    :playlistFilter="playlistFilter"
    :aspectRatio="aspectRatio"
    :feedPosition="feedPosition"
    :configurations="serializedConfiguration"
  />
</template>
