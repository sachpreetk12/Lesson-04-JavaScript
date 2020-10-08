import React, { useState, useEffect } from 'react';
import Square from './Square';
import Styles from './styles';
import Won from './Won';

const Board = () => {
  

  return (
    <>
      
      <Styles.Board>
        
      </Styles.Board>
      <button onClick={resetBoard}>Reset</button>
    </>
  );
}
 
export default Board;