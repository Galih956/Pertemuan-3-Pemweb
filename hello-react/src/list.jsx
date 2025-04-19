import React, {Component} from "react";
import Images from "./images.jsx";

class List extends Component{
    render(){
        return(
        <div>
            <ol>
                <li> <Images linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/></li>
                <li> <Images linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/></li>
                <li> <Images linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/></li> 
                <li> <Images linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/></li>
            </ol>
        </div>
        );
    }
}

export default List;