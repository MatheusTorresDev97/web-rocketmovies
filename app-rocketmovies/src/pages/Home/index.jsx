import { FiPlus, FiSearch } from "react-icons/fi";
import React, { useState } from 'react'
import { Container, Top, ButtonAdd, Notes } from "./styles";
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Wrapper } from '../../components/Wrapper';


const Home = () => {
    const [search, setSearch] = useState("");

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
                        <h2>Nenhum filme encontrado</h2>
                    </Notes>
                </Wrapper>
            </main>
        </Container>
    )
}

export default Home