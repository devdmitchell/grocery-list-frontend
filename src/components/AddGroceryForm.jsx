import { useState } from 'react'
import { createGrocery } from '../api'

const AddGroceryForm = ({ refreshList }) => {
  const [grocery, setGrocery] = useState('')
  const [priority, setPriority] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createGrocery({ grocery, priority })
    setGrocery('')
    setPriority(false)
    refreshList()
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={grocery} onChange={(e) => setGrocery(e.target.value)} required />
      <label>
        <input type="checkbox" checked={priority} onChange={() => setPriority(!priority)} />
        Priority
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddGroceryForm