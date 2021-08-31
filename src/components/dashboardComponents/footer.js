import '../../assets/styles/dashboard.scoped.css'


function Footer() { 
    return(
        <footer>
        <div class = "footer_content">
            <p class = "copyright_text">Smart Profit Права защищены 2021 |</p>
            <a href = "#" class = "copyright_link" data-bs-toggle="modal" data-bs-target="#copyright_modal">&nbsp;Правила и соглашения</a>
        </div>
        </footer>
    )
}

export default Footer;