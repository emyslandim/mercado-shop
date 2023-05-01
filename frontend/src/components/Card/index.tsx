import { Wrapper } from "./styles";

export function Card({ onClick, name, price, image }: any) {
  return (
    <Wrapper>
    <img
      alt="product"
      width={200}
      height={250}
      src={image}
    />
    <p>{name}</p>
    <p>R$ {price}</p>
    <button onClick={onClick}>Comprar</button>
  </Wrapper>
  );
}

