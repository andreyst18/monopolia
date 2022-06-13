<template>
  <div class="balance-operations">
    <div class="balance-operations__in balance-operation">
      <div class="balance-operation__title">Приход</div>
      <div class="balance-operation__main">
        <span>Сумма(тыс. монет): </span>
        <input
          class="balance-operation__input"
          type="text"
          v-model="balanceIn"
          :disabled="!players[currentIndex].isActive"
        />
        <button @click="increaseBalance">></button>
      </div>
    </div>
    <div class="balance-operations__out balance-operation">
      <div class="balance-operation__title">Расход</div>
      <div class="balance-operation__main">
        <span>Сумма(тыс. монет): </span>
        <input
          class="balance-operation__input"
          type="text"
          v-model="balanceOut"
          :disabled="!players[currentIndex].isActive"
        />
        <button @click="decreaseBalance">></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentIndex: Number,
    players: Array,
  },
  data() {
    return {
      balanceIn: "",
      balanceOut: "",
    };
  },
  methods: {
    increaseBalance() {
      this.$emit("increase-balance", this.balanceIn * 1000, this.currentIndex);
      this.balanceIn = "";
    },
    decreaseBalance() {
      this.$emit("decrease-balance", this.balanceOut * 1000, this.currentIndex);
      this.balanceOut = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.balance-operations {
  display: flex;
  width: 100%;
}

.balance-operation {
  &__input {
    width: 50px;
  }
}
</style>
