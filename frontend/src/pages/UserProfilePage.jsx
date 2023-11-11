import { useParams } from "react-router-dom"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { userProfile } from "../api/users"
import { toast } from "react-hot-toast"

const UserProfilePage = () => {
 
  const {name} = useParams()
  const myUser = localStorage.getItem('name') 

  const { data: user, isLoading: loadingUser , isError: isErrorUser, error: errorUser } = useQuery({
    queryKey: ['user', name],
    queryFn: () => userProfile(name),
  })  

  if (loadingUser ) return <div className="loader-content"> <span className="loader"></span> </div>
  if (isErrorUser ) return <div>Error: {errorUser.message}</div>

  return (
    <div>
      
      <h1>{user.name}</h1>
      <br />
      <h2>{user.last_name}</h2>
      <br />
      <h2>{user.degree}</h2>

      <div>
        {myUser === name ?(
          <h1>hola</h1>
        ):(
          <h2>no hola</h2>
        )}
      </div>
    
    </div>
  )
}

export default UserProfilePage