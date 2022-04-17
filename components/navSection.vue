<template>
  <nav class="nav | not-mobile">
    <div class="grid">
        <ul class="nav__menu | menu">
          <li class="menu__item"><a href="#" @click.prevent="goTo('confirme')">Confirme sua presença</a></li>
          <li class="menu__item"><a href="#" @click.prevent="goTo('historia')">Nossa história</a></li>
          <li class="menu__item"><a href="#" @click.prevent="goTo('local')">Informações</a></li>
          <li class="menu__item"><a href="#" @click.prevent="goTo('confirme')">Presentes</a></li>
          <li class="menu__item"><a href="#" @click.prevent="goTo('confirme')">Nos deixe uma mensagem</a></li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    goTo(id) {
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
}

  .menu__item {
    list-style: none;
    a {
      font-size: 1.5em;
    }
  }
</style>
