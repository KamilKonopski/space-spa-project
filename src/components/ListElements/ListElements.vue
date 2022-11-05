<template>
  <div>
    <section class="list-elements">
      <div class="list-element">
        <h2>Mars</h2>
        <ButtonIN :goTo="toMars" />
      </div>
      <div class="list-element">
        <h2>Earth</h2>
        <ButtonIN :goTo="toEarth" />
      </div>
      <div class="list-element">
        <h2>Moon</h2>
        <ButtonIN :goTo="toMoon" />
      </div>
    </section>
  </div>
</template>

<script>
import ButtonIN from "../ButtonIN/ButtonIn.vue";
export default {
  name: "ListElements",
  components: {
    ButtonIN,
  },
  setup() {
    const toMars = "/list/mars";
    const toEarth = "/list/earth";
    const toMoon = "/list/moon";
    return { toMars, toEarth, toMoon };
  },
};
</script>

<style lang="scss" scoped>
.list-elements {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;

  & .list-element {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    margin: 0 auto;
    width: 32%;

    &:nth-of-type(1) {
      background: url("../../assets/mars.jpg") no-repeat center center;
    }

    &:nth-of-type(2) {
      background: url("../../assets/earth.jpg") no-repeat center center;
    }

    &:nth-of-type(3) {
      background: url("../../assets/moon.jpg") no-repeat center center;
    }

    & h2 {
      color: #fff;
      font-size: 2rem;
      padding-top: 2rem;
      text-transform: uppercase;
    }

    & button {
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
      cursor: pointer;
      font-size: 1.5rem;
      margin: auto;
      padding: 1rem 4rem;
      transition: 0.2s linear;

      &:hover {
        background-color: #301374;
        border-color: #301374;
      }
    }
  }
}
</style>
