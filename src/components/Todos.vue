<template>
     <div class="todos">

        <h2>YAPILACAKLAR LİSTESİ</h2>
        <ul>
         
            <appTodo>
                 <li v-for="todo in todos" :key="todo.id">
                    <span>{{todo.message}}</span>

                    <div>
                        <i @click="redirectUpdateTodo(todo.id,todo)" class="fas fa-pen"></i>
                        
                        <i @click="deleteTodo(todo.id,todo)" class="far fa-trash-alt"></i>
                    </div>
            
                </li>
            </appTodo>
         
        </ul>
      </div>
</template>


<script>
import Todo from "./Todo"
import storage from "store";
export default {
    data(){
        return{
           
        }
    },

    components:{
        appTodo:Todo,
    },
    methods:{
        deleteTodo(id){
            const updatedTodos=this.todos.filter((todo)=>{
               return todo.id!=id;
            })
            storage.set("todos",updatedTodos);
            this.$store.commit("updateTodos",updatedTodos);
        },
        redirectUpdateTodo(id,todo){
            this.$router.push({path:"/edit/"+id,query:{todo:todo}});
        }
    },
    computed:{
        todos(){
            return this.$store.getters.getTodos;
        }
    }
}
</script>