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
  const [tags, setTags ] = useState([]);
  const [tagsSelected, setTagsSelected ] = useState([]);

  function handleTagSelected(tagName){
    const alredySelected = tagsSelected.includes(tagName);

    if(alredySelected){
      const tagSelected = tagsSelected.filter(tag => tag !== tagName);

      setTagsSelected(tagSelected);
      
    }else{
      setTagsSelected(prevState => [...prevState, tagName]);
    };
    
  };

  useEffect(() => {

    async function fetchTags(){
      const reponse = await api.get("/tags");

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
        <li>
          <ButtonText 
            title="Todos" 
            $isactive={tagsSelected.length === 0}
            onClick={() => handleTagSelected("all")}
          />
        </li>

        {
          tags && tags.map((tag) => (
            <li key={String(tag.id)}>
              
              <ButtonText 
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                $isactive={tagsSelected.includes(tag.name)}
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