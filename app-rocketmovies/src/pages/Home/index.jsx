import { FiPlus, FiSearch } from "react-icons/fi";
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Top, ButtonAdd, Notes } from "./styles";
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Wrapper } from '../../components/Wrapper';
import Note from "../../components/Note";
import { api } from "../../services/api";

const Home = () => {
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();

    function handleShowDetails(id) {
        navigate(`/details/${id}`);
    }

    function handleMobileSearch() {
        const mobileSearch = window.prompt("Digite sua busca:");

        if (mobileSearch) {
            setSearch(mobileSearch);
        }
    }

    useEffect(() => {
        async function fetchNotes() {
            try {
                const response = await api.get(`/notes?title=${search}`);

                setNotes(response.data);
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert(
                        "Não foi possível carregar os filmes. Tente recarregar a página."
                    );
                    console.log(error);
                }
            }
        }

        fetchNotes();
    }, [search]);

    return (
        <Container>
            <Header>
                <Input
                    className="search only-in-desktop"
                    placeholder="Pesquisar pelo título"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    className="mobile-search"
                    type="button"
                    onClick={handleMobileSearch}
                >
                    <FiSearch />
                </button>
            </Header>
            <main>
                <Wrapper>
                    <Top>
                        <h1>Meus filmes</h1>
                        <ButtonAdd to="/new">
                            <FiPlus /> Adicionar filme
                        </ButtonAdd>
                    </Top>
                    <Notes>
                        {notes.length == 0 ? (
                            <h2>Nenhum filme encontrado</h2>
                        ) : (
                            notes.map(note => (
                                <Note
                                    key={String(note.id)}
                                    data={note}
                                    onClick={() => handleShowDetails(note.id)}
                                />
                            ))
                        )}
                    </Notes>
                </Wrapper>
            </main>
        </Container>
    )
}

export default Home