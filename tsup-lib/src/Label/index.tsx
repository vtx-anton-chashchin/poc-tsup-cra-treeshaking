import cn from 'classnames'

import './styles.css'

type Props = JSX.IntrinsicElements['label']

export const Label = (props: Props) => {
  const { className } = props
  return <label {...props} className={cn('tsup-lib__label', className)} />
}
