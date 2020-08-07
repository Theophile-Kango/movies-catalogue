import React, { useState, useEffect } from 'react';
import spinner from './../images/spinner.gif';
import moviesData from './moviesData';
import Movie from './../components/Movie';

const MoviesList = props => {
    const [loadedChars, setLoadedChars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
     useEffect(() => moviesData(setIsLoading, setLoadedChars), []);
    
      let content = <img src={spinner} alt="loading" />;
      const themes = ['Love','Action','Sacrifice','Good','Death','Family','Reason','Faith'];
    
      if (!isLoading && loadedChars && loadedChars.length > 0) {
        content = (
          <div>
            <span>Select a theme</span>
            <select
                onChange={props.onCharSelect}
                value={props.selectedChar}
                className={props.side}
            >
                {themes.map(theme => (
                <option key={theme} value={theme}>
                    {theme}
                </option>
                ))}   
            </select><br />
            <span>Production Year</span>
            <select
                onChange={props.onCharSelect}
                value={props.selectedChar}
                className={props.side}
            >
                {loadedChars.map(char => (
                <option key={char.id} value={char.release_date}>
                    {char.release_date.split('-')[0]}
                </option>
                ))}   
            </select>
            {loadedChars.map(char => (
                <Movie key = {char.id} object = {char} />
            ))}
          </div>
        );
      } 
      return content;
}

export default MoviesList;