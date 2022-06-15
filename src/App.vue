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


    <div class="card mb-5" v-for="todo in todos" :class="{ 'has-background-success-light': todo.done }">
      <div class="card-content">
        <div class="content">

          <div class="columns is-mobile">
            <div class="column" :class="{ 'has-text-success line-through': todo.done }">
              {{ todo.content }}
            </div>
            <div class="column is-5 has-text-right">
              <button class="button" :class="todo.done ? 'is-success' : 'is-light'" @click="toggleDone(todo.id)">
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
import { ref, onMounted } from 'vue'
import { collection, doc, onSnapshot, addDoc, deleteDoc, updateDoc } from "firebase/firestore"
import { db } from '@/firebase'

const todosCollectionRef = collection(db, 'todos')

const todos = ref([
  // {
  //   id: 'id1',
  //   content: 'Shave my beard',
  //   done: false
  // },
  // {
  //   id: 'id2',
  //   content: 'Wash my beard',
  //   done: true
  // }
])

onMounted(() => {
  onSnapshot(todosCollectionRef, (querySnapshot) => {
    const fbTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      fbTodos.push(todo)
    })
    todos.value = fbTodos
  })
})

const newTodoContent = ref('')

const addTodo = () => {
  addDoc(todosCollectionRef, {
    content: newTodoContent.value,
    done: false
  })
  newTodoContent.value = ''
}

const deleteTodo = id => {
  deleteDoc(doc(todosCollectionRef, id))
}

const toggleDone = id => {
  const index = todos.value.findIndex(todo => todo.id === id)

  updateDoc(doc(todosCollectionRef, id), {
    done: !todos.value[index].done
  })
}
</script>

<style scoped>
@import '../node_modules/bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

.my-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
}

.column {
  align-self: center;
}

.line-through {
  text-decoration: line-through;
}
</style>