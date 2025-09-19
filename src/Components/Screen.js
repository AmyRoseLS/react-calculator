import '../globals.css';

export default function Screen( {screenHistory} ) {
    return(
        <div className="screen">
            <p className="screen__numbers"> {screenHistory} </p>
        </div>
    )
}