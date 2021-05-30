import { FiStar } from 'react-icons/fi'

const data = {
  title: 'meu-primeiro-codigo',
  description: 'Descrevendo meu código',
  stars: 200,
  updated: 'Updated May 29'
}

function Repository() {
  return (
    <div className="repository">
      <h4 className="title">{data.title}</h4>

      <span className="description">{data.description}</span>

      <div className="info">
        <div className="stars">
          <FiStar size={16} />
          <span>{data.stars}</span>
        </div>
        <span className="updated">{data.updated}</span>
      </div>

    </div>
  )
}

export default Repository