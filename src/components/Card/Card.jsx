import './Card.css'
import petitsPoints from '../../assets/images/icon-ellipsis.svg'

function Card (props){
    console.log(props.time);

    let timing
    if (props.time === 'daily') {
        timing = 'Yesterday'
    }else if (props.time === 'weekly') {
        timing = 'Last week'
    }else{
        timing = 'Last month'
    }
    
    return(
        <div className="card">
            {/* Pour afficher un bgimage et bgcolor différent pour chacune des cards on vient créer un ID qui sera dynamiquement changer en fonction des titres. ATTENTION: à cause du fait que self care soit en 2 mots. On a du rajouter les méthodes split et joint pour que l'ID ne soit plus 'self care' mais 'self-care' */}
            <div className="work" id={props.data.title.split(' ').join('-').toLowerCase()}> 
            </div>
            <div className="working">
                <h1>{props.data.title}</h1>
                <img src={petitsPoints} alt="" />
                <div>
                    <div className="d-flex">
                        <p className="info"> {props.current}{props.current>1 ? 'hrs' : 'hr'}  </p>
                        <p className="colors">{timing} - {props.previous} {props.current>1 ? 'hrs' : 'hr'} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card