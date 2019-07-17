<template>
  <div class="item-con">
    <input
      class="toggle"
      type="checkbox" 
    >
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.item-con {
  border-top 1px solid #ccc
  width 100%
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
      content url('../assets/checked.svg')
    }
    &:checked:after {
      content url('../assets/unchecked.svg')
    }
  }
}
</style>
