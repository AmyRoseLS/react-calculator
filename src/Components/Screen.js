import '../globals.css';

export default function Screen( {onScreen} ) {
    return(
        <div className="screen">
            <p className="screen__numbers"> {onScreen} </p>
        </div>
    )
}