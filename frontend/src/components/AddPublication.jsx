import { addPublication } from "../api/publication"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { BsImage } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"
import { useState } from "react"
import "../pages/styles/home-styles.css"
import PropTypes from 'prop-types'

const AddPublication = () => {

  const queryClient = useQueryClient()
  const avatar = localStorage.getItem('avatar')
  const name = localStorage.getItem('name')
  const last_name = localStorage.getItem('last_name')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  const addPublicationMutation = useMutation({
    mutationFn: addPublication,
    onSuccess: () => {
      queryClient.invalidateQueries('publications')
      toast.success('Se ha publicado con exito!')
    },
    onError: () =>{
      toast.error('Hubo un error a la hora de publicar!')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('content', content);
  
    // Asegúrate de que el nombre del campo para la imagen coincida con el esperado en el servidor
    if (image) {
      formData.append('image', image);
    }
  
    // Agrega el ID del usuario autenticado al FormData
    formData.append('user', localStorage.getItem('user_id'));
  
    addPublicationMutation.mutate(formData);
    setContent('');
    setImage(null);
  };

  const handleImageChange = (event) => {
    setImage(event.currentTarget.files[0]);
  };

  if (addPublicationMutation.isLoading ) return <div className="loader-content"> <span className="loader"></span> </div>

  return (
    <div className="write-post-container">
      <form onSubmit={handleSubmit}>

        <div className="user-profile-home">
          <img src={`http://127.0.0.1:8000/${avatar}`} alt={`${name} ${last_name}`}/>
          <div>
            <p>{`${name} ${last_name}`}</p>
            <small>Publica Algo!</small>
          </div>
        </div>

        <div className="post-input-container">
          <textarea 
            name="content" 
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="¿Quieres publicar algo?" 
            rows="3" />

          <div className="add-post-links">
            <label htmlFor="file-input">
              {!image && (
                <BsImage
                  size={20}
                />
              )}
            </label>

            <input
              className="hidden"
              type="file"
              name="image"
              onChange={handleImageChange}
              id="file-input"
            />

            <div>
              {image && <SeeImage file={image} />}
            </div>

            <div>
              <button
                className="public-button"
                type='submit'
              >
                Publicar
              </button>
            </div>
          </div>
        </div>

      </form>
  </div>
  )
}

const SeeImage = ({ file }) => {
  const [preview, setPreview] = useState('');

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };

    const handleClose = () => {
      setPreview('');
    };

    return (
      <div className="image-preview">
        <div>
          <button
            onClick={handleClose}
          >
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <img src={preview} width={350} height={350} alt="Preview" />
      </div>
    );
  }
};

SeeImage.propTypes = {
  file: PropTypes.instanceOf(File),
};

export default AddPublication