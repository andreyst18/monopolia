<template>
  <div class="app-log" :class="{ hide: hide }">
    <div class="app-log__header">
      <h3 class="app-log__title">Лог событий:</h3>
      <span @click="hideList">{{ hideShow }}</span>
    </div>
    <ul class="app-log__list">
      <li v-for="(item, index) in appEvents" :key="index">
        {{ getLogText(item) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    appEvents: Array,
  },

  data() {
    return {
      hide: false,
      hideShow: "Свернуть",
    };
  },
  methods: {
    getLogText(newEvent) {
      switch (+newEvent.eventType) {
        case 0:
          return `${newEvent.eventTime} Добавлен новый игрок ${newEvent.playerFirst}`;

        case 1:
          return `${newEvent.eventTime} Игрок ${
            newEvent.playerFirst
          } получил ${this.formatBalance(newEvent.sumIn)} монет`;
        case 2:
          return `${newEvent.eventTime} Игрок ${
            newEvent.playerFirst
          } потерял ${this.formatBalance(newEvent.sumOut)} монет`;
        case 3:
          return `${newEvent.eventTime} Игрок ${
            newEvent.playerFirst
          } перевел игроку ${newEvent.playerSecond} ${this.formatBalance(
            newEvent.sumOut
          )} монет`;
        case 4:
          return `${newEvent.eventTime} Игрок ${newEvent.playerFirst} выбыл из игры`;
      }
    },
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
.app-log {
  position: absolute;
  padding: 10px;
  top: 50px;
  border-radius: 10px 0px 0px 10px;
  background-color: #fff;
  max-height: 1000px;
  right: 0;
  box-shadow: 5px 5px 5px rgb(167, 165, 165);
  &__list {
    list-style: none;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
}

.hide {
  max-height: 40px;
  transition: max-height 0.3s;
  overflow: hidden;
}
</style>
