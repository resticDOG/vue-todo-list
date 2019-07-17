<template>
  <section class="todo-con">
    <input 
      class="todo-input" 
      type="text"
      autofocus
      placeholder="type your todo"
      @keyup.enter="addTodo"
    >
    <Item></Item>
  </section>
</template>

<script>
import Item from './Item.vue';

export default {
  methods: {
    addTodo () {

    }
  },
  components: {
    Item,
  }
}
</script>

<style lang="stylus" scoped>
.todo-con {
  margin 10px auto
  width 70%
  background-color #fff
  .todo-input {
    color #333
    font-size 20px
    height 40px
    padding-left 40px
    outline-style none
    border none
  }
}
</style>

