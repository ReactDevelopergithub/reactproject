import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Nestedlist() {
    const students = [
        {
            name: 'Mansab', email: 'mansabiqbal101@gmail.com', address: [
                { hn: '10', city: 'Wazirabad', country: 'Pakistan' },
                { hn: '10', city: 'Gujrat', country: 'Pakistan' },
                { hn: '10', city: 'Alipur', country: 'Pakistan' },
            ]
        },
        {
            name: 'Ali', email: 'ali101@gmail.com', address: [
                { hn: '10', city: 'Wazirabad', country: 'Pakistan' },
                { hn: '10', city: 'Gujrat', country: 'Pakistan' },
                { hn: '10', city: 'Alipur', country: 'Pakistan' },
            ]
        },
        {
            name: 'Ghous', email: 'ghous@gmail.com', address: [
                { hn: '10', city: 'Wazirabad', country: 'Pakistan' },
                { hn: '10', city: 'Gujrat', country: 'Pakistan' },
                { hn: '10', city: 'Alipur', country: 'Pakistan' },
            ]
        },
    ]
    return (
        <div>
            <h4>Nested list in map function</h4>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>S.N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    {
                        students.map((item,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.map((data,i)=>
                                <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr key={i}>
                                        <th>Home</th>
                                        <th>City</th>
                                        <th>Country</th>
                                    </tr>
                                    <tr>
                                        <td>{data.hn}</td>
                                        <td>{data.city}</td>
                                        <td>{data.country}</td>
                                    </tr>
                                </tbody>
                                </Table>
                                    ) }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
