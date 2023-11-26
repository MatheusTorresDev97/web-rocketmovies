import React, { useState } from 'react'
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Container, Content, Form, BackgroundImg } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <Content>
                <Form>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                    <h2>Crie sua conta</h2>
                    <Input
                        icon={FiUser}
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
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
                    <Button title="Cadastrar" />
                    <ButtonText to="/" icon={FiArrowLeft} title="Voltar para o login" />
                </Form>
            </Content>
            <BackgroundImg />
        </Container>
    )
}

export default SignUp