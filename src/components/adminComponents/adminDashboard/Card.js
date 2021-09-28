export default function Card(props) {
    return(
    <div className="card" 
        style={{ 
            width: "28rem", 
            height: "13rem", 
            borderRadius: "20px", 
            border: "0",
            backgroundColor: props.color,
            color: "white",
            flex: "1 0 30%",
            marginLeft: "25px",
            marginRight: "25px",
            marginBottom: "30px"
        }}>
      <div className="card-body text-end">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text" style={{ fontSize: "2rem" }}>
          {props.data}
        </p>
      </div>
        {props.details ?
            <a class="card-footer" 
                style={{ 
                    padding: ".7rem 1rem",
                    backgroundColor: "rgba(0,0,0,.20)",
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                    borderBottomLeftRadius: "20px",                    
                    borderBottomRightRadius: "20px",  
                }}>
                Посмотреть детали →
            </a>
            
            :null
        }
    </div>
  )
  }