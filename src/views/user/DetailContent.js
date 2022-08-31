import { useParams } from 'react-router-dom'

export default () => {
  const params = useParams()
  return(
    <div>
      <h3>User {params.id} Detail</h3>
    </div>
  )
}