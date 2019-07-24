<template>
  <div class="tabs">
    <span class="number">
      <span>{{ activeItemsCount }}</span> items left
    </span>
    <span class="filters">
      <span 
        v-for="state of states"
        :key="state"
        :class="['item', state, filter === state ? 'checked' : '']"
        @click="toggleFilter(state)"
      >
        {{ state }}
      </span>
    </span>
    <span>
        <span class="clear" @click="clearCompleted">clear completed</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 当前处于点击状态filter按钮的值
     */
    filter: {
      type: String,
      required: true
    },
    todoList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  /**
   * 计算属性
   */
  computed: {
    activeItemsCount() {
      return this.todoList.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    /**
     * 触发筛选
     */
    toggleFilter(state) {
      this.$emit('toggle', state);
    },

    /**
     * 清除所有已办
     */
    clearCompleted() {
      this.$emit('clearCompleted');
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs
  display flex
  justify-content space-between
  width 100%
  height 50px
  line-height 50px
  color #666
  border-top 1px solid #ccc
  .number
    padding-left 10px
    span
      color #FF6600
  .item
    margin-right 5px
    cursor pointer
    padding 10px 4px 10px 10px
    border 1px solid #ddd
    border-radius 3px
    &.checked
      color #fff7f7
      background-color #08ffc8
  .clear
    margin-right 5px 
    padding 10px 10px
    border-radius 3px
    color #fff
    background-color #204969
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.12)
    border 1px solid #eee
    cursor pointer
</style>
