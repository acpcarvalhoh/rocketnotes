import { Container, Links, Content} from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, SetData] = useState(null);

  function handleBack(){
    navigate(-1)
  };

  async function deleteNotes(){
    const comfirm = window.confirm("Tem certeza que quer deletar a nota??");

    if(comfirm){
      await api.delete(`/notes/${params.id}`);
      
      handleBack();
    };
    
  };

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes/${params.id}`);

      SetData(response.data)
     

    };

    fetchNotes();

  }, []);

  return (
    <Container>
      <Header/>


      {
        data && 
        <main>
          <Content>
            <ButtonText onClick={deleteNotes} title="Excluir nota"/>

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            <Section title="Links Úteis">
              <Links>
                {
                  data.links && data.links.map(link => (
                    
                    <li key={String(link.id)}>
                      
                      <a href={link.url} target="_blank">
                        
                        {link.url}
                      </a>
                    </li>


                  ))
                }
                
              </Links>
                
            </Section>

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)} 
                      title={tag.name}
                    />

                  ))
                  
                }
              </Section>
            }

            <Button onClick={handleBack} title="Voltar"/>
          </Content>
        </main>
      }
    </Container>   

   
  )
};


















































 
