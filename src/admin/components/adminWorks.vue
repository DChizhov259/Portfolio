<template lang="pug">
section.admin-works.admin-container
  .admin__title-section
    .admin__title Блок «Работы»
  .admin-works__main-block
    .admin-works__edit-block
      .admin-works__edit-block__title Редактирование работы
      form.admin-works__edit-block__container
        .admin-works__drop-area.admin-works__drop-area--wait
          .admin-works__drop-area__text Перетащите или загрузите #[br] для загрузки изображения
            label.admin-works__drop-area__download-btn Загрузить
              input.admin-works__drop-area__download-btn-def(name='uploadWorkImage' id='uploadWorkImage' type='file' required)
        .admin-works__drop-area.admin-works__drop-area--preview
          img(src=('../../images/content/1.jpg') alt='drop-area-image').admin-works__drop-area__image
          button.admin-works__drop-area__change-btn Изменить превью
        .admin-works__edit-data
          .admin-works__edit-data__row
            label.admin-works__edit-data__label(for='workName') Название
            input.admin-works__edit-data__text(name='workName' id='workName' type='text' required)
          .admin-works__edit-data__row
            label.admin-works__edit-data__label(for='workLink') Ссылка
            input.admin-works__edit-data__text(name='workLink' id='workLink' type='url' required)
          .admin-works__edit-data__row
            label.admin-works__edit-data__label(for='workDesc') Описание
            textarea.admin-works__edit-data__textarea(name="workDesc" id="workDesc" rows="4" placeholder='Опишите вашу работу' required)
          .admin-works__edit-data__row
            label.admin-works__edit-data__label(for='workTags') Добавление тэга
            input.admin-works__edit-data__text(name='workTags' id='workTags' type='text')
            ul.admin-works__edit-data__tags-items
              li.admin-works__edit-data__tags-item HTML
              li.admin-works__edit-data__tags-item CSS
              li.admin-works__edit-data__tags-item Javascript
          .admin-works__edit-data__btns
            button.admin-works__edit-data__cancel-btn(name='workCancelBtn' id='workCancelBtn' type='reset') Отмена
            button.admin-works__edit-data__save-btn(name='workSaveBtn' id='workSaveBtn' type='submit') Сохранить
    .admin-works__instance-block
      button.admin-works__add-btn
        .admin-works__add-btn__icon
          p Добавить работу
      .admin-works__instance.admin-works__instance--edited
        .admin-works__instance-image-block
          ul.admin-works__instance-desc__tags
            li.admin-works__instance-desc__tag HTML
            li.admin-works__instance-desc__tag CSS
            li.admin-works__instance-desc__tag Javascript
          img(src=('../../images/content/1.jpg') alt='work-pic').admin-works__instance-image
        .admin-works__instance-desc
          .admin-works__instance-desc__title Сайт школы образования
          .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
          .admin-works__instance-desc__btns
            button.admin__instance-btn.admin__instance-btn--edit Править
            button.admin__instance-btn.admin__instance-btn--delete Удалить
      .admin-works__instance
        .admin-works__instance-image-block
          ul.admin-works__instance-desc__tags
            li.admin-works__instance-desc__tag HTML
            li.admin-works__instance-desc__tag CSS
            li.admin-works__instance-desc__tag Javascript
          img(src=('../../images/content/2.jpg') alt='work-pic').admin-works__instance-image
        .admin-works__instance-desc
          .admin-works__instance-desc__title Сайт школы образования
          .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
          .admin-works__instance-desc__btns
            button.admin__instance-btn.admin__instance-btn--edit Править
            button.admin__instance-btn.admin__instance-btn--delete Удалить
      .admin-works__instance
        .admin-works__instance-image-block
          ul.admin-works__instance-desc__tags
            li.admin-works__instance-desc__tag HTML
            li.admin-works__instance-desc__tag CSS
            li.admin-works__instance-desc__tag Javascript
          img(src=('../../images/content/3.jpg') alt='work-pic').admin-works__instance-image
        .admin-works__instance-desc
          .admin-works__instance-desc__title Сайт школы образования
          .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
          .admin-works__instance-desc__btns
            button.admin__instance-btn.admin__instance-btn--edit Править
            button.admin__instance-btn.admin__instance-btn--delete Удалить
      .admin-works__instance
        .admin-works__instance-image-block
          ul.admin-works__instance-desc__tags
            li.admin-works__instance-desc__tag HTML
            li.admin-works__instance-desc__tag CSS
            li.admin-works__instance-desc__tag Javascript
          img(src=('../../images/content/4.jpg') alt='work-pic').admin-works__instance-image
        .admin-works__instance-desc
          .admin-works__instance-desc__title Сайт школы образования
          .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
          .admin-works__instance-desc__btns
            button.admin__instance-btn.admin__instance-btn--edit Править
            button.admin__instance-btn.admin__instance-btn--delete Удалить
</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.admin-works__main-block {
  display: flex;
  flex-direction: column;
}

.admin-works__edit-block {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    margin-bottom: 10px;
  }
}

.admin-works__edit-block__title {
  font-family: "open-sans-bo";
  font-size: 18px;
  color: #414c63;
  border-bottom: 1px solid rgba(#414c63, 0.15);
  margin: 0 20px;
  padding: 25px 10px;

  @include phones {
    font-size: 16px;
    margin: 0;
    padding: 25px 20px;
  }
}

.admin-works__edit-block__container {
  display: flex;
  padding: 47px 30px 30px;

  @include desktop-old {
    flex-direction: column;
    align-items: center;
  }

  @include tablets {
    padding: 30px 0;
  }
}

.admin-works__drop-area {
  font-family: "open-sans-sebo";
  display: block;
  min-width: 495px;
  height: 275px;
  margin-right: 30px;
  position: relative;

  @include desktop-old {
    margin-right: 0;
  }

  @include tablets {
    min-width: auto;
    width: 65.7%;
    height: 33.9vw;
    min-height: 155px;
    min-width: 280px;
  }

  @include phones {
    font-size: 14px;
  }

  &--wait {
    display: block;
    background-color: #dee4ed;
    background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: gray; stroke-width: 1; stroke-dasharray: 10 10'/></svg>");
    margin-bottom: 50px;
  }

  &__text {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(#414c63, 0.5);
    line-height: 32px;
  }

  &__download-btn {
    margin-top: 20px;
    padding: 15px 35px;
    border-radius: 24px;
    width: 180px;
    text-transform: uppercase;
    background-color: $orange-color;
    color: #ffffff;
    font-family: "open-sans-bo";
    line-height: 1.2;
    text-align: center;
    cursor: pointer;
    &-def {
      display: none;
    }
  }

  &--preview {
    display: none;
    margin-bottom: 100px;
  }

  &__image {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__change-btn {
    background-color: transparent;
    color: $orange-color;
    padding: 0;
    position: absolute;
    bottom: -40px;
    left: 30%;
  }
}

.admin-works__edit-data {
  width: 500px;
  font-family: "open-sans-sebo";
  font-size: 16px;

  @include tablets {
    width: 70.6%;
  }

  @include phones {
    width: 87.5%;
    font-size: 14px;
  }

  &__row {
    margin-bottom: 30px;
  }

  &__label {
    color: rgba(#414c63, 0.5);
    line-height: 0.9;
  }

  &__text {
    line-height: 50px;
  }

  &__textarea {
    line-height: 30px;
    margin-top: 20px;
    padding: 15px;
    resize: none;
    border-color: rgba(#414c63, 0.5);

    @include phones {
      padding-top: 10px;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid #000;
  }
}

.admin-works__edit-data__row {
  display: flex;
  flex-direction: column;
}

.admin-works__edit-data__tags-items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.admin-works__edit-data__tags-item {
  background-color: #f4f4f4;
  padding: 6px 10px 6px 18px;
  border-radius: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: "open-sans-sebo";
  font-size: 13px;
  color: rgba(#283340, 0.7);
  position: relative;

  @include phones {
    margin-right: 5px;
    padding: 6px 9px 6px 15px;
  }

  &:after {
    content: "";
    display: inline-block;
    height: 11px;
    width: 11px;
    margin-left: 8px;
    background-image: svg-load(
      "cancel.svg",
      fill=rgba(#283340, 0.7),
      width=100%,
      height=100%
    );
    transform: translate(0, 1px);
  }
}

.admin-works__edit-data__btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @include tablets {
    justify-content: center;
  }
}

.admin-works__edit-data__cancel-btn {
  color: $orange-color;
  margin-right: 60px;
  background: transparent;
  padding: 0;

  @include phones {
    margin-right: 25px;
  }
}

.admin-works__edit-data__save-btn {
  padding: 23px 35px;
  border-radius: 32px;
  text-transform: uppercase;
  background-color: $orange-color;
  color: #ffffff;

  @include phones {
    padding: 20px 50px;
  }
}

.admin-works__instance-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  grid-gap: 30px;
  justify-content: space-around;

  @include tablets {
    grid-template-columns: repeat(auto-fit, minmax(320px, 47.8%));
  }

  @include phones {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 320px);
  }
}

.admin-works__add-btn {
  height: 560px;
  padding: 0;
  background-color: $orange-color;
  padding-bottom: 20%;

  @include tablets {
    height: 72.9vw;
  }

  @include phones {
    height: 110px;
  }

  &__icon {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 0 auto;
    border: 2px solid #ffffff;
    position: relative;

    @include tablets {
      height: 19.5vw;
      width: 19.5vw;
    }

    @include phones {
      margin: 30px 20px;
      height: 50px;
      width: 50px;
    }

    p {
      color: #ffffff;
      font-size: 18px;
      line-height: 30px;
      font-family: "open-sans-bo";
      position: absolute;
      bottom: -80px;

      @include phones {
        width: 200px;
        bottom: 9px;
        transform: translate(35px 0);
        font-size: 16px;
      }
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      transform: translate(-50%, 50%);
      left: 50%;
      bottom: 50%;
      height: 35px;
      width: 35px;
      background-image: svg-load(
        "plus-lite.svg",
        fill=#ffffff,
        width=100%,
        height=100%
      );
      @include tablets {
        height: 4.5vw;
        width: 4.5vw;
      }
      @include phones {
        height: 11px;
        width: 11px;
      }
    }
  }
}

.admin-works__instance {
  background-color: #ffffff;
  height: 560px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    height: 475px;
  }

  &--edited {
    filter: brightness(120%) opacity(70%);
    box-shadow: none;
  }
}

.admin-works__instance-image-block {
  display: block;
  height: 190px;
  overflow: hidden;
  position: relative;
}

.admin-works__instance-image {
  object-fit: cover;
}

.admin-works__instance-desc__tags {
  position: absolute;
  bottom: 0;
  right: 0;
}

.admin-works__instance-desc__tag {
  display: inline-block;
  background-color: #f4f4f4;
  padding: 6px 15px 6px 15px;
  border-radius: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: "open-sans-sebo";
  font-size: 13px;
  color: rgba(#283340, 0.7);
}

.admin-works__instance-desc {
  flex: 1;
  padding: 35px;
  color: #414c63;

  display: flex;
  flex-direction: column;

  @include phones {
    padding: 25px 40px 25px 20px;
  }

  &__title {
    font-family: "open-sans-bo";
    font-size: 18px;
    margin-bottom: 20px;

    @include phones {
      margin-bottom: 10px;
    }
  }

  &__text {
    font-family: "open-sans-sebo";
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 20px;
    opacity: 0.7;

    @include phones {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }

  &__link {
    font-family: "open-sans-sebo";
    font-size: 16px;
    color: $orange-color;

    @include phones {
      font-size: 14px;
    }
  }
}

.admin-works__instance-desc__btns {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
