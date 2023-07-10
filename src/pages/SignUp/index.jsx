import { FiMail, FiLock, FiUser} from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { Container, Form, Background} from "./styles";

export function SignUp(){
    return(
      <Container>
        <Background/>

        <Form>
          <h1>Rocket Notes</h1>
          <p>Alpicação para salvar e gerenciar seus links úteis.</p>

          <h2>Crie Sua Conta</h2>

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
            placeholder="senha"
            type="password"
            icon={FiLock}
          />

          <Button title="Cadastrar"/>

          <a href="#">Voltar para o login</a>
        </Form>

        
          
      </Container>
    );
};