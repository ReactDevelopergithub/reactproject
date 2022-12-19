import React from 'react'
import Table from 'react-bootstrap/Table';
function Mapping() {
    const students = ['Mansab', 'Iqbal', 'Ali', 'Haider'];
    const personinfor = [
        { name: 'Mansab', email: 'mansabiqbal101@gmail.com', phone: 1111 },
        { name: 'Ali', email: 'ali101@gmail.com', phone: "22999999" },
        { name: 'Haider', email: 'Haider101@gmail.com', phone: 1111 },
    ];
    //students.map((item)=>{
    // console.warn("My name is:", item)
    //});
    //for(let i=0; i<students.length;i++){
    //   console.warn('in for loop My name is:',students[i]);
    //}
    return (
        <div>
            <h3>mapping function</h3>
            {
                students.map((data) =>
                    <div> My name is:  {data}</div>
                )
            }

            <Table border='1' striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>E-mail: </td>
                        <td>Phone-number: </td>
                    </tr>
                    {
                        personinfor.map((item,i) =>
                            item.phone === 1111?
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>:null
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Mapping
