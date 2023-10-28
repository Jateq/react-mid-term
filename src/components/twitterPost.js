

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './twitterPost.css';



const TwitterPost = () => {
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([
        { text: 'I am a 4 gpa enjoyer', username: 'Uldana', likes: 0, comments: [] },
        { text: 'ios!!!!!!', username: 'Chiefzhantr', likes: 0, comments: [] },
        { text: 'Voenka is annoying!', username: 'Nurbek', likes: 0, comments: [] },
        { text: 'Im in Zimran, there is so much merch that i do not need to buy clothes', username: 'Kamazhay', likes: 0, comments: [] },
        { text: 'Why am in FizMath((((', username: 'Aida', likes: 0, comments: [] },
        { text: 'Chemistry is 5!!!!! ', username: 'Tomiris', likes: 0, comments: [] },
        { text: 'Thanks for my friends, what a insane gift for birthday', username: 'Baha', likes: 0, comments: [] },
    ]);

    const handlePostTextChange = (event) => {
        setPostText(event.target.value);
    };

    const handleTweetClick = () => {
        if (postText !== '') {
            const newPost = { text: postText, username: 'You', likes: 0, comments: [] };
            posts.unshift(newPost);
            setPosts([...posts]);
            setPostText('');
            return newPost;
        }
    };

    const handleLikeClick = (index) => {
        const newPosts = [...posts];
        newPosts[index].likes++;
        setPosts(newPosts);
    };

    const handleCommentClick = (index, comment) => {
        const newPosts = [...posts];
        newPosts[index].comments.push(comment);
        setPosts(newPosts);
    };

    return (
        <div>
            <div className="tweet-input">
                <textarea placeholder="What's happening?" value={postText} onChange={handlePostTextChange} />
                <button onClick={handleTweetClick}>Tweet</button>
            </div>
            <div className='tweets-center'>
            <div className="tweets">
                {posts.map((post, index) => (
                        <div className="tweet">
                    <Link to={{ pathname: `/post${index}`, state: { tweet: post } }} key={index}>

                            <div className="user-info">
                                <h3>{post.username}</h3>
                            </div>
                    </Link>

                            <p>{post.text}</p>
                            <div className="tweet-actions">
                                <button onClick={() => handleLikeClick(index)}>Like ({post.likes})</button>
                            </div>
                        </div>
                ))}
            </div>
            </div>
        </div>
    );
};





export default TwitterPost;
