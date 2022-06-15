<template>
  <div class="my-todo">

    <div class="title has-text-centered">
      Todo list
    </div>

    <form @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded pr-2">
          <input class="input" type="text" placeholder="Add a todo" v-model="newTodoContent">
        </p>
        <p class="control">
          <button class="button is-info" :disabled="!newTodoContent">
            Add
          </button>
        </p>
      </div>
    </form>


    <div class="card mb-5" v-for="todo in todos">
      <div class="card-content">
        <div class="content">

          <div class="columns is-mobile">
            <div class="column">
              {{ todo.content }}
            </div>
            <div class="column is-5 has-text-right">
              <button class="button is-light">
                &check;
              </button>
              <button class="button is-danger ml-2" @click="deleteTodo(todo.id)">
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'

const todos = ref([
  {
    id: 'id1',
    content: 'Shave my beard',
    done: false
  },
  {
    id: 'id2',
    content: 'Wash my beard',
    done: false
  }
])

const newTodoContent = ref('')


const addTodo = () => {
  const newTodo = {
    id: uuidv4(),
    content: newTodoContent.value,
    done: false
  }
  todos.value.unshift(newTodo)
  newTodoContent.value = ''
}

const deleteTodo = id => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<style scoped>
@import '../node_modules/bulma/css/bulma.min.css';

.my-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>