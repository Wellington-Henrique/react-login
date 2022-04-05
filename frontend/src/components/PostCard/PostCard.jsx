import React from 'react'
import './PostCard.css'

const PostCard = ({user}) =>  {
    return (
        <div className="postcard">
            <div className='img-profile' src="" alt="" />
            <h1>{user.name}</h1>

            {user.skills.map((skills) => {
                return <span>#{skills}</span>
            })}

            <div><button>Agendar</button></div>
        </div> 
    )
}

export default PostCard;