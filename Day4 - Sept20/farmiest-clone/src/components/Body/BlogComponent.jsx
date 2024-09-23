import React from 'react'
import BlogPostCardComponent from './BlogPostCardComponent'

function BlogComponent() {
  return (
    <div className='my-20'>
        <h1 className='text-6xl font-bold text-center'>Fo<span className='underline underline-offset-[20px] custom-underline'>ood B</span>log Posts</h1>
        <div className='grid grid-cols-3 gap-4 px-20 my-10'>
        <BlogPostCardComponent 
            image={"blog_post.png"} 
            title={"Healthy Vegetable Salads To Try"} 
            date={"January 1, 2024"} 
            category={"Vegetables"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh. "}
        />
        <BlogPostCardComponent 
            image={"blog_post.png"} 
            title={"Healthy Vegetable Salads To Try"} 
            date={"January 1, 2024"} 
            category={"Vegetables"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh. "}
        />
        <BlogPostCardComponent 
            image={"blog_post.png"} 
            title={"Healthy Vegetable Salads To Try"} 
            date={"January 1, 2024"} 
            category={"Vegetables"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisi viverra enim curabitur nec vulputate scelerisque. Sapien mattis ullamcorper nulla nec nibh. "}
        />
        </div>
    </div>
  )
}

export default BlogComponent