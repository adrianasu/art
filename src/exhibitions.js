import React from 'react';
import SearchForm from './search-form';
import Results from './results';

export default function Exhibitions(){
    return(
        <section className="exhibitions">
            <h2>Exhibitions</h2>
            <SearchForm />
            <Results />
        </section>
    );
}