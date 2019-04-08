import Vue from 'vue';
import App from './App.vue';
import tableview from './components/tableview.vue';
var css = require('./assets/css/style.css');

new Vue({
  el: '#app',
  render: h => h(tableview)
})
