<template>
  <div>

  </div>
</template>

<script>
import Post from '@/models/Post'
export default {
  created() {
    Post.fetch()
  }
}
</script>

<style>

</style>
