import Button from './Button.js';
import '../globals.css'

export default function ButtonBox( {handleClick} ) {

    // const buttonLabels = ['back','AC','%','/','x','-','+','=','.','idk',...Array.from({length:10}, (_,i) => i)];

    const buttonLabels = [
        {label:'AC', does:'clear'},
        {label:'DEL', does:'back'},
        {label: '÷', does: 'input'},
        {label: 'x', does: 'input'},
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

            {buttonLabels.map( button =>
            <Button key={button.label} label={button.label} func={button.does} handleClick={handleClick} />
            )}

        </div>
    )
}