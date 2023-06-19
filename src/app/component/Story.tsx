import React from 'react';

interface StoryProps {
  username: string;
  img: string;
  id: number;
}

const Story: React.FC<StoryProps> = ({ username, img, id }) => {
  return (
    <div key={id} className="relative">
      <img
        src={img}
        className="rounded-full h-14 p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-105 transition-tranform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
