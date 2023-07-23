import { Container } from "./styles";

export function Button({ title }) {
  return (
    <Container>
      <button>
        {title}
      </button>
    </Container>
  )
}