import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus } from "react-icons/fi"

import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { api } from "../../services/api";



export function Home(){
  const [tags, setTags ] = useState([])


  useEffect(() => {

    async function fetchTags(){
      const reponse = await api.get("/tags")

      console.log(reponse)
      
      setTags(reponse.data);
    };

    fetchTags();
  }, [])


  return(
    <Container>
      <Brand>
          <h1>Rocket Notes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title="Todos" $isactive/></li>

        {
          tags && tags.map((tag) => (
            <li key={String(tags.id)}>
              
              <ButtonText 
                title={tag.name}

              />
              
            </li>
          ))
        }
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

      <NewNote to="/new">
        <FiPlus/>

        Criar nota
      </NewNote>
    </Container>
  )
}