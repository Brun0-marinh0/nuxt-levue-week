<template>
  <div class="informChallenges">
    <p>
      Completed Challenges
    </p>
    <p>
      {{ completedChallenges }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  computed: mapState('Challenges', ['completedChallenges'])
})
</script>

  <style>
    .informChallenges{
        display: flex;
    }
  </style>
