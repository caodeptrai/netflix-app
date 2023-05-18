import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../utils/firebase-config';
import Message from './Message';
import styled from 'styled-components';
export const Messages = ({movieId}) => {
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'comments',movieId ), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unsubscribe();
        };
    }, [movieId]);

    return (
        <Container>
        <span className='comment-number'> {messages.length} comments</span>
        <ul className='comment-list'>
            {messages.map((m) => (
                <Message message={m} key={m.id} />
            ))}
        </ul>
        </Container>
    );
}

const Container= styled.div`
    .comment-number {
        color:#000;
        font-size:18px;
        font-weight:600;
    }

    .comment-list {

        list-style: none;
        padding: 0px;
        margin-top: 20px;
        overflow-y: scroll;
        max-height: 300px;
    }

   
`
