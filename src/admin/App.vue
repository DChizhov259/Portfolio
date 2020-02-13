<style lang="postcss">
/* @import "../mixins.pcss"; */
.container {
  background-color: #d1cf49;
  max-width: 1080px;
}

.header {
  width: 100%;
}

.header__main {
  display: flex;
  align-items: center;
  background-color: #3e3e58;
  height: 80px;
}

.header__main-container {
  display: flex;
  align-items: center;
  background-color: #55c78e;
}

.header__main__admin-avatar {
  background-color: #ee955a;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.header__main__admin-name {
  margin-right: 28px;
}

.header__main__logout-btn {
  background-color: #d46627;
  margin-left: auto;
}

.header__nav {
  display: flex;
  align-items: center;
  height: 75px;
}

.header__nav-container {
  display: flex;
  align-items: center;
  height: 100%;
}

.header__nav-btn {
  height: 100%;
  padding: 0;
  width: 125px;

  &--active {
    border-bottom: 3px solid #383bcf;
  }
}

.about {
  background-color: #d42d2d;
}

.about__title-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 138px;
}

.about__title {
  font-size: 21px;
  margin-right: 6.4%;
}

.about__add-group-btn {
  background: transparent;
}

.about__group-block-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
}

.group-block {
  background-color: #f8eb2d;
  height: 390px;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  align-items: center;
}

.group-block__title {
  background-color: #ece798;
  display: flex;
  justify-self: center;
  align-items: center;
  width: 92.4%;
  height: 100%;
  border-bottom: 1px solid rgba(#414c63, 0.15);

  &-text {
    resize: none;
    border: none;
    background: none;
    width: 56.7%;
    padding: 14px 0 14px;
    margin-left: 9px;
  }

  &-action {
    background-color: #f7f7d2;
    text-align: right;
    margin-left: auto;
    display: flex;

    &__edit {
      height: 15px;
      width: 15px;
      background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%);
      margin-right: 10px;
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
          height: 15px;
          width: 15px;
          background: svg-load(
            "tick.svg",
            fill=#00d70a,
            width=100%,
            height=100%
          );
          margin-right: 15px;
        }

        &__cancel {
          height: 15px;
          width: 15px;
          background: svg-load(
            "cross.svg",
            fill=#bf2929,
            width=100%,
            height=100%
          );
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
  margin-top: 15px;

  &:first-child {
    margin-top: 30px;
  }

  &--edited {
    .group-block__skill {
      &-title,
      &-value {
        background-color: #b3f399;
        border-bottom: 1px solid #000;
      }
      &-action {
        &__edit,
        &__trash {
          display: none;
        }
        &__apply {
          height: 15px;
          width: 15px;
          background: svg-load(
            "tick.svg",
            fill=#00d70a,
            width=100%,
            height=100%
          );
          margin-right: 15px;
        }
        &__cancel {
          height: 15px;
          width: 15px;
          background: svg-load(
            "cross.svg",
            fill=#bf2929,
            width=100%,
            height=100%
          );
          margin-right: 10px;
        }
      }
    }
  }

  &-title {
    background-color: #b3f399;
    width: 56.7%;
    height: 100%;
    margin-left: 9px;
    margin-right: 4.2%;
    resize: none;
    border: none;
    /* background: none; */
  }

  &-value {
    width: 15.5%;
    background-color: #b3f399;
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
    }
  }

  &-action {
    background-color: #f7f7d2;
    text-align: right;
    display: flex;
    margin-left: auto;

    &__edit {
      height: 15px;
      width: 15px;
      background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%);
      margin-right: 15px;
    }

    &__trash {
      height: 15px;
      width: 15px;
      background: svg-load("trash.svg", fill=#a0a5b1, width=100%, height=100%);
      margin-right: 10px;
    }
  }
}

.group-block__new-skill {
  display: flex;
  justify-content: flex-end;
  justify-self: center;
  width: 92.4%;

  &-title {
    width: 45%;
    margin-right: 10px;
    resize: none;
    border: none;
    background: none;
    border-bottom: 1px solid #000;
  }

  &-value {
    background-color: #b3f399;
    border-bottom: 1px solid #000;
    width: 15.5%;
    margin-right: 30px;
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
    }
  }

  &-add-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgb(37, 55, 218);

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
<template lang="pug">
  .admin
    //- h1 Welcome to the Vue App заработало
    header.header
      .header__main
        .header__main-container.container
          .header__main__admin-avatar
          .header__main__admin-name Дмитрий Чижов
          .header__main__title Панель администрирования
          button.header__main__logout-btn Выйти
      nav.header__nav
        .header__nav-container.container
          button.header__nav-btn.header__nav-btn--active Обо мне
          button.header__nav-btn Работы
          button.header__nav-btn Отзывы
    section.about.container
      .about__title-section
        .about__title Блок «Обо мне»
        button.about__add-group-btn Добавить группу
      .about__group-block-container

        .group-block
          .group-block__title.group-block__title--edited
            input.group-block__title-text(name='textarea', type='text', placeholder='Название новой группы')
            .group-block__title-action
              .group-block__title-action__apply
              .group-block__title-action__cancel
              .group-block__title-action__edit
          ul.group-block__skill-list
          .group-block__new-skill
            input.group-block__new-skill-title(name='textarea', type='text', placeholder='Новый навык')
            .group-block__new-skill-value
              input.group-block__new-skill-value-percent
            button.group-block__new-skill-add-btn

        .group-block
          .group-block__title.group-block__title--edited
            input.group-block__title-text(name='textarea', type='text', placeholder='Название новой группы')
            .group-block__title-action
              .group-block__title-action__apply
              .group-block__title-action__cancel
              .group-block__title-action__edit
          ul.group-block__skill-list
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
          .group-block__new-skill
            input.group-block__new-skill-title(name='textarea', type='text', placeholder='Новый навык')
            .group-block__new-skill-value
              input.group-block__new-skill-value-percent
            button.group-block__new-skill-add-btn

        .group-block
          .group-block__title
            input.group-block__title-text(name='textarea', type='text', placeholder='Название новой группы')
            .group-block__title-action
              .group-block__title-action__apply
              .group-block__title-action__cancel
              .group-block__title-action__edit
          ul.group-block__skill-list
            li.group-block__skill.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
            li.group-block__skill.group-block__skill--edited
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
            li.group-block__skill.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
            li.group-block__skill.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                .group-block__skill-action__apply
                .group-block__skill-action__cancel
                .group-block__skill-action__edit
                .group-block__skill-action__trash
          .group-block__new-skill
            input.group-block__new-skill-title(name='textarea', type='text', placeholder='Новый навык')
            .group-block__new-skill-value
              input.group-block__new-skill-value-percent
            button.group-block__new-skill-add-btn
        

</template>
