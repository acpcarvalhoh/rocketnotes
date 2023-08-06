import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import avatarPlaceholder  from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

import { useState } from "react";
import { userAuth } from "../../hooks/auth"
import { Container, Form, Avatar } from "./styles";
import { useNavigate } from "react-router-dom";

export function Profile(){
  const { user, updateProfile } = userAuth();

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [new_password, setNew_password] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate();


  async function handleUpdate(){
    const user = {
      name,
      email, 
      password: new_password,
      old_password: password,
    }

    await updateProfile({user, avatarFile})
  
  };

  function handleChangeAvatar(event){
    const file = event.target.files[0]

    setAvatarFile(file)

    const imgPreview = URL.createObjectURL(file)

    setAvatar(imgPreview)
  }

  function handleBack(){
    navigate(-1)
  };

  return(
    <Container>
      <header>

        <button type="button" onClick={handleBack}>
          <FiArrowLeft/>
        </button>
        
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />

          <label htmlFor="avatar">
            <FiCamera/>

            <input 
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />


        <Input 
          placeholder="e-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNew_password(e.target.value)}
          
        />

        <Button title="Salvar" onClick={handleUpdate}/>

      </Form>

      
        
    </Container>
    );
};