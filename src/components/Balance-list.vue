<template>
  <aside class="balance-list" :class="{ hide: hide }">
    <div class="balance-list__header">
      <h3 class="balance-list__title">Текущий баланс игроков:</h3>
      <span class="balance-list__btn" @click="hideList">{{ hideShow }}</span>
    </div>

    <div class="balance-list__main">
      <div class="balance-list__player-name lists">
        <div class="lists__title"><strong>Имя игрока</strong></div>
        <ul class="lists__list">
          <li
            class="lists__item"
            v-for="(player, index) in players"
            :key="index"
            :class="{ inactive: !player.isActive }"
          >
            {{ player.name }}
          </li>
        </ul>
      </div>
      <div class="balance-list__player__balance lists">
        <div class="lists__title"><strong>Баланс игрока(монет)</strong></div>
        <ul class="lists__list">
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
  data() {
    return {
      hide: false,
      hideShow: "Свернуть",
    };
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
    hideList() {
      if (!this.hide) {
        this.hide = true;
        setTimeout(() => {
          this.hideShow = "Развернуть";
        }, 300);
      } else {
        this.hide = false;
        this.hideShow = "Свернуть";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.balance-list {
  position: absolute;
  padding: 10px;
  top: 50px;
  border-radius: 0 10px 10px 0;
  background-color: #fff;
  max-height: 1000px;
  &__main {
    display: flex;
  }
  box-shadow: 5px 5px 5px rgb(167, 165, 165);
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  &__btn {
    cursor: pointer;
  }
}
ul {
  list-style: none;
}
.lists {
  &__titles,
  &__lists {
    display: flex;
  }
  &__title {
    text-decoration: underline;
    margin-bottom: 10px;
  }
}
.inactive {
  opacity: 0.5;
}
.lists {
  &__titles {
    margin-bottom: 10px;
  }
  &__title {
    margin-right: 40px;
  }
}
.hide {
  max-height: 40px;
  transition: max-height 0.3s;
  overflow: hidden;
}
</style>
