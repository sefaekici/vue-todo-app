<template>
     <div class="todos">

        <h2>Yapılacaklar Listesi</h2>
        <ul>
         
            <appTodo></appTodo>
         
        </ul>
      </div>
</template>


<script>
import Todo from "./Todo"
export default {
    components:{
        appTodo:Todo,
    }
}
</script>