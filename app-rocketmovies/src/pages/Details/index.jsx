import React from 'react'
import { FiClock, FiArrowLeft } from "react-icons/fi";
import { Container, Top, Infos, Buttons } from "./styles";
import Header from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { Rating } from "../../components/Rating";
import Button from '../../components/Button';

const Details = () => {
  return (
    <Container>
        <Header />
        <main>
            <Wrapper>
                <Top>
                <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
                <div className="highlight">
                    <h1>Data</h1>
                    <Rating isBigSize/>
                </div>
                <Infos>
                    <div className="user-infos">
                        <p>Por Matheus Torres</p>
                    </div>

                    <div className="note-infos">
                        <FiClock />
                    </div>
                </Infos>
                </Top>
                <Buttons>
                    <Button
                      title="Excluir filme"
                      highlighted={false}
                    />
                    <Button title="Editar filme" onClick={handleEdit} />
                </Buttons>
            </Wrapper>
        </main>
    </Container>
  )
}

export default Details