<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <NuxtLink
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
				 {
          title: 'Expert-Comptable 2',
          icon: 'home',
					to: "/annuaireec2/1"
          // to: { name: 'index' }
        },
        {
          title: 'Expert-Comptable',
          icon: 'home',
					to: "/annuaireec"
          // to: { name: 'index' }
        },
        {
          title: 'Pays',
          icon: 'lightbulb',
					to: '/countries'
          // to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
