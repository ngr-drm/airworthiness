import React from 'react';
import './report.style.css';

export default (props) => {
    const form = {
        number: props.number,
        type: props.type,
        aircraft: props.aircraft,
        engine: props.engine
    }
    
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <div className="container">
                        <form>
                            <div className='row'>
                                <div className='col-sm-4 input-group input-group-sm'>
                                    <input className='form-control' onChange={props.handleOnChange} value={form.number} type='number' name='number' placeholder='Number'></input>
                                </div>
                                <div className='col-sm-6 input-group input-group-sm form-group'>
                                    <input className='form-control' onChange={props.handleOnChange} value={form.type} name='type' placeholder='Inspection Type'></input>
                                </div>
                                <div className='col-sm-4 input-group input-group-sm'>
                                    <input className='form-control' onChange={props.handleOnChange} value={form.aircraft} name='aircraft' placeholder='Aircraft'></input>
                                </div>
                                <div className='col-sm-4 input-group input-group-sm form-group'>
                                    <input className='form-control' onChange={props.handleOnChange} value={form.engine} name='engine' placeholder='Engine'></input>
                                </div>
                                <div className='col-sm-12 pull-right'>
                                    <button className='btn btn-outline-success btn-sm' onClick={() => props.handleSubmit()} >Register</button>
                                    <button className='btn btn-outline-primary btn-sm' onClick={() => props.handleUpdate(form)} >Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}