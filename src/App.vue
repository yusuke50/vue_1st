<script>
import child1 from './child.vue';
import child2 from './child2.vue';
import child3 from './child3.vue';
let tId = 0;

export default {
  mounted() {
    this.$refs.p.innerHTML = '<b>mounted!</b>';
  },
  data() {
    return {
      h1T: 'ABC',
      msg: 'ABC',
      binding1: '',
      binding2: '',
      awesome: false,
      hideCompleted: false,
      newTodo: '',
      todos: [
        { id: tId++, text: 'Learn HTML', done: true },
        { id: tId++, text: 'Learn JavaScript', done: true },
        { id: tId++, text: 'Learn Vue', done: false },
      ],
      greeting: 'in app',
      childmsg: 'not yet',
      child3msg: 'msg3',
      newH1Msg: 'new h1',
    };
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((t) => !t.done)
        : this.todos;
    },
  },
  methods: {
    addCount: function () {
      let eTar = this.$refs.clickBtn;

      let count = parseInt(eTar.getAttribute('data-vno') || '0', 10);
      eTar.setAttribute('data-vno', (count += 1));
      eTar.innerHTML = `click: ${count}`;
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
        this.todos.push({ id: tId++, text: this.newTodo, todo: false });
        this.newTodo = '';
      }
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
    notify() {
      console.log('prevent click');
    },
  },
  components: {
    child1,
    child2,
    child3,
  },
};
</script>

<template>
  <h1 :id="h1T">{{ msg.split('').reverse().join('') }}</h1>
  <h1 id="h1T">{{ msg.split('').reverse().join('') }}</h1>
  <button
    type="button"
    @click="addCount($event)"
    class="btn"
    data-vno="1"
    ref="clickBtn"
  >
    <span class="dot-class">O</span>
    <span>test alert</span>
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

  <p class="mt-3"></p>

  <p ref="p">hello</p>

  <p class="mt-3"></p>

  <child1 :msg="greeting" />
  <child2 @res="(msg) => (childmsg = msg)" />
  <p>{{ childmsg }}</p>
  <child3>message: {{ child3msg }}</child3>

  <p class="mt-3"></p>

  <h1>{{ newH1Msg }}</h1>
  <button type="button" @click="newH1Msg += '!'">append "!"</button>
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>
</template>
