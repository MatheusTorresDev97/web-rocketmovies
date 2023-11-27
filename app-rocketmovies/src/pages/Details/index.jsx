import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiClock, FiArrowLeft } from "react-icons/fi";
import { Container, Top, Infos, Buttons } from "./styles";
import ButtonText from "../../components/ButtonText";
import Header from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";
import Button from "../../components/Button";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

const Details = () => {
    const [data, setData] = useState({});
    const [dateFormatted, setDateFormatted] = useState(null);

    const { user } = useAuth();

    const avatar = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

    const params = useParams();
    const navigate = useNavigate();

    function handleEdit() {
        navigate(`/edit/${params.id}`);
      }

      async function handleDelete() {
        const userConfirm = window.confirm("Tem certeza que deseja excluir?");
    
        if (userConfirm) {
          try {
            await api.delete(`/notes/${params.id}`);
            alert("O filme foi excluído com sucesso!");
            navigate("/");
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possível exclui o filme");
              console.log(error);
            }
          }
        }
      }

      useEffect(() => {
        if (data.updated_at) {
          const initialFormat = data.updated_at;
    
          const [date, hour] = initialFormat.split(" ");
    
          const [year, month, day] = date.split("-");
    
          const [hours, minutes] = hour.split(":");
    
          setDateFormatted({
            date: `${day}/${month}/${year}`,
            hour: `${hours - 3}:${minutes}`,
          });
        }
      }, [data]);

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
          } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert(
                "Não foi possível carregar  os dados deste filme. Tente novamente mais tarde."
              );
              navigate(-1);
              console.log(error);
            }
          }
        }
    
        fetchData();
      }, [params.id, navigate]);

  return (
    <Container>
      <Header />
      <main>
        <Wrapper>
          <Top>
            <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
            <div className="highlight">
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>
            <Infos>
              <div className="user-infos">
                <img src={avatar} alt={`Foto de ${user.name}`} />
                <p>Por {user.name}</p>
              </div>

              <div className="note-infos">
                <FiClock />
                {dateFormatted && (
                  <p>
                    {dateFormatted.date} ás {dateFormatted.hour}
                  </p>
                )}
              </div>
            </Infos>
          </Top>
          {data.tags && (
            <div className="tags">
              {data.tags.map(tag => (
                <Tag name={tag.name} key={tag.id} />
              ))}
            </div>
          )}
          {data.description && (
            <p className="description">{data.description}</p>
          )}
          <Buttons>
            <Button
              title="Excluir filme"
              highlighted={false}
              onClick={handleDelete}
            />
            <Button title="Editar filme" onClick={handleEdit} />
          </Buttons>
        </Wrapper>
      </main>
    </Container>
  );
};

export default Details;
