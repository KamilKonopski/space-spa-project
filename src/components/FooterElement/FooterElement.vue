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
  width: 100%;
  height: 10vh;

  & p {
    color: #303131;
    text-align: center;
    font-size: 2.2rem;
    line-height: 10vh;
  }
}
</style>