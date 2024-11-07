import React from 'react';
import '../styles/components/cardOptionAdmin.css'
import { Link } from 'react-router-dom';

const RowTeam = ({id, shield, name, delegate}) => {
  const linkTo = `/teams/${id}`

  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{shield}</td>
        <td>{name}</td>
        <td>{delegate}</td>
        <td><Link to={linkTo}>Ver</Link></td>
    </tr>
  );
}

export default RowTeam;