import React from 'react'
import { observer } from 'mobx-react'
import todoList from '../../stores/ToDo/TodoList'

@observer
export default class TodoListView extends React.Component {
  render() {
    return <div>
      <ul>
        {todoList.todos.map(todo =>
          <TodoView todo={todo} key={todo.id} />
        )}
      </ul>
      Tasks left: {todoList.unfinishedTodoCount}
    </div>
  }
}
