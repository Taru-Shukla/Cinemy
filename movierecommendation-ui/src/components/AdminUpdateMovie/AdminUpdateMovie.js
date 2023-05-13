import React from 'react';
import  { useState } from 'react';
import { useLocation } from 'react-router';
import '../AdminUpdateMovie/AdminUpdateMovie.scss';
import { useNavigate } from 'react-router-dom';

export default function AdminUpdateMovie (props){
    const loc=useLocation();  let nav=useNavigate();
    const [mname, setMname] = useState(loc.state.edit.movieName);
    const [mdesc, setMdesc] = useState(loc.state.edit.movieDescription);
    const [mryear, setMryear] = useState(loc.state.edit.movieReleaseYear);
    const [mgenre, setMgenre] = useState(loc.state.edit.movieGenre);
    const [mlang, setMlang] = useState(loc.state.edit.movieLanguage);
    const [mdirector, setMdirector] = useState(loc.state.edit.movieDirector);
    const [mduration, setMduration] = useState(loc.state.edit.movieDuration);
    const [muserrating, setMuserrating] = useState(loc.state.edit.movieUserRating);
    const [misforkids, setMisforkids] = useState(loc.state.edit.movieIsForKids);
    const [mcert, setMcert] = useState(loc.state.edit.movieCertificate);
    const [mimage, setMimage] = useState(loc.state.edit.movieImage);
    const [mureviews, setMureviews] = useState(loc.state.edit.movieUserReviews);
    const [mimdb, setMimdb] = useState(loc.state.edit.movieIMDBRating);
    const [mactors, setMactors] = useState(loc.state.edit.movieActors);
    const [descVisible,setdescVisible]=useState(false);
  

    


    const onSubmit=()=>{
      
        const uri='http://localhost:5001/movies/updatemovie/'+loc.state.edit.id;
        alert(uri);
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
    
        const requestOptions = {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(movie)
              };
             
        fetch(uri, requestOptions)
       .then(response => response.json())
       .then(alert('Update Successful'))
    //    .then(nav('/AdminCRUDoperations',{state:{movieList:loc.state.movies}},{replace:true}));

    //
    
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
    

 
//    const putTask(task,id){
//     const requestOptions = {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(task)
//   };
//   console.log(task);
//   const uri='http://localhost:7000/tasks/'+id;
//    fetch(uri, requestOptions)
//        .then(response => response.json())
//        .then(data => this.setState({ postId: data.id }));
//   }



      const toggleDescVisibility=()=>{
        setdescVisible(!descVisible);
        console.log(props.movie);
    }


    return(
        <div>
    
            
        <div>
            <h1 className="adminupdatetext">UPDATE </h1>
            <div className="adminupdatepanel">
                <form >
                    <label>
                        <br/>
                        Movie Name
                        <br/>  
                        <input type="text"
                        value={mname}
                        onChange={(e) => setMname(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Description
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
                        Release Year
                        <br/>  
                        <input type="text"
                        value={mryear}
                        onChange={(e) => setMryear(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Genre
                        <br/>  
                        <input type="text"
                        value={mgenre}
                        onChange={(e) => setMgenre(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Language
                        <br/>  
                        <input type="text"
                        value={mlang}
                        onChange={(e) => setMlang(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Director
                        <br/>  
                        <input type="text"
                        value={mdirector}
                        onChange={(e) => setMdirector(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Duration in mins
                        <br/>  
                        <input type="text"
                        value={mduration}
                        onChange={(e) => setMduration(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        User Ratings
                        <br/>  
                        <input type="text"
                        value={muserrating}
                        onChange={(e) => setMuserrating(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Kids Movie?
                        <br/>  
                        <input type="text"
                        value={misforkids}
                        onChange={(e) => setMisforkids(e.target.value)}
                        />
                    </label>

                    <br></br>
                    <label>
                        Certification
                        <br/>  
                        <input type="text"
                        value={mcert}
                        onChange={(e) => setMcert(e.target.value)}
                        />
                    </label>
                    <br></br>
                    <label>
                        Image/Poster
                        <br/>  
                        <input type="text"
                        value={mimage}
                        onChange={(e) => setMimage(e.target.value)}
                        />
                    </label>
                    <br></br>


                    <label>
                        Trailer URL 
                        <br/>  
                        <input type="text"
                        value={mureviews}
                        onChange={(e) => setMureviews(e.target.value)}
                        />
                    </label>
                    <br></br>

                    <label>
                       Cinemy rating
                       <br/>  
                        <input type="text"
                        value={mimdb}
                        onChange={(e) => setMimdb(e.target.value)}
                        />
                    </label>

    
                    <br></br>
                    
                </form>
                <br/>  
                <button type="submit" onClick={()=>{onSubmit()}}>Update this Movie</button>
                <br/>
            </div>
        </div>
         
        </div>
        
    );
}