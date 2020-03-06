<template lang="pug">
  #app
    mo-header
    mo-notification(v-show="showNotification")
      p(slot="body") No coincidences found
    mo-loader(v-show="isloading")
    section.section(v-show="!isloading")
      nav.nav
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
            mo-track(
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack",
              )
    mo-footer

</template>

<script>
import getSearch from '@/services/api';

import MoFooter from '@/components/layout/Footer.vue';
import MoHeader from '@/components/layout/Header.vue';

import MoTrack from '@/components/Track.vue';

import MoLoader from '@/components/shared/Loader.vue';
import MoNotification from '@/components/shared/Notification.vue';

export default {
  name: 'app',

  components: {
    MoFooter, MoHeader, MoTrack, MoLoader, MoNotification,
  },

  data() {
    return {
      searchQuery: '',
      tracks: [],
      isloading: false,
      showNotification: false,
      selectedTrack: '',
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados ${this.tracks.length}`;
    },
  },

  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },

  methods: {
    search() {
      if (!this.searchQuery) { return; }
      this.isloading = true;
      getSearch(this.searchQuery)
        // eslint-disable-next-line no-return-assign
        .then((res) => {
          this.showNotification = res.total === 0;
          this.tracks = res.items;
          this.isloading = false;
        });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    },
  },
};
</script>


<style lang="scss">

@import './scss/main.scss';

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}

</style>
