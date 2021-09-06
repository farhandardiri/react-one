import React from 'react';
import './App.css';


function Review(){
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
    <div key={itemReview.id} className="Item">
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

export default Review;