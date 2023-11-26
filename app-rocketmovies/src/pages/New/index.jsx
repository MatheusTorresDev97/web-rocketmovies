import React, { useState } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Container, Inputs, TextArea, Buttons } from "./styles";

import Header from '../../components/Header'
import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import { Wrapper } from '../../components/Wrapper';

const New = () => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Container>
            <Header />
            <main>
                <Wrapper>
                    <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
                    <h1>Novo filme</h1>
                    <Inputs>
                        <Input
                            placeholder="Título"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"
                            min="0"
                            max="5"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </Inputs>
                    <TextArea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h2>Marcadores</h2>
                    <section className='note-items'>

                    </section>
                    <Buttons>
                        <Button
                            title="Descartar alterações"
                            highlighted={false}

                        />
                        <Button title="Salvar alterações" />
                    </Buttons>
                </Wrapper>
            </main>
        </Container>
    )
}

export default New