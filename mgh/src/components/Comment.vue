<template>
  <div class="box_comment" id="box_comment">
    <div class="area_comment"
        v-for="comment in commentList"
        :key="comment.id">
      <span class="name">{{comment.writer}}</span>
      |
      <span class="date">{{makeFormattedTime(comment.writeDate)}}</span>
      |
      <button type="btn_comment" @click="toggleCommentInputArea(comment)">대댓글</button>
      |
      <button type="btn_comment" @click="toggleCommentModifyArea(comment)">수정</button>
      |
      <button type="btn_comment" @click="deleteComment(comment)">삭제</button>
      |
      <p class="comment" v-show="!comment.showModifyArea">{{comment.content}}</p>
      <div class="area_input" v-show="comment.showModifyArea">
        <textarea v-model="modifiedCommentContent" placeholder="댓글을 입력해주세요"></textarea>
        <button type="button" @click="modifyComment(comment)">등록</button>
      </div>
      <div class="area_input sub" v-show="comment.showCommentInputArea" v-cloak>
        <textarea placeholder="댓글을 입력해주세요"></textarea>
        <button type="button">등록</button>
      </div>
    </div>
    <div class="area_input">
      <textarea v-model="newCommentContent" placeholder="댓글을 입력해주세요"></textarea>
      <button type="button" @click="registerComment()">등록</button>
    </div>
  </div>
</template>

<script>
import commentList from '../data/sampleComment.js'
import dateUtil from '../utilities/dateUtil.js'

export default {
  name: 'Comment',
  data() {
    return {
      commentList : JSON.parse(JSON.stringify(commentList)),
      modifiedCommentContent : '',
      newCommentContent : '',
    }
  },
  mixins: [dateUtil],
  mounted() {
    this.makeFormattedTime()
  },
  methods: {
    registerComment() {
      let id = this.commentList.reduce((acc, val) => Math.max(acc, val), 0) + 1
      let writeDate = '20190315000000'
      this.commentList.push({
        id,
        content: this.newCommentContent,
        writer: '댓글테스트맨',
        writeDate,
        showCommentInputArea: false,
        showModifyArea: false,
        commentToCommentList: [],
      })

      this.newCommentContent = ''

      alert('댓글이 등록되었습니다.')
    },
    modifyComment(modifiedComment) {
      let modifiedCommentIndex = this.commentList.findIndex(
        comment => comment.id === modifiedComment.id
      )
      modifiedComment.content = this.modifiedCommentContent

      this.commentList.splice(modifiedCommentIndex, 1, modifiedComment)

      this.modifiedCommentContent = ''
      
      this.toggleCommentModifyArea(modifiedComment)

      alert('댓글이 수정되었습니다.')
    },
    deleteComment(deletedComment) {
      let deletedCommentIndex = this.commentList.findIndex(
        comment => comment.id === deletedComment.id
      )
      
      this.commentList.splice(deletedCommentIndex, 1)
      
      alert('댓글이 삭제되었습니다.')
    },
    toggleCommentInputArea(comment) {
      comment.showCommentInputArea = !comment.showCommentInputArea
    },
    toggleCommentModifyArea(comment) {
      comment.showModifyArea = !comment.showModifyArea
      this.modifiedCommentContent = comment.showModifyArea ? comment.content : ''
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box_comment{
  background: #ddd;
  padding:10px
}
p.comment{
  padding-top: 5px;
}
.area_comment{
  padding: 10px 0 10px;
  border-bottom: 1px dotted #000;
}
.area_input{
  position: relative;
  padding: 10px 90px 0 0;
}
.area_input textarea{
  width: 100%;
  height: 80px;
}
.area_input button{
  position: absolute;
  right: 0;
  top: 10px;
  display: inline-block;
  border: 1px solid #000;
  width: 80px;
  line-height: 80px;
  text-align: center;
  background: #fff;
}
.area_input.sub{
  padding-left: 20px;
}
.area_input.sub textarea{
  height:50px;
}
.area_input.sub button{
  height: 55px;
  line-height: 55px;
}
</style>
