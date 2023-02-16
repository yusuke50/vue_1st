<script>
let tId = 0;

export default {
  data() {
    return {
      h1T: 'ABC',
      msg: 'ABC',
      binding1: '',
      binding2: '',
      awesome: false,
      newTodo: '',
      todos: [
        { id: tId++, text: 'Learn HTML' },
        { id: tId++, text: 'Learn JavaScript' },
        { id: tId++, text: 'Learn Vue' },
      ],
    };
  },
  methods: {
    addCount: function () {
      let eTar = this.$refs.clickBtn;
      let count = parseInt(eTar.getAttribute('data-vno') || '0', 10);
      eTar.setAttribute('data-vno', (count += 1));
    },
    iptChange1: (e) => {
      let eTar = e.target || e.srcElement;
      document.querySelector('.binding1').innerHTML = eTar.value;
    },
    toggle: function () {
      this.awesome = !this.awesome;
    },
    addTodo() {
      if (this.newTodo) {
        this.todos.push({ id: tId++, text: this.newTodo });
        this.newTodo = '';
      }
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
};
</script>

<template>
  <h1 :id="h1T">{{ msg.split('').reverse().join('') }}</h1>
  <h1 id="h1T">{{ msg.split('').reverse().join('') }}</h1>
  <button type="button" @click="addCount($event)" data-vno="1" ref="clickBtn">
    test alert
  </button>
  <input type="text" @change="iptChange1" />
  <p class="binding1">{{ binding1 }}</p>
  <input v-model="binding2" />
  <p>{{ binding2 }}</p>

  <p class="mt-3"></p>

  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <p class="mt-3"></p>

  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
#ABC {
  color: red;
}

#h1T {
  color: wheat;
}

.mt-3 {
  margin-top: 1.5rem;
}
</style>
