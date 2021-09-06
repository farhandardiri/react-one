// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

      return ( 
    <div className="Parentbox"> 
    <FotoProduk/>
    <ProdukInfo category="lebaran" name="KOPI"/>
    </div>
    );
}

function FotoProduk(){
    return(
    <div className="Foto">
        <img src="Biji Kopi.png"/>
    </div>
    )
}

function ProdukInfo(props){
    const {category, name} = props
    return(
    <div> 
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
            <p className="Prize">IDR 10.000 </p>
            <p className="Info">
            it sets up your development environment so that you can use the latest JavaScript features, 
            provides a nice developer experience, and optimizes your app for production
            </p>

            <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
         </div>
    </div>
    )
}

function TambahCart(e){
   return console.log('ok',e);
}

export default App;