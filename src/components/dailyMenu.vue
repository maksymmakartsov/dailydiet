<template>
  <div class="daily-menu__wrapper">
    <div class="daily-menu">
      <header-logo />
      <div class="daily-menu__content">
        <div class="daily-menu__content-block">
          <div class="daily-menu__menu-block">
            <p class="daily-menu__title">Рекомендований калораж:</p>
            <div class="daily-menu__form-block">
              <div class="daily-menu__form-row">
                <div class="daily-menu__form-label">Сніданок:</div>
                <div class="daily-menu__form-field">
                  <div class="daily-menu__form-field-col">
                    <select-field
                        ref="selectField"
                        v-for="(breakfastField, index) in breakfastFields"
                        :field="breakfastField"
                        :type="type"
                        :key="index"
                        @calculate="calculateMenu"
                    />
                  </div>
                  <div class="daily-menu__form-field__add-line-wrapper">
                    <span
                        @click="addAnotherBreakfast"
                        class="daily-menu__form-field__add-line">+</span>
                  </div>
                </div>
              </div>
              <div class="daily-menu__form-row">
                <div
                    v-if="type === 'gain'"
                    class="daily-menu__form-label">Бранч:</div>
                <div
                    v-if="type === 'gain'"
                    class="daily-menu__form-field">
                  <div class="daily-menu__form-field-col">
                    <select-field
                        ref="selectField"
                        v-for="(branchField, index) in branchFields"
                        :field="branchField"
                        :type="type"
                        :key="index"
                        @calculate="calculateMenu"
                    />
                  </div>
                  <div class="daily-menu__form-field__add-line-wrapper">
                    <span
                        @click="addAnotherBranch"
                        class="daily-menu__form-field__add-line">+</span>
                  </div>
                </div>
              </div>
              <div class="daily-menu__form-row">
                <div class="daily-menu__form-label">Обід:</div>
                <div class="daily-menu__form-field">
                  <div class="daily-menu__form-field-col">
                    <select-field
                        ref="selectField"
                        v-for="(lunchField, index) in lunchFields"
                        :field="lunchField"
                        :type="type"
                        :key="index"
                        @calculate="calculateMenu"
                    />
                  </div>
                  <div class="daily-menu__form-field__add-line-wrapper">
                    <span
                        @click="addAnotherLunch"
                        class="daily-menu__form-field__add-line">+</span>
                  </div>
                </div>
              </div>
              <div class="daily-menu__form-row">
                <div
                    v-if="type === 'gain'"
                    class="daily-menu__form-label">Полуденок:</div>
                <div
                    v-if="type === 'gain'"
                    class="daily-menu__form-field">
                  <div class="daily-menu__form-field-col">
                    <select-field
                        ref="selectField"
                        v-for="(secondLunchField, index) in secondLunchFields"
                        :field="secondLunchField"
                        :type="type"
                        :key="index"
                        @calculate="calculateMenu"
                    />
                  </div>
                  <div class="daily-menu__form-field__add-line-wrapper">
                    <span
                        @click="addAnotherSecondLunch"
                        class="daily-menu__form-field__add-line">+</span>
                  </div>
                </div>
              </div>
              <div class="daily-menu__form-row">
                <div class="daily-menu__form-label">Вечеря:</div>
                <div class="daily-menu__form-field">
                  <div class="daily-menu__form-field-col">
                    <select-field
                        ref="selectField"
                        v-for="(dinnerField, index) in dinnerFields"
                        :field="dinnerField"
                        :type="type"
                        :key="index"
                        @calculate="calculateMenu"
                    />
                  </div>
                  <div class="daily-menu__form-field__add-line-wrapper">
                    <span
                        @click="addAnotherDinner"
                        class="daily-menu__form-field__add-line">+</span>
                  </div>
                </div>
              </div>
            </div>
<!--            <div class="daily-menu__form-row daily-menu__form-row&#45;&#45;button-wrapper">-->
<!--              <div class="daily-menu__form-label"></div>-->
<!--              <button-->
<!--                  @click="calculateMenu"-->
<!--                  :class="type === 'lose' ? 'daily-menu__button&#45;&#45;lose' : 'daily-menu__button&#45;&#45;gain'"-->
<!--                  class="daily-menu__button"-->
<!--                  type="button">Розрахувати</button>-->
<!--            </div>-->
          </div>
          <div class="daily-menu__cal-block">
            <p class="daily-menu__title">Всього калорій:</p>
            <div class="daily-menu__current-number-wrapper">
              <span class="daily-menu__current-number">{{ animatedTotal }}</span>
              <span class="daily-menu__current-measurement">ккал</span>
            </div>
            <div class="daily-menu__number-wrapper">
              <p class="daily-menu__title daily-menu__recommended-title daily-menu__title--grey">Добова норма:</p>
              <span class="daily-menu__number">{{ recommendedCalories }}</span>
              <span class="daily-menu__measurement">ккал</span>
            </div>
          </div>
        </div>
        <p
            v-if="type === 'gain'"
            class="daily-menu__notice">*Залишіть 100-200 ккал для напоїв. Калораж продуктів з урахуванням вершкового масла, цукру та солі.</p>
        <p
            v-else
            class="daily-menu__notice">*Залишіть 100-150 ккал для напоїв. Калораж продуктів без урахування вершкового масла, цукру та солі.</p>
      </div>
      <router-link class="nav-arrow__link" :to="{ path: `/calc-recommended/${type}` }"><img class="nav-arrow nav-arrow--up" src="../assets/arrow.svg" alt="nav"></router-link>
      <div></div>
    </div>
  </div>
</template>

<script>
import headerLogo from './headerLogo'
import selectField from './selectField'
import { TweenLite } from 'gsap/TweenLite'

export default {
  name: 'dailyMenu',
  components: {
    headerLogo,
    selectField
  },
  props: ['type', 'recommendedCal'],
  data: function () {
    return {
      breakfastFields: [
        {
          name: 'breakfast',
          food1: [
            {
              name: 'Каша гречана(100г)',
              cal: '197',
              qty: '1'
            },
            {
              name: 'Каша вівсяна(100г)',
              cal: '102',
              qty: '1'
            },
            {
              name: 'Омлет(100г)',
              cal: '213',
              qty: '1'
            },
            {
              name: 'Горіхи(25г)',
              cal: '150',
              qty: '1'
            },
            {
              name: 'Сухофрукти(25г)',
              cal: '89',
              qty: '1'
            },
            {
              name: 'Банан(1шт.)',
              cal: '89',
              qty: '1'
            },
            {
              name: 'Бутерброд(1шт.)',
              cal: '150',
              qty: '1'
            }
          ],
          food2: [
            {
              name: 'Каша гречана(100г)',
              cal: '132',
              qty: '1'
            },
            {
              name: 'Каша вівсяна(100г)',
              cal: '88',
              qty: '1'
            },
            {
              name: 'Банан(1шт.)',
              cal: '89',
              qty: '1'
            },
            {
              name: 'Яблуко(1шт.)',
              cal: '52',
              qty: '1'
            },
            {
              name: 'Знежирений сир(100г)',
              cal: '81',
              qty: '1'
            },
            {
              name: 'Омлет(100г)',
              cal: '162',
              qty: '1'
            },
            {
              name: 'Мюслі(100г)',
              cal: '302',
              qty: '1'
            },
            {
              name: 'Овочі на пару(100г)',
              cal: '29',
              qty: '1'
            }
          ],
          qty: '1'
        }
      ],
      branchFields: [
        {
          name: 'branch',
          food1: [
            {
              name: 'Тост з джемом(1шт.)',
              cal: '172',
              qty: '1'
            },
            {
              name: 'Йогурт(100г)',
              cal: '58',
              qty: '1'
            },
            {
              name: 'Чорний шоколад(25г)',
              cal: '136',
              qty: '1'
            },
            {
              name: 'Творог(100г)',
              cal: '169',
              qty: '1'
            }
          ],
          qty: '1'
        }
      ],
      lunchFields: [
        {
          name: 'lunch',
          food1: [
            {
              name: 'Салат овочевий(100г)',
              cal: '102',
              qty: '1'
            },
            {
              name: 'Суп гороховий(100г)',
              cal: '242',
              qty: '1'
            },
            {
              name: 'Борщ(100г)',
              cal: '49',
              qty: '1'
            },
            {
              name: 'Варена свинина(100г)',
              cal: '364',
              qty: '1'
            },
            {
              name: 'Фруктовий салат(100г)',
              cal: '50',
              qty: '1'
            },
            {
              name: 'Макарони з сиром(100г)',
              cal: '164',
              qty: '1'
            },
            {
              name: 'Варена курка(100г)',
              cal: '95',
              qty: '1'
            }
          ],
          food2: [
            {
              name: 'Овочевий салат(100г)',
              cal: '102',
              qty: '1'
            },
            {
              name: 'Рис(100г)',
              cal: '130',
              qty: '1'
            },
            {
              name: 'Гречка(100г)',
              cal: '132',
              qty: '1'
            },
            {
              name: 'Варена курка(100г)',
              cal: '95',
              qty: '1'
            },
            {
              name: 'Лосось на пару(100г)',
              cal: '135',
              qty: '1'
            },
            {
              name: 'Окунь на пару(100г)',
              cal: '106',
              qty: '1'
            },
            {
              name: 'Суп овочевий(100г)',
              cal: '21',
              qty: '1'
            }
          ],
          qty: '1'
        }
      ],
      secondLunchFields: [
        {
          name: 'secondLunch',
          food1: [
            {
              name: 'Печені яблука(100г)',
              cal: '67',
              qty: '1'
            },
            {
              name: 'Сухофрукти(25г)',
              cal: '89',
              qty: '1'
            },
            {
              name: 'Фруктовий салат(100г)',
              cal: '50',
              qty: '1'
            },
            {
              name: 'Творог(100г)',
              cal: '169',
              qty: '1'
            }
          ],
          qty: '1'
        }
      ],
      dinnerFields: [
        {
          name: 'dinner',
          food1: [
            {
              name: 'Вінегрет(100г)',
              cal: '128',
              qty: '1'
            },
            {
              name: 'Варений буряк(100г)',
              cal: '49',
              qty: '1'
            },
            {
              name: 'Овочеве рагу(100г)',
              cal: '72',
              qty: '1'
            },
            {
              name: 'Бутерброд(1шт.)',
              cal: '150',
              qty: '1'
            },
            {
              name: 'Гарбузова каша(100г)',
              cal: '42',
              qty: '1'
            },
            {
              name: 'Банан(1шт.)',
              cal: '89',
              qty: '1'
            },
            {
              name: 'Скумбрія на пару(100г)',
              cal: '211',
              qty: '1'
            }
          ],
          food2: [
            {
              name: 'Варена індичка(100г)',
              cal: '84',
              qty: '1'
            },
            {
              name: 'Овочеве рагу(100г)',
              cal: '72',
              qty: '1'
            },
            {
              name: 'Знежирений сир(100г)',
              cal: '81',
              qty: '1'
            },
            {
              name: 'Печені яблука(100г)',
              cal: '67',
              qty: '1'
            },
            {
              name: 'Гарбузова каша(100г)',
              cal: '42',
              qty: '1'
            },
            {
              name: 'Варений буряк(100г)',
              cal: '49',
              qty: '1'
            },
            {
              name: 'Фруктовий салат(100г)',
              cal: '50',
              qty: '1'
            }
          ],
          qty: '1'
        }
      ],
      total: 0
    }
  },
  mounted: function () {
    this.calculateMenu()
  },
  computed: {
    animatedTotal () {
      return this.total.toFixed(0)
    },
    recommendedCalories () {
      return Number(this.recommendedCal).toFixed(0)
    }
  },
  methods: {
    addAnotherBreakfast () {
      this.breakfastFields.push({
        name: 'breakfast',
        food1: [
          {
            name: 'Каша гречана(100г)',
            cal: '197',
            qty: '1'
          },
          {
            name: 'Каша вівсяна(100г)',
            cal: '102',
            qty: '1'
          },
          {
            name: 'Омлет(100г)',
            cal: '213',
            qty: '1'
          },
          {
            name: 'Горіхи(25г)',
            cal: '150',
            qty: '1'
          },
          {
            name: 'Сухофрукти(25г)',
            cal: '89',
            qty: '1'
          },
          {
            name: 'Банан(1шт.)',
            cal: '89',
            qty: '1'
          },
          {
            name: 'Бутерброд(1шт.)',
            cal: '150',
            qty: '1'
          }
        ],
        food2: [
          {
            name: 'Каша гречана(100г)',
            cal: '132',
            qty: '1'
          },
          {
            name: 'Каша вівсяна(100г)',
            cal: '88',
            qty: '1'
          },
          {
            name: 'Банан(1шт.)',
            cal: '89',
            qty: '1'
          },
          {
            name: 'Яблуко(1шт.)',
            cal: '52',
            qty: '1'
          },
          {
            name: 'Знежирений сир(100г)',
            cal: '81',
            qty: '1'
          },
          {
            name: 'Омлет(100г)',
            cal: '162',
            qty: '1'
          },
          {
            name: 'Мюслі(100г)',
            cal: '302',
            qty: '1'
          },
          {
            name: 'Овочі на пару(100г)',
            cal: '29',
            qty: '1'
          }
        ],
        qty: '1'
      })
    },
    addAnotherBranch () {
      this.branchFields.push({
        name: 'branch',
        food1: [
          {
            name: 'Тост з джемом(1шт.)',
            cal: '172',
            qty: '1'
          },
          {
            name: 'Йогурт(100г)',
            cal: '58',
            qty: '1'
          },
          {
            name: 'Чорний шоколад(25г)',
            cal: '136',
            qty: '1'
          },
          {
            name: 'Творог(100г)',
            cal: '169',
            qty: '1'
          }
        ],
        qty: '1'
      })
    },
    addAnotherLunch () {
      this.lunchFields.push({
        name: 'lunch',
        food1: [
          {
            name: 'Салат овочевий(100г)',
            cal: '102',
            qty: '1'
          },
          {
            name: 'Суп гороховий(100г)',
            cal: '242',
            qty: '1'
          },
          {
            name: 'Борщ(100г)',
            cal: '49',
            qty: '1'
          },
          {
            name: 'Варена свинина(100г)',
            cal: '364',
            qty: '1'
          },
          {
            name: 'Фруктовий салат(100г)',
            cal: '50',
            qty: '1'
          },
          {
            name: 'Макарони з сиром(100г)',
            cal: '164',
            qty: '1'
          },
          {
            name: 'Варена курка(100г)',
            cal: '95',
            qty: '1'
          }
        ],
        food2: [
          {
            name: 'Овочевий салат(100г)',
            cal: '102',
            qty: '1'
          },
          {
            name: 'Рис(100г)',
            cal: '130',
            qty: '1'
          },
          {
            name: 'Гречка(100г)',
            cal: '132',
            qty: '1'
          },
          {
            name: 'Варена курка(100г)',
            cal: '95',
            qty: '1'
          },
          {
            name: 'Лосось на пару(100г)',
            cal: '135',
            qty: '1'
          },
          {
            name: 'Окунь на пару(100г)',
            cal: '106',
            qty: '1'
          },
          {
            name: 'Суп овочевий(100г)',
            cal: '21',
            qty: '1'
          }
        ],
        qty: '1'
      })
    },
    addAnotherSecondLunch () {
      this.secondLunchFields.push({
        name: 'secondLunch',
        food1: [
          {
            name: 'Печені яблука(100г)',
            cal: '67',
            qty: '1'
          },
          {
            name: 'Сухофрукти(25г)',
            cal: '89',
            qty: '1'
          },
          {
            name: 'Фруктовий салат(100г)',
            cal: '50',
            qty: '1'
          },
          {
            name: 'Творог(100г)',
            cal: '169',
            qty: '1'
          }
        ],
        qty: '1'
      })
    },
    addAnotherDinner () {
      this.dinnerFields.push({
        name: 'dinner',
        food1: [
          {
            name: 'Вінегрет(100г)',
            cal: '128',
            qty: '1'
          },
          {
            name: 'Варений буряк(100г)',
            cal: '49',
            qty: '1'
          },
          {
            name: 'Овочеве рагу(100г)',
            cal: '72',
            qty: '1'
          },
          {
            name: 'Бутерброд(1шт.)',
            cal: '150',
            qty: '1'
          },
          {
            name: 'Гарбузова каша(100г)',
            cal: '42',
            qty: '1'
          },
          {
            name: 'Банан(1шт.)',
            cal: '89',
            qty: '1'
          },
          {
            name: 'Скумбрія на пару(100г)',
            cal: '211',
            qty: '1'
          }
        ],
        food2: [
          {
            name: 'Варена індичка(100г)',
            cal: '84',
            qty: '1'
          },
          {
            name: 'Овочеве рагу(100г)',
            cal: '72',
            qty: '1'
          },
          {
            name: 'Знежирений сир(100г)',
            cal: '81',
            qty: '1'
          },
          {
            name: 'Печені яблука(100г)',
            cal: '67',
            qty: '1'
          },
          {
            name: 'Гарбузова каша(100г)',
            cal: '42',
            qty: '1'
          },
          {
            name: 'Варений буряк(100г)',
            cal: '49',
            qty: '1'
          },
          {
            name: 'Фруктовий салат(100г)',
            cal: '50',
            qty: '1'
          }
        ],
        qty: '1'
      })
    },
    calculateMenu () {
      let totalCal = 0
      this.$refs.selectField.forEach(element => {
        totalCal += element.totalCal
      })
      TweenLite.to(this.$data, 0.5, { total: totalCal })
    }
  }
}
</script>

<style lang="scss" scoped>
  .daily-menu {
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
      flex-direction: column;
    }
    &__content-block {
      display: flex;
      justify-content: space-between;
    }
    &__menu-block {
      width: 70%;
    }
    &__cal-block {
      width: 30%;
    }
    &__title {
      font-size: 3em;
      font-weight: 700;

      &--grey {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    &__form-block {
      display: flex;
      flex-direction: column;
      margin-top: 4.875em;
    }
    &__form-row{
      display: flex;
    }
    &__form-label {
      display: flex;
      align-items: flex-start;
      font-weight: 500;
      width: 25%;
      font-size: 2.25em;
    }
    &__form-field-col {
      margin-right: 10px;
      max-width: 41em;
      width: 100%;
    }
    &__form-field {
      display: flex;
      align-items: flex-start;
      width: 75%;

      &__add-line-wrapper {
        height: 3.75em;
        display: flex;
        align-items: center;
      }
      &__add-line {
        font-size: 2.25em;
        font-weight: 300;
        border-radius: 100%;
        transition: all ease-in-out .2s;
        height: 1em;
        width: 1em;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          cursor: pointer;
          background-color: #b80b0b;
          color: #fff;
          transition: all ease-in-out .2s;
        }
      }
    }
    &__current-number-wrapper {
      margin-top: 3em;
    }
    &__current-number {
      margin-right: .2em;
      font-size: 9em;
      font-weight: 700;
    }
    &__current-measurement {
      font-size: 4em;
      font-weight: 700;
    }
    &__number-wrapper {
      margin-top: 7.6em;
      color: rgba(0, 0, 0, .5);
    }
    &__number {
      font-size: 4em;
      margin-right: .1em;
      font-weight: 700;
    }
    &__measurement {
      font-size: 2.25em;
      font-weight: 700;
    }
    &__recommended-title {
      margin-bottom: .8em;
    }
    &__notice {
      font-size: 2.5em;
      text-align: justify;
      margin-top: 1.4em;
    }
    &__button {
      max-width: 18.222em;
      width: 100%;
      box-shadow: none;
      padding: 0.3em 0.5em;
      border-radius: 10px;
      border: none;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-size: 2.25em;
      font-weight: 300;
      outline: none !important;

      &--gain {
        background-color: rgba(158, 255, 0, 0.7)
      }
      &--lose {
        background-color: rgba(0, 163, 255, 0.7);
      }
      &:hover {
        cursor: pointer;
      }
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
