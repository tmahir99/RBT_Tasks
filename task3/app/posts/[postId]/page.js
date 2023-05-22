'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';


const fetchPost = async (postId) => {
  const response = await fetch(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${postId}`);
  const data = await response.json();
  return data;
};

const fetchComments = async (postId) => {
  const response = await fetch(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${postId}/comments`);
  const data = await response.json();
  return data;
};

const fetchTriler = async (imdbId) => {
  const response = await fetch(`https://imdb-api.com/en/API/Trailer/k_9lqp59ej/${imdbId}`);
  const data = await response.json();
  return data;
};

const BlogPostPage = ({ params }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [triler, setTriler] = useState(null);

  useEffect(() => {
    if (params.postId) {
      fetchPost(params.postId)
        .then((data) => {
          setPost(data);
          return data;
        })
        .then((data) => fetchTriler(data.imdbId))
        .then((data) => setTriler(data))
        .catch((error) => {
          console.error('Error:', error);
        });
      fetchComments(params.postId).then((data) => setComments(data));
    }
  }, [params.postId]);
  
  console.log(triler)
  const handleAddComment = async (commentText) => {
    try {
      const newComment = {
        createdAt: new Date().toISOString(),
        text: commentText,
        movieId: params.postId,
        comment: commentText,
      };
  
      const response = await fetch(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${params.postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
  
      if (response.ok) {
        const addedComment = await response.json();
        setComments((prevComments) => [...prevComments, addedComment]);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function formatDate(date) {
    if (!date) return '';

    const dateObj = new Date(date);
    return `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}.`
  }
  

  if (!post) {
    return <div>Loading...</div>;
  }
  console.log(triler);


  return (
    <div>
      <div key={post.id} className="flex flex-col items-center justify-center" style={{ minHeight: '500px' }}>
        <div className="flex flex-col items-center justify-center" style={{borderBottom:"solid red 2px"}}>
          <h1 style={{ color: "red", paddingTop: 20, paddingBottom:"3rem", paddingTop:"5rem" }} className="text-center text-3xl">{post.name}</h1>
          <div className="flex justify-between">
            <div className="flex-1" style={{paddingBottom:"5rem"}}>
              <img style={{borderRadius:"6px"}} className="mx-auto" src={post.imageUrl} alt="naslovna fotografija" height="300px" />
            </div>
            <div className="flex-1 ml-4" style={{justifyContent:'center', verticalAlign:'center', height:"100%"}}>
              <p className="text-justify" style={{ maxWidth: '80ch', paddingBottom:"5rem"}}>
                {post.description}
              </p>
              {triler && <button className="text-xl"><Link style={{ color: "rgb(var(--foreground-rgb))", fontWeight: 'bold', paddingTop:"5rem", bottom:'0' }} href={triler.link ?? ''} target='_blank'>🎥 Watch the trailer</Link></button>}
            </div>
          </div>
        </div>
      </div>


      <h2 className='text-center text-2xl'>Comments:</h2>
      <ul>
        {comments.map(comment => (
         <div key={comment.id} className='text-center comment' data-username={comment.username ?? 'User'} data-created-at={formatDate(comment.createdAt)} >
            {comment.comment}
          </div>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <form
    onSubmit={e => {
      e.preventDefault();
      const commentText = e.target.elements.text.value;
      handleAddComment(commentText);
      e.target.reset();
    }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <h2>Add Comment</h2>
    <div className='comment-add'>
      <input className='input' type="text" name="text" required />
      <input className='button--submit' type="submit" value='Submit'/>
    </div>

  </form>
</div>

    </div>
  );
};

export default BlogPostPage;
