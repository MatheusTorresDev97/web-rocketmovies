import React, { useState } from 'react'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Header, Form, Avatar } from "./styles";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";


const Profile = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [noInputHasBeenChanged, setNoInputHasBeenChanged] = useState(true);

    return (
        <Container>
            <Header>
                <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
            </Header>
            <Form>
                <Avatar>
                    <FiCamera />
                </Avatar>
                <Input
                    icon={FiUser}
                    placeholder="Nome"
                    value={name}
                    onChange={e => {
                        setName(e.target.value);
                        setNoInputHasBeenChanged(false);
                    }}
                />
                <Input
                    icon={FiMail}
                    placeholder="E-mail"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                        setNoInputHasBeenChanged(false);
                    }}
                />
                <Input
                    icon={FiLock}
                    placeholder="Senha atual"
                    type="password"
                    value={oldPassword}
                    onChange={e => {
                        setOldPassword(e.target.value);
                        setNoInputHasBeenChanged(false);
                    }}
                />
                <Input
                    icon={FiLock}
                    placeholder="Nova senha"
                    type="password"
                    value={newPassword}
                    onChange={e => {
                        setNewPassword(e.target.value);
                        setNoInputHasBeenChanged(false);
                    }}
                />
                <Button
                    title="Salvar"
                    disabled={noInputHasBeenChanged}
                />
            </Form>
        </Container>
    )
}

export default Profile