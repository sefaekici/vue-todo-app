<template>
     <div class="todos">

        <h2>Yapılacaklar Listesi</h2>
        <ul>
         
            <appTodo>
                 <li v-for="todo in todos" :key="todo.id">
                    <span>{{todo.message}}</span>

                    <div>
                        <i @click="updateTodo(todo)" class="fas fa-pen"></i>
                        <i @click="deleteTodo(todo.id)" class="far fa-trash-alt"></i>
                    </div>
            
                </li>
            </appTodo>
         
        </ul>
      </div>
</template>


<script>
import Todo from "./Todo"
export default {
    components:{
        appTodo:Todo,
    },
    methods:{
        deleteTodo(id){
            const updatedTodos=this.todos.filter((todo)=>{
               return todo.id!=id;
            })
            this.$store.commit("updateTodos",updatedTodos);
        },
        updateTodo(todo){
            const updatedTodos=this.todos.filter((todo)=>{
               return todo.id!=id;
            });
        }
    },
    computed:{
        todos(){
            return this.$store.getters.getTodos;
        }
    }
}
</script>