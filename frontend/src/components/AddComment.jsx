import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addComment } from "../api/publication"
import toast from "react-hot-toast"
import PropTypes from "prop-types";
import "./styles/addcomment-styles.scss"


const AddComment = ({ publication }) => {

  const queryClient = useQueryClient()
  const avatar = localStorage.getItem('avatar')
  const name = localStorage.getItem("name");
  const last_name = localStorage.getItem('last_name')

  const addCommentMutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries('comments')
      toast.success('Se podido comentar con exito!')
    },
    onError: (error) =>{
      toast.error(error.message)
    }
  })

  const [formData, setFormData] = useState({ body: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addCommentMutation.mutate({ ...formData, id: publication.id });

    // Puedes agregar lógica adicional después de enviar el formulario si es necesario

    setFormData({ body: '' });
  };


  if (addCommentMutation.isLoading ) return <div className="loader-content"> <span className="loader"></span> </div>

  return (
    <div className="content-comment">
      <form onSubmit={handleSubmit}>
        <div className="row-comment">

          <div className="user-row-comment">
            <div className="user-profile-comment">
              <img src={`http://127.0.0.1:8000${avatar}`} alt={`${name} ${last_name}`}/>
              <div>
                <p>{`${name} ${last_name}`}</p>
              </div>
            </div>
          </div>

          <textarea 
            name="body" 
            onChange={handleChange}
            value={formData.body}
            placeholder="Comenta aqui!" 
            rows="2" />

        </div>
        <div className="button-row-comment">
          <button
            type="submit"
            className="comment-button"
          >
            Comentar
          </button>
        </div>
      </form>
    </div>
  )
}

AddComment.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
};

export default AddComment