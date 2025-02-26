function Container(props) {
    return (
        <div className="resources">
            <h1>{props.title}</h1>
            <a href= {props.link} target="_blank">
              <img src= {props.img.src} alt={props.img.alt} >
              </img>
            </a>
        </div>
    )
}

export default Container