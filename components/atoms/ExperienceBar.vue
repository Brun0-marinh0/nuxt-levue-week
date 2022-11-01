<template>
  <header>
    <p>
      {{ `${xp.start} xp` }}
    </p>
    <div class="container_progress">
      <div class="progress" :style="{width: `${currentXpPercentage}%`}" />
      <p>
        {{ `${xp.current} xp (${currentXpPercentage}%)` }}
      </p>
    </div>
    <p style="margin-top:2rem;">
      {{ `${xp.end} xp` }}
    </p>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState('Challenges', ['xp']),
    ...mapGetters('Challenges', ['currentXpPercentage'])
  }
})
</script>

<style scoped>
    header{
        display: flex;
        align-items: center;
    }
    .container_progress{
        width: 100%;
        height: .5rem;
        background: #f8f8f8;
        display: flex;
    }
    .container_progress .progress{
        background: #44d163;
    }
</style>
