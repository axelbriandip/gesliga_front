import React from 'react';
import '../styles/components/cardOptionAdmin.css'

const CardOptionAdmin = ({title, text}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src="#" className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">Entrar</a>
        </div>
    </div>
  );
}

export default CardOptionAdmin;