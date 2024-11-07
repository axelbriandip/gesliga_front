import React from 'react';
import '../styles/components/cardOptionAdmin.css'

const RowTeam = ({id, shield, name, delegate}) => {
  return (
    <tr>
        <th scope="row">{id}</th>
        <td>{shield}</td>
        <td>{name}</td>
        <td>{delegate}</td>
        <td>Ver</td>
    </tr>
  );
}

export default RowTeam;