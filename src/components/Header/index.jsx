import { Container, Profile } from "./styles";
import { FaBeer } from 'react-icons/fa';

export function Header(){

    return(
        <Container>
            <Profile>
                <img src="https://github.com/acpcarvalhoh.png" alt="imgem do Adão" />

                <div>
                  <span>Bem vindo,</span>
                  <strong>Adão Carvalho</strong>  
                </div>
            </Profile>

            
           
        </Container>
    );
    
};