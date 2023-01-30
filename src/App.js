import InputSearch from './components/InputSearch/InputSearch';
import './appStyle.scss';
import LastSearch from './components/LastSearch/LastSearch';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className="">
      <InputSearch />
      <LastSearch />
      <SortAndFilter />
      <MainSection />
    </div>
  );
}

export default App;
