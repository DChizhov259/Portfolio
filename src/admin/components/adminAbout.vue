<template lang="pug">
section.admin-about.admin-container
  .admin__title-section.admin__title-section--about
    .admin__title Блок «Обо мне»
    button.about__add-group-btn Добавить группу
  .about__group-block-container

    group-block

    .group-block
      .group-block__title.group-block__title--edited
        input.group-block__title-text(name='nameGroup' id='nameGroup' type='text' placeholder='Название новой группы')
        .group-block__title-action
          button.group-block__title-action__apply
          button.group-block__title-action__cancel
          button.group-block__title-action__edit
      ul.group-block__skill-list
        li.group-block__skill
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
        li.group-block__skill
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
        li.group-block__skill
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
        li.group-block__skill
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
      form.group-block__new-skill
        input.group-block__new-skill-title(name='nameSkill' id='nameSkill' type='text' placeholder='Новый навык' required)
        .group-block__new-skill-value
          input.group-block__new-skill-value-percent(name='skillValue' id='skillValue' type='number' min='0' max='100' placeholder='100' required)
        button.group-block__new-skill-add-btn(name='skillAddBtn' id='skillAddBtn' type='submit')

    .group-block
      .group-block__title
        input.group-block__title-text(name='nameGroup' id='nameGroup' type='text' placeholder='Название новой группы')
        .group-block__title-action
          button.group-block__title-action__apply
          button.group-block__title-action__cancel
          button.group-block__title-action__edit
      ul.group-block__skill-list
        li.group-block__skill.group-block__skill
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
        li.group-block__skill.group-block__skill--edited
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
        li.group-block__skill.group-block__skill
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
        li.group-block__skill.group-block__skill
          input.group-block__skill-title
          .group-block__skill-value
            input.group-block__skill-value-percent
          .group-block__skill-action
            button.group-block__skill-action__apply
            button.group-block__skill-action__cancel
            button.group-block__skill-action__edit
            button.group-block__skill-action__trash
      form.group-block__new-skill
        input.group-block__new-skill-title(name='nameSkill' id='nameSkill' type='text' placeholder='Новый навык' required)
        .group-block__new-skill-value
          input.group-block__new-skill-value-percent(name='skillValue' id='skillValue' type='number' min='0' max='100' placeholder='100' required)
        button.group-block__new-skill-add-btn(name='skillAddBtn' id='skillAddBtn' type='submit')
</template>

<script>
import groupBlock from "./groupBlock";

export default {
  components: {
    groupBlock,
  },
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.about__add-group-btn {
  background: transparent;
  font-family: "open-sans-sebo";
  color: $orange-color;
  font-size: 16px;
  margin-left: 6.4%;

  @include tablets {
    font-size: 14px;
    margin-left: 10%;
  }

  @include phones {
    margin-left: 30px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: $orange-color;
    transform: translate(-33px, -2px);

    @include tablets {
      transform: translate(-33px, -4px);
    }
  }
  &::after {
    content: "";
    display: block;
    height: 7px;
    width: 7px;
    background-image: svg-load(
      "plus.svg",
      fill=#ffffff,
      width=100%,
      height=100%
    );
    transform: translate(-26px, -12px);
  }
}

.about__group-block-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 30px;

  @include tablets {
    grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
    grid-gap: 20px;
  }

  @include phones {
    grid-template-columns: 1fr;
    grid-gap: 10px 0;
  }
}

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
