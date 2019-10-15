import React from 'react';
import './App.css';
import { jsxNamespacedName } from '@babel/types';

let post= [
{
  date: 'Jan. 30, 2018',
  subtitle: 'THE SHIFT',
  title: "Kodak's Dubious Blockchain Gamble",
  description: "What's a 130-year old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.",
  author: 'KEVIN ROOSE',
  image: 'https://static01.nyt.com/images/2018/01/30/business/30ROOSE-3/30ROOSE-3-mediumThreeByTwo378.jpg',
},
{
  date: 'Jan. 30, 2018',
  title: 'Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel',
  description: 'Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.',
  author: 'CHRIS HORTON',
  image: 'https://static01.nyt.com/images/2018/01/31/world/31taiwan-1/31taiwan-1-superJumbo.jpg?quality=90&auto=webp',
},
{
  date: 'Jan. 29, 2018',
  title: 'New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon',
  description: 'Democratic governors nationwide are taking stepsto tax or price emissions within their own borders, even as Trump dismantles federal climate policy.',
  author: 'BRAD PLUMER',
  image: 'https://static01.nyt.com/images/2018/01/30/climate/30CLI-NEWJERSEY/merlin_132366125_604a2b1f-44d1-4883-b389-fedbffcf738f-jumbo.jpg?quality=90&auto=webp',
}
]

function App() {
  return (
    <div>
    <Profile date= {post[0].date} subtitle= {post[0].subtitle} title= {post[0].title} description= {post[0].description} author= {post[0].author} image= {post[0].image} /> 
    {/* if want multiple profiles, add more components and will render */}
    <Profile date= {post[1].date} title= {post[1].title} description= {post[1].description} author= {post[1].author} image= {post[1].image} /> 
    {/* content property is now placed into Profile (props) */}
    <Profile date= {post[2].date} title= {post[2].title} description= {post[2].description} author= {post[2].author} image= {post[2].image} /> 
  </div>
  );
}

function Profile(props){
  return (
    <div className="container">
      <div className="article">
        <div className= "article-date">
          <p> {props.date}</p> 
        </div>
        <div className= "article-content">
          <h3> {props.subtitle}</h3>
          <h1> {props.title}</h1>
          <h3> {props.description}</h3>
          <h5> {props.author}</h5>
        </div>
        <div className= "article-image">
           <img src= {props.image}/>
        </div>
      </div>  
    </div>
  )
}

export default App;
