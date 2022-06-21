export default {
  filters: {
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
