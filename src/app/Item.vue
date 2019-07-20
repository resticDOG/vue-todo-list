<template>
  <div :class="['item-con',todo.completed ? 'completed' : '']">
    <input
      class="toggle"
      type="checkbox"
      v-model="todo.completed"
    >
    <label class="todo-content">{{ todo.content }}</label>
    <button class="destory" @click="destoryTodo"></button>
  </div>  
</template>

<script>
export default {
  props: {
    todo : {
      type: Object,
      required: true
    }
  },
  methods: {
    destoryTodo() {

    }
  }
}
</script>

<style lang="stylus" scoped>
.item-con {
  display flex
  justify-content space-between
  align-items center
  border-top 1px dashed #eee
  width 100%
  &:hover {
    .destory:after {
      content 'x'
    }
  }
  &.completed {
    .todo-content {
      color #d9d9d9
      text-decoration line-through
    }
  }
  .toggle {
    width 40px
    height 40px
    text-align center
    font-size 50px
    line-height 40px
    outline none
    appearance none
    margin 0
    &:after {
      content url('../assets/unchecked.svg')
    }
    &:checked:after {
      content url('../assets/checked.svg')
    }
  }
  .todo-content {
    width 100%
    padding-left 10px
    color #333
    font-size 20px
    white-space pre-line
    word-break break-all
    line-height 40px
  }
  .destory {
    width 30px
    height 30px
    font-size 14px
    color #cc9a9a
    background-color transparent
    padding 0
    cursor pointer
    outline none
    appearance none
    transition color 0.2s ease-out
    border none
  }
  
}
</style>
