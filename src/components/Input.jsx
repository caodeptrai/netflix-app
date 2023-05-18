import React, { useContext } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import { useParams } from 'react-router-dom';
const Input = () => {
    const [text, setText] = useState("");
    const { currentUser } = useContext(AuthContext);
    let { movieId } = useParams();

    
      const handleSend = async () => {
        try {
            const res = await getDoc(doc(db, "comments", movieId));
            if (!res.exists()) {

                await setDoc(doc(db, "comments", movieId), { messages: [] });

              
            }else {
                await updateDoc(doc(db, "comments", movieId), {
                    messages: arrayUnion({
                        id: uuid(),
                        text,
                        senderId: currentUser.uid,
                        date: Date.now(),
                    }),
                     });
            }

            setText("")
        } catch (error) {
            //create a chat in chats collection

        }
        
      };

      console.log({text});
    
      const handleKey = (e) => {
        e.code === "Enter" && handleSend();
  
        
      };
    
  return (
    <Container>
          <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
          <input 
            className='comment-input' 
            type="text" 
            placeholder='create a comment...' 
            value={text} 
            onChange={(e)=>setText(e.target.value)} 
            onKeyDown={handleKey}/>
    </Container>
  )
}


const Container= styled.div`
    display:flex;
    gap:10px;
    width:100%;
    margin-top:60px;

    .avatar {
        width:48px;
        height:48px;
        border-radius:50%;
        object-fit:cover;
      }
  

    .comment-input {
      width:100%;
      height:80px;
      padding:10px
    }
`

export default Input