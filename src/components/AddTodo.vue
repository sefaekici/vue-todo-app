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
import storage from "store";
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
                this.todo="";
                let array=storage.get("todos");
                array.push(veri);
                storage.set("todos",array);
                this.$store.commit("addTodos",veri);
            }   
        }
    }
}
</script>

<style>

</style>