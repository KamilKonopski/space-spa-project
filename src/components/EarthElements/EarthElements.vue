<template>
  <div class="earth-element">
    <div class="earth-element__img">
      <img :src="require(`@/assets/${images.earth1.img}`)" alt="planet earth" />
      <p>{{ images.earth1.title }}</p>
    </div>
    <div class="earth-element__img">
      <img :src="require(`@/assets/${images.earth2.img}`)" alt="planet earth" />
      <p>{{ images.earth2.title }}</p>
    </div>
    <div class="earth-element__img">
      <img
        :src="require(`@/assets/${images.earth3.img}`)"
        alt="the surface of earth"
      />
      <p>{{ images.earth3.title }}</p>
    </div>
    <div class="earth-element__img">
      <img
        :src="require(`@/assets/${images.earth4.img}`)"
        alt="the surface of earth"
      />
      <p>{{ images.earth4.title }}</p>
    </div>
    <div class="earth-element__img">
      <img
        :src="require(`@/assets/${images.earth5.img}`)"
        alt="the surface of earth"
      />
      <p>{{ images.earth5.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EarthElements",
  setup() {
    const images = {
      earth1: {
        id: 1,
        img: "earth1.jpg",
        title: "Earth from space",
      },
      earth2: {
        id: 2,
        img: "earth2.jpg",
        title: "Earth from space",
      },
      earth3: {
        id: 3,
        img: "earth3.jpg",
        title: "Earth from space",
      },
      earth4: {
        id: 4,
        img: "earth4.jpg",
        title: "Aurora borealis",
      },
      earth5: {
        id: 5,
        img: "earth5.jpg",
        title: "Earth map",
      },
    };
    return { images };
  },
};
</script>

<style lang="scss" scoped>
.earth-element {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5rem;
  
  &__img {
    position: relative;
    transition: 0.3s linear;

    &:nth-of-type(1) {
      width: 36%;
    }
    &:nth-of-type(2) {
      width: 25%;
    }
    &:nth-of-type(3) {
      width: 36%;
    }
    &:nth-of-type(4) {
      width: 49%;
    }

    &:nth-of-type(5) {
      width: 49%;
    }
    & img {
      height: 35vh;
      width: 100%;
    }

    & p {
      color: #fff;
      font-size: 2.5rem;
      left: 50%;
      opacity: 0;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: 0.3s linear;
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
