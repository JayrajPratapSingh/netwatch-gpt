import Header  from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
const Browse = () => {

useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
      {/* 

      # Main Container
       - VideoBackground
       - VideoTitle
      # Second Container
       - List of Movies


      
      */}
      </div>
  )
}

export default Browse