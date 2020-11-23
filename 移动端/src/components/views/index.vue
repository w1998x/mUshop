<template>
  <div>
      <router-view></router-view>
      <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '../../commen/footer'
export default {
  data() {
    return {};
  },
  components:{
    vFooter
  }
};
</script>

<style lang="" scoped>
</style>
