import { observable, action, runInAction } from 'mobx';
import axios from 'axios';

export default class Home {
  @observable content = '';

  @action
  async fetchIntro() {
    const { data: result } = await axios.get('/api/hello');

    runInAction(() => {
      this.content = result.data;
    });
  }
}
