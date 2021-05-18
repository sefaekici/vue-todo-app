<template>
    <div>
        <h3 class="headerUpdate">TODOYU GÜNCELLE</h3>
        <div class="update-todo">
            <input class="todoAddInput" v-model="todo" type="text" @keyup.enter="updateTodo()">
            <button @click="updateTodo()" class="todoAddButton"><i class="fas fa-pen"></i></button>
        </div>
    </div>
    
</template>


<script>
export default {
    
}
</script>


<style>
.update-todo{
  margin: 25% auto;
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


.headerUpdate{
    text-align: center;
    margin-top:1rem;
    font-size: 2rem;
    color: #8785a2;
}
</style>