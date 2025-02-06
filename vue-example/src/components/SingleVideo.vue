<script setup lang="ts">
import { BlinkooFeedArgs } from "@blinkoo/components";

const props = withDefaults(defineProps<{
  title?: string,
  aspectRatio?: number,
  postId?: string,
}>(), {
  // default values
  title: "",
  aspectRatio: undefined,
  postId: undefined
});
</script>

<template>
  <blinkoo-feed :title=title :aspectRatio=aspectRatio :postId=postId />
</template>