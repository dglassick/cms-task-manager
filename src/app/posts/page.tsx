import React from 'react'
import markdownToHtml from '../_actions/markdownToHtml'

const page = () => {
  return (
    <div>page</div>
  )
}

export async function getStaticProps() {

    
    const content = await markdownToHtml(post.content || '')
  
    return {
      props: {
        post: {
          ...post,
          content,
        },
      },
    }
  }

export default page