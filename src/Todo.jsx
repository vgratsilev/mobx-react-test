import { observer } from 'mobx-react-lite';
import todos from './store/todo';

const Todo = observer(() => {
    return (
        <div className={'todos'}>
            <button type={'button'} onClick={() => todos.fetchTodos()}>
                Load Todos
            </button>
            {todos.todos.map((todo) => (
                <div key={todo.id} className={'todo'}>
                    <input
                        type={'checkbox'}
                        checked={todo.completed}
                        onChange={() => todos.completeTodo(todo.id)}
                    />
                    {todo.title}
                    <button type={'button'} onClick={() => todos.removeToto(todo.id)}>
                        X
                    </button>
                </div>
            ))}
        </div>
    );
});

export default Todo;
