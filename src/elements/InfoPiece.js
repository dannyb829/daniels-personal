import { blurb } from "../FillerData"



export default function InfoBox ({page}) {

        switch(page){
            case 'contact':
                return <main className="pageContent">
                            <p className=" title"> REACH OUT</p>
                            <a href='https://www.linkedin.com/in/daniel-brito-3231b8235/' className="link-div" >
                                <img src='/images/linkedin.png' title='linkedin icon' className="contacticon icon"></img>
                                <p className="link gold text">Linkedin</p>  
                            </a>
                            <br></br>
                            <a href='https://medium.com/@dannyb829' className="link-div">
                                <img src='/images/medium.png' title='medium icon' className="contacticon icon"></img>
                                <p className="link gold text">medium</p>
                            </a>
                            <br></br>
                            <a href='https://github.com/dannyb829' className="link-div">
                                <img src='/images/github.png' title='github icon' className="contacticon icon"></img>
                                <p className="link gold text">Github</p>
                            </a>
                            <br></br>
                            <a href='mailto:dannyb829@gmail.com' className="link-div">
                                <img src='/images/email.png' title='email icon' className="contacticon icon"></img>
                                <p className="link gold text">Email</p>
                            </a>
                        </main>
            case 'projects':
                return <div className="pageContent"><p className='title'> SOME OF MY WORK..</p></div>
            case 'background':
                return (<>
                            <>
                                <p className=' title pageContent'>A BIT ABOUT DANIEL</p>
                            </>
                            <p className=' pageContent gold'>{blurb}</p>
                        </>)
        }
    return <p>ERROR</p>    
}