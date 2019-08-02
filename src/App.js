import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sunset from './Images/sunset2.jpg';
import Canyon from './Images/CanyonFalls.jpg';
import Me from './Images/myself.jpg';
import Carousel from './Components/Carousel';
import Carousel2 from './Components/Carousel2';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showMenu: false, 

    }
  }
  
  render() {
    return (
      <div className='App' >
        <div className={this.state.showMenu ? 'menu menu-slide' : 'menu'}>
          
        </div>
        <nav>
           
          <div>
            <h1 className='nav-h1'>Jason Langford</h1>
          </div>
            <div className='nav-icon'
                      onClick={() => this.setState({
                        showMenu:!this.state.showMenu
                      }) }>
                       <div></div>
            </div>
        </nav>
        <header>
          <h1 className='header-text'>Jason Langford</h1>
          <img className='sunset' src={Sunset} alt=""></img>
        </header>
        <div className='about' >
          <div className='about-text' >
            <div className='about-me'>
              <h1>Hi I'm Jason !</h1>
              <img src={Me} alt="me"/>
            </div>
            
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus temporibus quaerat natus ab dolor quidem nobis soluta sapiente. Dolore consequatur molestias adipisci alias? Consequatur soluta quaerat odio ex officia corrupti?</h3>
          </div>
          <img  className='canyon-img' src={Canyon} alt=""/>
        </div>
        <div className='skills' >
          <h1>SKILLS</h1>
          <div>
            <span>
              <img src={logo} className="App-logo" alt="logo" />REACT
            </span>
            <span>
             <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="html" />HTML
            </span>
            <span>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css" />CSS
            </span>
            <span>
            <img src="https://img.icons8.com/ios/50/000000/javascript-logo-filled.png" alt="java" />JAVASCRIPT
            </span>
            <span>
            <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="node" />NODE.JS
            </span>
          </div>
        </div>
        <div className='projects'>
          <div className='personal'>
            <h1>Personal Project</h1>
            <p>An app I built as a personal project for my studies at DevMountain.
               My app lets you create an account, then provides a small list of local Utah golf courses, you're able to add each round you played at whichever course, it tracks your scores for each individual course and also keeps track of your handicap. Created using REACT / JSX / HTML / CSS / EXPRESS / NODE / POSTGRESS / Heroku database /  I have it hosted on Digital Ocean and used bcrypt for the authorization</p>
            <Carousel />
          </div>
          <div className='group'>
            <h1>Group Project</h1>
            <p>A multiplayer game designed to test your skills at solving coding problems while having fun defusing a bomb. Created by students at DevMountain as a group project. The idea came from a game called Keep Talking Or Explode, only in this game you have to solve coding problems in order to get the answers needed to defuse the bomb. The Objective of the game is defuse a bomb before time runs out by 
               using the instructions and solving the toy problems found in the Bomb Defusal Manual.</p>
            <Carousel2 />
          </div>
        </div>
      </div>
    )
  }
}


 