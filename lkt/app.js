var app = new Vue({
  el: '#app',
  data: {
    newTodoComment: '',
    newReplyComment: '',
    
    todos: [
      {id: 1, name: '임국태', date: '19.03.03 11:30', comment: '댓글이당11'},
      {id: 2, name: '민건희', date: '19.03.03 12:30', comment: '댓글이당22'},
      {id: 3, name: '안상현', date: '19.03.03 16:30', comment: '댓글이당33'}
    ],
    nextTodoId: 4,
    writer: '글쓴이',

    counter: true,
    number: 10,
    opened: []

    //myComment: false
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        name: this.writer,
        date: new Date(),
        comment: this.newTodoComment,
        myComment: true
      })
      this.newTodoComment = '';
    },
    addReplyTodo: function (index) { 
      var next = ++index;
      this.todos.splice(next, 0, { // 가운데 인자를 0 선언 시 다음 인자부터 추가된다.
        name: this.writer,
        date: new Date(),
        comment: this.newReplyComment,
        class: true
      })
      this.newReplyComment = '';
    },
    toggle(id) {
      const indexReply = this.opened.indexOf(id); //indexOf내장함수 : 존재할경우 index, 아닐경우 -1 반환
      if (indexReply > -1) {
        this.opened.splice(indexReply, 1);
      } else {
        this.opened.push(id);
      }
    },
    countup: function(){
      this.counter = !this.counter;
      if(this.counter == false) {
        this.number += 1
      } else {
        this.number -= 1
      }
    },
    remove: function(index){
      this.todos.splice(index, 1)
    }
    // editReply: function(index){
    //   this.todos.edit = 'editmode'
    // }
  }
})