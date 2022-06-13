<template>
  <button class="add-players-btn" @click="getNewPlayer">Добавить игрока</button>
</template>

<script>
export default {
  data() {
    return {
      player: {
        name: "",
        balance: 15e6,
        isActive: true,
      },
    };
  },
  methods: {
    getNewPlayer() {
      while (!this.player.name) {
        this.player.name = prompt("Ведите имя игрока");
      }

      this.$emit(
        "get-new-player",
        this.player.name,
        this.player.balance,
        this.player.isActive
      );

      this.player.name = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.add-players-btn {
  padding: 5px 10px;
  border-radius: 5px;
  background: rgb(33, 189, 33);
  border: 0;
  cursor: pointer;
  color: #fff;
  width: fit-content;
}
</style>
