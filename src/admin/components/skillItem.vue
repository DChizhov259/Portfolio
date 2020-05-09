<template lang="pug">
div
  li.group-block__skill(v-for="skill in skillList")
    .group-block__skill-title {{skill.title}}
    .group-block__skill-value
      .group-block__skill-value-percent {{skill.value}}
    .group-block__skill-action
      button.group-block__skill-action__apply
      button.group-block__skill-action__cancel
      button.group-block__skill-action__edit
      button.group-block__skill-action__trash(
        type="button"
        @click="removeSkill"
      )
</template>

<script>
export default {
  props: {
    skill: Object,
    skillList: Array,
  },
  methods: {
    removeSkill() {
      this.$emit("removeSkill", this.skill.id);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.group-block__skill {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  font-family: "open-sans-regular";
  font-size: 16px;
  color: $dark_blue-color;

  @include tablets {
    margin-top: 15px;
  }

  @include phones {
    margin-top: 20px;
  }

  &:first-child {
    margin-top: 30px;
  }

  &--edited {
    .group-block__skill {
      &-title,
      &-value {
        border-bottom: 1px solid #000;
      }
      &-action {
        &__edit,
        &__trash {
          display: none;
        }
        &__apply {
          display: initial;
          height: 15px;
          width: 15px;
          background: svg-load(
              "tick.svg",
              fill=#00d70a,
              width=100%,
              height=100%
            )
            no-repeat;
          margin-right: 15px;
        }
        &__cancel {
          display: initial;
          height: 15px;
          width: 15px;
          background: svg-load(
              "cross.svg",
              fill=#bf2929,
              width=100%,
              height=100%
            )
            no-repeat;
          margin-right: 10px;
        }
      }
    }
  }

  &-title {
    width: 56.7%;
    height: 100%;
    margin-left: 9px;
    margin-right: 4.2%;
    resize: none;
    border: none;
    background: none;
    outline: none;

    @include tablets {
      width: 47%;
    }

    @include phones {
      width: 44%;
      font-size: 14px;
    }
  }

  &-value {
    width: 75px;
    display: flex;

    @include tablets {
      width: 70px;
    }
    &:after {
      content: "%";
    }
    &-percent {
      width: 55%;
      height: 100%;
      margin-left: 10px;
      resize: none;
      border: none;
      background: none;
      outline: none;
    }
  }

  &-action {
    text-align: right;
    display: flex;
    margin-left: auto;

    &__edit {
      height: 15px;
      width: 15px;
      background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%)
        no-repeat;
      margin-right: 15px;
    }

    &__apply,
    &__cancel {
      display: none;
    }

    &__trash {
      height: 15px;
      width: 15px;
      background: svg-load("trash.svg", fill=#a0a5b1, width=100%, height=100%)
        no-repeat;
      margin-right: 10px;
    }
  }
}
</style>
