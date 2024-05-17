import Header  from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import usePopulerMovies from '../Hooks/usePopulerMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
const Browse = () => {
//feching the data by using hook build by us and updating the store

useNowPlayingMovies()
usePopulerMovies()
useTopRatedMovies()
useUpcomingMovies()
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