import React from 'react';
import Pdf from 'modelo.pdf';
import './style.css';

export default function App() {
  function onResumeClick() {
    window.open(Pdf);
  }
  return (
    <div>
      <h1>muda!</h1>
      <div>
        <a onClick={this.onResumeClick}>Resume</a>
      </div>
    </div>
  );
}
