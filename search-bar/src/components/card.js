import React from 'react';
import styled from 'styled-components'

const CardDiv = styled.div`
    width: 20%;
`
const Image = styled.img`
    width: 50%;
`

const Char = {
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: (2) ["High School Chemistry Teacher", "Meth King Pin"],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Presumed dead",
    nickname: "Heisenberg",
    appearance: (5) [1, 2, 3, 4, 5],
    portrayed: "Bryan Cranston",
    category: "Breaking Bad"
}

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