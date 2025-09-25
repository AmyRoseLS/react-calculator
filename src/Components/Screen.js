import '../globals.css';

export default function Screen( {screen} ) {
    return(
        <div className="screen">
            <p className="screen__numbers"> {screen} </p>
        </div>
    )
}