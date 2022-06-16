import { Data } from '../types/data';
import { DataRow } from './components/data.row';
import { useData } from './hooks/data.hook';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import { KerimAppBar } from './components/app.bar';
function App() {
  const data: Data[] = useData();
  let navigate = useNavigate();

  const goToDetails = (id: string) => {
    navigate(`/details/${id}`);
  }

  return (
    <div>
      <KerimAppBar />

      <List component="nav" aria-label="secondary mailbox folder">
        {
          data.map((el, index) => (
            <ListItemButton
              key={index}
              onClick={(event) => goToDetails(el.id)}
            >
              <ListItemText primary={el.header} />
            </ListItemButton>
          ))
        }
      </List>
    </div>
  );
}

export default App;
