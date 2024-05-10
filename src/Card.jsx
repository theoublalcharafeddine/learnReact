import ProfilePic from './assets/theoublal.jpeg'
import Button from './Button.jsx'

function Card(props){
    return(
        <div className="card">
            <img src={ProfilePic} alt="ther is no image "  />
            <h2>{props.name}</h2>
            <p>{props.isWork ? 'you are real mane good boy :)' : 'you are bad boy :('}</p>
            <p>hi there my name is {props.name} AKA {props.AKA} i am {props.age} years old i am boarn in {props.Placeofgrowth} and i lave in tata </p>

            <Button />
        </div>
    );
}
export default Card