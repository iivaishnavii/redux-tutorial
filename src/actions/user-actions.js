export const UPDDATE_USER = 'users:updateUser';

export function updateUser(newUser)
{
    console.log(newUser)
    return {
        type : UPDDATE_USER,        //assign a type to it
        payload : {                 //assign a payload to it
            user : newUser
        }
    }
}