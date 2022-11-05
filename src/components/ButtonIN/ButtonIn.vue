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
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  transition: 0.2s linear;

  &:hover {
    background-color: #6630ad;
    border-color: #6630ad;
  }
}
</style>
