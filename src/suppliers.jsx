import React from 'react';

function Suppliers() {
  const [suppliers, setSuppliers] = React.useState([]);
  const styleTd = {
    padding: '0 13px',
    textAlign: 'start',
  }

  React.useEffect(() => {
    fetchData().then((data) => setSuppliers(data));
  }, []);

  async function fetchData() {
    const response = await fetch('https://northwind.vercel.app/api/suppliers');
    return await response.json();
  }

  async function handleDelete(id){
    if(window.confirm('Really go to another page?')){
      await fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
        }
      })
      
      fetchData().then((data) => setSuppliers(data));
    }
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th style={styleTd}>Id</th>
          <th style={styleTd}>Company Name</th>
          <th style={styleTd}>Contact Name</th>
          <th style={styleTd}>Contact Title</th>
          <th style={styleTd}>Address Street</th>
          <th style={styleTd}>Address City</th>
          <th style={styleTd}>Address Region</th>
          <th style={styleTd}>Address Postal Code</th>
          <th style={styleTd}>Address Country</th>
          <th style={styleTd}>Address Phone</th>
          <th style={styleTd}></th>
        </tr>
      </thead>
      <tbody>
      {
        suppliers.map((supplier) => {
          return <tr>
            <td style={styleTd}>{supplier.id}</td>
            <td style={styleTd}>{supplier.companyName}</td>
            <td style={styleTd}>{supplier.contactName}</td>
            <td style={styleTd}>{supplier.contactTitle}</td>
            <td style={styleTd}>{supplier.address?.street}</td>
            <td style={styleTd}>{supplier.address?.city}</td>
            <td style={styleTd}>{supplier.address?.region}</td>
            <td style={styleTd}>{supplier.address?.postalCode}</td>
            <td style={styleTd}>{supplier.address?.country}</td>
            <td style={styleTd}>{supplier.address?.phone}</td>
            <td style={styleTd} onClick={() => handleDelete(supplier.id)}>DELETE</td>
          </tr>
        })
      }
      </tbody>
    </table>
  );
}

export default Suppliers;
