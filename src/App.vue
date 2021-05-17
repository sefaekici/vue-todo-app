<template>
  <div id="app">
    

    <div class="todo-app">

     
    <appAddTodo></appAddTodo>

     <appTodos></appTodos>
     
    </div>

  </div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
export default {
 components:{
   appAddTodo:AddTodo,
   appTodos:Todos,
 }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}

body{
  background: #ffe2e2;
  
}

#app{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.todo-app{
  width: 500px;
  height: 600px;
  border-radius: 1rem;
  background: #f6f6f6;
  overflow:auto;
}


.add-todo{
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}

.todoAddInput{
  width: 80%;
  height: 50px;
  border-radius: 1rem;
  padding: 0 20px;
  font-size: 24px;
  outline: none;

}
.todoAddButton{
  width: 15%;
  font-size: 30px;
  background: #8785a2;
  border-radius: 10px;
  color: #fff;
}

.todos{
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
 
}

.todos h2{
  text-align: center;
  margin-bottom: 1rem;
  color:#8785a2;
}

.todos ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 3rem;
  margin-bottom: 1.5rem !important;
  
}

.todos ul li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 1rem;
  border: 4px solid #8785a2;
  background: #ffe2e2;
  border-radius: 5px;
}

.todos ul li span{
  margin-left: 5px;
}

.todos ul li div i{
  margin-right:10px;
}
.todos ul li div i:hover{
  opacity: 0.6;
}





</style>
