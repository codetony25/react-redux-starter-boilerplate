import './styles/main.styl'

import React from 'react'
import ReactDom from 'react-dom'
// import Router from './routes.jsx'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'


if (module.hot) {
  module.hot.accept()
}

class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

@observer
class TodoListView extends React.Component {
  render() {
    return <div>
      <ul>
        {this.props.todoList.todos.map(todo =>
          <TodoView todo={todo} key={todo.id} />
        )}
      </ul>
      Tasks left: {this.props.todoList.unfinishedTodoCount}
    </div>
  }
}

const TodoView = observer(({todo}) =>
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onClick={() => todo.finished = !todo.finished}
    />{todo.title}
  </li>
);

const store = new TodoList();

ReactDom.render(
  <TodoListView todoList={store} />,
  document.getElementById('app')
)

store.todos.push(
  new Todo("Get Coffee"),
  new Todo("Write simpler code"),
  new Todo("Greatness")
);
store.todos[0].finished = true;
