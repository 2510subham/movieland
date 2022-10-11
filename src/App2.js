
import React,{useState,useEffect} from 'react'
import Card from './component/Card';
import './App.css';

const api_key='http://www.omdbapi.com?apikey=3fe3ce8e';
const App2 = () => {
const [create,setcreate]=useState([])

    const searchmovies=async (title)=>{
        const response=await fetch(`${api_key}&s=${title}`)
        const data=await response.json();
        setcreate(data.Search)
    }
    useEffect(() => {
      searchmovies('batman');
    }, [])
    
    
    const [search,setsearch]=useState("");
    // if(searchmovies(search)=== "N/A")
    // {
    //     alert("this movie is not found");
    // }

  return (
  <>
   <h1 className="container text-center">MovieLand</h1>
   <div className="container text-center my-2">
        <input  type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
        <button className="btn btn-sm btn-primary" onClick={()=>{searchmovies(search)}}>Search</button>
        </div>
       
        <div className=" container col md-4 my-5">
            <div className="row">
            {
            create.map((ele,id)=>{
                return (
                    <div className="col md-4 my-5">
                        <Card movieimage={ele.Poster} title={ele.Title} type={ele.Type} year={ele.Year}  />
                    </div>
                )
            })
        }
            </div>
        </div>
        

        </>    
  )
}

export default App2;