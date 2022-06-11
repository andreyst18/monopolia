<template>
  <div class="money-sending">
    <h4 class="money-sending__title">Отправить деньги</h4>
    <div class="money-sending__recipient">
      <span>Игроку: </span>
      <form action="">
        <select @change="getPlayerIndex">
          <option v-for="(item, index) in players" :key="index">
            {{ item.name }}
          </option>
        </select>
      </form>
    </div>
    <div class="money-sending__sum">
      <input type="text" v-model="sendingSum" />
      <button @click="sendSumToOtherPlayer">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    players: Array,
    currentIndex: Number,
  },

  data() {
    return {
      sendingSum: "",
      recepient: 0,
    };
  },

  methods: {
    sendSumToOtherPlayer() {
      this.$emit(
        "send-sum",
        this.sendingSum,
        this.currentIndex,
        this.recepient
      );
    },
    getPlayerIndex(event) {
      this.recepient = event.target.selectedIndex;
      console.log(this.recepient);
    },
  },

  computed: {},
};
</script>

<style lang="scss" scoped></style>
