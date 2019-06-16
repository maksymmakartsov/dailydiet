<template>
  <div class="recommended-calc__wrapper">
    <div class="recommended-calc">
      <header-logo />
      <div class="recommended-calc__content">
        <div class="recommended-calc__content__col recommended-calc__content__col--left">
          <p class="recommended-calc__title">Введіть дані для розрахунку калоражу:</p>
          <div class="recommended-calc__form-block">
            <div class="recommended-calc__form-row">
              <div class="recommended-calc__form-label">Стать:</div>
              <select
                  v-model="gender"
                  class="recommended-calc__form-field">
                <option value="0">чоловік</option>
                <option value="1">жінка</option>
              </select>
            </div>
            <div class="recommended-calc__form-row">
              <div class="recommended-calc__form-label">Вік:</div>
              <input
                  v-model.number="age"
                  type="text"
                  class="recommended-calc__form-field">
            </div>
            <div class="recommended-calc__form-row">
              <div class="recommended-calc__form-label">Зріст:</div>
              <input
                  v-model.number="height"
                  type="text"
                  class="recommended-calc__form-field">
              <span>см</span>
            </div>
            <div class="recommended-calc__form-row">
              <div class="recommended-calc__form-label">Вага:</div>
              <input
                  v-model.number="weight"
                  type="text"
                  class="recommended-calc__form-field">
              <span>кг</span>
            </div>
            <div class="recommended-calc__form-row recommended-calc__form-row--button-wrapper">
              <button
                  @click="calculateCalories"
                  :class="type === 'lose' ? 'recommended-calc__button--lose' : 'recommended-calc__button--gain'"
                  class="recommended-calc__button"
                  type="button">Розрахувати</button>
            </div>
          </div>
        </div>
        <div class="recommended-calc__content__col recommended-calc__content__col--right">
          <p class="recommended-calc__title">Рекомендована норма добового калоражу:</p>
          <div class="recommended-calc__number-wrapper">
            <span class="recommended-calc__number">{{ animatedCal }}</span>
            <span class="recommended-calc__measurement">ккал</span>
          </div>
        </div>
      </div>
      <router-link class="nav-arrow__link" to="/lose-weight"><img class="nav-arrow nav-arrow--up" src="../assets/arrow.svg" alt="nav"></router-link>
      <router-link class="nav-arrow__link--next" :to="{ path: `/daily-menu/${type}/${animatedCal}` }"><img class="nav-arrow" src="../assets/arrow.svg" alt="nav"></router-link>
      <div></div>
    </div>
  </div>
</template>

<script>
import headerLogo from './headerLogo'
import { TweenLite } from 'gsap/TweenLite'

export default {
  name: 'recommendedCalc',
  props: ['type'],
  data: function () {
    return {
      gender: '0',
      age: '',
      height: '',
      weight: '',
      recommendedCal: 0
    }
  },
  computed: {
    animatedCal () {
      return this.recommendedCal.toFixed(0)
    }
  },
  methods: {
    calculateCalories () {
      if (this.age === '' || this.height === '' || this.weight === '') {
        alert('Введіть дані в усі поля!')
      } else {
        if (this.type === 'lose') {
          if (this.gender === '0') {
            this.calculateMaleLose()
          } else {
            this.calculateFemaleLose()
          }
        } else {
          if (this.gender === '0') {
            this.calculateMaleGain()
          } else {
            this.calculateFemaleGain()
          }
        }
      }
    },
    calculateMaleLose () {
      let a = 10 * this.weight
      let b = 6.25 * this.height
      let c = 5 * this.age
      let d = a + b - c
      let e = d + 5
      TweenLite.to(this.$data, 0.5, { recommendedCal: e })
    },
    calculateFemaleLose () {
      let a = 10 * this.weight
      let b = 6.25 * this.height
      let c = 5 * this.age
      let d = a + b - c
      let e = d - 161
      TweenLite.to(this.$data, 0.5, { recommendedCal: e })
    },
    calculateMaleGain () {
      let a = 13.397 * this.weight
      let b = 4.799 * this.height
      let c = 5.677 * this.age
      let d = a + b + c
      let e = 88.362 + d
      let f = e * 1.4
      TweenLite.to(this.$data, 0.5, { recommendedCal: f })
    },
    calculateFemaleGain () {
      let a = 9.247 * this.weight
      let b = 3.098 * this.height
      let c = 4.330 * this.age
      let d = a + b + c
      let e = 447.593 + d
      let f = e * 1.4
      TweenLite.to(this.$data, 0.5, { recommendedCal: f })
    }
  },
  components: {
    headerLogo
  }
}
</script>

<style lang="scss" scoped>
  .recommended-calc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1800px;
    width: 100%;

    &__wrapper {
      padding: 4.3em 3.75em;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    &__content {
      padding: 60px 7.375em 0 7.375em;
      width: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

      &__col {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-right: 9.7em;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        &--right {
          padding-right: 0;
          padding-left: 9.7em;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
        &--left {
          border-right: 1px solid #000000;
        }
      }
    }
    &__form-block {
      margin-top: 5em;
    }
    &__form-label {
      font-size: 2.25em;
      width: 150px;
    }
    &__form-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 29px;

      span {
        font-size: 2.25em;
      }
    }
    &__form-field {
      padding: 0.3em 0.5em;
      max-width: 237px;
      border-radius: 10px;
      height: 1.667em;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      box-shadow: none;
      border: 1px solid #000;
      background-color: transparent;
      font-size: 2.25em;
      font-weight: 300;
      outline: none !important;
      margin-right: 15px;
    }
    &__button {
      margin-left: 150px;
      padding: 0.4em 0.6em;
      border-radius: 10px;
      border: none;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      width: 100%;
      max-width: 237px;
      font-size: 1.8em;
      font-weight: 300;
      outline: none !important;

      &--lose {
        background-color: rgba(0, 163, 255, 0.7);
      }
      &--gain {
        background-color: rgba(158, 255, 0, 0.7);
      }
      &:hover {
        cursor: pointer;
      }
    }
    &__number-wrapper {
      margin-top: 8.25em;
    }
    &__number {
      margin-right: .2em;
      font-size: 9em;
      font-weight: 700;
    }
    &__measurement {
      font-size: 4em;
      font-weight: 700;
    }
    &__title {
      font-size: 3em;
      font-weight: 700;
    }
  }
  .nav-arrow {
    width: 75px;
    height: 35px;

    &--up {
      transform: rotate(180deg);
    }
    &__link {
      position: absolute;
      left: calc(50% - 39.5px);
      top: 4.875em;

      &--next {
        position: absolute;
        left: calc(50% - 39.5px);
        bottom: 4.875em;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
