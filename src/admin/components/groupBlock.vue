<template lang="pug">
.group-block
  .group-block__title.group-block__title--edited
    input.group-block__title-text(name='nameGroup' id='nameGroup' type='text' placeholder='Название новой группы')
    .group-block__title-action
      button.group-block__title-action__apply
      button.group-block__title-action__cancel
      button.group-block__title-action__edit
  ul.group-block__skill-list
    li.group-block__skill(v-for="skill in skillList")
      skillItem(
        :skill="skill"
        @removeSkill="removeSkill"
      )
  skill-input(
    @addSkill="addSkill"
  )
</template>

<script>
import skillItem from "./skillItem";
import skillInput from "./skillInput";

export default {
  components: {
    skillItem,
    skillInput,
  },
  data() {
    return {
      skillList: [],
    };
  },

  methods: {
    addSkill(skill) {
      this.skillList.push(skill);
    },
    removeSkill(skillId) {
      this.skillList = this.skillList.filter((item) => item.id != skillId);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.group-block {
  background-color: #ffffff;
  height: 390px;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  align-items: center;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;
}

.group-block__title {
  display: flex;
  justify-self: center;
  align-items: center;
  width: 92.4%;
  height: 100%;
  border-bottom: 1px solid rgba(#414c63, 0.15);

  @include phones {
    width: 100%;
    padding: 0 10px;
  }

  &-text {
    resize: none;
    border: none;
    background: none;
    outline: none;
    width: 56.7%;
    padding: 14px 0 14px;
    margin-left: 9px;
    font-family: "open-sans-sebo";
    font-size: 18px;
    color: $dark_blue-color;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &-action {
    text-align: right;
    margin-left: auto;
    display: flex;

    &__edit {
      height: 15px;
      width: 15px;
      background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%)
        no-repeat;
      margin-right: 10px;
    }

    &__apply,
    &__cancel {
      display: none;
    }
  }

  &--edited {
    .group-block__title {
      &-text {
        border-bottom: 1px solid #000;
      }

      &-action {
        &__edit {
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
}

.group-block__skill-list {
  width: 92.4%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: flex-start;
}

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
