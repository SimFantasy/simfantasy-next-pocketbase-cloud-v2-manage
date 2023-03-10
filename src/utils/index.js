import { pocketbaseApiUrl, authorId } from '@/constants/config'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

// 获取Author Avatar图片
export const avatarImage = imagePath =>
  `${pocketbaseApiUrl}/api/files/users/${authorId}/${imagePath}`

// 序列化字符串 tags
export const serializationString = string => string.split(/,\s*/)

// Date格式化
dayjs.extend(relativeTime)
export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')
export const fullDateFormat = date => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
export const dateNowFormat = date => dayjs(date).locale('zh-cn').fromNow()

//序列化Skeleton
export const limitMap = limit => Array(limit).fill(0)

// 格式化slug
export const slugFormat = slug => slug.toLowerCase().trim().replace(/\s+/g, '-')

// 序列化查询字段
export const querySerialize = array => {
  const result = array.map(obj => Object.values(obj)[0])
  return result.join(' && ')
}
