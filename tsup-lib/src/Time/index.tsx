import { format } from 'date-fns'

type Props = {
  date: Date
}

export const Time = (props: Props) => {
  return (
    <>
      <div>{format(props.date, 'HH:mm:ss:SSS')}</div>
      {/* <div>{formatDistanceToNow(props.date)}</div> */}
    </>
  )
}
