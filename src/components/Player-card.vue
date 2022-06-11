<template>
  <div class="player-card">
    <h3 class="player-card__name">{{ name }}</h3>
    <div class="player-card__balance">Баланс игрока: {{ balance }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: String,
    balance: Number,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.player-card {
  width: 300px;
  height: 300px;
  background: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
