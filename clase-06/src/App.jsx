import { useReducer} from "react";

import "./App.css";



function App() {
    


    const reducer = (state,action) => {

        switch(action.type) {
            case "crimson":
                return "crimson";
            case "verde":
                return "#2a9d8f";
            case "azul":
                return "#0081a7";
            case "amarillo":
                return "yellow";
            case "otro":
                return "#f40acd";
            default:
                return state;
        }
    
    }

    //     const [color,setColor]=useState("verde");

    //     const crimsonHandler = ()=>{
    //     setColor("crimson");
    // }

        const [state,dispatch] = useReducer(reducer,"pink")
        return (
            <div>
                <h2 style={{color:state}}>Soy un titulo loco que cambia de color</h2>
                <button onClick={()=>dispatch({type:"crimson"})}>Crimson</button>
                <button onClick={()=>dispatch({type:"verde"})}>verde</button>
                <button onClick={()=>dispatch({type:"azul"})}>azul</button>
                <button onClick={()=>dispatch({type:"amarillo"})}>amarillo</button>
                <button onClick={()=>dispatch({type:"otro"})}>otro</button>
            </div>
        )
    }


export default App
