<template lang="pug">
  #app
    mo-header
    router-view
    mo-footer
</template>

<script>

import MoFooter from '@/components/layout/Footer.vue';
import MoHeader from '@/components/layout/Header.vue';

export default {
  name: 'app',

  components: {
    MoFooter, MoHeader,
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

.footer {
    background-color: #e8e8e8;
}
</style>
