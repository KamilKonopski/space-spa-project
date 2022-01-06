<template>
  <div>
    <div class="list">
      <ButtonBack :goBack="backToHomePage" />
      <ListElements />
    </div>
    <FooterElement />
  </div>
</template>

<script>
import ListElements from "../components/ListElements/ListElements.vue";
import FooterElement from "../components/FooterElement/FooterElement.vue";
import ButtonBack from "../components/ButtonBack/ButtonBack.vue";
export default {
  name: "ListPage",
  components: {
    ListElements,
    FooterElement,
    ButtonBack,
  },
  setup() {
    const backToHomePage = "/";
    return { backToHomePage };
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
}
</style>