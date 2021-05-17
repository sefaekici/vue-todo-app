<template>
     <div class="add-todo">
        <input class="todoAddInput" v-model="todo" type="text">
        <button @click="addTodo()" class="todoAddButton">+</button>
      </div>
</template>


<script>
import uniqId from "uniqid";
export default {
    data(){
        return{
            todo:"",
        }
    },
    methods:{
        addTodo(){
            const veri={
                id:uniqId(),
                message:this.todo,
            }
            this.todo="",
            this.$store.commit("addTodos",veri);
            console.log(this.$store.state.todos);
        }
    }
}
</script>

<style>

</style>