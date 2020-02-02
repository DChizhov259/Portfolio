import Vue from "vue";
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

// export default {
//   components: {
//     swiper,
//     swiperSlide
//   },

//   name: "carrousel",
//   data() {
//     return {
//       swiperOption: {
//         // some swiper options/callbacks
//         slidesPerView: 2
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
// require("swiper/dist/css/swiper.css");
// import VueAwesomeSwiper from "vue-awesome-swiper";

// Vue.use(VueAwesomeSwiper);

const btns = {
  template: "#reviews-btns"
};

const comments = {
  template: "#reviews-comments",
  components: {
    swiper,
    swiperSlide
  },
  props: ["reviews"],

  data() {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 2,
        spaceBetween: 1,
        navigation: {
          nextEl: ".reviews-btn--next",
          prevEl: ".reviews-btn--prev",
          disabledClass: "reviews-btn--disabled"
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(2, 1000, false);
  }
};

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    btns,
    comments
  },

  data() {
    return {
      reviews: []
    };
  },

  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/userfiles/${item.author_pic}`);
        item.author_pic = requirePic;
        return item;
      });
    }
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
