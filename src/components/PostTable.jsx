import { RiCheckboxCircleLine, RiCloseCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Pagination } from '@/components'
import { dateFormat } from '@/utils'

const PostTable = ({ data, page, setPage, handleDelete }) => {
  return (
    <>
      <table className='table-fixed table mx-4'>
        <thead>
          <tr>
            <th width='180'>ID</th>
            <th>Title</th>
            <th width='90'>Feature</th>
            <th width='130'>Show Image</th>
            <th width='100'>Category</th>
            <th width='120'>Updated</th>
            <th width='150'>Option</th>
          </tr>
        </thead>
        <tbody>
          {data?.items?.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link
                  to={`/post/${item.id}`}
                  className='text-gray-500 hover:underline hover:text-gray-800 '
                >
                  {item.title}
                </Link>
              </td>
              <td>
                {item.isFeature ? (
                  <span className='text-green-500'>
                    <RiCheckboxCircleLine size={18} />
                  </span>
                ) : (
                  <span className='text-gray-300'>
                    <RiCloseCircleLine size={18} />
                  </span>
                )}
              </td>
              <td>
                {item.showCoverImage ? (
                  <span className='text-green-500'>
                    <RiCheckboxCircleLine size={18} />
                  </span>
                ) : (
                  <span className='text-gray-300'>
                    <RiCloseCircleLine size={18} />
                  </span>
                )}
              </td>
              <td>{item.expand.category.name}</td>
              <td>{dateFormat(item.updated)}</td>
              <td className=''>
                <button
                  className='px-2 py-1 bg-red-200 hover:bg-red-300 rounded text-red-800 text-xs mr-2 uppercase'
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/post/edit/${item.id}`}
                  className='px-2 py-1 bg-green-300 hover:bg-green-400 rounded text-green-800 text-xs uppercase'
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
        <tr>
          <td colSpan='7'>
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={data.totalPages}
            />
          </td>
        </tr>
      </tfoot> */}
      </table>
      <div className='px-4'>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={data.totalPages}
        />
      </div>
    </>
  )
}

export default PostTable
