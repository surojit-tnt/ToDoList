import profpic from './assets/profpic.jpg'
import './card.css'

function Card() {

    return (
        // <div className="main">

            <div className="card">
                <img className='pic' src={profpic} alt="My Reactor" />
                <p className='parag'>
                    <p>Name: Surojit Tanti</p>
                    <p>Age:    22</p>
                    <p>Location: West Bengal, India</p>
                    <p>Hobby: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, minus illum similique beatae quam esse eaque iusto deleniti ipsa tempore facilis totam optio asperiores quibusdam, omnis aperiam ipsam nostrum ratione?</p>


                </p>

            </div>
        // </div>

    );
}
export default Card 