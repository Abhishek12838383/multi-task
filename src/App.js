import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Page3 from './components/pages/page3/Page3';
import Page1 from './components/pages/page1/Page1';
import Page2 from './components/pages/page2/Page2';
import Page4 from './components/pages/page4/Page4';
import Page5 from './components/pages/page5/Page5';
import Page6 from './components/pages/page6/Page6';
import Page7 from './components/pages/page7/Page7';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
     <Route path='/' element={<Page1/>}/>
     <Route path='/page2' element={<Page2/>}/>
     <Route path='/page3' element={<Page3/>}/>
     <Route path='/page4' element={<Page4/>}/>
     <Route path='/page5' element={<Page5/>}/>
     <Route path='/page6' element={<Page6/>}/>
     <Route path='/page7' element={<Page7/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
