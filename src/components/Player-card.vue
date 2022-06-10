<template>
  <div class="player-card">
    <h3 class="player-card__name">{{ name }}</h3>
    <div class="player-card__balance">Баланс игрока: {{ balance }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    balance: Number,
  },
};
</script>

<style lang="scss" scoped>
.player-card {
  width: 100px;
  height: 100px;
  background: #fff;
}
</style>
