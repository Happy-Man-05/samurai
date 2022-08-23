import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div>
            <div> my post</div>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <Post message='hi, how are you' likeCount='0' />
            <Post message='I love you' likeCount='26' />
        </div>
    );
};

export default MyPost;