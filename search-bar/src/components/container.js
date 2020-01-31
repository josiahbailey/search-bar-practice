import React, { useState, useEffect } from 'react'
import Search from './search'
import Card from './card'
import axios from 'axios'

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
        Container
            <Search/>
            {data.map(char => (
                <Card key={char.img} char={char}/>
            ))}
        </div>
    );
}
 
export default Container;