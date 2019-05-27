<template>
    <div class="main-screen">
      <header-logo :textWhite="true" />
      <div class="main-screen__content">
        <p class="main-screen__title">Чого бажаєте ви?</p>
        <div class="main-screen__buttons">
          <router-link to="/gain-weight" class="main-screen__buttons__button gain-weight">Набрати вагу</router-link>
          <router-link to="/lose-weight" class="main-screen__buttons__button lose-weight">Скинути вагу</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import headerLogo from './headerLogo'

export default {
  name: 'mainScreen',
  components: {
    headerLogo
  }
}
</script>

<style lang="scss" scoped>
  .main-screen {
    padding: 4.3em 3.75em 4.8em 3.75em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url('../assets/main_bg.png');
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    height: 100vh;

    &__content {
      padding-top: 5.875em;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    &__buttons {
      display: flex;
      justify-content: space-around;

      &__button {
        padding: .92em 2.05em;
        border-radius: .278em;
        border: none;
        color: #000;
        font-size: 2.25em;
        transition: background-color .2s linear;
        text-decoration: none;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        &:hover {
          transition: background-color .2s linear;
          cursor: pointer;
        }
      }
    }
    .gain-weight {
      background-color: rgba(158, 255, 0, 0.7);

      &:hover {
        background-color: rgba(158, 255, 0, 1);
      }
    }
    .lose-weight {
      background-color: rgba(0, 163, 255, 0.7);

      &:hover {
        background-color: rgba(0, 163, 255, 1);
      }
    }
    &__title {
      text-align: center;
      color: #fff;
      margin-bottom: 1.51em;
      font-size: 6em;
      font-weight: 700;
      text-shadow: 0 4px 100px black;
    }
  }

</style>
