import React from 'react';
import MyPost from './MyPosts/MyPost';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img} src="https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg" alt="" />
            </div>

            <MyPost />
        </div>
    );
};

export default Profile;