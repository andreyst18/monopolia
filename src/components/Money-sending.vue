<template>
  <div class="money-sending">
    <h4 class="money-sending__title">Отправить деньги</h4>
    <div class="money-sending__main">
      <div class="money-sending__recipient">
        <div>Игроку:</div>
        <form class="money-sending__choice choice">
          <select
            class="choice__slct"
            v-model="recepient"
            :disabled="!players[currentIndex].isActive"
            @change="getPlayerIndex"
          >
            <option
              v-for="(item, index) in players"
              :key="index"
              :value="index"
              :disabled="!players[index].isActive || index === currentIndex"
            >
              {{ item.name }}
            </option>
          </select>
        </form>
      </div>
      <div class="money-sending__sum sending">
        <span>Сумма(тыс. монет): </span>
        <input
          class="sending__inp"
          type="text"
          v-model="sendingSum"
          :disabled="!players[currentIndex].isActive"
        />
        <button
          class="sending__btn"
          @click="sendSumToOtherPlayer"
          :disabled="!players[currentIndex].isActive"
        >
          Отправить
        </button>
      </div>
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
      console.log(this.recepient);
      this.$emit(
        "send-sum",
        this.sendingSum * 1000,
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

<style lang="scss" scoped>
input,
button,
select {
  border: none;
}

.money-sending {
  &__main {
  }
  &__title {
    margin-bottom: 10px;
  }
  &__recipient {
    display: flex;
    align-items: center;
  }
  &__choice {
    margin: 0 10px;
  }
  &__sum {
    margin-top: 10px;
  }
}

.sending {
  &__btn {
    background-color: rgb(83, 160, 233);
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
    color: #fff;
  }
  &__inp {
    width: 70px;
    height: 20px;
  }
}

.choice__slct {
  padding: 5px 10px;
}

input,
button,
select {
  border: none;
  outline: none;
}
</style>
