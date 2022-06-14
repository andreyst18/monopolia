<template>
  <div id="app">
    <BalanceList v-if="hasPlayers" :players="players"></BalanceList>
    <AppLog v-if="hasPlayers" :appEvents="appEvents"></AppLog>
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
              :isActive="player.isActive"
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
import AppLog from "./components/App-log.vue";

export default {
  name: "App",
  components: {
    AddPlayersBtn,
    PlayerCard,
    BalanceOperations,
    MoneySending,
    BalanceList,
    AppLog,
  },
  data() {
    return {
      hasPlayers: false,
      defaultNotification: "Список игроков пуст. Добавьте первого игрока.",
      players: [],
      appEvents: [],
    };
  },
  mounted() {
    if (localStorage.length) {
      if (confirm("Вы желаете продолжить игру?")) {
        this.hasPlayers = true;
        this.players = JSON.parse(localStorage.getItem("players"));
        this.appEvents = JSON.parse(localStorage.getItem("appEvents"));
        console.log(this.players);
      } else {
        localStorage.clear();
      }
    }
  },
  methods: {
    addNewPlayer(inputName, inputBalance, inputStatus) {
      const newPlayer = {
        name: inputName,
        balance: inputBalance,
        isActive: inputStatus,
      };
      this.players.push(newPlayer);
      this.hasPlayers = true;
      this.addNewEvent(0, 0, 0, inputName);
    },
    addNewEvent(...args) {
      const time = new Date();
      const newEvent = {
        eventTime: this.formatDate(time),
        eventType: args[0], //0 - добавление игрока; 1 - приход; 2 - расход; 3 - перевод другому игроку; 4 - становление неактивным
        sumIn: args[1],
        sumOut: args[2],
        playerFirst: args[3],
        playerSecond: args[4],
      };
      this.appEvents.push(newEvent);

      let serializePlayers = JSON.stringify(this.players);
      let serializeAppEvents = JSON.stringify(this.appEvents);
      localStorage.setItem("players", serializePlayers);
      localStorage.setItem("appEvents", serializeAppEvents);
    },
    increaseBalance(value, currentIndex) {
      this.players[currentIndex].balance += +value;
      this.addNewEvent(1, value, 0, this.players[currentIndex].name);
    },
    decreaseBalance(value, currentIndex) {
      this.players[currentIndex].balance -= +value;
      this.checkActivity(currentIndex);
      this.addNewEvent(2, 0, value, this.players[currentIndex].name);
    },
    sendSumToOtherPlayer(sum, outIndex, toIndex) {
      this.players[outIndex].balance -= +sum;
      this.players[toIndex].balance += +sum;

      console.log(outIndex);
      console.log(toIndex);

      this.checkActivity(outIndex);
      this.addNewEvent(
        3,
        0,
        sum,
        this.players[outIndex].name,
        this.players[toIndex].name
      );
    },
    checkActivity(index) {
      if (this.players[index].balance < -5e6) {
        this.players[index].isActive = false;
        setTimeout(() => {
          this.addNewEvent(4, 0, 0, this.players[index].name);
        }, 1);
      }
    },
    formatDate(date) {
      const dayNumber = date.getDate();
      const month =
        date.getMonth().length > 1 ? date.getMonth() : "0" + date.getMonth();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes =
        date.getMinutes().length > 1
          ? date.getMinutes()
          : ("0" + date.getMinutes()).slice(-2);
      const seconds =
        date.getSeconds().length > 1
          ? date.getSeconds()
          : ("0" + date.getSeconds()).slice(-2);
      return `${dayNumber}.${month}.${year} ${hours}:${minutes}:${seconds}`;
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

#app {
  position: relative;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: rgb(196, 220, 233);
}

.base {
  margin: 0 auto;
  padding: 0 50px;
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
    justify-content: center;
  }
  &__btn-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
}
</style>
