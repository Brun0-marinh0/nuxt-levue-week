<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="containerProfile">
    <img id="perfil" src="https://github.com/Brun0-marinh0.png" alt="Bruno Marinho">
    <div class="informProfile">
      <strong>Bruno Marinho</strong>
      <p>
        <img src="icons/level.svg" alt="level">
        <span>Level {{ level }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  computed: mapState('Challenges', ['level'])
})
</script>

<style>
.containerProfile{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.containerProfile #perfil{
    width: 5rem;
    border-radius: 50%;
}

.informProfile{

}
</style>
