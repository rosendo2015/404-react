import { Button } from "../../components/Button"
import { Container } from "./styles"
import {Message} from "../../components/Message"

function App() {
  return (
    <Container>
      <section className="textos">
        <h1>Ops, esta página não foi encontrada</h1>
        <p>Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</p>
        <div className="wrapper-buttons">
          <Button title={'Voltar'} />
          <Button title={'Ir para a home'} />
        </div>
      </section>
      <section>
        <Message />       
      </section>
    </Container>
  )
}

export default App
