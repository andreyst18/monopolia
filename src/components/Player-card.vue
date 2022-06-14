<template>
  <div class="player-card" :class="{ inactive: !isActive }">
    <h3 class="player-card__name">{{ name }}</h3>
    <div class="player-card__balance balance">
      <span class="balance__title">Баланс игрока(монет):</span>
      {{ formatBalance }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: String,
    balance: Number,
    isActive: Boolean,
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
  width: 350px;
  min-width: 350px;
  padding: 20px 10px;
  border-radius: 5px;
  background: rgb(214, 250, 194);
  margin-right: 20px;
  margin-bottom: 20px;
  &__name {
    text-align: center;
    margin-bottom: 15px;
  }
  &__balance {
    margin-bottom: 15px;
  }
}

.balance {
  &__title {
    text-decoration: underline;
  }
}

.inactive {
  background-color: rgb(240, 174, 180);
}
</style>
