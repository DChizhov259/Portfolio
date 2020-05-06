<template lang="pug">
section.admin-reviews.admin-container
  .admin__title-section
    .admin__title Блок «Отзывы»
  .admin-reviews__main-block
    .admin-reviews__edit-block
      .admin-reviews__edit-block__title Новый отзыв
      form.admin-reviews__edit-block__container
        .admin-reviews__edit-photo.admin-reviews__edit-photo--wait
          label.admin-reviews__edit-photo__edit-btn Добавить фото
            input.admin-reviews__edit-photo__edit-btn-def(name='uploadReviewPhoto' id='uploadReviewPhoto' type='file')
        .admin-reviews__edit-photo.admin-reviews__edit-photo--preview
          img(src=('../../images/content/userfiles/Di51WMRvTek.jpg') alt='reviews-author-avatar').admin-reviews__edit-photo__image
          button.admin-reviews__photo__change-btn Изменить фото
        .admin-reviews__edit-data
          .admin-reviews__edit-data__two-rows
            .admin-reviwes__edit-data__row
              label.admin-reviews__edit-data__label(for='reviewAuthorName') Имя автора
              input.admin-reviews__edit-data__text(name='reviewAuthorName' id='reviewAuthorName' type='text' required)
            .admin-reviwes__edit-data__row
              label.admin-reviews__edit-data__label(for='reviewAuthorPosition') Титул автора
              input.admin-reviews__edit-data__text(name='reviewAuthorPosition' id='reviewAuthorPosition' type='text' required)
          .admin-reviwes__edit-data__textreview
            label.admin-reviews__edit-data__label(for='reviewText') Отзыв
            textarea.admin-reviews__edit-data__textarea(name='reviewText' id='reviewText' rows='3' placeholder='Ваш отзыв' required)
          .admin-reviews__edit-data__btns
            button.admin-reviews__edit-data__cancel-btn(name='reviewCancelBtn' id='reviewCancelBtn' type='reset') Отмена
            button.admin-reviews__edit-data__save-btn(name='reviewSaveBtn' id='reviewSaveBtn' type='submit') Сохранить
    .admin-reviews__instance-block
      button.admin-reviews__add-btn
        .admin-reviews__add-btn__icon
        p Добавить отзыв
      .admin-reviews__instance.admin-reviews__instance--edited
        .admin-reviews__instance__author-data
          img(src=('../../images/content/userfiles/o8CzkPF3Ai8.jpg') alt='author-pic').admin-reviews__instance__author-photo
          .admin-reviews__instance__author-info
            .admin-reviews__instance__author-info-name Дмитрий Ковальчук
            .admin-reviews__instance__author-info-position Основатель LoftSchool
        .admin-reviews__instance__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .admin-reviews__instance__btns
          button.admin__instance-btn.admin__instance-btn--edit Править
          button.admin__instance-btn.admin__instance-btn--delete Удалить
      .admin-reviews__instance
        .admin-reviews__instance__author-data
          img(src=('../../images/content/userfiles/Di51WMRvTek.jpg') alt='author-pic').admin-reviews__instance__author-photo
          .admin-reviews__instance__author-info
            .admin-reviews__instance__author-info-name Владимир Сабанцев
            .admin-reviews__instance__author-info-position Преподаватель
        .admin-reviews__instance__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .admin-reviews__instance__btns
          button.admin__instance-btn.admin__instance-btn--edit Править
          button.admin__instance-btn.admin__instance-btn--delete Удалить
      .admin-reviews__instance
        .admin-reviews__instance__author-data
          img(src=('../../images/content/userfiles/o8CzkPF3Ai8.jpg') alt='author-pic').admin-reviews__instance__author-photo
          .admin-reviews__instance__author-info
            .admin-reviews__instance__author-info-name Дмитрий Ковальчук
            .admin-reviews__instance__author-info-position Основатель LoftSchool
        .admin-reviews__instance__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей! Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        .admin-reviews__instance__btns
          button.admin__instance-btn.admin__instance-btn--edit Править
          button.admin__instance-btn.admin__instance-btn--delete Удалить
      .admin-reviews__instance
        .admin-reviews__instance__author-data
          img(src=('../../images/content/userfiles/Di51WMRvTek.jpg') alt='author-pic').admin-reviews__instance__author-photo
          .admin-reviews__instance__author-info
            .admin-reviews__instance__author-info-name Владимир Сабанцев
            .admin-reviews__instance__author-info-position Преподаватель
        .admin-reviews__instance__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
        .admin-reviews__instance__btns
          button.admin__instance-btn.admin__instance-btn--edit Править
          button.admin__instance-btn.admin__instance-btn--delete Удалить
</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.admin-reviews__main-block {
  display: flex;
  flex-direction: column;
}

.admin-reviews__edit-block {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    margin-bottom: 10px;
  }
}

.admin-reviews__edit-block__title {
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

.admin-reviews__edit-block__container {
  display: flex;
  padding: 47px 30px 30px;

  @include tablets {
    flex-wrap: wrap;
  }

  @include phones {
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
  }
}

.admin-reviews__edit-photo {
  display: block;
  height: 200px;
  min-width: 200px;
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: 85px;
  background-color: #dee4ed;
  position: relative;

  @include phones {
    margin-right: 0;
  }

  &--wait {
    display: block;
    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 115px;
      width: 115px;
      background: svg-load(
          "man-user.svg",
          fill=#ffffff,
          width=100%,
          height=100%
        )
        no-repeat;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .admin-reviews__edit-photo__edit-btn {
      background-color: transparent;
      color: $orange-color;
      font-family: "open-sans-sebo";
      font-size: 16px;
      padding: 0;
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translate(-50%, 0);
      cursor: pointer;
      text-align: center;
      width: 100%;

      &-def {
        display: none;
      }
    }
  }

  &--preview {
    display: none;
    overflow: hidden;

    .admin-reviews__edit-photo__image {
      width: 100%;
      transform: scale(1.1);
      object-position: 0 10px;
    }

    .admin-reviews__photo__change-btn {
      background-color: rgba(#000000, 0.6);
      color: $orange-color;
      font-family: "open-sans-sebo";
      font-size: 16px;
      padding: 0;
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}

.admin-reviews__edit-data {
  width: 59.8%;
  font-family: "open-sans-sebo";
  font-size: 16px;

  @include tablets {
    flex: 1;
  }

  @include phones {
    width: 100%;
    font-size: 14px;
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
      line-height: 24px;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid #000;
  }
}

.admin-reviews__edit-data__two-rows {
  display: flex;

  @include tablets {
    flex-wrap: wrap;
  }
}

.admin-reviwes__edit-data__row {
  margin-right: 30px;
  width: 290px;

  @include phones {
    margin-right: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}

.admin-reviwes__edit-data__row,
.admin-reviwes__edit-data__textreview {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.admin-reviews__edit-data__btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.admin-reviews__edit-data__cancel-btn {
  color: $orange-color;
  margin-right: 60px;
  background: transparent;
  padding: 0;

  @include tablets {
    margin-right: 13%;
  }

  @include phones {
    margin-right: 25px;
  }
}

.admin-reviews__edit-data__save-btn {
  padding: 23px 40px;
  border-radius: 32px;
  text-transform: uppercase;
  background-color: $orange-color;
  color: #ffffff;

  @include phones {
    padding: 20px 50px;
  }
}

.admin-reviews__instance-block {
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

.admin-reviews__add-btn {
  height: 380px;
  padding: 0;
  background-color: $orange-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include phones {
    height: 110px;
    flex-direction: row;
    justify-content: flex-start;
  }

  p {
    color: #ffffff;
    font-size: 18px;
    line-height: 30px;
    font-family: "open-sans-bo";
    width: 150px;
    margin-top: 20px;

    @include phones {
      font-size: 16px;
      margin-top: 0;
    }
  }

  &__icon {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    position: relative;

    @include phones {
      margin: 0 20px;
      height: 50px;
      width: 50px;
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

      @include phones {
        height: 11px;
        width: 11px;
      }
    }
  }
}

.admin-reviews__instance {
  color: #414c63;
  background-color: #ffffff;
  height: 380px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    height: auto;
  }

  &--edited {
    filter: brightness(120%) opacity(80%);
    box-shadow: none;

    .admin-reviews__instance__author-data {
      border-bottom: 1px solid rgba(#1f232d, 0.25);
    }
  }
}

.admin-reviews__instance__author-data {
  display: flex;
  width: 88.5%;
  padding: 0 10px 25px;
  border-bottom: 1px solid rgba(#1f232d, 0.15);

  @include phones {
    width: 100%;
    padding: 0 20px 30px;
  }
}

.admin-reviews__instance__author-photo {
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
}

.admin-reviews__instance__author-info {
  margin-left: 20px;
  &-name {
    font-family: "open-sans-bo";
    font-size: 18px;

    @include phones {
      font-size: 16px;
    }
  }
  &-position {
    font-family: "open-sans-sebo";
    font-size: 16px;
    opacity: 0.5;

    @include phones {
      font-size: 14px;
    }
  }
}

.admin-reviews__instance__text {
  padding: 25px 30px 0;
  margin-bottom: 30px;
  font-family: "open-sans-sebo";
  font-size: 16px;
  line-height: 30px;
  opacity: 0.7;
  overflow: auto;

  @include phones {
    font-size: 14px;
    line-height: 24px;
    padding: 25px 20px 0;
  }
}

.admin-reviews__instance__btns {
  flex: 1;
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @include phones {
    padding: 0 20px;
  }
}
</style>
