<template>
    <div class="add-todo">
        <input class="todoAddInput" v-model="todo" type="text" @keyup.enter="updateTodo()">
        <button @click="updateTodo()" class="todoAddButton"><i class="fas fa-pen"></i></button>
    </div>
</template>


<script>
export default {
    
}
</script>