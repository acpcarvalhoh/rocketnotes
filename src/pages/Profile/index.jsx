import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Container, Form, Avatar } from "./styles";

export function Profile(){
    return(
      <Container>
        <header>
          <a href="/">
            <FiArrowLeft/>
          </a>
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
          />


          <Input 
            placeholder="e-mail"
            type="text"
            icon={FiMail}
          />

          <Input 
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
          />

          <Input 
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
          />

          <Button title="Salvar"/>

        </Form>

        
          
      </Container>
    );
};