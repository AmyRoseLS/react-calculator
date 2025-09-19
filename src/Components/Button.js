import '../globals.css'

export default function Button( {label, handleClick}) {



    return(
        <button className='button' onClick={handleClick()}>{label}</button>
    )
}