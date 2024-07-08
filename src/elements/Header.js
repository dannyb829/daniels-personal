import { useEffect } from "react"
import NavMenu from "./NavMenu"



export default function Header({setPage, page, open, setOpen}) {

    useEffect(()=>{
        console.log(open)
    },[page,open])


    function Clicked({target: {name}}){
        setPage(name)
    }

    return (
        <header className='dark'>
            <div className='headerContrast'>
                    {/* <p className='namePlate'>DANIEL BRITO</p> */}
            </div>
            <div className='buttonDiv'>

            <button className={'navButton dark' + (page === 'contact' ? ' activated' : '')} name='contact' onClick={Clicked}>CONTACT</button>
            <button className={'navButton dark'  + (page === 'projects' ? ' activated' : '')} name='projects' onClick={Clicked}>PROJECTS</button>
            <button className={'navButton dark'  + (page === 'background' ? ' activated' : '')} name='background' onClick={Clicked}>BACKGROUND</button>
            <button className={"nav-menu"} onClick={() => setOpen(!open)}><img src="/images/menu-icon.png"/></button>
            </div>
        </header>
    )
}