<template>
  <div class="app-log">
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
  methods: {
    getLogText(newEvent) {
      switch (+newEvent.eventType) {
        case 0:
          return `${newEvent.eventTime} Добавлен новый игрок ${newEvent.playerFirst}`;

        case 1:
          return `${newEvent.eventTime} Игрок ${
            newEvent.playerFirst
          } получил ${this.formatBalance(newEvent.sumIn)} рублей`;
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
  },
};
</script>

<style lang="scss" scoped>
.app-log {
  position: absolute;
  right: 0;
  &__list {
    list-style: none;
  }
}
</style>
