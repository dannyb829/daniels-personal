import { blurb } from "../FillerData"



export default function InfoBox ({page}) {

        switch(page){
            case 'contact':
                return <main className="pageContent">
                <p className="title" id="reachout"> REACH OUT</p>
                <p className='tiny-text'>Check out my resume too! contact me via email for the password</p>
                <div className="link-box">

                            <a href='https://www.linkedin.com/in/daniel-brito-3231b8235/' className="link-div" >
                                <img src='/images/linkedin.png' title='linkedin icon' className="contacticon icon"></img>
                                <p className="link text">Linkedin</p>  
                            </a>
                            <br></br>
                            <a href='https://medium.com/@dannyb829' className="link-div">
                                <img src='/images/medium.png' title='medium icon' className="contacticon icon"></img>
                                <p className="link text">medium</p>
                            </a>
                            <br></br>
                            <a href='https://github.com/dannyb829' className="link-div">
                                <img src='/images/github.png' title='github icon' className="contacticon icon"></img>
                                <p className="link text">Github</p>
                            </a>
                            <br></br>
                            <a href='mailto:dannyb829@gmail.com' className="link-div">
                                <img src='/images/email.png' title='email icon' className="contacticon icon"></img>
                                <p className="link text">Email</p>
                            </a>
                            <br></br>
                            <a href='http://localhost:4000/download' className="link-div">
                                <img src='/images/download.png' title='download icon' className="contacticon icon"></img>
                                <p className="link text">Resume</p>
                            </a>
                </div>
                        </main>
            case 'projects':
                return <main className="pageContent"><p className='title'> SOME OF MY WORK..</p></main>
            case 'background':
                return (<main className="pageContent">
                                <p className='title'>A BIT ABOUT DANIEL</p>
                            <p className=' pageContent gold'>{blurb}</p>
                        </main>)
        }
    return <p>ERROR</p>    
}