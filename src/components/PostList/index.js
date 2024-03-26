import React from 'react'
import PropTypes from 'prop-types'

const PostList = ({postList}) => {
    
  return (
    <ul>
        {postList.map(post => {
            return <li key={post.id}>{post.title} - { post.author }</li>
        })}
    </ul>
  )
}

PostList.propTypes = {
    postList: PropTypes.array
}

export default PostList