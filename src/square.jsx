import react from 'react'

const square =(props)=>{
    return(
        <div  onClick={props.onClick} 
        className="row-square"
         style={{border:"1px solid",
        height:"100px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>{props.value} </div>
    )
}
export default square;