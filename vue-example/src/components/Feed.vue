<script setup lang="ts">
import "@blinkoo/components";
const props = withDefaults(defineProps<{
  apiKey: string,
  title?: string,
  filters?: string,
  playlistFilter?: string,
  aspectRatio?: number,
  assetsPath?: string,
  hasToAutostart?: boolean,
  onInitialized?: () => void,
}>(), {
  // default values
  title: "",
  filters: undefined,
  playlistFilter: undefined,
  aspectRatio: undefined,
  assetsPath: undefined,
  hasToAutostart: undefined,
  onInitialized: undefined,

});
</script>

<template>
  <div style="width: 100vw; height: 100vh">
    <blinkoo-feed 
      :apiKey=apiKey
      :title=title
      :filters=filters
      :playlistFilter=playlistFilter
      :aspectRatio=aspectRatio
      :assetsPath=assetsPath
      v-bind="{
        ...(hasToAutostart !== undefined ? { hasToAutostart } : {}),
        ...(onInitialized !== undefined ? { onInitialized } : {})
      }"
    />
  </div>
</template>
