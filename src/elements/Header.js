import { useEffect } from "react"



export default function Header({setPage, page}) {

    useEffect(()=>{
        console.log(page)
    },[page])


    function Clicked({target: {name}}){
        setPage(name)
    }

    return (
        <header className='header dark'>
            <div className='headerContrast'>
                {/* <div className='namePlate'>
                    <img src='/images/signature.png' id='signature'></img>
                </div> */}
            </div>
            <div className='buttonDiv rounded'>

            <button className={'dark rounded' + (page === 'contact' ? ' activated' : '')} name='contact' onClick={Clicked}>CONTACT</button>
            <button className={'dark'  + (page === 'projects' ? ' activated' : '')} name='projects' onClick={Clicked}>PROJECTS</button>
            <button className={'dark'  + (page === 'background' ? ' activated' : '')} name='background' onClick={Clicked}>BACKGROUND</button>
            </div>
        </header>
    )
}