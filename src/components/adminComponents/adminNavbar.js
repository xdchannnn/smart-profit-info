import NavItem from "./adminNabar/navItem"

export default function AdminNavbar(props) {
    return(
        <div className="col-auto col-md-3 col-xl-2 px-0 position-sticky h-100"
            style={{
                backgroundColor: "#7289B3"
            }}
        >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">            
            <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
                id="menu"
            >
                <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0 ps-4 link-light">
                        <i className="fs-4 bi-house" />
                        <span className="ms-1 d-none d-sm-inline">Панель приборов</span>
                    </a>
                </li>

                <hr style={{
                    borderTop: "1px solid",
                    height: "1px",
                    width: "100%",
                    margin: "0 auto"
                }} />

                <NavItem 
                    index="1"
                    title="Участники"
                    subitems={
                        [
                            ["Всего участников", "ParticipantCount"],
                            ["Бесплатные участники", "FreeParticipants"]
                        ]
                    }
                />

                <hr style={{
                    borderTop: "1px solid",
                    height: "1px",
                    width: "100%",
                    margin: "0 auto"
                }} />
                
                <NavItem 
                    index="2"
                    title="Операции с оплатой"
                    subitems={
                        [
                            ["Всего участников", "ParticipantCount"],
                            ["Бесплатные участники", "FreeParticipants"]
                        ]
                    }
                />
                
                <hr style={{
                    borderTop: "1px solid",
                    height: "1px",
                    width: "100%",
                    margin: "0 auto"
                }} />

                <NavItem 
                    index="3"
                    title="Настройки"
                    subitems={
                        [
                            ["Всего участников", "ParticipantCount"],
                            ["Бесплатные участники", "FreeParticipants"]
                        ]
                    }
                />
                
                
            </ul>
            <hr />
            
            <div className="px-4 py-3">
               
                
                    <span className="d-none d-sm-inline mx-1">Admin</span>
         
            </div>
            </div>
      </div>
    )
}