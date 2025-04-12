import React from "react";

class Header extends React.Component {
constructor(props){
  super(props)
  this.state = {
    judul: "ini judul dari stats"
  }
}
  render() {
    return (
      <div>
        <h2>Makanan khas dari indonesia</h2>
      </div> 
    );
  }
};

export default Header