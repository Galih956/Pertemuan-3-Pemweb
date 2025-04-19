import React from 'react'

// function Images(linkgambar){
//         return(
//             <img width="200" height="100" alt="food"/>
//         );
//     }

class Images extends React.Component {
    render() {
        return (
            <img width="200" height="100" alt="food" src={this.props.linkgambar} />
        );
    }
}   

export default Images;