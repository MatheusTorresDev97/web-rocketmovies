import React from 'react'
import { Container } from './styles'

const Button = ({
  icon: Icon,
  title,
  highlighted = true,
  disabled = false,
  onClick,
}) => {
  return (
    <Container
    type="button"
    disabled={disabled}
    highlighted={highlighted}
    onClick={onClick}
  >
    {Icon && <Icon />}
    {title}
  </Container>
  )
}

export default Button