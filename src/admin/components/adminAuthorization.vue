<template lang="pug">
section.admin-login
  form.login-block
    .login-block__title Авторизация
    .login-block__user-name
      label.login-block__user-name__label(for='userName') Логин
      .login-block__user-name__icon
      input.login-block__user-name__input(name='userName' type='text' id='userName')
    .login-block__password
      label.login-block__password__label(for='password') Пароль
      .login-block__password__icon
      input.login-block__password__input(name='password' type='password' id="password" required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
    button.login-block__submit-btn(name='send', type='submit', value='Отправить') Отправить
    button.login-block__close-btn
</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.admin-login {
  background: url("../../images/content/intro_bg.jpg"), rgba(#2d3c4e, 0.9);
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-block {
  height: 520px;
  width: 47%;
  max-width: 565px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  color: #2d3c4e;
  background-color: #fff;

  @include phones {
    height: 100%;
  }
}

.login-block__title {
  margin-bottom: 30px;
  font-size: 36px;
  font-family: "open-sans-sebo";

  @include phones {
    font-size: 30px;
  }
}

.login-block__user-name,
.login-block__password {
  width: 72.7%;
  margin-bottom: 38px;
  display: flex;
  flex-direction: column;

  @include phones {
    width: 81%;
  }

  input {
    border: none;
    outline: none;
    padding: 25px 0 20px 45px;
    font-size: 18px;
    font-family: "open-sans-bo";
    cursor: pointer;
    outline-color: $orange-color;
    border-bottom: 1px solid #2d3c4e;

    &:hover,
    &:focus {
      transition: 0.3s;
      border-color: $orange-color;
    }
  }

  label {
    opacity: 0.3;
    font-size: 16px;
    font-family: "open-sans-sebo";
    padding-left: 45px;
  }
}

.login-block__user-name {
  position: relative;
  &__icon {
    position: absolute;
    transform: translate(0, 140%);
    height: 30px;
    width: 30px;
    opacity: 0.3;
    background-image: svg-load(
      "user.svg",
      fill=#2d3c4e,
      width=100%,
      height=100%
    );
  }

  &:hover {
    .login-block__user-name__icon {
      transition: 0.3s;
      opacity: 0.7;
      background-image: svg-load(
        "user.svg",
        fill=$orange-color,
        width=100%,
        height=100%
      );
    }
  }
}

.login-block__user-icon {
  height: 20px;
  width: 20px;
}
.login-block__password {
  position: relative;
  &__icon {
    position: absolute;
    transform: translate(0, 140%);
    height: 30px;
    width: 30px;
    opacity: 0.3;
    background-image: svg-load(
      "key.svg",
      fill=#2d3c4e,
      width=100%,
      height=100%
    );
  }

  &:hover {
    .login-block__password__icon {
      transition: 0.3s;
      opacity: 0.7;
      background-image: svg-load(
        "key.svg",
        fill=$orange-color,
        width=100%,
        height=100%
      );
    }
  }
}

.login-block__submit-btn {
  background-color: $orange-color;
  height: 80px;
  width: 62%;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 18px;
  font-family: "open-sans-bo";
  display: flex;
  justify-content: center;
  align-items: center;

  @include phones {
    width: 81%;
  }
}

.login-block__close-btn {
  position: absolute;
  height: 22px;
  width: 22px;
  background: none;
  background-image: svg-load(
    "cancel.svg",
    fill=#2d3c4e,
    width=100%,
    height=100%
  );
  right: 30px;
  top: 30px;
}
</style>
