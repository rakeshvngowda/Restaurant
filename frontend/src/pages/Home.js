import { useEffect }from 'react'
import DishDetails from '../components/DishDetails'


// components


import { useAuthContext } from '../hooks/useAuthContext'
import { useDishContext } from '../hooks/useDishContext'

const Home = () => {
  const {dishes, dispatch} = useDishContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await fetch('http://localhost:4000/dishes',{
        headers:{
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_DISHES', payload: json})
      }
    }

    if (user) {
      fetchDishes()
    }
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {dishes && dishes.map((dish) => (
          <DishDetails key={dish._id} dish={dish} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home