<template>
  <div>
    <section class="header">
      <div class="header-gradient">
        <div class="grid">
          <div class="main-logo">
            <img src="/images/nome.png" alt="Lucas e Raony" class="main-logo__image">
            <ul class="main-logo__info">
              <li class="maing-logo__text">09.07.2022</li>
              <li class="maing-logo__text">Palmas, TO</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-gradient"></div>
    </section>
    <section class="base-color | rsvp">
      <div class="grid">
        <p class="text">Seja bem-vindo ao site do nosso grande dia!  Aqui você encontrará  todas as informações do evento. É um grande prazer compartilhar esse momento com você!</p>
        <div class="button-container button-container--spaced">
          <a href="#" class="button">Confirme sua presença</a>
        </div>
      </div>
    </section>
    <section class="base-color | historia">
      <div class="title-div title-div--left">
        <div class="title-div__spacer">
          <span class="thin-line thin-line--left"></span>
        </div>
        <div class="grid">
          <h2 class="title">
            <img src="/images/nossa-historia.png" alt="Nossa história" class="title__image" />
          </h2>
        </div>
        <div class="title-div__spacer"></div>
      </div>
      <div class="grid">
        <p class="text | historia__text">Era dia 01 de novembro de 2018, quando nossos caminhos se cruzaram e passamos a caminhar na mesma direção. Um relacionamento moldado a distância, que começou em 800km e depois se tornou 1400 km, para agora estarmos aqui, lado a lado. Deixamos tudo ir acontecendo da forma mais natural, sempre pautado na confiança, cumplicidade, intimidade e claro... o amor.</p>
      </div>
      <div class="historia__spacer">
        <span class="thick-line thick-line--right"></span>
      </div>
      <div class="historia__gradient"></div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'main',
  name: 'IndexPage'
}
</script>

<style scoped lang="scss">
  @import '../static/css/_variables.scss';
  
  .header {
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: $main-color;
    background-image: url('/images/header-bg.jpg');
    background-size: auto 130%;
    background-position: top right;
    background-repeat: no-repeat;
  }

  .header-gradient {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, $main-color 35% , rgba(0,0,0,0) 45%,rgba(0,0,0,0) 100%);
  }

  .bottom-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25vh;
    background-image: linear-gradient(to top, $main-color 5% , rgba(0,0,0,0) 100%);
  }

  .main-logo {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

    .main-logo__image {
      width: 100%;
    }

    .main-logo__info {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      li {
        font-size: 1.5em;
        list-style: none;
        padding: 0 16px;
        &:first-child {
          border-right: 1px solid $font-color;
        }
      }
    }

    .rsvp {
      padding: 100px 0 200px;
      .text {
        text-align: center;
      }
    }

    .historia__spacer {
      position: relative;
      display: block;
      width: 100%;
      height: 140px;
    }

    .historia__text {
      width: 80%;
      text-align: right;
      margin-top: 90px;
      margin-left: auto;
    }

    .historia__gradient {
      background-image: url('/images/history-bg.jpg');
      background-size: cover;
      background-position: top center;
      display: block;
      width: 100%;
      height: 900px;
      position: relative;
      &::before {
        content: '';
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 25%;
        background-image: linear-gradient(to bottom, $main-color 5% , rgba(0,0,0,0) 100%);
      }
      &::after {
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 25%;
        background-image: linear-gradient(to top, $main-color 5% , rgba(0,0,0,0) 100%);
      }
    }
</style>
