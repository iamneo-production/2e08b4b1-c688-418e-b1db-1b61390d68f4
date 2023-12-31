import React, { useEffect, useState ,Component} from "react";
import axios from 'axios';
import {FcGoogle} from "react-icons/fc";
import { SocialIcon } from "react-social-icons";
import { FaRegNewspaper } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaBookmark } from 'react-icons/fa';
import "../Components/compo.css";
import { Button } from 'antd'
import { AiFillFire } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import image1 from '../asserts/newsimg1.jpg';
import image2 from '../asserts/newsimg2.jpg';
import image3 from '../asserts/newsimg3.jpg';
import { FaHome } from 'react-icons/fa';
// import { SocialIcon } from "react-social-icons";
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import MouseCursor from "./cursor";
import "./compo.css";

import Side from "../pagebars/sidebar";
function Hom()
{
  const [articles,setArticles] = useState([]);
    
  useEffect(() => {
      axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=58f87828eb9a4aa581360633875d3d05')
      .then(response => setArticles(response.data.articles.slice(0,12)))
      .catch(error => console.log(error));
  },[]);
  
    return(
     <div className="hom">
    <div className='tot'>
    <MouseCursor />
   <Side/>
      <div className="api-fetch-main">
                        {articles.map(article => (
                          <div className="api-fetch-mai" key={article.title}>
                              <h2 className="api-fetch-title">{article.title}</h2>
                                <img className="api-fetch-img" src={article.urlToImage} alt="img" />
                                <p className="api-fetch-desc">{article.description}</p>
                                <button className="api-fetch-button"><span className="api-fetch-button-two"><a id="bua" href={article.url}>Click</a></span><span>Read more</span></button>
                            </div>
                        ))}
                        </div>
    </div>
      <div className='foot'>
        <div className='footot'>
        <div className='link'>
       <h3 className='head'>Links</h3>
       <ul id='ju'>
       <li> <a className='linking' href='https://www.bbc.com/news'>BBC</a></li>
       <li> <a className='linking' href='https://www.aljazeera.com/'>Al jazeera</a></li>
       <li> <a className='linking' href='https://www.polimernews.com/'>Polimer news</a></li>
       <li> <a className='linking' href='https://www.timesnownews.com/'>Times now</a></li>
       <li> <a className='linking' href='https://edition.cnn.com/'>CNN</a></li>
       <li> <a className='linking' href='https://news.sky.com/'>Sky</a></li>
       </ul>
       </div>
       <div className='media'>
        <h3 className='head'>Follow us on</h3>
      <div className='some'>
      <div> <SocialIcon className='i' url="https://twitter.com/BBC" style={{fill:"#ffffff",width: "40px", height: "40px"}} fgColor="#ffffff"/></div>
      <div><SocialIcon className='i' url="https://www.instagram.com/bbcnews/?hl=en"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
      <div><SocialIcon className='i' url="https://www.linkedin.com/company/bbc/?originalSubdomain=in"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
      <div><SocialIcon className='i' url="https://www.facebook.com/bbc/"style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
      <div> <SocialIcon className='i' url="https://www.youtube.com/c/bbcnews" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
      <div> <SocialIcon className='i' url="https://www.reddit.com/r/bbc/" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
       </div>
       </div>
       <div className="cont">
        <h3 className="head">Contact</h3>
        <div className="no">
          <ul>
           <li className="co"><FaHome className="f" style={{color:'yellow',fontSize:'20px'}}/>Downtown Dubai, Dubai, United Arab Emirates,31166 </li>
            <li className="co"><AiOutlineMail className="f" style={{color:'orange',fontSize:'20px'}}/>NewsRounder@gmail.com</li>
            <li className="co"><FiPhoneCall className="f" style={{color:'grey',fontSize:'20px'}}/><a href="https://www.linkedin.com/in/dharanidharan-senthilkumar-b4244b232/?originalSubdomain=in">+91 6385 854 466</a></li>
            <li className="co"><FaWhatsapp className="f" style={{color:'green',fontSize:'20px'}}/>93603 59101</li>
          </ul>
        </div>
        </div>
       </div>
      <div id='last'>Copyright © 2023 www.news traffic.com</div>
      </div>
    </div>
     
    )
}
export default Hom;





