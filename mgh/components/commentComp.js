Vue.component('comment-comp', {
  template : `
    <div>
      <div class="box_comment" id="box_comment">
        <div class="area_comment"
            v-for="comment in commentList"
            :key="comment.id">
          <span class="name">{{comment.writer}}</span>
          <span class="date">{{getFormatedTime(comment.writeDate)}}</span>
          <button type="btn_comment" @click="toggleCommentInputArea(comment)">대댓글</button>
          <button type="btn_comment" @click="toggleCommentModifyArea(comment)">수정</button>
          <button type="btn_comment" @click="deleteComment(comment)">삭제</button>
          <p class="comment" v-show="!comment.showModifyArea">{{comment.content}}</p>
          <div class="area_input" v-show="comment.showModifyArea">
            <textarea v-model="modifiedCommentContent" placeholder="댓글을 입력해주세요"></textarea>
            <button type="button" @click="modifyComment(comment)">등록</button>
          </div>
          <div class="area_input sub" v-show="comment.showCommentInputArea" v-clock>
            <textarea placeholder="댓글을 입력해주세요"></textarea>
            <button type="button">등록</button>
          </div>
        </div>
        <div class="area_input">
          <textarea v-model="newCommentContent" placeholder="댓글을 입력해주세요"></textarea>
          <button type="button" @click="registerComment()">등록</button>
        </div>
      </div>
    </div>
    `,
  data() {
    return {
      modifiedCommentContent : '',
      newCommentContent : '',
      commentList : JSON.parse(JSON.stringify(commentList)),
    }
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

      newCommentContent = ''

      alert('댓글이 등록되었습니다.')
    },
    modifyComment(modifiedComment) {
      let modifiedCommentIndex = this.commentList.findIndex(
        comment => comment.id === modifiedComment.id
      )
      modifiedComment.content = modifiedCommentContent

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