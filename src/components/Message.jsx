import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, {  useEffect, useRef, useState } from 'react'
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ReactTimeAgo from 'react-time-ago';
import { db } from '../utils/firebase-config';
import styled from 'styled-components';
const Message = ({message}) => {

    const [chat, SetChat] = useState([]);
    const ref = useRef();

     TimeAgo.addLocale(en);
      useEffect(() => {
        const q = query(collection(db, 'users'), where('uid', '==', message.senderId));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                SetChat(doc.data());
            });
        });

        ref.current?.scrollIntoView({ behavior: 'smooth' });
        return unsubscribe;
    }, [message]);


    
  return (
    <Container className='comment-item'>
        <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
        <div className="wrap-2">

        <span className='name'>{chat.email}</span>
        <p className="message">{message.text}</p>
        <ReactTimeAgo className='createat' date={message.date} locale="en-US" />
        </div>
    </Container>
  )
}


const Container= styled.li`
   
    display:flex;
    gap:10px;
    padding:10px 0;

    .name {
      color: #385898;
      font-weight:600;
    }

    .message {
      font-size:13px;
      color:#1f1f1f;
      font-weight:450;
      margin:0;
    }
    .createat {
      font-size:10px;
      color:#ababab;
      
    }

    .avatar {
      width:48px;
      height:48px;
      border-radius:50%;
      object-fit:cover;
    }

   
`

export default Message