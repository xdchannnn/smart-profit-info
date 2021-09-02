import '../../assets/styles/dashboard.scoped.css'


function Footer() { 
    return(
        <footer>
        <div className = "footer_content">
            <p className = "copyright_text">Smart Profit Права защищены 2021 |</p>
            <a href = "#" className = "copyright_link" data-bs-toggle="modal" data-bs-target="#copyright_modal">&nbsp;Правила и соглашения</a>
        </div>
        </footer>
    )
}

export default Footer;