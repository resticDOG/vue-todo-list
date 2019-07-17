<template>
  <div class="main">
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './app/Header.vue';
import Footer from './app/Footer.jsx';
import Todo from './app/Todo.vue';

export default {
  data() {
    return {
      
    }
  },
  components: {
    Header,
    Footer,
    Todo,
  }
  
}
</script>

<style lang="stylus">
  // @import url('../styles/global.styl');
</style>
