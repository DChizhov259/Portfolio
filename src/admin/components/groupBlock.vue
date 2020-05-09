<template lang="pug">
.group-block
  .group-block__title.group-block__title--edited
    input.group-block__title-text(name='nameGroup' id='nameGroup' type='text' placeholder='Название новой группы')
    .group-block__title-action
      button.group-block__title-action__apply
      button.group-block__title-action__cancel
      button.group-block__title-action__edit
  ul.group-block__skill-list
    pre {{skillList}}
    skillItem(
      :skillList="skillList"
      :skill="skill"
      @removeSkill="removeSkill"
    )
  form.group-block__new-skill
    input.group-block__new-skill-title(
      name='nameSkill' 
      id='nameSkill' 
      type='text' 
      placeholder='Новый навык' 
      required 
      v-model="skill.title"
      @keydown.enter="addSkill")
    .group-block__new-skill-value
      input.group-block__new-skill-value-percent(
        name='skillValue' 
        id='skillValue' 
        type='number' 
        min='0' 
        max='100' 
        placeholder='100' 
        required
        v-model="skill.value"
        @keydown.enter="addSkill")
    button.group-block__new-skill-add-btn(name='skillAddBtn' id='skillAddBtn' type='submit' @click="addSkill")
</template>

<script>
import skillItem from "./skillItem";

let uniqId = 0;

export default {
  components: {
    skillItem,
  },
  data() {
    return {
      skillList: [],
      skill: {
        id: 0,
        title: "",
        value: "",
      },
    };
  },

  methods: {
    addSkill() {
      uniqId++;
      this.skill.id = uniqId;
      this.skillList.push({ ...this.skill });
      this.skill.title = "";
      this.skill.value = "";
    },
    removeSkill(skillId) {
      // this.skillList = this.skillList.filter(
      //   (item) => item.id != this.skill.id
      // );
      console.log(skillId);
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

.group-block__new-skill {
  display: flex;
  justify-content: flex-end;
  justify-self: center;
  width: 92.4%;
  padding-right: 10px;
  margin-bottom: 25px;
  font-family: "open-sans-regular";
  font-size: 16px;
  line-height: 2.5;
  color: $dark_blue-color;

  @include phones {
    line-height: 2.7;
  }

  &-title {
    width: 45%;
    margin-right: 10px;
    padding-left: 20px;
    resize: none;
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid #000;

    @include phones {
      padding-left: 10px;
    }

    &::placeholder {
      opacity: 0.5;
    }
  }

  &-value {
    border-bottom: 1px solid #000;
    width: 75px;
    margin-right: 6.3%;
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

      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  &-add-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: $orange-color;

    &::before {
      content: "";
      display: block;
      height: 15px;
      width: 15px;
      background-image: svg-load(
        "plus.svg",
        fill=#ffffff,
        width=100%,
        height=100%
      );
      margin: 0 auto;
    }
  }
}
</style>
