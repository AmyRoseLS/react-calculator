import '../globals.css'

export default function Button( {label,func,handleClick}) {

    return(
        <button className='button' onClick={()=>handleClick(label,func)}>{label}</button>
    )
}