import { useState } from "react";
import { Container, Form} from "./styles";

import { Header } from "../../components/Header";
import { Input} from "../../components/Input";
import { TextArea} from "../../components/TextArea";
import { NoteItem} from "../../components/NoteItem";
import { Section} from "../../components/Section";
import { Button} from "../../components/Button";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks ] = useState([]);
  const [newLink, setNewLink ] = useState("");

  const [tags, setTags ] = useState([]);
  const [newTag, setNewTags ] = useState("");

  function handleAddLink(){
    if(newLink === ""){
      return
    }
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  };

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted)) // retorne nova lista
    
  };

  function handleAddTags(){
    if(newTag === ""){
      return
    }
    setTags(prevState => [...prevState, newTag])
    setNewTags("")
  };

  function handleRemoveTags(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted)) // retorne nova lista
    
  };


  async function handleNewNote(){
    if(!title.trim() || !links.length || !tags.length){
      return alert("Preencha todos os campos para cadastar a nota!!!")
    }

    await api.post('/notes', {
      title,
      description,
      links,
      tags
    })

    alert("Nota cadastrada")
  };


  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>

            <Link to="/">

              Voltar
            </Link>
            
          </header> 

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)} 
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              )) 
             
            }

            <NoteItem 
              placeholder="Novo link"
              isNew
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTags(tag)}
                  /> 
                ))
              }

              <NoteItem 
                isNew 
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTags(e.target.value)}
                onClick={handleAddTags}
              />        
            </div>
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>


      </main>
    </Container>   
  )
};


















































 
