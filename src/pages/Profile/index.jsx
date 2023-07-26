import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { useState } from "react";
import { userAuth } from "../../hooks/auth"
import { Container, Form, Avatar } from "./styles";

export function Profile(){
  const { user, updateProfile } = userAuth();

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [new_password, setNew_password] = useState("")

  async function handleUpdate(){
    const user = {
      name,
      email, 
      password: new_password,
      old_password: password,
    }

    await updateProfile({user})

    

  };

    return(
      <Container>
        <header>
          <Link to="/"><FiArrowLeft/></Link>
        </header>

        <Form>
          <Avatar>
            <img src="https://github.com/acpcarvalhoh.png" alt="imgem do usuário" />

            <label htmlFor="avatar">
              <FiCamera/>

              <input 
                id="avatar"
                type="file"
                
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