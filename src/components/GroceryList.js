import { useEffect, useState } from 'react'
import { getGroceries, updateGrocery, deleteGrocery } from '../api'

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);

  const refreshList = async () => {
    const { data } = await getGroceries()
    setGroceries(data)
  }

  useEffect(() => {
    refreshList()
  }, [])

  return (
    <div>
      {groceries.map((item) => (
        <div key={item._id}>
          <span style={{ textDecoration: item.purchased ? 'line-through' : 'none' }}>
            {item.grocery}
          </span>
          <button onClick={() => updateGrocery(item._id, { purchased: !item.purchased })}>
            Purchased
          </button>
          <button onClick={() => deleteGrocery(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default GroceryList
