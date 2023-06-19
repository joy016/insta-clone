import { observable, action } from 'mobx';
import { StoryUserArray } from '../../types/storyUser';

interface IStoryStore {
  storyUsers: StoryUserArray;
  setStoryUsers: (users: StoryUserArray) => void;
}

export const storyStore: IStoryStore = observable({
  storyUsers: [],
  setStoryUsers: action(function (this: IStoryStore, users: StoryUserArray) {
    this.storyUsers = users;
  }),
});
