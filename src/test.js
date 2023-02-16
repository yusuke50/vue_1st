import { createApp } from 'vue';

const app = createApp({
  data() {
    return {
      active: false,
    };
  },
});

app.mount('body');
