import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";



export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="NodeJS"/></li>
            </Menu>

            <Search>
              <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Content>
              <Section title="Minhas notas">
                  <Note data={{
                      title: "React Modal", 
                      tags: [
                        {id: "1", name: "React"},
                        {id: "2", name: "React"},
                      ]
                    }}
                  />
              </Section>
            </Content>

            <NewNote>
              <FiPlus/>
              Criar nota
            </NewNote>
        </Container>
    )
}