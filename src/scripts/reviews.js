import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

const btns = {
  template: "#reviews-btns"
};

const comments = {
  template: "#reviews-comments",
  props: ["reviews", "swiperOption"]
};

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    LocalSwiper: VueAwesomeSwiper.swiper,
    LocalSlide: VueAwesomeSwiper.swiperSlide,
    btns,
    comments
  },

  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      reviews: []
    };
  },

  computed: {
    swiper() {
      return this.$refs.awesomeSwiperA.swiper;
    }
  },

  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/userfiles/${item.author_pic}`);
        item.author_pic = requirePic;
        return item;
      });
    },

    onSetTranslate() {
      console.log("onSetTranslate");
    }
  },

  mounted() {
    console.log("this is swiper instance object", this.swiper);
  },

  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }
});

// export default {
//   name: "carrousel",
//   data() {
//     return {
//       swiperOption: {
//         // some swiper options/callbacks
//       }
//     };
//   },
//   computed: {
//     swiper() {
//       return this.$refs.mySwiper.swiper;
//     }
//   },
//   mounted() {
//     // current swiper instance
//     console.log("this is current swiper instance object", this.swiper);
//     this.swiper.slideTo(3, 1000, false);
//   }
// };
