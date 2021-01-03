
import {useState} from 'react'
import './styles.css'

function App() {

  const [exampleDataFruits] = useState( [
    {item: 'Orange'},
    {item: 'Pinnaple'},
    {item: 'watermelon'},
    {item: 'cherry'},
    {item: '1st fruit'},
    {item: '7th fruit'},
    {item: '@fruits.com'},
    {item: 'Apple'},
  ])

  const [toggle, setToggle] = useState(false)

  
  function toggleList(){
    setToggle(!toggle)
  }

  return (
     <>
        <div className="title-container">
          <h1>Sort table list</h1>
        </div>
        <div className='table-container'>
          <table>
            <thead>
              <tr>
                  <th>Item</th>
              </tr>
            </thead>
            <tbody>
              {toggle? exampleDataFruits.sort((a,b) => {
              if(a.item.toLocaleLowerCase() < b.item.toLocaleLowerCase()) return 1
              if(a.item.toLocaleLowerCase() > b.item.toLocaleLowerCase()) return  -1
              return 0
              }).map((item, index) => (
                <tr key={index}>
                  <th>{item.item}</th>
                </tr>
              )) 
              
              :
              
              exampleDataFruits.sort((a,b) => {
                if(a.item.toLocaleLowerCase() < b.item.toLocaleLowerCase()) return -1
                if(a.item.toLocaleLowerCase() > b.item.toLocaleLowerCase()) return  1
                return 0
                }).map((item, index) => (
                  <tr key={index}>
                    <th>{item.item}</th>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button  onClick={toggleList}>🔠</button>
        </div>
    </>
  );
}

export default App;
