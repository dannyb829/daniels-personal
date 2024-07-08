import { useEffect } from "react"

const NavMenu = ({open, page, setPage}) => {
    useEffect((open)=>{

    },[open]) 

    function Clicked({target: {name}}){
        setPage(name)
    }

    let menu = open ? (<><br/><ul className={"dropdown-list"}>
                           <li> <button className={'navButton dark ' + (page === 'contact' ? ' activated' : '')} name='contact' onClick={Clicked}>CONTACT</button></li>
                           <li> <button className={'navButton dark '  + (page === 'projects' ? ' activated' : '')} name='projects' onClick={Clicked}>PROJECTS</button></li>
                           <li> <button className={'navButton dark '  + (page === 'background' ? ' activated' : '')} name='background' onClick={Clicked}>BACKGROUND</button></li>
                        </ul></>) : null
    return (menu)
}

export default NavMenu