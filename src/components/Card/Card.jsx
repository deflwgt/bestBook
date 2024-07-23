/* eslint-disable react/prop-types */
import './Card.css'
import '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
function Card (props) {
    const { Data, onClick, handleSelected } = props


  return <>
    <div  onClick={() => {
      handleSelected(Data)
      onClick()
    }}>
  <Link to={`/player/${Data.id}`} className="cardcard" key={Data.id}>
      <img src={Data.image} alt="" />
      <p className="namename">{Data.name}</p>
      <p className='contentcontent'>{Data.content}</p>
      </Link>
    </div>
  </>
}
export default Card