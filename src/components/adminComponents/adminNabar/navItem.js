import "../adminNabar/navItem.scoped.css"

import React from 'react'
import {Link} from 'react-router-dom'

export default function NavItem(props) {

    return(
        <li className="ps-4 w-100 navItem collapsed"
            href={"#submenu" + props.index}
            data-bs-toggle="collapse"
        >
            <a
                
                className="nav-link px-0 align-middle link-light"
            >
                <i className="fs-4 bi-speedometer2" />
                <span className="ms-1 d-none d-sm-inline">{props.title}</span>
            </a>
            
            <ul
                className="collapse nav flex-column"
                id={"submenu" + props.index}
                data-bs-parent="#menu"
            > 
                <div>
                    {props.subitems ? props.subitems.map((elem) => (
                        <li className="w-100">
                            <Link to={"admin/" + elem[1]} className="nav-link px-0 link-light">                    
                                <span className="d-none d-sm-inline">{elem[0]}</span> 
                            </Link>
                        </li>  
                    )) : null}
                </div>
            </ul>
        </li>
  )}