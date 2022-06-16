import { Data } from '../types/data';
import { DataRow } from './components/data.row';
import { useData } from './hooks/data.hook';

function App() {
  const data: Data[] = useData();
  return (
    <div>
      Hello my friend
      <div>
        {
          data.map(el => <DataRow data={el} />)
        }
      </div>
    </div>
  );
}

export default App;
