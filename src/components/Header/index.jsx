import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from "react-icons/ri"
import { userAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Header(){

  const { signOut } = userAuth();
  const navigation = useNavigate();

  function HandleSignOut(){
    navigation("/")

    signOut(); 
  };

  return(
    <Container>
      <Profile to="/profile">
          <img src="https://github.com/acpcarvalhoh.png" alt="imgem do usuário" />

          <div>
            <span>Bem vindo,</span>
            <strong>Adão Carvalho</strong>  
          </div>
      </Profile>

      <Logout onClick={HandleSignOut}>
        <RiShutDownLine/>
      </Logout>
      
    </Container>
  );
    
};