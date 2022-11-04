<template>
  <div>
    <section class="moon-element">
      <h3>Moon</h3>
      <ButtonBack :goBack="goToListPage" />
      <MoonElements />
    </section>
    <FooterElement />
  </div>
</template>

<script>
import MoonElements from "../components/MoonElements/MoonElements.vue";
import FooterElement from "../components/FooterElement/FooterElement.vue";
import ButtonBack from "../components/ButtonBack/ButtonBack.vue";
export default {
  name: "MoonPage",
  components: {
    MoonElements,
    FooterElement,
    ButtonBack,
  },
  setup() {
    const goToListPage = "/list";
    return { goToListPage };
  },
};
</script>

<style lang="scss" scoped>
.moon-element {
  & h3 {
    color: #4d4d4d;
    font-size: 5rem;
    margin-top: 5rem;
    text-align: center;
    text-transform: uppercase;
    
  }
}
</style>
