import React from 'react'

const BlogCard = ({blog}) => {
    console.log(blog)
  return (
    <div className='blog'>
        <div className="img">
            <img className="blog_img" src={blog?.image} alt={blog?.name} />
        </div>

        <div className="blog_content">
          <div className="title">
            {blog?.title}
          </div>
        </div>
    </div>
  )
}

export default BlogCard