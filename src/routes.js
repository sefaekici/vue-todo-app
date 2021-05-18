import UpdateTodo from "./components/UpdateTodo.vue";
import AddTodo from "./components/AddTodo.vue";

export const routes = [
  { path: "", component: AddTodo },
  { path: "/edit", component: UpdateTodo }
];
