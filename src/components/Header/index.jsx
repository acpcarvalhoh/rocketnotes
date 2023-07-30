import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from "react-icons/ri"
import { userAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder  from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

export function Header(){
  
  const { signOut, user } = userAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigation = useNavigate();

  function HandleSignOut(){
    navigation("/")

    signOut(); 
  };

  return(
    <Container>
      <Profile to="/profile">
          <img src={avatarUrl} alt={user.name} />

          <div>
            <span>Bem vindo,</span>
            <strong>{user.name}</strong>  
          </div>
      </Profile>

      <Logout onClick={HandleSignOut}>
        <RiShutDownLine/>
      </Logout>
      
    </Container>
  );
    
};