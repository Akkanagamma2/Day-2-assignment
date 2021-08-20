

function Card(props){
    return(
        <div className="card">
           <div className="card-img">
               <img src={props.image} alt={props.alt} className="card-image"/>
           </div>
           <h3 className="card-title">{props.title}</h3>
           <h5 className="card-subtitle">{props.subtitle}</h5>
           <p className="card-desc">{props.desc}</p>
           <p className="btn-parent">
               <button className="card-btn">Enroll Now</button>
           </p>
        </div>
    )
}
export default Card;