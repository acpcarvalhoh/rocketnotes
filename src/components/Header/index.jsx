import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from "react-icons/ri"


export function Header(){

  return(
    <Container>
      <Profile to="/profile">
          <img src="https://github.com/acpcarvalhoh.png" alt="imgem do usuário" />

          <div>
            <span>Bem vindo,</span>
            <strong>Adão Carvalho</strong>  
          </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
      
    </Container>
  );
    
};