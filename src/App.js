// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReviewItems from './Review';
import PropTypes from 'prop-types';

function App() {
 return ( 
    <div className="Parentbox"> 
        <FotoProduk/>
        <ProdukInfo isDiscount="yes" category="lebaran" name="KOPI"/>
        <ReviewItems/>
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

function CheckDiscount(props){
    const {isDiscount, discount}= props
  if (isDiscount === "yes") {
      return(
         <p>Diskon {discount}% Off</p>
      )
  }
  else if (isDiscount === "comming") {
      return(
         <p>Diskon akan ada</p>
      )
  }
  else{
      return(
        <p>Belum ada diskon</p>
      )
  }
}

function ProdukInfo(props){
    const {category, name, isDiscount} = props
    const benefit = ["Tidak kusut terkena air","Bahan lebih halus", "Tidak gerah"]
    const ListBenefits = benefit.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  );
    return(
    <div> 
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
            <p className="Prize">IDR 10.000 </p>
            <CheckDiscount isDiscount={isDiscount} discount={50}/>
            <p className="Info">
            it sets up your development environment so that you can use the latest JavaScript features, 
            provides a nice developer experience, and optimizes your app for production
            </p>
            <ul>{ListBenefits}</ul>
            <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
         </div>
    </div>
    )
}

function TambahCart(e){
   return console.log('ok',e);
}

CheckDiscount.propTypes = {
    discount: PropTypes.number.isRequired
  };

export default App;