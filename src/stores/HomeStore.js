import { observable, action, runInAction } from "mobx";
import axios from "axios";

export default class HomeStore {
  @observable content = '';

  constructor() {}

  @action
  async fetchIntro() {
    const { data: result } = await axios.get('/api/hello');

    runInAction(() => {
      this.content = result.data;
    });
  }
}
