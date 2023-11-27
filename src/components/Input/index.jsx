import { Container } from "./styles";

const Input = ({ icon: Icon, type = "text", className, ...rest }) => {
  return (
    <Container className={className}>
      {Icon && <Icon />}
      <input type={type} {...rest} />
    </Container>
  );
}

export default Input