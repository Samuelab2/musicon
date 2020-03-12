<template lang="pug">
  main
    transition(name="move")
      mo-notification(v-show="showNotification", :showNotification="showNotification")
        p(slot="fail") No coincidences found
    transition(name="move")
      mo-notification(v-show="foundCoincidences", :foundCoincidences="foundCoincidences")
        p(slot="success") {{ searchMessage }}
    transition(name="move")
      mo-loader(v-show="isloading")
    section.section(v-show="!isloading")
      nav.nav
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="Search your music",
                v-model="searchQuery",
                @keyup.enter="search")
            .control
              a.button.is-primary.is-large(@click="search") Search
      .container
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks.items")
            mo-track(
              v-blur="t.preview_url",
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack",
              )

</template>

<script>
import api from '@/services/api';

import MoTrack from '@/components/Track.vue';

import MoLoader from '@/components/shared/Loader.vue';
import MoNotification from '@/components/shared/Notification.vue';

export default {
  name: 'search',

  components: {
    MoTrack, MoLoader, MoNotification,
  },

  data() {
    return {
      searchQuery: '',
      tracks: [],
      isloading: false,
      showNotification: false,
      selectedTrack: '',
      foundCoincidences: false,
    };
  },

  computed: {
    searchMessage() {
      return `Found ${this.tracks.total} coincidences`;
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
    foundCoincidences() {
      if (this.foundCoincidences) {
        setTimeout(() => {
          this.foundCoincidences = false;
        }, 3000);
      }
    },
  },

  methods: {
    search() {
      if (!this.searchQuery) { return; }
      this.isloading = true;
      api.getSearch(this.searchQuery)
        // eslint-disable-next-line no-return-assign
        .then((res) => {
          this.showNotification = res.tracks.total === 0;
          this.foundCoincidences = res.tracks.total !== 0;
          this.tracks = res.tracks;
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

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}

</style>
