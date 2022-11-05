<template>
  <div class="moon-element">
    <div class="moon-element__img">
      <img :src="require(`@/assets/${images.moon1.img}`)" alt="planet moon" />
      <p>{{ images.moon1.title }}</p>
    </div>
    <div class="moon-element__img">
      <img :src="require(`@/assets/${images.moon2.img}`)" alt="planet moon" />
      <p>{{ images.moon2.title }}</p>
    </div>
    <div class="moon-element__img">
      <img
        :src="require(`@/assets/${images.moon3.img}`)"
        alt="the surface of moon"
      />
      <p>{{ images.moon3.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoonElements",
  setup() {
    const images = {
      moon1: {
        id: 1,
        img: "moon1.jpg",
        title: "Moon from Earth",
      },
      moon2: {
        id: 2,
        img: "moon2.jpg",
        title: "Moon from space",
      },
      moon3: {
        id: 3,
        img: "moon3.jpg",
        title: "The surface of Moon",
      },
    };
    return { images };
  },
};
</script>

<style lang="scss" scoped>
.moon-element {
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;

  &__img {
    position: relative;
    transition: 0.3s linear;
    width: 32%;
    
    & img {
      height: 50vh;
      width: 100%;
    }

    & p {
      color: #000;
      font-size: 2.5rem;
      left: 50%;
      opacity: 0;
      position: absolute;
      transition: 0.3s linear;
      transform: translate(-50%, -50%);
      top: 50%;
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
