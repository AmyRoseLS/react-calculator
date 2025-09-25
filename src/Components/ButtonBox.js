import Button from './Button.js';
import '../globals.css'

export default function ButtonBox( {handleClick} ) {

    // const buttonLabels = ['back','AC','%','/','x','-','+','=','.','idk',...Array.from({length:10}, (_,i) => i)];

    const buttonLabels = [
        {label:'AC', does:'clear'},
        {label:'back', does:'back'},
        {label:'%', does:'input'},
        {label: '/', does: 'input'},
        {label: '*', does: 'input'},
        {label: '-', does: 'input'},
        {label: '+', does: 'input'},
        {label: '=', does: 'equals'},
        {label: '.', does: 'input'},
        ...Array.from({length:10},(_,i)=> (
            {label:i, does: 'input'}
        ))
    ];

    return(
        <div className="button-box">

            {/* {buttonLabels.map( label =>
            <Button label={label} handleClick={handleClick}/>
            )} */}

            {buttonLabels.map( button =>
            <Button label={button.label} func={button.does} handleClick={handleClick} />
            )}

        </div>
    )
}