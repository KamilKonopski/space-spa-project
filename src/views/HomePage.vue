<template>
  <div>
    <div class="home">
      <h1>The beauty of the cosmos</h1>
      <p>Photography</p>
      <ButtonIn :goTo="toList" />
    </div>
    <FooterElement />
  </div>
</template>

<script>
import ButtonIn from "../components/ButtonIN/ButtonIn.vue";
import FooterElement from "../components/FooterElement/FooterElement.vue";
export default {
  name: "HomePage",
  components: {
    FooterElement,
    ButtonIn,
  },
  setup() {
    const toList = "/list";
    return { toList };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  background: url("../assets/galaxy-bg.jpg") no-repeat center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  & h1 {
    font-size: 6rem;
    font-family: "Cinzel", serif;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 2rem;
    letter-spacing: 1rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }
}
</style>
