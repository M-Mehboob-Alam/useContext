import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Loader from './Loader';


const Blog = () => {
    const {loading, posts} = useContext(AppContext);
    // console.log(loading);
  return (
    <>
        {
            loading ? ( <Loader></Loader> ) : (
               posts.length === 0 ? (
                <h1>No Post Data Found</h1>
               ): (
                posts.map((post)=> (
                    <div className="card" key={post.id}>
                        <span>By  {post.author}</span> on {post.date}
                        <h6>{post.title}</h6>
                        <img src={post.img} alt="" />
                        <br />
                        <p>{post.content}</p>
                        <p>
                            {post.tags.map((tag, index)=> (
                                <span key={index}> #{tag} </span>
                            ))}
                        </p>
                    </div>

                ))
               )
            )
        }
    </>
  )
}

export default Blog