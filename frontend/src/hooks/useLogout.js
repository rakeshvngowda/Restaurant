import { useAuthContext } from "./useAuthContext"
import { useDishContext } from "./useDishContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { dispatch:dishesDispatch } = useDishContext()
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        //  dispatch logout action
        dispatch({ type: 'LOGOUT' })
        dishesDispatch({type:'SET_DISHES',payload:null})
    }

    return { logout }
}