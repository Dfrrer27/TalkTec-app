import { useParams } from "react-router-dom"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { userProfile } from "../api/users"
import { Helmet } from "react-helmet"
import { IoMdCalendar } from "react-icons/io";
import { useState } from "react";
import EditProfile from "../components/EditProfile";
import "./styles/profile-styles.scss"

const UserProfilePage = () => {
 
  const {name} = useParams()
  const myUser = localStorage.getItem('name') 
  const [isEditing, setIsEditing] = useState(false)

  const { data: user, isLoading: loadingUser , isError: isErrorUser, error: errorUser } = useQuery({
    queryKey: ['user', name],
    queryFn: () => userProfile(name),
  })  

  if (loadingUser ) return <div className="loader-content"> <span className="loader"></span> </div>
  if (isErrorUser ) return <div>Error: {errorUser.message}</div>

  return (
    <div className="profile-section">

      <Helmet>
        <title>TalkTec | User</title>
      </Helmet>
      {isEditing && (
        <EditProfile user={user} close={() => setIsEditing(false)}/>
      )}
      <div className="profile">
        <div className="profile-banner">
          <img src={user.cover_image} alt="profile-banner"/>
        </div>

        <div className="profile-photo">
          <img src={user.avatar} alt="profile-photo"/>
        </div>

        <div className="profile-info p-card">
          <h4>{user.name} {user.last_name}, <b>{user.code}</b></h4>
          <div className="_interest">
            <span>Departamento Tecnológico:</span>
            <span>{user.degree}</span>
          </div>
          <div className="_interest">
            <IoMdCalendar size={18} />
            Cuenta creada el {' '}
            {new Date(user.date_joined).toDateString().slice(4)}
          </div>

          {myUser === name ? (
            <div className="edit-button">
              <button onClick={() => setIsEditing(true)}>Editar</button>
            </div>
          ):(
            null
          )}
          <div className="_interactions">
            <button className="active">
              TecsuPosts
            </button>
            <button>
              Media
            </button>
            <button>
              Me gusta
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserProfilePage