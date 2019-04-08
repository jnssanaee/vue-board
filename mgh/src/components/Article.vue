<template>
  <section>
    <h1 class="tit">{{article.title}}</h1>
    <p class="date">{{makeFormattedTime(article.writeDate)}}</p>
    <div class="area_writer">
      <span class="writer">{{article.writer}}</span>
      |
      <span class="views">{{"조회수 " + article.hitCount}}</span>
      <span class="like" id="like">
        <button @click="clickLikeButton()">좋아요</button>
        <span class="num" v-cloak>{{article.likeCount}}</span>
      </span>
    </div>
    <div class="area_review">
      {{article.content}}
    </div>
  </section>
</template>

<script>
import article from '../data/sampleArticle.js'
import dateUtil from '../utilities/dateUtil.js'

export default {
  name: 'Article',
  data() {
    return {
      article : JSON.parse(JSON.stringify(article)),
    }
  },
  mixins: [dateUtil],
  mounted() {
    this.makeFormattedTime()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 + .date{ 
  float: right;
  margin-top: -20px;
}
.area_writer {
  padding-top: 10px;
}
.like {
  float: right
}
.like .num {
  display: inline-block;
  min-width: 15px
}
.area_review {
  padding:20px 0 50px;
}
</style>
