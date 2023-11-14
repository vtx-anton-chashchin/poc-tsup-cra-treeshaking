import cn from 'classnames'

import './styles.css'

type Props = JSX.IntrinsicElements['button']

export const Button = (props: Props) => {
  const { className } = props
  return <button {...props} className={cn('tsup-lib__button', className)} />
}
