// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import { useAuthContext } from '../hooks/useAuthContext'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useDishContext } from '../hooks/useDishContext'

const DishDeatils = ({ dish }) => {
  const { dispatch } = useDishContext()
  const { user } = useAuthContext()
  console.log(dish);
  if (!user) {
    return
  }

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/dishes/' + dish._id, {
      method: 'DELETE',
      
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_DISH', payload: json.dish})
    }
  }

  return (
    <div className="workout-details">
      
      <h4>Dish: {dish.name}</h4>
      <p><strong>Price (INR): </strong>{dish.price} Rs/-</p>
      
      <p>createdAt: {formatDistanceToNow(new Date(dish.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default DishDeatils
