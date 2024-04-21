import background from '@/assets/img/home-background-2.jpg'


const text_1 = 'Welcome'
const text_2 = 'to my'
const text_4 = 'project'

const HomePage = () => {

  return (
    <div className="home-box" style={{ backgroundImage: `url(${background})` }}>
      <div className="home-box_header">
        <div className="home-box_title">
          {text_1.split('').map((word, index) => (
            <div className="home-box_text ball" key={index}>
              <span className="home-box_word shadow">{word}</span>
            </div>
          ))}
        </div>
        <div className="home-box_title">
          {text_2.split('').map((word, index) => (
            <div className="home-box_text" key={index}>
              <span className="home-box_word">{word}</span>
            </div>
          ))}
        </div>
        <div className="home-box_title">
          {text_4.split('').map((word, index) => (
            <div className="home-box_text" key={index}>
              <span className="home-box_word">{word}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage