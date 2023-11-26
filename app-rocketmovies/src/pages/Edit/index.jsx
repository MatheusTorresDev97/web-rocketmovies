import React from 'react'
import { FiArrowLeft } from "react-icons/fi";

import { Container, Inputs, TextArea, Buttons } from "./styles";
import Header from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import ButtonText from '../../components/ButtonText';
import Input from '../../components/Input';

const Edit = () => {
    return (
        <Container>
            <Header />
            <main>
                <Wrapper>
                    <ButtonText icon={FiArrowLeft} title="Voltar" />
                    <h1>Editar filme</h1>
                    <Inputs>
                        <Input
                            placeholder="Título"
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            min="0"
                            max="5"
                        />
                    </Inputs>
                    <TextArea
                        placeholder="Observações"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h2>Marcadores</h2>
                </Wrapper>
            </main>
        </Container>
    )
}

export default Edit