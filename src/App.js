import {products} from './products';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>
              Name:
            </th>
          </tr>
        </thead>
        <tbody>
        {
          products.map((el) => <tr>
            <td>{el.name}</td>
            {el.unitPrice > 30? <td style={{color:'red'}}>{el.unitPrice}</td>: <td>{el.unitPrice}</td>}
            </tr>)
        }
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
