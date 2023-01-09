import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const listeCourse = [
  "article 1",
  "article 2",
  "article 3",
  "article 4",
]

function App() {
  return (
    <div>
    <h1>Ma liste de courses</h1>
    <ul>
      {listeCourse.map((article) => (
        <li>{article}</li>
      ))}
    </ul></div>
  );
}

export default App;
