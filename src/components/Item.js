import React from 'react'

export default function Item(props) {
  return (
    <>
      <div className="my-3">
        <div className="card">
          <img src={props.image} alt="" />
          <div className="card-body">
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-text'><b>{props.edu}</b></p>
            <p className='card-text'>
              Description : Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Recusandae, molestiae.
            </p>
            <a rel="noreferrer" href={props.url} target='blank' className="btn btn-sm btn-dark">Click here to go to Course</a>
          </div>
        </div>
      </div>
    </>
  );
}
