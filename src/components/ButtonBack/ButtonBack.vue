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
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  cursor: pointer;
  font-size: 1.8rem;
  margin-left: 5rem;
  padding: 1rem 3rem;
  text-transform: uppercase;
  width: 10%;
  
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
