<template>
  <div class="app-log">
    <p>лог</p>
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
      }
    },
  },

  computed: {},
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
