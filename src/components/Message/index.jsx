import { Container } from './styles'
import fourImage from "../../assets/quatro.svg"
export function Message() {
  return (
    <Container>
      <div>
        <img src={fourImage} alt="four" />
      </div>
      <div className='star'>
        <img alt="glob star" src="https://s3-alpha-sig.figma.com/img/5f39/65bd/adc77d974c4e79733268ef254ac5d2ad?Expires=1690761600&Signature=fVo0nY7w6xkVlFcLQdcXXo6SlfgMs6yMo3tzfqLTK3LxGtZtrkyFY3cFIr7D0PO6H6iwZQxsbWHJ4jHr059HsQLAlvmJUrZ3SBQQWygyFwhBreT0zk5oZusSsB4wrs2tbyUQu1OKvbcfdsiA5AP-MvftLB~0JdxNHiw0OqAiG4sXMcN8YIYM8oe5a4-tFjZZDofLBdGUw5g3Z7Kaoj4rGT0UQhcIFNpEpi3~vOwgAhC14fk3Bc9xi4BdXjV4m3gSM7LBV9G7dLUJhDLHQ76lerFF0sVPjW2gr5jy9Ph0pDTkWNcLMsKAh6AEN4zn8337SwEcIf7uAVKKyWX7mJAQmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="stars" />
      </div>
      <div>
        <img src={fourImage} alt="four" />
      </div>
    </Container>
  )
}