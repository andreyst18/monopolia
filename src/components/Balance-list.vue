<template>
  <aside class="balance-list">
    <h4 class="balance-list__title">Текущий баланс игроков:</h4>
    <div class="balance-list__lists lists">
      <div class="lists__titles">
        <div class="lists__title">Имя игрока</div>
        <div class="lists__title">Баланс игрока(монет)</div>
      </div>
      <div class="lists__lists">
        <ul class="balance-list__list">
          <li
            class="balance-list__item"
            v-for="(player, index) in players"
            :key="index"
            :class="{ inactive: !player.isActive }"
          >
            {{ player.name }}
          </li>
        </ul>
        <ul class="balance-list__list">
          <li
            class="balance-list__item"
            v-for="(player, index) in players"
            :key="index"
            :class="{ inactive: !player.isActive }"
          >
            {{ formatBalance(player.balance) }}
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    players: Array,
  },

  methods: {
    formatBalance(value) {
      let balance = value + "";
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
ul {
  list-style: none;
}

.lists {
  &__titles,
  &__lists {
    display: flex;
  }
}

.inactive {
  opacity: 0.5;
}
</style>
