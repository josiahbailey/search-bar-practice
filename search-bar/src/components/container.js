import React, { useState, useEffect } from 'react'
//import Search from './search'
import Card from './card'
import axios from 'axios'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const FormDiv = styled.div`
    margin: 2% auto;
`

const Container = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                setData(res.data)
                //console.log(res)
            })
            .catch(err => {
                console.log("ERROR", err)
            })
    }, [search])

    const handleChanges = e => {
        setSearch(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const breaking = data.filter(char => (
            char.name.toLowerCase().includes(search.toLowerCase())
        ))
        setData(breaking)
    }
    return (
        <div>
            <FormDiv>
                <label>
                    Search
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChanges} value={search} name='character' type='text' placeholder='Search for Characters 🔍' />
                        <input type='submit' />
                    </form>
                </label>
            </FormDiv>

            <ContainerDiv>
                {data.map(char => (
                    <Card key={char.id} char={char} />
                ))}
            </ContainerDiv>
        </div>
    );
}

export default Container;