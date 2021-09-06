// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
 return ( 
    <div className="Parentbox"> 
        <FotoProduk/>
        <ProdukInfo isDiscount="comming" category="lebaran" name="KOPI"/>
        <ReviewItems/>
    </div>
    );
}

function ReviewItems(){
    // mempersiapkan data dummy JSON
    const users=[
        {
            "id":1,
            "name":"Blink",
            "photo":"img1.png",
            "review":"Harganya murah tapi kualitas bukan kaleng-kaleng nih. keren."
        },
        {
            "id":2,
                "name":"Dhani",
                "photo":"img2.png",
                "review":"Harganya murah tapi kualitas bukan kaleng-kaleng nih. keren."
        },
        {
            "id":3,
                "name":"Isat",
                "photo":"img3.png",
                "review":"Harganya murah tapi kualitas bukan kaleng-kaleng nih. keren."
        }
    ]
    const ListReview= users.map((itemReview) =>
    <div className="Item">
    <img src={itemReview.photo}/>
    <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
    </div>
</div>
  );
  return(
    <div className="Review-box">
            <h2>Reviews</h2>
           {ListReview}
        </div>
      )
}

function FotoProduk(){
 return(
    <div className="Foto">
        <img src="Biji Kopi.png"/>
    </div>
    )
}

function CheckDiscount(props){
    const {isDiscount}= props
  if (isDiscount === "no") {
      return(
         <p>Diskon 50% Off</p>
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
    <li>{itemBenefit}</li>
  );
    return(
    <div> 
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
            <p className="Prize">IDR 10.000 </p>
            <CheckDiscount isDiscount={isDiscount}/>
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

export default App;