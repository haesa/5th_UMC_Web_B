import Add from '../../src/Components/Add';
import {movies} from '../../src/movieDummy.js';

//무비 컨테이너 담을 component 구성하기 
function App2() {
  return (
    <div>
      <div className="app2">
        {
          movies.results.map((item) =>{
            return(
              <Add
              overview={item.overview}
              title={item.title}
              />
            )

          })
        }
      </div>
    </div>
  );
}

export default App2;
