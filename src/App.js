import Card from './component/Card';
import {React, useEffect,useState } from 'react';
import './App.css';
import api_key from '../env';
//3fe3ce8e






function App() {
  let [create,setcreate]=useState([]);
  //const movie1=[]

  

  const searchmovies=async (title)=>{
    const response=await fetch(`${api_key}&s=${title}`);
    const data=await response.json();
    //console.log(data);
    setcreate(data.Search);
    

  }
let [search,setsearch]=useState('');
  useEffect(() => {
    searchmovies("spiderman")
  }, [])

  return (
    <div className="container">
      <h1>MovieLand</h1>
      <div className="search">
        <input type="text" placeholder="search" value={search} onChange={(e)=>{
                      setsearch(e.target.value)
        }}/>
        <button className="btn btn-sm btn-secondary" onClick={()=>searchmovies(search)}>Search</button>
      </div>
        <div className="container col md-4">
          <div className="row">
            {
            create.map((ele,index)=>{
              return(
                <div className="col md-4 my-2" key={index}>                 
                    <Card movieimage={ele.Poster} title={ele.Title} type={ele.Type} year={ele.Year} />                    
                </div>
              )
            })
          }
          </div>
        </div>
     
    </div>
  );
}

export default App;
