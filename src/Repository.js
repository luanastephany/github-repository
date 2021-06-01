import { FiStar } from 'react-icons/fi'


function Repository(props) {
  const data = props.data

  return (
    <div className="repository">
      <h4 className="title">{data.name}</h4>

      <span className="description">{data.description}</span>

      <div className="info">
        <div className="stars">
          <FiStar size={16} />
          <span>{data.stargazers_count}</span>
        </div>
        <span className="updated">{data.updated_at}</span>
      </div>

    </div>
  )
}

export default Repository