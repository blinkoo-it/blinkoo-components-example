<script setup lang="ts">
import { BlinkooFeedArgs } from "@blinkoo/components";

const props = withDefaults(defineProps<{
  title?: string,
  filters?: string,
  playlistFilter?: string,
  aspectRatio?: number,
  feedPosition?: number,
}>(), {
  // default values
  title: "",
  filters: undefined,
  playlistFilter: undefined,
  aspectRatio: undefined,
  feedPosition: undefined
});
</script>

<template>
  <blinkoo-feed :title=title :filters=filters :playlistFilter=playlistFilter :aspectRatio=aspectRatio
    :feedPosition=feedPosition />
</template>