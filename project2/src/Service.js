function Service(props){

    return (

        <div className="card">
            <div className="card-img">
               <img src={props.image} className="card-image" alt="image1"/>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <h2 className="card-subtitle">{props.subtitle}</h2>
            <p className="card-desc">
                {props.desc}
            </p>
            <p className="btn-parent">
                <button className="card-btn">
                    Learn More
                </button>
            </p>
        </div>

    )


}


export default Service;