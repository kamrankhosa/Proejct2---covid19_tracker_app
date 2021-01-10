import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { SelectedCountries } from '../Api/Index';
const Countries = () => {
    const [Country, setCountry] = useState([]);
    useEffect(() => {
        async function FetchedCountries() {
            let response = await SelectedCountries();
            let a = response.map(({ country }) => country.name)
            setCountry(a);
        }
        FetchedCountries();
    }, [setCountry]);

    console.log(Country);
    return (
        <div>
            <FormControl>
                <NativeSelect>
                    <option value="global">Global</option>
                    <option value="global">Global</option>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countries
