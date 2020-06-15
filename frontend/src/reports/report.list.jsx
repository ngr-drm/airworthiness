import React from 'react'
import './report.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default (props) => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(report => (
            <tr key={report._id}>
                <td>{report.number}</td>
                <td>{report.type}</td>
                <td>{report.aircraft}</td>
                <td>{report.engine}</td>
                <td>
                    <button className="btn btn-sm btn-info" onClick={() => props.handleEdit(report)}> <FontAwesomeIcon icon={faEdit} /></button>
                    <button className="btn btn-sm btn-danger" onClick={ () => props.handleRemove(report._id)}> <FontAwesomeIcon icon={faTrash} /> </button>
                </td>
            </tr>

        ));
    }

    return (
        <table className='table table-sm table-bordered'>
            <thead className='thead-dark'>
                <tr className='tr-table'>
                    <th>Number</th>
                    <th>Inspection Type</th>
                    <th>Aircraft</th>
                    <th>Engine</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className='tbody-table'>
                {renderRows()}
            </tbody>
        </table>
    )
}