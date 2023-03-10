import { useCallback, memo } from 'react'

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrevPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page, setPage])

  const handleNextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }, [page, setPage, totalPages])
  return (
    <div className='w-full h-full flex justify-between items-center'>
      <div className='text-gray-300'>
        Page {page} of {totalPages}
      </div>
      <div className='flex justify-end items-center h-full gap-2'>
        <button
          className='px-2 py-1 border border-gray-300 rounded text-sm text-gray-500 bg-white hover:bg-gray-300 hover:text-gray-800 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-100'
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className='px-2 py-1 border border-gray-300 rounded text-sm text-gray-500 bg-white hover:bg-gray-300 hover:text-gray-800 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-100'
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
