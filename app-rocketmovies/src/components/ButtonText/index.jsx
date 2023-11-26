import React from 'react'
import { Container } from "./styles";

const ButtonText = ({ icon: Icon, title, ...rest }) => {
  return (
    <Container {...rest}>
    {Icon && <Icon />}
    {title}
  </Container>
  )
}

export default ButtonText