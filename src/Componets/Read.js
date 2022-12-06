import React from 'react';
import { Table } from 'semantic-ui-react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import Button from 'semantic-ui-react';
import { Link } from 'react-router-dom';
 function Read() {
    const [APIData, setAPIData] = useState([]);
    // const[data,setData] = useState([]);
    useEffect(() => {
      axios.get(`https://638f65524ddca317d7f776da.mockapi.io/fakeData`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])

  const onDelete = (id) => {
    axios.delete(`https://638f65524ddca317d7f776da.mockapi.io/fakeData/${id}`)
 .then(() => {
    getData();
})
}

  const getData = () => {
    axios.get(`https://638f65524ddca317d7f776da.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}


    // const setData = (data) => {
    // console.log(data);
    // }
    return (
        <div className='main'>
           
            <div>
            <h2 className='main-header'>  React Crud Operations</h2>
            </div>
           
            <Table singleLine>
           
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                 
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                        {APIData.map((data) => {
                            return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                <Table.Cell> 
                                    <button>Update</button>
                                </Table.Cell>
                                </Link>
                                <Table.Cell>
                                <button onClick={() => onDelete(data.id)}>Delete</button>
                                </Table.Cell>
                                </Table.Row>
                        )})}
                </Table.Body>
            </Table>
            {/* <Table.HeaderCell>Update</Table.HeaderCell>
                 <Link to='/update'>
                <Table.Cell> 
                    <button>Update</button>
                </Table.Cell>
                </Link> */}
                {/* <button onClick={() => setData(data)}>Update</button> */}
                
        </div>
    )
}
 
export default Read;