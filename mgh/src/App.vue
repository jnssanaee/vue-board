<template>
  <div id="app">
    <Article/>
    <Comment/>
  </div>
</template>

<script>
import Article from './components/Article.vue'
import Comment from './components/Comment.vue'

export default {
  name: 'app',
  components: {
    Article, Comment
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
button {
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #000;
  background: none;
}
body {
  padding: 20px;
}
[v-cloak]{
  display: none
}
</style>
