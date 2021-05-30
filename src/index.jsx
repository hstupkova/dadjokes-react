import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Joke from './Joke/index';
import {jokes} from "./jokes.js";

const App = () => {
  return (
    <div className="container">
      {
        jokes.map(item => 
          <Joke 
            key={item.id} 
            userAvatar={item.avatar} 
            userName={item.name} 
            text={item.text} 
            likes={item.likes} 
            dislikes={item.dislikes} />)
      }
    </div>
  );
};

render(<App />, document.querySelector('#app'));
