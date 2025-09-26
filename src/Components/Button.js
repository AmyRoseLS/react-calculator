import '../globals.css'

export default function Button( {label,buttonDoes,handleClick}) {

    return(
        <button className='button' onClick={()=>handleClick(label,buttonDoes)}>{label}</button>
    )
}