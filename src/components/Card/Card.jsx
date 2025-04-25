import './Card.css'

function Card (props){
    console.log(props.current);
    
    return(
        <div className="card">
            {/* Pour afficher un bgimage et bgcolor différent pour chacune des cards on vient créer un ID qui sera dynamiquement changer en fonction des titres. ATTENTION: à cause du fait que self care soit en 2 mots. On a du rajouter les méthodes split et joint pour que l'ID ne soit plus 'self care' mais 'self-care' */}
            <div className="work" id={props.data.title.split(' ').join('-').toLowerCase()}> 
            </div>
            <div className="working">
                <h1>{props.data.title}</h1>
                {/* <img src="" alt="" /> */}
                <div>
                    <div className="d-flex">
                        <p className="info"> {props.current}  HRS</p>
                        <p className="colors">Last Week - {props.previous} hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card