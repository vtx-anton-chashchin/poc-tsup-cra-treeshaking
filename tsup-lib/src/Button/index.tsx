import cn from 'classnames'

type Props = JSX.IntrinsicElements['button']

export const Button = (props: Props) => {
  const { className } = props
  return <button {...props} className={cn('Button', className)} />
}
