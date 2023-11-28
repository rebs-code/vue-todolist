"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'Learn JavaScript', done: false },
                { text: 'Learn Vue', done: false },
                { text: 'Create a todo list', done: false },
                { text: 'Learn HTML', done: true },
            ],
        }
    }
}).mount('#app');

