import React, {useState} from "react";


const TraficLight = () =>{

    const [color, setColor] = useState("selected")
    // Declaro el estado de la luz extra
    const [purpleLightState, setPurpleLightState] = useState(false)
    
    //Declaro la funcion click para que cuando haga click en una luz se ilumine mediante la clase selected
    const click = (e) =>{
        if(e.currentTarget.className === "redLight" ){
            setColor("redLight selected")
            

        }else if(e.currentTarget.className === "yellowLight" ){
            setColor("yellowLight selected")
            
              
        } else if(e.currentTarget.className === "greenLight" ){
            setColor("greenLight selected")
            
                    
        }else if(e.currentTarget.className === "purpleLight" ){
            setColor("purpleLight selected")
            
            

                    
        }
        
       
    }

    //Declaro la funcion con la que mediante el boton puedo hacer que la luz extra aparezca mediante el state antes declarado
    const purpleLightFunc = () => {

        if(purpleLightState == false){ setPurpleLightState(true) }
        if(purpleLightState == true){ setPurpleLightState(false) }


    }

    //Uso el ternary operator hago un anidado con el mismo para que dependiendo donde este la luz seleccionada alterne entre ellas
    const alternateLight = () =>{
        color === "redLight selected" ? setColor("yellowLight selected") : color === "yellowLight selected" ? setColor("greenLight selected") : color === "greenLight selected" ?  setColor("purpleLight selected") : setColor("redLight selected")
        }

    

 
    return (
        
        <div className="">
            <div className="suport" ></div>
            <div className="container">

            <div onClick={click} className= {color === "redLight selected" ? `${color}`: "redLight" } ></div> 

            <div onClick={click} className= {color === "yellowLight selected" ? `${color}`: "yellowLight" }></div>

            <div onClick={click} className= {color === "greenLight selected" ? `${color}`: "greenLight" }> </div>
        
            <div onClick={click} className={purpleLightState === true && color === "purpleLight selected" ? "purpleLight selected" : purpleLightState === true ? "purpleLight" : "hide"}></div>

            </div>

                <div className="btnDiv">
                    <button onClick={purpleLightFunc} className="btn btn-primary p-4 fs-1">New Ligth</button>
                </div>

                <div className="btnDiv">
                    <button onClick={alternateLight} className="btn btn-primary p-4 fs-1">Alternate</button>
                </div>
        </div>

       
    )
    
}

export default TraficLight;