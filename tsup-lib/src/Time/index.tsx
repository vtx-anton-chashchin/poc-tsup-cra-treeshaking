import { format } from 'date-fns'

import './styles.css'

type Props = {
  date: Date
}

export const Time = (props: Props) => {
  return (
    <>
      <div className="tsup-lib__time">{format(props.date, 'HH:mm:ss:SSS')}</div>
      {/* <div>{formatDistanceToNow(props.date)}</div> */}
    </>
  )
}
