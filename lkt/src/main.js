import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)// 아래와 같이 변환된다고 함

  // #1
  // render: function (createElement) {
  //   return createElement(App);
  // }

  // #2
  // render (createElement) {
  //   return createElement(App);
  // }

  // #3
  // render (h){
  //   return h(App);
  // }

  // #4
  // 참고 : h는 hyperscript의 약자로 HTML 구조를 생성하는 스크립트를 의미. Virtual DOM 구현에서 관행적으로 사용
  //render: h => h(App);
})
