<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong 📻 MusicOn
          .nav-rigth.nav-menu
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
