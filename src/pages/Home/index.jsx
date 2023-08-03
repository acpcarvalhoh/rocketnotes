import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus } from "react-icons/fi"

import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function Home(){
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName){
    if(tagName === "all"){
      return setTagsSelected([]);
    };
    
    const alredySelected = tagsSelected.includes(tagName);

    if(alredySelected){
      const tagSelected = tagsSelected.filter(tag => tag !== tagName);

      setTagsSelected(tagSelected);

    }else{
      setTagsSelected(prevState => [...prevState, tagName]);
    };
    
  };

  function handleDetails(note_id){
    navigate(`/details/${note_id}`)


  };

  useEffect(() => {

    async function fetchTags(){
      const reponse = await api.get("/tags");

      setTags(reponse.data);
    };

    fetchTags();
  }, [])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);

      setNotes(response.data);
  
      
    };


    fetchNotes();
    
  }, [tagsSelected, search]) // quando mudar o conteúdo o useEffect é chamado novamente


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
        <Input 
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">

         { 
          notes.map((note) => (
              <Note
                key={String(note.id)} 
                data={note}
                onClick={() => handleDetails(note.id)}
              />

            ))
          }

            
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>

        Criar nota
      </NewNote>
    </Container>
  )
}