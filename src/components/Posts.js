import React from 'react';
import Post from './Post';

function Posts({selectedUser, posts}) {
    const userPosts = posts.filter((post) => post.userId === selectedUser.id);

    return (
        <div className="posts">
            <h2>Posts by {selectedUser.name}</h2>
            {userPosts.map((post) => <Post key={post.id} post={post} />)}
        </div>
        
    );
}

export default Posts;