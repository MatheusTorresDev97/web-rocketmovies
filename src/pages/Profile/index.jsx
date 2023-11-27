import { useState } from "react";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Header, Form, Avatar } from "./styles";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

const Profile = () => {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [noInputHasBeenChanged, setNoInputHasBeenChanged] = useState(true);

  const avatar = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatarUrl, setAvatarUrl] = useState(avatar);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleUpdate() {
    const infosUpdated = {
      new_name: name,
      new_email: email,
      new_password: newPassword,
      current_password: oldPassword,
    };

    updateUser({ user: infosUpdated, avatar: avatarFile });
  }

  function handleUpdateAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const tempUrl = URL.createObjectURL(file);
    setAvatarUrl(tempUrl);
  }

  return (
    <Container>
      <Header>
        <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
      </Header>
      <Form>
        <Avatar>
          <img src={avatarUrl} alt={user.name} />
          <label htmlFor="user-photo">
            <FiCamera />
            <input
              type="file"
              id="user-photo"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                handleUpdateAvatar(e);
                setNoInputHasBeenChanged(false);
              }}
            />
          </label>
        </Avatar>
        <Input
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Input
          icon={FiLock}
          placeholder="Senha atual"
          type="password"
          value={oldPassword}
          onChange={(e) => {
            setOldPassword(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Input
          icon={FiLock}
          placeholder="Nova senha"
          type="password"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Button
          title="Salvar"
          disabled={noInputHasBeenChanged}
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  );
};

export default Profile;
