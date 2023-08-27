import { useState } from 'react';
import react from 'react'
import Square from './square';
const Board=()=>{
    const [state,setState]=useState(Array(9).fill(null));
    const [isXturn,setIsXturn]=useState(true);
    const checkWinner=()=>{
        const a=[
            // [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]

        ];
        for(let i=0;i<8;i++){
            const [ar,br,cr]=a[i];
            if(state[ar]!==null && state[ar]===state[br] && state[br]===state[cr]){
                return state[ar];

            }
            else{
                return false;
            }
        }
    }
    const isWinner=checkWinner();
    console.log("state",state);
    const handleClick=(index)=>{
        const copystate=[...state];
        if(isXturn===true){
            copystate[index]='x';
            
        }
        else{
            copystate[index]='o'
        }
        setState(copystate);
        setIsXturn(!isXturn);
        console.log(state);
    }    
    return(
        <div className='Board-container'>
            { isWinner? (<>{isWinner} just won!!!<br></br>
            <button className="resett" onClick={()=>{setState(Array(9).fill(null))}}>play again</button>
            </>):(
                <>
            <div className="Board-row">
                <Square onClick={()=>handleClick(0)} value={state[0]} />
                  <Square onClick={()=>handleClick(1)} value={state[1]}/> 
                <Square onClick={()=>handleClick(2)} value={state[2]}/> 
            </div>
            <div className="Board-row">
          <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/> 
            </div>
            <div className="Board-row">
             <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/> 
            </div>
            </>)
            }

        </div>
    )
}
export  default Board;