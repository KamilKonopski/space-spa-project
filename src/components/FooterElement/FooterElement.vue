<template>
  <footer class="footer">
    <p>&copy; 2022 Create by myself</p>
  </footer>
</template>

<script>
export default {
  name: "FooterElement",
};
</script>

<style lang="scss" scoped>
.footer {
  height: 10vh;
  width: 100%;

  & p {
    color: #303131;
    font-size: 2.2rem;
    line-height: 10vh;
    text-align: center;
  }
}
</style>
