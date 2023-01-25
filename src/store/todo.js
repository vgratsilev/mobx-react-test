import { makeAutoObservable, observable } from 'mobx';

class Todo {
    todos = [
        { id: 1111, title: 'task 1', completed: false },
        { id: 2222, title: 'task 2', completed: false },
        { id: 3333, title: 'task 3', completed: false },
    ];

    constructor() {
        makeAutoObservable(this);

        // to observe something like { id: 1, title: { id: 1, name: 'task 1' }, completed: false }
        // use third parameter with deep: true
        //makeObservable(this, {}, { deep: true });

        // second parameter used to declare which fields should be observable
        // and you can declare which functions are actions (by default all functions are actions)
        // makeObservable(this, { todos: observable, addTodo: action, computed });

        // function makeAutoObservable do it by default
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeToto(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    completeTodo(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => {
                this.todos = [...this.todos, ...json];
            });
    }
}

export default new Todo();
