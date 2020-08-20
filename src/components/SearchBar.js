import React, { useState } from 'react';

//function component using useState Hook
const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    //a refactor that you can do is write this function inline for the input element
    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={onInputChange} />
                </div>
            </form>
        </div>
    );

};

// class SearchBar extends React.Component {

//     state = { term: '' };

//     onInputChange = (event) => {
//         this.setState({ term: event.target.value });
//     };

//     onFormSubmit = (event) => {
//         event.preventDefault();

//         this.props.onFormSubmit(this.state.term);
//     };

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text" value={this.state.term} onChange={this.onInputChange} />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

export default SearchBar;