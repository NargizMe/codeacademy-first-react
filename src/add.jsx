import React from 'react';
// import Suppliers from './suppliers';

function Add() {
    const[name, setName] = React.useState('');
    const[number, setNumber] = React.useState('');

    const [newData, setNewData] = React.useState();

    async function handleAdd(){
        await fetch('https://northwind.vercel.app/api/suppliers', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({companyName: name, contactTitle: number})
        })
        .then(response => response.json())
        .then(data => {
            setNewData(data);
            console.log(newData);
        });
    }

  return (
    <div>
        <input placeholder='Company name' onChange={(e) => setName(e.target.value)}/>
        <input placeholder='Phone Number' onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Add;
