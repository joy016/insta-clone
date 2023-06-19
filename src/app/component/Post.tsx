'use client';

import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';


interface PostProps {
  userName: string;
  userImg: string;
  id: number;
  userPost: string;
  postImg: string;
}

const Post: React.FC<PostProps> = ({
  id,
  userName,
  userImg,
  userPost,
  postImg,
}) => {
  const [hasLiked, setHasLiked] = useState(false);

  const handleLiked = () => {
    setHasLiked(!hasLiked);
  };
  return (
    <div key={id} className="bg-white my-9 border rounded-md">
      <div className="flex px-6 py-7 items-center space-x-4">
        <img src={userImg} className="h-12 rounded-full object-cover border " />
        <p className="font-bold flex-1">{userName}</p>
        <BsThreeDots />
      </div>

      <img src={postImg} className="object-cover w-full" />

      <div className="flex justify-between mx-6 mt-6">
        <div className="flex space-x-4">
          {hasLiked ? (
            <FaRegHeart
              className="h-7 w-7 hover:scale-125 transition-tranform duration-200 ease-out"
              onClick={handleLiked}
            />
          ) : (
            <FaHeart
              className="h-7 w-7 hover:scale-125 transition-tranform duration-200 ease-out text-red-600"
              onClick={handleLiked}
            />
          )}
          <AiOutlineMessage className="h-7 w-7 hover:scale-125 transition-tranform duration-200 ease-out" />
        </div>
        <BsBookmark className="h-7 w-7 hover:scale-125 transition-tranform duration-200 ease-out" />
      </div>
      <p className="mx-6 mt-2 font-medium">1 Likes</p>
      <div className="flex mx-6 mt-2 space-x-3">
        <p className="font-medium">{userName}</p>
        <p>{userPost}</p>
      </div>
      <form className="flex items-center p-4">
          <BsEmojiSmile className="h-7 w-7" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment..."
          />
          <button
            type="submit"
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
    </div>
  );
};

export default Post;
