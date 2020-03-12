<template lang="pug">
  section.hero.is-primary.is-small
    .hero-head
      nav.navbar
        .container
          .navbar-brand
            strong.navbar-item 📻 MusicOn
            span.navbar-burger.burger(data-target="navbarMenuHeroA")
              span
              span
              span
          #navbarMenuHeroA.navbar-menu
            .navbar-end
              router-link.navbar-item(:to="{ name: 'search' }") Search
              router-link.navbar-item(to="about") About Us
    .hero-body
      .container.has-text-centered
        h1.title MusicOn
        h2.subtitle Most hottest songs
        mo-player
</template>

<script>
import MoPlayer from '@/components/Player.vue';

export default {
  name: 'Header',
  components: { MoPlayer },
};
</script>
