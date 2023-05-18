import React from 'react'
import styled from 'styled-components';
import Input from './Input';
import { Messages } from './Messages';
const Comment = ({movieId}) => {
  return (
    <Container>
    <div className="comment-container">

      <h2><span className='slash'>/</span> Comment</h2>
      <hr className='dvider'/>
      <div className="comment-content">
       <Messages movieId={movieId}/>
        <Input/>
      </div>
    </div>
 </Container>
  )
}


const Container= styled.div`
    .comment-container {
      margin-top:30px;
    }
    .slash {
      color:rgb(253, 101, 0);
    }

    .dvider {
      width: 100%;
    background-color: rgb(204, 204, 204);
    margin-top: 6px;
    border: 1px solid transparent;
    border-top: 1px;
    }

    .comment-content {
      background-color:white;
      padding:20px;
      margin-top:20px;
      border-radius:8px;
    }

    
   

   
`

export default Comment