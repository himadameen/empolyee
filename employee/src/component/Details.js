import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import NavBar from './Nav';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../action/index';

const Details = () => {

    const [value, setValue] = useState()
    const [modalShow, setModalShow] = useState(false)
    const [search, setSearch] = useState('')


    const dispatch = useDispatch();

    const fetchApi = async () => {
        const url = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await url.json();
        setValue(data);
    }


    useEffect(() => {
        // fetchApi()
        dispatch(fetchApi())
    }, [])

    const onDetails = (item) => {
        // console.log('iteeem', item.id)
        setModalShow(true)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filterDetails = value.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
        
    )

    return (
        <>
            <NavBar />
            <div className='details'></div>
            <input type="text" placeholder='Enter your search' onChange={handleChange}  />
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {filterData && filterData.map((item) => (
                        <tbody >
                            <tr onClick={() => onDetails(item)}>
                                <td key={item.id}>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        </tbody>
                    ))}

                    <Modal 
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </table>
            </div>
        </>
    )
}

export default Details
