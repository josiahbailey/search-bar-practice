import React, { useState, useEffect } from 'react'
import Search from './search'
import Card from './card'
import axios from 'axios'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Container = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
        .then(res => {
            setData(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log("ERROR", err)
        })
    }, [])
    return (  
        <div>
            <Search/>

            <ContainerDiv>
            {data.map(char => (
                <Card key={char.id} char={char}/>
            ))}
            </ContainerDiv>
        </div>
    );
}
 
export default Container;