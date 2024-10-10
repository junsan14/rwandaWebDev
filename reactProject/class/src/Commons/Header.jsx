import { Link } from "react-router-dom"


export default function Header(){
    return(
        <header className="header">
            <ul className="header_ul">  
                <li className="header_ul_li"><a href="/">HOME</a></li>
                <li className="header_ul_li"><a href="/about">ABOUT</a></li>
            </ul>
        </header>
    )
}