import { FiMail, FiLock, FiUser} from "react-icons/fi"
import { useState } from "react";

import { api } from "../../services/api"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { Container, Form, Background} from "./styles";

export function SignUp(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSignUp(){
    
    if(!name || !email || !password){
      alert("Preencha todos os campo do formulário")

    }
    
    api.post("/users", {name, email, password}).then(() => {
      console.log("teste")
    })
     
    
  };

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
          onChange={e => setName(e.target.value)}
        />


        <Input 
          placeholder="e-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
          Voltar para o login
        </Link>
        
      </Form>

      
        
    </Container>
  );
};