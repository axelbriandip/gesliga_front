import React from 'react';
import '../styles/components/cardOptionAdmin.css'
import { Link } from 'react-router-dom';

const RowPlayer = ({id, name, dni, birth}) => {
  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{dni}</td>
        <td>{birth}</td>
        <td>Pase</td>
    </tr>
  );
}

export default RowPlayer;