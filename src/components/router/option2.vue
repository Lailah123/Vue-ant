<template>
  <div>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <h3>{{str}}</h3>
    <!-- <div class="tl">
        <span>add total</span>  
        <input type="text" name="newTodoText" v-model="newTodoText" id="in">
        <button v-on:click="addNewTodo">add</button>
        <li v-for="(todo,index) in todos" :key="index" class="tl">
        {{index}} - {{todo.title}}
        <button v-on:click="removeTodo">remove</button>
        </li>
    </div> -->
  </div>
</template>

<script>
export default {
  // props: ["str"],
  props: ["str"],
//   data() {
//     return {
//       newTodoText: "",
//       todos: [
//         {
//           id: 1,
//           title: "Do the dishes"
//         },
//         {
//           id: 2,
//           title: "Take out the trash"
//         },
//         {
//           id: 3,
//           title: "Mow the lawn"
//         }
//       ],
//       nextTodoId: 4
//     };
//   },
//   methods: {
//     addNewTodo: function() {
//       console.log(this.newTodoText);
//       this.todos.push({
//         id: this.nextTodoId++,
//         title: this.newTodoText
//       });
//       this.newTodoText = "";
//     },
//     removeTodo:function(){
//         this.todos.pop(1);
//     }
//   }
};
</script>

<style>
h3 {
  text-align: center;
}
.tl{
    line-height: 30px;
    margin-left: 36px;
    padding: 16px;
}
</style>