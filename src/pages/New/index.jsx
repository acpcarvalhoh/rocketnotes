import { Container, Form} from "./styles";

import { Header } from "../../components/Header";
import { Input} from "../../components/Input";
import { TextArea} from "../../components/TextArea";
import { NoteItem} from "../../components/NoteItem";
import { Section} from "../../components/Section";
import { Button} from "../../components/Button";



export function New() {

  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header> 

          <Input placeholder="Título"/>

          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem 
              value="https://api.github.com/users/acpcarvalhoh"
            />

            <NoteItem 
              placeholder="Novo link"
              isNew
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React"/>
              <NoteItem isNew placeholder="Nova tag"/>        
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>


      </main>
    </Container>   
  )
};


















































 
