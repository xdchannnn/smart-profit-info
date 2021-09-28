export default function AdminHeader(props) { 
    return(
    <nav className="navbar navbar bg-transparent mb-5 pb-0 g-5">
        <div className="container-fluid py-4">
            <span className="navbar-brand mb-0 h1">{props.title}</span>
        
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    Главная
                </li>
                
                {props.breadcrumbItem ? <li className="breadcrumb-item">
                    {props.breadcrumbItem}
                </li> : null}
                
                {props.breadcrumbActive ? <li className="breadcrumb-item active" aria-current="page">
                    {props.breadcrumbActive}
                </li> : null}
            </ol>
            
        </div>
        <hr style={{
            borderTop: "1px solid #7289B3",
            height: "1px",
            width: "95%",
            margin: "0 auto"
        }} />
    </nav>
  )
  }