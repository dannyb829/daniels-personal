// soon edit to dislpay different things
import PicOfME from "./PicOfME"

export default function ImageSection({page}){
    switch(page) {
        case 'background':
            return <img src='/images/picofme.jpeg' title='Picture of Daniel' className='pictureday'></img>
        case 'contact':
            return <img src='/images/contact.png' title='contact book icon' className='pictureday'></img>
        case 'projects':
            return <img src='/images/projects.png' title='contact book icon' className='pictureday'></img>

    }
}