import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


import { useState } from "react";

import { Link } from "react-router-dom";
import { userAuth } from "../../hooks/auth";
import { Container, Form, Background} from "./styles";

export function SignIn(){
    const { SignIn } = userAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn(){
      SignIn(email, password)

    };

    return(
      <Container>
        <Form>
          <h1>Rocket Notes</h1>
          <p>Alpicação para salvar e gerenciar seus links úteis.</p>

          <h2>Faça seu login</h2>

          <Input 
            placeholder="e-mail"
            type="mail"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />

          <Input 
            placeholder="senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Entrar" onClick={handleSignIn}/>

          <Link to="/register">
           Criar conta
          </Link>
        </Form>

        <Background/>
          
      </Container>
    );
};
