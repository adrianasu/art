import React from 'react';

export default class SearchForm extends React.Component {
    constructor(){
        this.state = {
            'zip-code': null
        }
    }

    render(){
        return(
            <form>
                <label for="zip-code">
                    ZipCode
                    <input type="number" name="zip-code"></input>
                </label>
            </form>
        )
    }
}