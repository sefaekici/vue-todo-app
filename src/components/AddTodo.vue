<template>

    <div>
        <div class="add-todo">
             <input class="todoAddInput" v-model="todo" type="text" @keyup.enter="addTodo()">
             <button @click="addTodo()" class="todoAddButton">+</button>
        </div>

        <appTodos></appTodos>
    </div>
    
</template>


<script>
import uniqId from "uniqid";
import Todos from "./Todos";
export default {
    data(){
        return{
            todo:"",
        }
    },
    components:{
        appTodos:Todos,
    },
    methods:{
        addTodo(){

            if(this.todo==""){
                alert("Boş todo kaydedilemez...");
            }
            else{
                const veri={
                    id:uniqId(),
                    message:this.todo,
                }
                this.todo="",
                this.$store.commit("addTodos",veri);
            }   
        }
    }
}
</script>

<style>

</style>