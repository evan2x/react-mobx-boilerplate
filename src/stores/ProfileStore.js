import { observable, action, runInAction } from "mobx";
import axios from "axios";

export default class ProfileStore {
  @observable id = '';
  @observable name = '';
  @observable avatar = '';
  @observable location = '';
  @observable createdAt = '';
  @observable github = '';
  @observable email = '';

  constructor() {}

  @action
  async fetchUser(name) {
    const { data: user } = await axios.get(`/github/api/users/${name}`);

    runInAction(() => {
      this.id = user.id;
      this.name = user.name;
      this.avatar = user.avatar_url;
      this.location = user.location;
      this.email = user.email;
      this.github = user.html_url;
      this.createdAt = user.created_at;
    });
  }
}
