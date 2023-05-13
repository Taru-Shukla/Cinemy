import React from 'react';
import  { useState } from 'react';
import AdminUpdateMovie from '../AdminUpdateMovie/AdminUpdateMovie';
import { useEffect } from 'react';
import '../AdminCreateMovie/AdminCreateMovie.scss';


export default function AdminCreateMovie (props){
    const [mname, setMname] = useState('');
    const [mdesc, setMdesc] = useState('');
    const [mryear, setMryear] = useState('');
    const [mgenre, setMgenre] = useState('');
    const [mlang, setMlang] = useState('');
    const [mdirector, setMdirector] = useState('');
    const [mduration, setMduration] = useState('');
    const [muserrating, setMuserrating] = useState('');
    const [misforkids, setMisforkids] = useState('');
    const [mcert, setMcert] = useState('');
    const [mimage, setMimage] = useState('');
    const [mureviews, setMureviews] = useState('');
    const [mimdb, setMimdb] = useState('');
    const [mactors, setMactors] = useState('');
    const [descVisible,setdescVisible]=useState(false);
    const [movielist, setMovieList]=useState([]);


    const onSubmit=()=>{
        let isforkids=false;
        if(misforkids==='Yes')
        {
            isforkids=true;

        }
       const arr=[];
        const movie={
            
            movieName: mname,
        movieDescription: mdesc,
        movieReleaseYear: mryear,
        movieGenre: mgenre,
        movieLanguage: mlang,
        movieDirector: mdirector,
        movieDuration: mduration,
        movieUserRating: muserrating,
        movieIsForKids: isforkids,
        movieCertificate: mcert,
        movieImage: mimage,
        movieUserReviews: mureviews,
        movieIMDBRating: mimdb,
        movieActors: mactors
            
        }
     // alert(onsubmit)
        postNewMovie(movie);
        alert(movie.movieName + " Added sucessfully!");
        
        setMname('');
        setMdesc('');
        setMryear('');
        setMgenre('');
        setMlang('');
        setMdirector('');
        setMduration('');
        setMuserrating('');
        setMisforkids('');
        setMcert('');
        setMimage('');
        setMureviews('');
        setMimdb('');
        setMactors('');

    }


   const postNewMovie=(movie)=>{
      //alert(in postnewuser);
      console.log("in postnew movie");
        
      console.log(movie);

        const requestOptions ={
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(movie)
        };
        const url = 'http://localhost:5001/movies/addnewmovie';
        fetch(url, requestOptions)
         .then(response => response.json());

         console.log(url);
      }

      const toggleDescVisibility=()=>{
        setdescVisible(!descVisible);
        
    }

    


    return(
        <div>
           
           <button className="btn-addmovie" type="button" onClick={(e)=>{toggleDescVisibility()}} > ADD NEW MOVIE</button>
           {descVisible?
        <div>
            <h1 className="admintext">Admin panel</h1>
            <div className="adminpanel">
                <form >
                    <label>
                        Movie Name:
                        <br/>   
                        <input type="text" value={mname} onChange={(e) => setMname(e.target.value)}/>
                    </label>

                    <br/><br/>
                    <label>
                        Description:
                        <br/>
                        <input type="text"
                        value={mdesc}
                        onChange={(e) => setMdesc(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Actors
                        <br/>
                        <input type="text"
                        value={mactors}
                        onChange={(e) => setMactors(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Release Year:
                        <br/>
                        <input type="text"
                        value={mryear}
                        onChange={(e) => setMryear(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Genre:
                        <br/>
                        <input type="text"
                        value={mgenre}
                        onChange={(e) => setMgenre(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Language:
                        <br/>
                        <input type="text"
                        value={mlang}
                        onChange={(e) => setMlang(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Director:
                        <br/>
                        <input type="text"
                        value={mdirector}
                        onChange={(e) => setMdirector(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Duration in mins:
                        <br/>
                        <input type="text"
                        value={mduration}
                        onChange={(e) => setMduration(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        User Ratings:
                        <br/>
                        <input type="text"
                        value={muserrating}
                        onChange={(e) => setMuserrating(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Kids Movie?:
                        <br/>
                        <input type="text"
                        value={misforkids}
                        onChange={(e) => setMisforkids(e.target.value)}
                        />
                        <div  onChange={(e) => setMisforkids(e.target.value)}>
                        <input type="radio" value="Yes" name="forkids" /> Yes
                        <input type="radio" value="NO" name="forkids" />  No
                     </div>
                    </label>

                    <br></br>
                    <label>
                        Certification:
                        <br/>
                        <input type="text"
                        value={mcert}
                        onChange={(e) => setMcert(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>
                        Image/Poster:
                        <br/>
                        <input type="text"
                        value={mimage}
                        onChange={(e) => setMimage(e.target.value)}
                        />
                    </label>
                    <br></br>


                    <label>
                        User Reviews - video url :
                        <br/>
                        <input type="text"
                        value={mureviews}
                        onChange={(e) => setMureviews(e.target.value)}
                        />
                    </label>
                    <br></br>

                    <label>
                       CINEMY rating:
                       <br/>
                        <input type="text"
                        value={mimdb}
                        onChange={(e) => setMimdb(e.target.value)}
                        />
                    </label>

    
                    <br></br>
                   
                </form>
                <button type="submit" onClick={(e=>{onSubmit()})}>Add Movie</button>
            </div>
        </div>
        :null}
        <div>
      {movielist.map(c => <li movie={c} />)}
     </div> 
        </div>
        
    );
}