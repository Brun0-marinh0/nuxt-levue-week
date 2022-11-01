<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ExperienceBar />
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ExperienceBar from '~/components/atoms/ExperienceBar.vue'

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
  components: {
    ExperienceBar
  }
})
</script>
