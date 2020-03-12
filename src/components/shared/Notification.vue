<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger(v-show="showNotification")
          slot(name="fail")
        .notification.is-success(v-show="foundCoincidences")
          slot(name="success")

</template>

<script>
export default {
  name: 'Notification',
  props: {
    foundCoincidences: Boolean,
    showNotification: Boolean,
  },
};
</script>


<style lang="scss" scoped>

.notification {
  margin: 10px;
}

</style>
