'use client';

import React, { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { StoryUserArray } from '../../../types/storyUser';
import Story from './Story';
import { storyStore } from '../../../Mobx/store/storyStore';

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState<StoryUserArray>([]);
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    // storyStore.setStoryUsers(storyUsers);
  }, []);

  return (
    <div className="flex space-x-2 overflow-x-scroll rounded-sm scrollbar-none">
      {storyUsers.map((user) => {
        return (
          <Story
            key={user.id}
            id={user.id}
            username={user.username}
            img={user.img}
          />
        );
      })}
    </div>
  );
};

export default Stories;
