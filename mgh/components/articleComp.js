Vue.component('article-comp', {
  template : `
    <div>
      <h1 class="tit">{{article.title}}</h1>
      <p class="date">{{getFormatedTime(article.writeDate)}}</p>
      <div class="area_writer">
        <span class="writer">{{article.writer}}</span>
        |
        <span class="views">{{"조회수 " + article.hitCount}}</span>
        <span class="like" id="like">
          <button @click="clickLikeButton()">좋아요</button>
          <span class="num" v-clock>{{article.likeCount}}</span>
        </span>
      </div>
      <div class="area_review">
        {{article.content}}
      </div>
    </div>
    `,
  methods : {
    getFormatedTime(timestamp) {
      const year = timestamp.substring(0, 4).substring(2, 4)
      const month = timestamp.substring(4, 6)
      const day = timestamp.substring(6, 8)
      const hour = timestamp.substring(8, 10)
      const minutes = timestamp.substring(10, 12)

      return year + '.' + month + '.' + day + ' '
          + hour + ':' + minutes
    }
  },
})