import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from "@mui/icons-material/Apps";
import {Avatar} from '@mui/material';
import '../images/GoogleImage.png';
import Search from '../components/Search';

function Home(){
    return(
        <div className='home'>
            
            <div className='home__header'>
                <div className='home__header_left'>
                    
                        <Link to='/about'>About</Link>
                        <Link to='/store'>Store</Link>
                </div>
                <div className='home__header_right'>
                        <Link to='/gmail'>Gmail</Link>
                        <Link to='/images'>Images</Link>
                        <AppsIcon/>
                        <Avatar/>
                        
                        {/*Icon */}
                        {/*Avatar */}
                </div>
            </div>
            <div className='home_body'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt=""/>
                <div className='home__inputContainer'>
                   <Search />
                </div>
            </div>

        </div>


    )



}

export default Home;



/**
 Notes:
 1. Link tag is used instead of <a> tag so that when that link is hit page doesn't refresh
 */