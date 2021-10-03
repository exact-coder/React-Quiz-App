import React from 'react';
import Classes from '../styles/Analysis.module.css';
import Questions from './Questions';

export default function Analysis({answers}) {
    return (
        <div className={Classes.analysis}>
          <h1>Question Analysis</h1>
          
          <Questions answers = {answers}/>
        </div>
    )
}