import { useState } from 'react';
import './App.css';
import posts from './PostData.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [postData, setPostData] = useState(posts)
  const currentUserId = 123;
  return (
    <div>
      <h1>POSTS</h1>
      <p>Total posts: {postData.length}</p>
      <div className='main-container'>
        {
          postData.map(post => (
              <div key={post.id} className='post-card'>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <p>Views: {post.views} | Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}</p>
                  {
                    post.userId === currentUserId && (
                      <div className='post-actions'>
                        <h2 className='action-button'><i class="bi bi-trash3-fill"></i></h2>
                        <h2 className='action-button'><i class="bi bi-pencil-square"></i></h2>
                      </div>
                    )
                  }
              </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
