<template>
  <div>
    <section class="mars-page">
      <h3>Mars</h3>
      <ButtonBack :goBack="goToListPage" />
      <MarsElements />
    </section>
    <FooterElement />
  </div>
</template>

<script>
import MarsElements from "../components/MarsElements/MarsElements.vue";
import FooterElement from "../components/FooterElement/FooterElement.vue";
import ButtonBack from "../components/ButtonBack/ButtonBack.vue";
export default {
  name: "MarsPage",
  components: {
    MarsElements,
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
.mars-page {
  margin-bottom: 65rem;
  & h3 {
    text-align: center;
    margin-top: 5rem;
    font-size: 5rem;
    text-transform: uppercase;
    color: #ee6b47;
  }
}
</style>