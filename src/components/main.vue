<template>
 <div class="box">
   <header>
     <top></top>
   </header>
   <article>
     我是中间
   </article>
   <footer>
     <bottom></bottom>
   </footer>
 </div>
</template>

<script>
  import top from './head'
  import bottom from './foot'

  export default {
    name: 'main',
    data() {
      return {}
    },
    components: {
      top,
      bottom
    }
  }
</script>

<style scoped>

</style>
