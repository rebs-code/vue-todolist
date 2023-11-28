"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: "Learn JavaScript", done: false },
        { text: "Learn Vue", done: false },
        { text: "Create a todo list", done: false },
        { text: "Learn HTML", done: true },
      ],
      newTodo: "",
    };
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      if (this.newTodo.trim("") === "") {
        this.newTodo = "";
        return;
      }
      this.todos.push({ text: this.newTodo, done: false });
      this.newTodo = "";
    },
  },
}).mount("#app");
