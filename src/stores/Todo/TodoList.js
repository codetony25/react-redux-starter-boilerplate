import { observable, computed } from 'mobx'

class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

export default TodoList