var app = new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    newTodoName: '',
    newTodoDate: '',
    newTodoComment: '',
    newReplyComment: '',

    todos: [
      {id: 1, name: '임국태', date: '19.03.03 11:30', comment: '댓글이당1111111111111', class:''},
      {id: 2, name: '민건희', date: '19.03.03 12:30', comment: '댓글이당2222222222222', class:''},
      {id: 3, name: '안상현', date: '19.03.03 16:30', comment: '댓글이당3333333333333', class:''}
    ],
    nextTodoId: 4,

    writer: '글쓴이',
    show: false,

    counter: true,
    number: 10,
    opened: []

  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        name: this.writer,
        date: new Date(),
        comment: this.newTodoComment
        //title: this.newTodoText
      })
      this.newTodoComment = ''
    },
    addReplyTodo: function (i) {
      //const nextIndex = i++;
      this.todos.splice(1, 0, {
        id: this.nextTodoId++,
        name: this.writer,
        date: new Date(),
        comment: this.newReplyComment,
        class: true
      })
      this.newReplyComment = '';
      console.log(todo.id);
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
    },
    edit: function(){

    },
    toggle(id) {
      
      const index = this.opened.indexOf(id);
      //console.log(id);
      if (index > -1) {
        this.opened.splice(index, 1);
        
      } else {
        this.opened.push(id);
        console.log(this.opened);
      }
    }
  }
})