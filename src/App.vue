<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

  body {
    font-size: 100%;
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
  }
  p {
    margin: 0;
  }
  a {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 1900px) {
    body {
      font-size: 80%;
    }
  }
  @media screen and (max-width: 1600px) {
    body {
      font-size: 70%;
    }
  }
  @media screen and (max-width: 1400px) {
    body {
      font-size: 60%;
    }
  }
</style>
