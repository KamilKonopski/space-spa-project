<template>
  <button @click="$router.push(`${goTo}`)">View more</button>
</template>

<script>
export default {
  name: "ButtonIn",
  props: {
    goTo: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    border-color: #6630ad;
    background-color: #6630ad;
  }
}
</style>