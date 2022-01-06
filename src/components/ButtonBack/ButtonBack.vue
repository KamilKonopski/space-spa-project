<template>
  <button @click="$router.push(`${goBack}`)"><span>^</span> Go Back</button>
</template>

<script>
export default {
  name: "ButtonBack",
  props: {
    goBack: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 10%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 1rem 3rem;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 1.8rem;
  cursor: pointer;
  margin-left: 5rem;

  & span {
    display: inline-block;
    font-size: 2rem;
    transform: rotate(270deg);
  }

  &:hover {
    border-bottom-color: #401494;
  }
}
</style>