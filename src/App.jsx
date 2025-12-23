import MovieHeader from './layout/Header.jsx';
import MovieBanner from './components/Hero.jsx';
import Movies from './components/Movies.jsx';

function App() {
    return(
        <>
         <MovieHeader />
         <MovieBanner />
         <Movies />
        </>
    )
};

export default App;