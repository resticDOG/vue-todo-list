<template>
  <div id="test"> Hello {{text}} </div>  
</template>

<script>
export default {

  data() {
    return {
      text : 'World'
    }
  }
  
}
</script>

<style>
#test{
  background-color: darkcyan;
}
</style>
