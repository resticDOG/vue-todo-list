<template>
  <section class="todo-con">
    <input 
      class="todo-input" 
      type="text"
      autofocus
      placeholder="type your todo"
      @keyup.enter="addTodo"
    >
    <Item 
      v-for=" todo of todoList"
      :todo="todo"
    />
  </section>
</template>

<script>
import Item from './Item.vue';

export default {
  data() {
    return {
      todoList: [
        {
          completed: true,
          content: '吃饭'
        },
        {
          completed: false,
          content: '睡觉'
        },
        {
          completed: false,
          content: '打豆豆'
        }
      ]
    }
  },
  methods: {
    addTodo() {

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

