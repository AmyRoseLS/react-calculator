import Button from './Button.js';
import '../globals.css'

export default function ButtonBox( {handleClick} ) {

    const buttonLabels = ['back','AC','%','/','x','-','+','=','.','idk',...Array.from({length:10}, (_,i) => i)];

    return(
        <div className="button-box">

            {buttonLabels.map( label =>
            <Button label={label} handleClick={handleClick}/>
            )}

        </div>
    )
}