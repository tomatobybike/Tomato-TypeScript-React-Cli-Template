import { Dispatch } from 'redux'
import { ADDNAME, ADDAGE } from '../action-type'

//包含所有的action creator
export const addNameCreator = (name: string) => ({ type: ADDNAME, payload: name })
export const addAgeCreator = (age: number) => ({ type: ADDAGE, payload: age })
export const addNameAsync = (name: string) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(addNameCreator(name))
        }, 2000)
    }
}
