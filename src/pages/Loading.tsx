import background from '@/assets/img/loading.jpg'

const Loading = () => {

  return (
    <div className='lodaing-container'>
      <div className="loading-box" style={{ backgroundImage: `url(${background})` }}/>
      <div className='backdrop' />
      <span
        className='loading-word'
        style={{ backgroundImage: `url(${background})`, }}
      >
        Loading...
      </span>
    </div>
  )
}

export default Loading