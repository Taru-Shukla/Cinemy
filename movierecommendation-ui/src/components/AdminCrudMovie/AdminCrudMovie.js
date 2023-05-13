import React from 'react';
import  { useState } from 'react'

export default function AdminCrudMovie (props){
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


    const onSubmit=()=>{
        let isforkids=false;
        if(misforkids==='Yes')
        {
            isforkids=true;

        }
       
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


    return(
        <div>
            <h1>Admin panel</h1>
            <div >
                <form >
                    <label>
                        Movie Name:
                        <input type="text"
                        value={mname}
                        onChange={(e) => setMname(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Description:
                        <input type="text"
                        value={mdesc}
                        onChange={(e) => setMdesc(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Actors
                        <input type="text"
                        value={mactors}
                        onChange={(e) => setMactors(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Release Year:
                        <input type="text"
                        value={mryear}
                        onChange={(e) => setMryear(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Genre:
                        <input type="text"
                        value={mgenre}
                        onChange={(e) => setMgenre(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Language:
                        <input type="text"
                        value={mlang}
                        onChange={(e) => setMlang(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Director:
                        <input type="text"
                        value={mdirector}
                        onChange={(e) => setMdirector(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Duration in mins:
                        <input type="text"
                        value={mduration}
                        onChange={(e) => setMduration(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        User Ratings:
                        <input type="text"
                        value={muserrating}
                        onChange={(e) => setMuserrating(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Kids Movie?:
                        <input type="text"
                        value={misforkids}
                        onChange={(e) => setMisforkids(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Certification:
                        <input type="text"
                        value={mcert}
                        onChange={(e) => setMcert(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>
                        Image/Poster:
                        <input type="text"
                        value={mimage}
                        onChange={(e) => setMimage(e.target.value)}
                        />
                    </label>
                    <br></br>


                    <label>
                        User Reviews (array):
                        <input type="text"
                        value={mureviews}
                        onChange={(e) => setMureviews(e.target.value)}
                        />
                    </label>
                    <br></br>

                    <label>
                       Cinemy rating:
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
        
    );
}