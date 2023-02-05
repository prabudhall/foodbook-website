import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
// import { Link } from 'react-router-dom'

export default function Home() {

  const [fdi, setfdi] = useState([]);
  const [fdc, setfdc] = useState([]);
  const [search, setsearch] = useState("");
  const [searchbtn, setsearchbtn] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      header: {
        "Content-type": "application.json"
      },
    });
    response = await response.json();
    // console.log(response[0], response[1]);
    setfdi(response[0]);
    setfdc(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);
  
  const handleSearchBtn = ()=>{
    setsearchbtn(search);
  } 

  const handleSearch = (e)=>{
    setsearch(e.target.value)
    // console.log(search);
    if(search.length === 0)
    {
      setsearchbtn("");
    }
    // console.log(searchbtn);
  }

  return (
    <>
      {/* only one div bar can be here and therefore add<> as many inherited div bar can be created */}
      <div> <NavBar /> </div>
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" id='carousel'>
            <div className='carousel-caption' style={{ zIndex: '10' }}>
              <div className="d-flex justify-content-center ">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch} />
                <button className="btn btn-outline-white text-white bg-success" type="submit" onClick={handleSearchBtn}>Search</button>
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?pastery" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className='container m-3'>
        {
          fdc !== [] ? fdc.map((data) => {
            return (
              <div className='row mb-3'>
                <div className='fs-3 m-3' key={data._id}>{data.CategoryName}</div>
                <hr />
                {
                  fdi !== [] ? fdi.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(searchbtn.toLocaleLowerCase()) || search.length === 0)).map((filteredItem) => {
                    return (
                      <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
                        <Cards foodItem={filteredItem}
                          // imgSrc={filteredItem.img}
                          options={filteredItem.options[0]}
                          description={filteredItem.description}
                        ></Cards>
                      </div>
                    )
                  }) : <div>Not present</div>
                }
              </div>
            )
          }) : <div>""""""</div>
        }
        {/* <Cards /> */}
      </div>
      <div> <Footer /> </div>
    </>
  )
}
