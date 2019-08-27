import { observable, action, runInAction } from 'mobx';
import axios from 'axios';

export default class Repository {
  @observable list = [];

  @action
  async fetchRepos(name) {
    const { data: repos } = await axios.get(`/github/api/users/${name}/repos`);

    runInAction(() => {
      this.list = repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        desc: repo.description,
        lang: repo.language,
        url: repo.html_url
      }));
    });
  }
}
