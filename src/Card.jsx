import ProfilePic from './assets/theoublal.jpeg'
import Button from './Button.jsx'

function Card(){
    return(
        <div className="card">
            <img src={ProfilePic} alt="ther is no image "  />
            <h2>theoublal</h2>
            <p>hi there my name is charafeddine AKA theoublal i am 21 years old i am boar in taroudant and i lave in tata </p>

            <Button />
        </div>
    );
}
export default Card