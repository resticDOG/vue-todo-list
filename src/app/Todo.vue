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
      v-for=" todo of filterTodoList"
      :key="todo.id"
      :todo="todo"
      @delete="deleteToDo"
    />
    <div v-if="!filterTodoList.length" class="none">nothing todo</div>
    <Tabs 
      :filter="filter"
      :todoList="todoList"
      @toggle="toggleFilter"
      @clearCompleted="clearCompleted"
    />
  </section>
</template>

<script>
import Item from './Item.vue';
import Tabs from './Tabs.vue';
let id = 0;
export default {
  data() {
    return {
      todoList: [],
      filter: 'all'
    }
  },
  computed: {
    /**
     * 子组件过滤按钮点击时触发父组件filter的值改变，
     * 父组件根据filter的值实时计算新的todoList
     */
    filterTodoList() {
      if (this.filter === 'all') {
        return this.todoList;
      }
      const completed = this.filter === 'completed';
      return this.todoList.filter(todo => todo.completed === completed);
    }
  },
  methods: {
    /**
     * 添加todo
     */
    addTodo(event) {
      let value = event.target.value.trim();
      if (value === '') 
        return;
      // 让filter的值回到all
      this.filter = 'all';
      // 添加事件对象的值
      this.todoList.unshift({
        id: id++,
        content: value,
        completed: false
      });
      // 清空input
      event.target.value = '';
    },

    /**
     * 监听子组件delete方法
     * 函数返回参数为点击的todo id
     */
    deleteToDo(id) {
      // 删除数组中的数据
      this.todoList.splice(this.todoList.findIndex( todo => todo.id === id), 1);
    },

    /**
     * 监听子组件的toggle方法
     */
    toggleFilter(state) {
      this.filter = state;
    },

    /**
     * 监听清除所有已办按钮点击
     */
    clearCompleted() {
      this.todoList = this.todoList.filter(todo => !todo.completed);
    }
  },
  components: {
    Item,
    Tabs,
  }
}
</script>

<style lang="stylus" scoped>
.todo-con
  margin 10px auto
  width 70%
  background-color #fff
  .todo-input 
    color #333
    font-size 20px
    height 40px
    padding-left 40px
    outline-style none
    border none
  .none
    color #666
    text-align center
    height 50px
    line-height 50px
    border-top 1px dashed #eee
</style>

