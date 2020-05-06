<script>
import adminAbout from "./components/adminAbout";
import adminWorks from "./components/adminWorks";
import adminReviews from "./components/adminReviews";
import adminAuthorization from "./components/adminAuthorization";

export default {
  components: {
    adminAbout,
    adminWorks,
    adminReviews,
    adminAuthorization,
  },
};
</script>

<style lang="postcss">
@import "../styles/mixins.pcss";

.admin-wrapper {
  background: url("../images/content/intro_bg.jpg"), rgba(255, 255, 255, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.admin-container {
  margin: 0 auto;
  max-width: 1080px;
  width: 88%;

  @include desktop-old {
    width: 94%;
  }

  @include tablets {
    width: 92.2%;
  }

  @include phones {
    width: 100vw;
  }
}

.admin__header {
  width: 100%;
}

.header__main {
  display: flex;
  align-items: center;
  background-color: $dark_blue-color;
  height: 80px;
}

.header__main-container {
  display: flex;
  align-items: center;
  max-width: 1080px;

  @include phones {
    flex-wrap: wrap;
    width: 88%;
    margin-bottom: 15px;
  }
}

.header__main__admin-avatar {
  height: 45px;
  min-width: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  @include tablets {
    margin-right: 2.7%;
  }

  @include phones {
    margin-right: 10px;
    transform: translate(0, 10px);
  }
}

.header__main__admin-name {
  margin-right: 28px;
  font-size: 18px;
  font-family: "open-sans-sebo";

  @include tablets {
    margin-right: 3.8%;
  }

  @include phones {
    font-size: 16px;
  }
}

.header__main__title {
  font-size: 14px;
  opacity: 0.5;

  @include phones {
    display: none;
  }
}

.header__main__logout-btn {
  color: #ffffff;
  background: none;
  margin-left: auto;
  font-family: "open-sans-regular";
  font-size: 16px;
  text-decoration: underline;
  opacity: 0.7;

  @include tablets {
    font-size: 14px;
  }

  @include phones {
    margin-left: 50px;
    line-height: 0;
  }
}

.header__nav {
  display: flex;
  align-items: center;
  height: 75px;
  background-color: #fff;
}

.header__nav-container {
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1080px;

  @include phones {
    width: 88%;
  }
}

.header__nav-btn {
  height: 100%;
  padding: 0;
  width: 125px;
  font-size: 16px;
  background: none;

  @include phones {
    font-size: 14px;
  }

  &--active {
    border-bottom: 3px solid $orange-color;
    color: $orange-color;
    font-family: "open-sans-sebo";
    transition: 0.3s;
  }
}

.admin__title-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 138px;

  @include tablets {
    height: 118px;
  }

  @include phones {
    margin: 0 auto;
    width: 88%;
    height: 95px;

    &--about {
      padding: 8% 0;
      height: 150px;
    }
  }
}

.admin__title {
  color: $dark_blue-color;
  font-family: "open-sans-bo";
  font-size: 21px;

  @include phones {
    font-size: 18px;
  }
}

.admin__instance-btn {
  padding: 0;
  background: transparent;
  color: rgba(#414c63, 0.5);
  font-family: "open-sans-sebo";
  font-size: 16px;

  @include phones {
    font-size: 14px;
  }

  &--edit {
    &:after {
      content: "";
      display: inline-block;
      height: 19px;
      width: 19px;
      margin-left: 10px;
      background-image: svg-load(
        "pencil.svg",
        fill=$orange-color,
        width=100%,
        height=100%
      );
      transform: translate(0, 4px);
    }
  }
  &--delete {
    &:after {
      content: "";
      display: inline-block;
      height: 19px;
      width: 19px;
      margin-left: 10px;
      background-image: svg-load(
        "plus.svg",
        fill=#bf2929,
        width=100%,
        height=100%
      );
      transform: rotate(45deg) translate(0, 4px);

      @include phones {
        transform: rotate(45deg) translate(0, 7px);
      }
    }
  }
}
</style>
<template lang="pug">
  .admin-panel
    header.admin__header
      .header__main
        .header__main-container.container
          img(src=('../images/content/userfiles/user.jpg') alt='avatar').header__main__admin-avatar
          .header__main__admin-name Дмитрий Чижов
          .header__main__title Панель администрирования
          button.header__main__logout-btn Выйти
      nav.header__nav
        .header__nav-container.container
          button.header__nav-btn.header__nav-btn--active Обо мне
          button.header__nav-btn Работы
          button.header__nav-btn Отзывы
    
    admin-about
    admin-works
    admin-reviews
    admin-authorization

</template>
