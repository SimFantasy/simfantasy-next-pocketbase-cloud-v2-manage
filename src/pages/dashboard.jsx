import fantasyApi from '@/service/apis'
import { useAuth } from '@/hooks'
import { TitleBar } from '@/components'

const Dashboard = () => {
  return (
    <div className='page-main'>
      <TitleBar title='Dashboard' />
      <div className='page-container'></div>
    </div>
  )
}

export default Dashboard
