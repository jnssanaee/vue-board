var article = {
  title : '제목',
  writer : '작성자',
  content : '본문 내용입니당',
  hitCount : '10',
  likeCount : '3',
  writeDate : '20181231010000',
}

var commentList = [
  {
    id: 1,
    content: '댓글이당',
    writer: '민건희',
    writeDate: '20190103111040',
    showCommentInputArea: false,
    showModifyArea: false,
    commentToCommentList: [
      {
        id: 11,
        commentTo : 1,
        content: '대댓글이당',
        writer: '임국태',
        writeDate: '20190104120000',
      },     
    ],
  },
  {
    id: 2,
    content: '댓글이당 댓글이당',
    writer: '안상현',
    writeDate: '20190312141040',
    showCommentInputArea: false,
    showModifyArea: false,
    commentToCommentList: [],
  }
]