import { UPDDATE_USER} from '../actions/user-actions'
export default function UserReducer(state='',action){
    console.log("In reducer",action.payload)
    if(action.type===UPDDATE_USER)   //talks to the store to change the state
    {
        
        return action.payload.user
    }
        
    return state;
}