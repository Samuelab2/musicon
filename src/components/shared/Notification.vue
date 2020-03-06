<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger
          slot(name="body") Something is wrong

</template>

<script>
export default {
  name: 'Notification',
};
</script>


<style lang="scss" scoped>

.notification {
  margin: 10px;
}

</style>
