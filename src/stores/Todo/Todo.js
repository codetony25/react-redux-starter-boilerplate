import { observable } from 'mobx'

export default class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}