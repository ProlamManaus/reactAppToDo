import './styles.css'

interface CardProps {
  name: string
  time: string
  // children?: React.ReactNode
}
// export function Card({props}) {
// export function Card({ name, time }: CardProps) {
export function Card({
  name,
  time,
  // children,
}: CardProps): JSX.Element {
  return (
    <>
      <div className="containerHomeCard">
        <div>
          <h2>{name}</h2>
          <div>
            <p>{time}</p>
            {/* {children} */}
          </div>
        </div>
      </div>
    </>
  )
}
