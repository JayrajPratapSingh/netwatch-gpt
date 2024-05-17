import Header  from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import usePopulerMovies from '../Hooks/usePopulerMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import GptSuggestion from './GptSuggestion'
import { useSelector } from 'react-redux'
const Browse = () => {

  const toggleGpt = useSelector(store=> store.gpt.toggleGptBtn)
//feching the data by using hook build by us and updating the store

useNowPlayingMovies()
usePopulerMovies()
useTopRatedMovies()
useUpcomingMovies()
  return (
    
    <div>
      
      <Header />
      {toggleGpt? <GptSuggestion /> : <>    <MainContainer />
      <SecondContainer /></>}
     
   
    
      </div>
  )
}

export default Browse