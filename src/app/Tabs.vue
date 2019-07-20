<template>
  <div class="tabs">
    <span class="number">2 items left</span>
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
    <span class="clear" @click="clearCompleted">clear completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  methods: {
    /**
     * 触发筛选
     */
    toggleFilter(state) {

    },

    /**
     * 清除所有已办
     */
    clearCompleted() {

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
  .item
    padding 0 5px
  .clear
    padding-right 10px
    cursor pointer
</style>
