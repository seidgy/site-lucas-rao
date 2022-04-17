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
      <div class="grid" id="confirme">
        <p class="text">Seja bem-vindo ao site do nosso grande dia!  Aqui você encontrará  todas as informações do evento. É um grande prazer compartilhar esse momento com você!</p>
        <div class="button-container button-container--spaced">
          <a href="#" class="button" @click.prevent="presenca = !presenca">Confirme sua presença</a>
        </div>
        <div class="form-container" :class="{'form-container--show': presenca}">
          <p class="alert" id="alert" role="alert"></p>
          <form id="form-presenca" class="form form--default | form-presenca">
            <input type="email" name="e-mail" id="input-01" placeholder="Seu e-mail (opcional)" @change="resetMessage()">
            <input type="text" name="telefone" id="input-02" placeholder="Seu telefone" @change="resetMessage()">
            <textarea name="nomes" id="input-03" placeholder="Seu nome e o de seus convidados" @change="resetMessage()"></textarea>
            <div class="buttons">
              <input type="submit" class="button" name="" value="Enviar" @click.prevent="sendForm()">
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="base-color | historia" id="historia">
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
        <p class="text | historia__text">Era dia 01 de novembro de 2018, quando esses dois caminhos se cruzaram naquela tarde chuvosa em Palmas-TO em que, apesar do tempo, saíram para tomar sorvete, sob pretexto de se conhecerem melhor. Não imaginavam que ali, começaria uma história que já conta mais de 3 anos. Um relacionamento moldado a distância, pois um morava em Palmas, enquanto outro já havia ido embora para Brasília há 7 meses, pois tinha passado em um concurso. Sem contar nesse meio tempo,  que após a sua formatura, Lucas ainda foi passar uma temporada em Imperatriz-MA, perto dos seus familiares. Mas que agora estão aqui, lado a lado, para seguir essa história, que apesar de todas as adversidades, foi sendo construída com base na confiança, cumplicidade, intimidade e claro... o amor.</p>
      </div>
      <div class="historia__spacer">
        <span class="thick-line thick-line--right"></span>
      </div>
      <div class="historia__gradient"></div>
    </section>
    <section class="base-color | local" id="local">
      <div class="title-div title-div--right">
        <div class="title-div__spacer"></div>
        <div class="grid | title-grid">
          <h2 class="title">
            <img src="/images/evento.png" alt="Evento" class="title__image" />
          </h2>
        </div>
        <div class="title-div__spacer">
          <span class="thin-line thin-line--right"></span> 
        </div>
      </div>
      <div class="grid | local__mapa">
        <div class="local___container">
          <h3 class="subtitle">Cerimônia</h3>
          <p class="text | local__text">No dia 09 de julho de 2022 às 17h00</p>
          <p class="text | local__text">Ahadu Eventos - Quadra 110 Norte Alameda 5, 13 - Plano Diretor Norte, Palmas - TO</p>
        </div>
        <div class="local__google-maps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15707.964128898315!2d-48.3077735!3d-10.1813831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf64b16f231f3b9e0!2sAhadu%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1649075973548!5m2!1spt-BR!2sbr" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="grid | local__mapa local__mapa--inverted">
        <div class="local__imagem">
          <img src="/images/hotel.jpg" alt="Hotel">
        </div>
        <div class="local___container local__container--right">
          <h3 class="subtitle">Sugestão de hospedagem</h3>
          <p class="text | local__text">Conseguimos um desconto para nossos queridos convidados!</p>
          <p class="text | local__text">Carvalho's Hotel - Quadra 103 Sul, Rua de Pedestre SO, 01 - Plano Diretor Sul, 77015-014</p>
        </div>
      </div>
    </section>
    <section class="base-color | presentes" id="presentes">
      <div class="title-div title-div--left">
        <div class="title-div__spacer">
          <span class="thin-line thin-line--left"></span>
        </div>
        <div class="grid">
          <h2 class="title">
            <img src="/images/presentes.png" alt="Presentes" class="title__image" />
          </h2>
        </div>
        <div class="title-div__spacer"></div>
      </div>
      <div class="grid | presentes__info">
        <p class="text text--margin">Querido(a) convidado(a),</p>
        <p class="text text--margin">Caso queira nos presentear, gostaríamos que este fosse convertido em espécie. Mas saiba que o nosso maior presente é ter a sua presença.</p>
        <p class="text text--margin">Haverá uma urna na recepção do casamento, você pode utilizar este envelope, ou se preferir pode depositar:</p>
        <div class="presentes__banco">
          <p class="text text--highlight">Banco do Bradesco</p>
          <p class="text text--highlight">Agência: 2918</p>
          <p class="text text--highlight">CC: 25375-8</p>
          <p class="text text--highlight">Pix: raony14@gmail.com</p>
          <p class="text text--highlight">Favorecido: Raony Pereira dos Santos</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'main',
  name: 'IndexPage',
  data() {
    return {
      presenca: false
    }
  },
  methods: {
    async sendForm() {
      const myForm = document.getElementById("form-presenca");
      const alert = document.getElementById('alert');
      let params = new FormData(myForm);
      this.$contact.send('https://formspree.io/f/mzbojzwd', params).then(ret => {
        alert.classList.remove('alert--failure');
        alert.classList.add('alert--success');
        alert.innerHTML = "Obrigado pela confirmação. Nos vemos lá!";
        myForm.reset();
      }).catch(err=>{
        alert.classList.remove('alert--success');
        alert.classList.add('alert--failure');
        alert.innerHTML = "Ops, algo deu errado. Por favor tente novamente.";
        myForm.reset();
        console.log('ERROR -> ',err)
      })
    },
    resetMessage() {
      const alert = document.getElementById('alert');
      alert.classList.remove('alert--failure');
      alert.classList.remove('alert--success');
      alert.innerHTML = "";
    }
  },
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
    @include sm {
      background-size: auto 50%;
      background-position: 95% 100%;
    }

  }

  .header-gradient {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, $main-color 35% , rgba(0,0,0,0) 45%,rgba(0,0,0,0) 100%);
    @include sm {
      background-image: linear-gradient(to bottom, $main-color 50% , rgba(0,0,0,0) 65%,rgba(0,0,0,0) 100%);
    }
  }

  .bottom-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25vh;
    background-image: linear-gradient(to top, $main-color 5% , rgba(0,0,0,0) 100%);
    @include sm {
      bottom: -1px;
      height: 15vh;
    }
  }

  .main-logo {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    @include sm {
      width: 80%;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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
        @include sm {
          font-size: 1.2em;
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
      width: 75%;
      text-align: right;
      margin-top: 90px;
      margin-left: auto;
      @include sm {
        width: 95%;
        text-align: left;
        margin-left: 0;
      }
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
      @include sm {
        height: 200px;
      }
    }

  .local {
    padding: 100px 0 0;
    .grid:not(.title-grid) {
      padding-bottom: 124px;
    }
  }

    .local__mapa {
      display: flex;
      flex-flow: row nowrap;
      @include sm {
        flex-direction: column;
      }
    }

      .local__mapa--inverted {
        @include sm {
          flex-direction: column-reverse;
        }
      }

      .local__container {
        flex-grow: 1;
      }

        .local__container--right {
          width: 600px;
          flex-shrink: 0;
          @include sm {
            width: 100%;
          }
        }

      .local__google-maps {
        margin-left: 32px;
        @include sm {
          margin: 32px 0 0 0;
        }
        iframe {
          width: 600px;
          @include sm {
            width: 100%;
          }
        }
      }

      .local__text {
        margin-bottom: 15px;
      }

      .local__imagem {
        margin-right: 32px;
        flex-shrink: 1;
        @include sm {
          margin: 32px 0 0 0;
        }
        img {
          width: 100%;
        }
      }

  .form-container {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-out;
  }

    .form-container--show {
      max-height: 550px;
    }

  .form-presenca {
    height: 500px;
    textarea {
      flex-grow: 1;
    }
  }

.presentes {
  padding-bottom: 100px;
}

  .presentes__info {
    margin-top: 64px;
    text-align: center;
  }

  .presentes__info .text--margin {
    margin-bottom: 32px
  }
</style>
