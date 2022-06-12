<template>
  <div id="app">
    <BalanceList v-if="hasPlayers" :players="players"></BalanceList>
    <main class="base">
      <h1 class="base__title">Монополия</h1>
      <div class="base__players">
        <p
          class="base__notification"
          :class="{ 'base__notification-hide': hasPlayers }"
        >
          {{ defaultNotification }}
        </p>
        <div class="base__wrapper">
          <div class="base__btn-wrapper">
            <AddPlayersBtn
              class="base__add-players-btn"
              @get-new-player="addNewPlayer"
            ></AddPlayersBtn>
          </div>
          <div class="base__cards" v-if="hasPlayers">
            <PlayerCard
              v-for="(player, index) in players"
              :key="index"
              :name="player.name"
              :balance="player.balance"
            >
              <BalanceOperations
                :currentIndex="index"
                @increase-balance="increaseBalance"
                @decrease-balance="decreaseBalance"
                :players="players"
              ></BalanceOperations>
              <MoneySending
                :players="players"
                :currentIndex="index"
                @send-sum="sendSumToOtherPlayer"
              ></MoneySending>
            </PlayerCard>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AddPlayersBtn from "./components/Add-players-btn.vue";
import PlayerCard from "./components/Player-card.vue";
import BalanceOperations from "./components/Balance-operations.vue";
import MoneySending from "./components/Money-sending.vue";
import BalanceList from "./components/Balance-list.vue";

export default {
  name: "App",
  components: {
    AddPlayersBtn,
    PlayerCard,
    BalanceOperations,
    MoneySending,
    BalanceList,
  },
  data() {
    return {
      hasPlayers: false,
      defaultNotification: "Список игроков пуст. Добавьте первого игрока.",
      players: [],
    };
  },

  methods: {
    addNewPlayer(inputName, inputBalance, inputStatus) {
      const newPlayer = {
        name: inputName,
        balance: inputBalance,
        isActive: inputStatus,
      };
      this.players.push(newPlayer);
      // console.log(this.players);

      this.hasPlayers = true;
    },
    increaseBalance(value, currentIndex) {
      this.players[currentIndex].balance += +value;
    },
    decreaseBalance(value, currentIndex) {
      this.players[currentIndex].balance -= +value;
      this.checkActivity(currentIndex);
      console.log(this.players);
    },
    sendSumToOtherPlayer(sum, outIndex, toIndex) {
      this.players[outIndex].balance -= +sum;
      this.players[toIndex].balance += +sum;
      this.checkActivity(outIndex);
      console.log(this.players);
    },
    checkActivity(index) {
      if (this.players[index].balance < -5e6) {
        this.players[index].isActive = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: rgb(185, 207, 219);
}

.base {
  margin: 0 auto;
  padding: 0 20vw;
  &__title {
    text-align: center;
    padding-top: 50px;
  }
  &__notification {
    text-align: center;
    margin-top: 50px;
    opacity: 0.7;
    &-hide {
      opacity: 0;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
  }
  &__add-players-btn {
    margin-top: 30px;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
  }
  &__btn-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
}
</style>
