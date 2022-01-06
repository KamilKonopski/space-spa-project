<template>
  <div class="mars-element">
    <div class="mars-element__img">
      <img
        :src="require(`@/assets/${images.mars1.img}`)"
        alt="the surface of mars"
      />
      <p>{{ images.mars1.title }}</p>
    </div>
    <div class="mars-element__img">
      <img :src="require(`@/assets/${images.mars2.img}`)" alt="planet mars" />
      <p>{{ images.mars2.title }}</p>
    </div>
    <div class="mars-element__img">
      <img
        :src="require(`@/assets/${images.mars3.img}`)"
        alt="the surface of mars"
      />
      <p>{{ images.mars3.title }}</p>
    </div>
    <div class="mars-element__img">
      <img :src="require(`@/assets/${images.mars4.img}`)" alt="planet mars" />
      <p>{{ images.mars4.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarsElements",
  setup() {
    const images = {
      mars1: {
        id: 1,
        img: "mars1.jpg",
        title: "Mars planet",
      },
      mars2: {
        id: 2,
        img: "mars2.png",
        title: "Mars from space",
      },
      mars3: {
        id: 3,
        img: "mars3.jpg",
        title: "The surface of Mars",
      },
      mars4: {
        id: 4,
        img: "mars4.jpg",
        title: "Mars from space",
      },
    };
    return { images };
  },
};
</script>

<style lang="scss" scoped>
.mars-element {
  position: relative;
  margin-top: 5rem;
  &__img {
    position: absolute;
    transition: 0.3s linear;

    &:nth-of-type(1) {
      width: 15%;
      top: 0;
      left: 10%;

      & img {
        height: 20.5vh;
      }
    }
    &:nth-of-type(2) {
      width: 18%;
      top: 0;
      left: 27%;
    }
    &:nth-of-type(3) {
      width: 35%;
      top: 20rem;
      left: 10%;

      & img {
        height: 34vh;
      }
    }

    &:nth-of-type(4) {
      width: 48%;
      top: 0;
      left: 90rem;
    }

    & p {
      font-size: 2.2rem;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.3s linear;
    }
    & img {
      width: 100%;
    }

    &:hover {
      transform: scale(0.95);
      & p {
        opacity: 1;
      }
    }
  }
}
</style>