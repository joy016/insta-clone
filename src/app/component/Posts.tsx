import React from 'react';
import Post from './Post';

const dummyPostData = [
  {
    id: 1,
    userName: 'Dummy_User123',
    userImg:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    postImg:
      'https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    userName: 'Bokyang016',
    userImg:
    'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    postImg:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const Posts = () => {
  return (
    <>
      {dummyPostData.map(({ id, userName, userImg, userPost, postImg }) => {
        return (
          <Post
            key={id}
            id={id}
            userName={userName}
            userImg={userImg}
            userPost={userPost}
            postImg={postImg}
          />
        );
      })}
    </>
  );
};

export default Posts;
