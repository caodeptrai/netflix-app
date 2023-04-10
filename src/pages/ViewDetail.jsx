import React from 'react'
import { FaList, FaPlay, FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const ViewDetail = () => {

  const navigate = useNavigate();

  const handlePlay = ()=> {
    navigate('/player/123')
  }
  return (
    <Container>
      <div className='content'>
        <div className="content-wrap-left">

          <div className='wrap-left'>

          <div className='poster'>
            <img className='poster-path' src="https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" alt="" />
          </div>
          <div className="content-right">

          <div className='infor'>
            <h3 className="title">
            Barbie in the 12 Dancing Princesses
            </h3>
            <div className='overview'>
              <h4 className='overview-title'>Overview</h4>
              <p className='overview-desc'>King Randolph sends for his cousin Duchess Rowena to help turn his daughters, Princess Genevieve and her 11 sisters, into better ladies. But the Duchess takes away all the sisters fun, including the sisters favorite pastime: dancing.Thinking all hope is lost they find a secret passageway to a magical land were they can dance the night away.</p>
            </div>

          


            <div className="field">
              <span className='field-name'>Grenres:</span>
              <span className='field-value'>Animation </span>
              <span>Family</span>
            </div>
            <div className="field">
              <span className='field-name'>View:</span>
              <span className='field-value'>43.529</span>
            </div>
            <div className="field">
              <span className='field-name'>Vote:</span>
              <span className="field-value">941</span>
             
            </div>
            <div className="field">
              <span className='field-name'>Vote average:</span>
              <span className="field-value">7.736</span>
            </div>
            <div className="field">
              <span className='field-name'>Author:</span>
              <span className='field-value'>GenerationofSwine</span>
            </div>
            <div className="field">
              <span className="field-name">
                Release date:
              </span>
              <div className="field-value">
              2006-09-19
              </div>
            </div>
          </div>
            <div className="func">
          
            <button className='func-btn' onClick={()=>handlePlay()}>
              <FaPlay className='func-icon'/>
              Play</button>
            <button className='func-btn'>
              <FaList className='func-icon'/>
              Add</button>
            <button className='func-btn'>
              <FaStar className='func-icon'/>
              Vote</button>
            </div>

          </div>
          </div>
           <Comment>
              <div className="comment-container">

                <h2><span className='slash'>/</span> Comment</h2>
                <hr className='dvider'/>
                <div className="comment-content">
                  <span className='comment-number'>6 comments</span>
                  
                  <ul className='comment-list'>
                      <li className='comment-item'>
                      <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
                      <div className="wrap-2">

                      <span className='name'>Cao</span>
                      <p className="message">Hay</p>
                      <span className='createat'>4 day ago</span>
                      </div>
                      </li>
                      <li className='comment-item'>
                      <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
                      <div className="wrap-2">

                      <span className='name'>Cao</span>
                      <p className="message">Hay</p>
                      <span className='createat'>4 day ago</span>
                      </div>
                      </li>
                      <li className='comment-item'>
                      <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
                      <div className="wrap-2">

                      <span className='name'>Cao</span>
                      <p className="message">Hay</p>
                      <span className='createat'>4 day ago</span>
                      </div>
                      </li>
                      <li className='comment-item'>
                      <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
                      <div className="wrap-2">

                      <span className='name'>Cao</span>
                      <p className="message">Hay</p>
                      <span className='createat'>4 day ago</span>
                      </div>
                      </li>
                      <li className='comment-item'>
                      <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
                      <div className="wrap-2">

                      <span className='name'>Cao</span>
                      <p className="message">Hay</p>
                      <span className='createat'>4 day ago</span>
                      </div>
                      </li>
                      
                  </ul>
                  <div className='comment-form'>
                    <img className='avatar' src="https://img.meta.com.vn/Data/image/2021/09/20/anh-meo-che-anh-meo-bua-15.jpg" alt="" />
                    <textarea className='comment-input' type="text" placeholder='create a comment...' />
                  </div>
                </div>
              </div>
           </Comment>
        </div>


          <div className="content-ads">
            quảng cáo
          </div>


        

      </div>
      
    </Container>
  )
}

const Container = styled.div`
  .content {
    display:flex;
    padding:30px 40px;

    .content-wrap-left {
      flex:1;
    }

    .wrap-left {
      display:flex;
    }
    .poster-path {
      width:300px;
      height:450px;
      border-radius:8px;
    }

    .content-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height:450px;
      
      

      .overview {
        margin-bottom:10px; 
      }

      .field {
        display:flex;
        padding:4px 0;
        

      }

      .field-name {
        color:#ababab;
        margin-right:6px;
      }

      .overview-desc {
        font-size:14px;
        font-weight:400;
      }
    }

    .content-ads {
      width:300px;
      height:450px;
      background-color:red;
    }

    .infor {
      margin-left:30px;

      .title {
        font-size:32px;
      }
    }

    .func {
      display:flex;
      margin-left: 30px;
      gap:10px;
      
      .func-btn {
        padding: 20px;
        background-color: rgb(253, 101, 0);
        width: 116px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        border: 1px solid transparent;
        color:#fff;
        font-size:16px;

        &:hover { 
          background-color: black; 
          border:1px solid white;
          cursor:pointer;
        } 

        .func-icon {
          color:#fff;
          font-size:18px;
          margin-right:4px;
        }
      }
    }
  }
`;



const Comment = styled.div`
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

    .comment-item {
      display:flex;
      gap:10px;
      padding:10px 0;
    }

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

    .comment-form {
      display:flex;
      gap:10px;
      width:100%;
      margin-top:60px;
    }

    .comment-input {
      width:100%;
      height:150px;
      padding:10px
    }
`

export default ViewDetail