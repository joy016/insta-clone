import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

const Feed = () => {
  return (
    <>
      <div className="bg-white h-32 flex justify-center items-center px-3.5 border shadow-md">
        <Stories />
      </div>
      <div>
        <Posts />
      </div>
    </>
  );
};

export default Feed;
