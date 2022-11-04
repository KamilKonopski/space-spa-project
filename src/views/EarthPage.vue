<template>
  <div>
    <section class="earth-elements">
      <h3>Earth</h3>
      <ButtonBack :goBack="goToListPage" />
      <EarthElements />
    </section>
    <FooterElement />
  </div>
</template>

<script>
import EarthElements from "../components/EarthElements/EarthElements.vue";
import FooterElement from "../components/FooterElement/FooterElement.vue";
import ButtonBack from "../components/ButtonBack/ButtonBack.vue";
export default {
  name: "EarthPage",
  components: {
    EarthElements,
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
.earth-elements {
  & h3 {
    color: #4b66b5;
    font-size: 5rem;
    margin-top: 5rem;
    text-align: center;
    text-transform: uppercase;
    
  }
}
</style>
