import React, { useState } from 'react'

const Search = () => {
    return (
        <div>
            <label>
            Search
                <form>
                    <input name='character' type='text' placeholder='Search for Characters 🔍'/>
                </form>
            </label>
        </div>
    );
}

export default Search;