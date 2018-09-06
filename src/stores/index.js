import HomeStore from './HomeStore';
import ProfileStore from './ProfileStore';
import RepositoryStore from './RepositoryStore';

export default function createStore(initialState = {}) {
  return {
    homeStore: new HomeStore(),
    profileStore: new ProfileStore(),
    repositoryStore: new RepositoryStore()
  }
}
