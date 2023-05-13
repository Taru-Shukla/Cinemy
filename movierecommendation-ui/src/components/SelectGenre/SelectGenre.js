import './SelectGenre.scss';

import logo from '../assets/tick.png';
import React, {  useState } from "react";
// import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

 export default function SelectGenre (props) {
    // const location=useLocation();
  
    let movies=[];
 
    const [documentary,setDocumentary]=useState(false)
    const [horror,setHorror]=useState(false);
    const [romCom,setRomCom]=useState(false);
    const [romance,setRomance]=useState(false);
    const [comedy,setComedy]=useState(false);
    const [isforkids,setIsforkids]=useState(false);

    const navigate=useNavigate();
    const toggleDocumentary=()=>{
        setDocumentary(!documentary);
    }
    const toggleHorror=()=>{
        setHorror(!horror);
    }
    const toggleRomCom=()=>{
        setRomCom(!romCom); 
    }

    const toggleIsforkids=()=>{
        setIsforkids(!isforkids); 
    }

    const toggleRomance=()=>{
        setRomance(!romance); 
    }
    const toggleComedy=()=>{
        setComedy(!comedy);
        
        console.log("visibility");
    }

    const submit=()=>{
        let temp=[];
   
        if(documentary){temp.push('Documentary')};
        if(documentary){temp.push('documentary')};
        if(horror){temp.push('Horror')};
        if(horror){temp.push('horror')};
        if(romCom){temp.push('RomCom')};
        if(romCom){temp.push('romcom')};
        if(romance){temp.push('romance', 'Romance')};
        //if(romance){temp.push('Romance')};
        if(comedy){temp.push('Comedy')};
        if(comedy){temp.push('comedy')};
        if(isforkids){temp.push('true')};
       
       
  
     navigate("/Movieitems",{state:{filter:temp}},{ replace: true });
    }

    const filter=(array)=>{
        const temp=[]

         console.log(temp);
         //filtered list is temp
}



    return ( 
            <div className='container-list'>
                <h1 className="genreselect"> Select Genre</h1>
                <form className="form-container" >
                    
                    <div className="container-genre">
                        <div className={comedy?"button":"buttonDark"}  onClick={(e)=>{toggleComedy()}}>
                        <p className={comedy?"p-title-dark":"p-title"}>Comedy</p> 
                            {comedy? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}     
                             </div>
                        
                    </div>

                    <div className="container-genre">
                    <div className={romance?"button":"buttonDark"}  onClick={(e)=>{toggleRomance()}}> 
                    <p className={romance?"p-title-dark":"p-title"}>Romance</p>
                    {romance? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    </div>

                    <div className="container-genre">
                    <div className={horror?"button":"buttonDark"}  onClick={(e)=>{toggleHorror()}}> 
                    <p className={horror?"p-title-dark":"p-title"}>Horror</p>
                    {horror? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    </div>

                    <div className="container-genre">
                    <div className={romCom?"button":"buttonDark"}  onClick={(e)=>{toggleRomCom()}}> 
                    <p className={romCom?"p-title-dark":"p-title"}>RomCom</p>
                    {romCom? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    </div>

                    <div className="container-genre">
                    <div className={documentary?"button":"buttonDark"}  onClick={(e)=>{toggleDocumentary()}}> 
                    <p className={documentary?"p-title-dark":"p-title"}>Documentary</p>
                    {documentary? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    </div>

                    
                 </form>
                 <button className="button-1" onClick={()=>{submit()}}> SUBMIT</button> 
            </div> 
       
        );   
     };
                    
                        
            
