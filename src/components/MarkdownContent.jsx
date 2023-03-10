import { memo } from 'react'
import MDEditor from '@uiw/react-md-editor'

const MarkdownContent = ({ source, config }) => {
  return <MDEditor.Markdown source={source} {...config} />
}

export default memo(MarkdownContent)
