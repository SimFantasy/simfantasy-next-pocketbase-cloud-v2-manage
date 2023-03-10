import { Link } from 'react-router-dom'
import { dateFormat } from '@/utils'

const CategoryTable = ({ data, handleDelete }) => {
  return (
    <>
      <table className='table-fixed table'>
        <thead>
          <tr>
            <th width='180'>ID</th>
            <th>Name</th>
            <th width='160'>Slug</th>
            <th width='120'>Updated</th>
            <th width='150'>Option</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.slug}</td>
              <td>{dateFormat(item.updated)}</td>
              <td className=''>
                <button
                  className='px-2 py-1 bg-red-200 hover:bg-red-300 rounded text-red-800 text-xs mr-2 uppercase'
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/category/edit/${item.id}`}
                  className='px-2 py-1 bg-green-300 hover:bg-green-400 rounded text-green-800 text-xs uppercase'
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default CategoryTable
