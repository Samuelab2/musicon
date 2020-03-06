<template lang="pug">
  #app
    mo-header
    mo-loader(v-show="isloading")
    section.section(v-show="!isloading")
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Search your music",
            v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Search
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            mo-track(:track="t")
    mo-footer

</template>

<script>
import getSearch from '@/services/api';
import MoFooter from '@/components/layout/Footer.vue';
import MoHeader from '@/components/layout/Header.vue';
import MoTrack from '@/components/Track.vue';
import MoLoader from '@/components/shared/Loader.vue';

export default {
  name: 'app',

  components: {
    MoFooter, MoHeader, MoTrack, MoLoader,
  },

  data() {
    return {
      searchQuery: '',
      tracks: [],
      isloading: false,
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados ${this.tracks.length}`;
    },
  },

  methods: {
    search() {
      if (!this.searchQuery) { return; }
      this.isloading = true;
      getSearch(this.searchQuery)
        // eslint-disable-next-line no-return-assign
        .then((res) => {
          this.tracks = res.items;
          this.isloading = false;
        });
    },
  },
};
</script>


<style lang="scss">

@import './scss/main.scss';

.results {
  margin-top: 50px;
}

</style>
