import Vue from "vue";
import Flickity from "vue-flickity";

const btns = {
  template: "#reviews-btns"
};

const comments = {
  template: "#reviews-comments"
};

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    Flickity,
    btns,
    comments
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 2,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true

        // any options from Flickity can be used
      }
    };
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  }
});
