import { useParams, useNavigate, Link } from 'react-router-dom'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { useDetailQuery } from '@/hooks'
import { MarkdownContent, TitleBar } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'

const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading } = useDetailQuery('posts')

  if (isLoading) return <>loading...</>

  const {
    content,
    coverImage,
    title,
    tags,
    created,
    expand: { category }
  } = data
  return (
    <div className='page-main'>
      <TitleBar title='Post Review' buttonText='Back to list' route='back' />
      <div className='page-container flex flex-col'>
        {coverImage && (
          <div className='w-full max-h-[320px] rounded-md overflow-hidden mb-10'>
            <img
              src={coverImage}
              alt={title}
              className='w-full h-auto object-contain object-center rounded-md'
            />
          </div>
        )}
        <h2 className='text-xl text-gray-800 dark:text-white font-semibold'>
          {title}
        </h2>
        <div className='pt-3 pb-4 flex justify-start items-center gap-6 text-gray-400 text-sm'>
          <div className='flex justify-start items-center gap-2 h-full'>
            <RiCalendar2Line /> {fullDateFormat(created)}
          </div>
          <div className='flex justify-start items-center gap-2 h-full'>
            <RiFolder2Line />
            <Link
              to={`/post?category=${category.id}`}
              className='hover:text-gray-800'
            >
              {category.name}
            </Link>
          </div>
        </div>
        <article className='text-lg leading-8'>
          <MarkdownContent source={content} />
        </article>
        <div className='divider-line'></div>
        <div className='flex justify-start items-center gap-4 h-10 mt-6 text-gray-500'>
          {serializationString(tags).map((tag, index) => (
            <Link
              to={`/post?keyword=${tag}`}
              key={index}
              className='px-2 py-1 bg-gray-300 rounded text-sm dark:bg-gray-900 dark:text-gray-300'
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Detail
