<template>
  <div id="app">
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
            ></PlayerCard>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AddPlayersBtn from "./components/Add-players-btn.vue";
import PlayerCard from "./components/Player-card.vue";

export default {
  name: "App",
  components: {
    AddPlayersBtn,
    PlayerCard,
  },
  data() {
    return {
      hasPlayers: false,
      defaultNotification: "Список игроков пуст. Добавьте первого игрока.",
      players: [],
    };
  },

  methods: {
    addNewPlayer(inputName, inputBalance) {
      const newPlayer = {
        name: inputName,
        balance: inputBalance,
      };
      this.players.push(newPlayer);
      console.log(this.players);

      this.hasPlayers = true;
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
