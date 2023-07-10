import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

import { Container, Form} from "./styles";

export function SignIn(){
    return(
      <Container>
          <Form>
            <h1>Rocket Notes</h1>
            <p>Alpicação para salvar e gerenciar seus links úteis.</p>

            <h2>Faça seu login</h2>

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

            <Button title="Entrar"/>

            <a href="#">Criar conta</a>
          </Form>
      </Container>
    );
};