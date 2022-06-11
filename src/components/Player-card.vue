<template>
  <div class="player-card">
    <h3 class="player-card__name">{{ name }}</h3>
    <div class="player-card__balance">Баланс игрока: {{ formatBalance }}</div>
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

  computed: {
    formatBalance() {
      let balance = this.balance + "";
      let arr = balance.split("").reverse();
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0) {
          result.push(arr[i] + " ");
        } else {
          result.push(arr[i]);
        }
      }
      return result.reverse().join("");
    },
  },
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
