<template>
  <div class="balance-operations">
    <div class="balance-operations__in balance-operation">
      <div class="balance-operation__title"><strong>Приход</strong></div>
      <div class="balance-operation__main">
        <span>Сумма(тыс. монет): </span>
        <input
          class="balance-operation__input"
          type="text"
          v-model="balanceIn"
          :disabled="!players[currentIndex].isActive"
        />
        <button @click="increaseBalance" class="balance-operation__btn">
          >
        </button>
      </div>
    </div>
    <div class="balance-operations__out balance-operation">
      <div class="balance-operation__title"><strong>Расход</strong></div>
      <div class="balance-operation__main">
        <span>Сумма(тыс. монет): </span>
        <input
          class="balance-operation__input"
          type="text"
          v-model="balanceOut"
          :disabled="!players[currentIndex].isActive"
        />
        <button @click="decreaseBalance" class="balance-operation__btn">
          >
        </button>
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
button {
  cursor: pointer;
}

.balance-operations {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;
}

.balance-operation {
  &__title {
    margin-bottom: 5px;
  }
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
  &__input {
    width: 70px;
    height: 20px;
    margin-left: 5px;
  }
  &__btn {
    margin-left: 10px;
    border-radius: 5px;
    color: #fff;
  }
}

input,
button {
  border: none;
  outline: none;
}

button {
  background-color: rgb(83, 160, 233);
  padding: 5px 10px;
}
</style>
