<template>
  <nav class="nav">
    <div class="grid">
        <ul class="nav__menu | menu" :class="{'menu--active': active}">
          <li class="menu__item"><a href="#" @click.prevent="goTo('confirme')">Confirme sua presença</a></li>
          <li class="menu__item"><a href="#" @click.prevent="goTo('historia')">Nossa história</a></li>
          <li class="menu__item"><a href="#" @click.prevent="goTo('local')">Informações</a></li>
          <li class="menu__item"><a href="#" @click.prevent="goTo('presentes')">Presentes</a></li>
          <!--<li class="menu__item"><a href="#" @click.prevent="goTo('confirme')">Nos deixe uma mensagem</a></li>-->
        </ul>
        <button class="nav-trigger | mobile-only" @click="active = !active">
          <menu-trigger :active="active" />
        </button>
    </div>
  </nav>
</template>

<script>
import menuTrigger from './menuTrigger'
export default {
  components: {
    menuTrigger,
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    goTo(id) {
      this.active = false;
      const el = document.querySelector('#'+id);
      if (el) {
        const distance = el.getBoundingClientRect().top+window.scrollY;
        el.scrollIntoView();
        //window.scrollTo( 0, (distance-100) );
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../static/css/_variables.scss';

.nav {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0));
}

.menu {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  @include sm {
    position: fixed;
    top: 0;
    left: -101%;
    width: 70%;
    height: 100vh;
    flex-direction: column;
    padding: 120px 32px 32px;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: rgba(0,0,0,0.8);
    transition: all 0.5s ease-out;
    &.menu--active {
      left: 0;
    }
  }
}

  .menu__item {
    list-style: none;
    @include sm {
      margin-bottom: 16px;
    }
    a {
      font-size: 1.5em;
      @include sm {
        font-size: 1.2em;
      }
    }
  }

.nav-trigger {
  padding-top: 32px;
  background: none;
  border: none;
  color: #FFF;
  z-index: 100;
  position: relative;
}
</style>
