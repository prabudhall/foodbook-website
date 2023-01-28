import React from 'react'

export default function Cards(props) {

    // console.log(props.options);
    var optionKey = Object.keys(props.options);

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                {/* <img src="https://media.istockphoto.com/id/629050018/photo/chilli-paneer-tikka-or-paneer-kabab.jpg?s=612x612&w=is&k=20&c=cAU2DUs0HfXMcQo0Yu1seaozBsvQZVMuvIF8XkiYd7U=" className="card-img-top" alt="..." /> */}
                <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"200px", objectFit:"fill"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    {/* <p className="card-text">{props.description} </p> */}
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {
                                // creating array of options
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            {
                                optionKey.map((data)=>{
                                    return (
                                        <option key={data} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='d-inline fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
