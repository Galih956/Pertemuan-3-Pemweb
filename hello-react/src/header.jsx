import React, {Component} from  "react";
class Header extends Component{
  constructor(props){
    super(props);
    this.state ={
    judul: 'ini judul dari state',
    dataMakanan : this.props.list,
  };
  this.handlePesan = this.handlePesan.bind(this);
  }
  handlePesan(pesan, e){
    e.preventDefault();
    alert(pesan);
    alert('Hai');
  }

render(){
  return(
    <div>
      <h2>Component class dari header</h2>
      <h3>{this.state.judul}</h3>
      <p>Mengakses props dari app seecara langsung: {this.props.list}</p>
      <p>Mengakses props dari state: {this.state.dataMakanan}</p>
      <a href="/" onClick={(e) => this.handlePesan("pesan dari parameter", e)}>Halaman Header</a>
    </div>
  )
}
}
export default Header;