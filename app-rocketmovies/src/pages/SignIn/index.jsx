import React, { useState } from 'react'
import { FiMail, FiLock } from "react-icons/fi";
import { Container, Content, Form, BackgroundImg } from "./styles";
import  Input  from "../../components/Input";
import  Button  from "../../components/Button";
import  ButtonText  from "../../components/ButtonText";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Content>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
          <h2>Faça seu login</h2>
          <Input
            icon={FiMail}
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
           <Input
            icon={FiLock}
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button title="Entrar" />
          <ButtonText to="/register" title="Criar conta" />
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  )
}

export default SignIn