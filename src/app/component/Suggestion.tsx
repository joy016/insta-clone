'use client';

import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';

type SuggestionUsers = {
  username: string;
  jobTitle: string;
  id: number;
};

const Suggestion = () => {
  const [suggest, setSuggest] = useState<SuggestionUsers[]>([]);
  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggest(suggestions);
  }, []);

  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <h2 className="font-semibold text-gray-400">Suggestion for you</h2>
        <h4 className="text-gray-500">See all</h4>
      </div>
      {suggest.map(({ id, username, jobTitle }) => (
        <div key={id} className="flex justify-between items-center mt-4">
          <img
            className="h-10 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2>{username}</h2>
            <h3>{jobTitle}</h3>
          </div>
          <button className="text-blue-500 font-semibold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
