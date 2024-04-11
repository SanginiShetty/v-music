import logo from './logo.svg';
import './App.css';
import { useEffect} from "react";
import { useState } from "react";

function App() {

  const[keyword , setkeyword] = useState("");
  const[isLoading, setIsLoading] = useState(true);
  const[tracks , setTracks] = useState([]);

  const getTracks = async() =>{
    setIsLoading(true);
    let data = await fetch(
      `https://v1.nocodeapi.com/inignas_yttehs/spotify/UmsmLRcNoPvksoXZ/search?q=daku&${
        keyword ==="" ? "trending" :keyword
      }&type=track`
    );
    let convertedData = await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);
    setIsLoading(false);
  };

 

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >
      V-music
    </a>
    
      
    <div 
    className="collapse navbar-collapse d-flex justify-content-center"
    id="navbarSupportedContent"
    >
     
     
        <input
          value={keyword}
          onChange={(event) =>{setkeyword(event.target.value)}}
          className="form-control me-2 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={getTracks} className="btn btn-outline-success" >
          Search
        </button>
      
    </div>
  </div>
</nav>

      
      <div classname="container">̥</div>
        <div className={`row ${keyword==="" ? "" : "d-none"}`}>
         <div className="col-12 py-5 text-center">
           
          
           <h1>v-music</h1>
           

          
        </div>
        <div className="row">
          
          

          {
            tracks.map((element , index)=> {
              return (
              <div key ={element.id} className="col-1g-6 col-md-3 py-2">
                
                <div className="card" >
                <img src={element.album.images[0].url} 
                className="card-img-top" 
                alt="..."
                />
                <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                   <p className="card-text">
                   Artist: {element.album.artists[0].name}
                   </p>
                   <p className="card-text">
                    Release date: {element.album.release_date}
                   </p>
                 <audio scr={element.preview_url} 
                 controls 
                 className="w-100" >
                 </audio>
                  
               </div>
             </div>

            </div>
             );

            })
          }

        </div>
      </div>

    </>
    
  );

}  
  
  


export default App;
