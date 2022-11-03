<template>
  <section>
    <div>
      <Profile />
      <CompletedChallenges />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import CompletedChallenges from '@/components/atoms/CompletedChallenges.vue'
import Profile from '@/components/molecules/Profile.vue'

interface Head{
  title: string
}

export default Vue.extend({
  name: 'IndexPage',
  components: {
    CompletedChallenges,
    Profile
  },
  head (): Head {
    return {
      title: 'Home | movue.it'
    }
  }
})
</script>
