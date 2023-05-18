import React, { useEffect, useState } from 'react'
import { FaList, FaPlay, FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import axios from 'axios';
import Comment from '../components/Comment';
const ViewDetail = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  let { movieId } = useParams();
  const [movieDetail,setMovieDetail] = useState();
  
  useEffect(()=>{
    const fetchData = async ()=> {
      try {
        
        const response  = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`)
        setMovieDetail(response.data)
      } catch (error) {
        console.error(error);
      }
  
    }
    fetchData ();
  },[ movieId])

  function handlePlay() {
    navigate(`/player/${movieDetail?.videos?.results[0]?.key}`);
  }
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
        <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className='content'>
        <div className="content-wrap-left">

          <div className='wrap-left'>

          <div className='poster'>
            <img className='poster-path' src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`} alt="" />
          </div>
          <div className="content-right">

          <div className='infor'>
            <h3 className="title"> {movieDetail?.title}
            </h3>
            <div className='overview'>
              <h4 className='overview-title'>Overview</h4>
              <p className='overview-desc'>{movieDetail?.overview}</p>
            </div>

          


            <div className="field">
              <span className='field-name'>Grenres:</span>
              {movieDetail?.genres.map((genre)=> <span key={genre.id} className='field-value'>{genre.name} </span>)}
     
            </div>
            <div className="field">
              <span className='field-name'>View:</span>
              <span className='field-value'>{movieDetail?.popularity}</span>
            </div>
            <div className="field">
              <span className='field-name'>Vote:</span>
              <span className="field-value">{movieDetail?.vote_count}</span>
             
            </div>
            <div className="field">
              <span className='field-name'>Vote average:</span>
              <span className="field-value">{movieDetail?.vote_average}</span>
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
              {movieDetail?.release_date}
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
          <Comment movieId={movieId}/>
        </div>


          <div className="content-ads">
            <img src="https://inanaz.com.vn/wp-content/uploads/2023/03/mau-banner-quang-cao-dep.jpg" alt="" />
          </div>


        

      </div>
      
    </Container>
  )
}

const Container = styled.div`
  .content {
    display:flex;
    padding:30px 40px;
    margin-top: 104px;
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
      // background-color:red;
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




export default ViewDetail