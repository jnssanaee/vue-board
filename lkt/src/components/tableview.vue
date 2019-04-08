<style scoped>

section > h1{font-size: 16px; font-weight:normal; padding-bottom: 5px; border-bottom: 1px solid #000;}
h1 + .date{float:right;margin-top: -20px; font-size:12px;}
.area_writer{padding-top:10px;}
.like{float:right}
.like .num{display:inline-block;min-width:15px}
.area_review{padding:20px 0 50px;}
.box_comment{background: #ddd;padding:10px}
p.comment{padding-top:5px;}
.area_comment{padding:10px 0;border-bottom: 1px dotted #000;position:relative;}
.area_comment.replybox{padding: 3px 0 1px 44px!important;background: #cacaca url('/src/assets/images/bg_reply.gif') no-repeat 29px 6px;}
.area_comment > span{margin-right: 6px;}
.area_input{position: relative;padding:10px 90px 0 0;}
.area_input textarea{width:100%;height:80px;;}
.area_input button{position:absolute;right:0;top:10px;display:inline-block;border:1px solid #000;width:80px;line-height:80px;text-align: center;background: #fff;}
.area_input.sub{padding-left: 20px;background:  url('/src/assets/images/bg_reply.gif') no-repeat 6px 12px;}
.area_input.sub textarea{height:27px}
.area_input.sub button{height: 30px;line-height: 30px}
.btn_remove{position:absolute;top:10px;right:5px;}
.btn_edit{position:absolute;top:10px;right:32px;}

</style>

<template>
  <section id="app">
    <h1 class="tit">제목입니다.</h1>
    <p class="date">19.03.03 15:30</p>

    <div class="area_writer">
        <span class="writer">{{writer}}</span>
        |
        <span class="views">조회수 10</span>
        <span class="like" id="like">
            <button @click="countup">좋아요</button>
            <span class="num" a-clock>{{number}}</span>
        </span>
    </div>

    <div class="area_review">
        내용입니다. 내용입니다. 내용입니다.
    </div>


    <div class="box_comment" id="box_comment">
      <div class="area_comment" v-for="(todo, index) in todos" :key="index" :class="{ replybox: todo.class }">
        <span class="index">INDEX : {{ index }} // </span>
        <span class="name">{{ todo.name }}</span>
        <span class="date">{{ todo.date }}</span>
        <button class="btn_comment" @click="toggle(todo.id)" :class="{ opened: opened.includes(todo.id) }">댓글</button>
        <button class="btn_edit" v-if="todo.myComment">수정</button>
        <button class="btn_remove" v-if="todo.myComment" @click="remove(index)">삭제</button>
        <p class="comment">{{ todo.comment }}</p>

        <div class="area_input sub" id="area_sub" v-if="opened.includes(todo.id)">
          <textarea placeholder="댓글을 입력해주세요" v-model="newReplyComment"></textarea>
          <button type="button" @click="addReplyTodo(index)">등록</button>
        </div>
      </div>
      <div class="area_input">
        <textarea name="" id="" v-model="newTodoComment" placeholder="댓글을 입력해주세요"></textarea>
        <button type="button" @click="addNewTodo">등록</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app',
  //el: '#app',
  data() {
    return {
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
    }

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
}
</script>


