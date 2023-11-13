import cn from 'classnames'

type Props = JSX.IntrinsicElements['label']

export const Label = (props: Props) => {
  const { className } = props
  return <label {...props} className={cn('Label', className)} />
}
