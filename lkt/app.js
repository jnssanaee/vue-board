    // var toggleComment = new Vue({
    //     el: '#box_comment',
    //     data: {
    //       message: '댓글',
    //       isShow: false
    //     },
    //     methods: {
    //       toggleText: function(){
    //         if(this.message === '댓글'){
    //           this.message = '취소';
    //         } else {
    //           this.message = '댓글';
    //         }
    //       }
    //     }
    // })

var eventBus = new Vue;

const inputSub = {props: ['id'], template: '\
  <div class="area_input sub" id="area_sub">\
    <textarea placeholder="댓글을 입력해주세요"></textarea>\
    <button type="button">등록</button>\
  </div>\
'}


var app = new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    newTodoName: '',
    newTodoDate: '',
    newTodoComment: '',
    showCommentInputArea : false,
    isHidden: false,
    isActive: false,
    hide: false,

    todos: [
      {id: 1, name: '임국태', date: '19.03.03 11:30', comment: '댓글이당1111111111111'},
      {id: 2, name: '민건희', date: '19.03.03 12:30', comment: '댓글이당2222222222222'},
      {id: 3, name: '안상현', date: '19.03.03 16:30', comment: '댓글이당3333333333333'}
    ],
    nextTodoId: 4,

    writer: '글쓴이',
    show: false,

    counter: true,
    number: 10,
    active: false,
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
    countup: function(){
      this.counter = !this.counter;
      if(this.counter == false) {
        this.number += 1
      } else {
        this.number -= 1
      }
    },
    // toggle: function(index){
    //   console.log(index.id);
    //   //this.todos[index.id].active = !this.todos[index].active;
    // },
    remove: function(index){
      this.todos.splice(index, 1)
    },
    edit: function(){

    },
    toggle(id) {
      const index = this.opened.indexOf(id);
      if (index > -1) {
      	this.opened.splice(index, 1)
      } else {
      	this.opened.push(id)
      }
    }
  }
})