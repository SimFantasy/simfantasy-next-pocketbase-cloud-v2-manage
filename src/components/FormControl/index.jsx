import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Editor from './Editor'
import Button from './Button'
import Switch from './Switch'

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'switch':
      return <Switch {...rest} />
    case 'editor':
      return <Editor {...rest} />
    case 'button':
      return <Button {...rest} />
    default:
      return null
  }
}

export default FormControl
