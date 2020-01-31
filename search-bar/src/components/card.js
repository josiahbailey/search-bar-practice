import React from 'react';
import styled from 'styled-components'

const CardDiv = styled.div`
    width: 20%;
`
const Image = styled.img`
    width: 50%;
`

const Card = ({ char }) => {
    const { name, birthday, occupation, img, status, nickname } = char;
    return (
        <CardDiv>
            <h2>{name}</h2>
            <h4>aka {nickname}</h4>
            <h3>Currently {status}</h3>
            <Image src={img} alt={`${name} from Breaking Bad`} />
            <h3>{birthday}</h3>
            <h3>{occupation}</h3>
        </CardDiv>
    );
}

export default Card;