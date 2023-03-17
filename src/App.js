
import './App.css';
import { Route , Routes , Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Page1 from './Routerpractice/Page1';
import { useParams } from 'react-router-dom';
import Pro from './Routerpractice/Pro';
import Prodetail from './Routerpractice/Prodetail';
import Page2 from './Routerpractice/Page2';


function App() {
    //console.log 찍었을때 key , value object를 반화 한다.
    //id라는 키값이 있고 01이라고 해줬기때문에 01 이라는 value 값이 있다.
    //id라는 key 값은 path = '/products/:id' 여기서 온다.
    //useParams 라는 리액트 훅을 사용하면 URL Id값을 가져올수 있다
   const params = useParams();
   //리액트에서 자주 사용 하는 useParams 
   console.log(params)


  return (
    <div className="App">

       <div>
         <Link to='./Page1'>React Page1 gogo</Link>
         <Link to='./Page2'>두번째 페이지로</Link>
         <Link to='./Page3'>세번째 태그로</Link>
       </div>
       
      <Routes>
       



        <Route path='/Page1' element={<Page1></Page1>}></Route>
        <Route path='/pro' element={<Pro></Pro>}></Route>
        <Route path='/pro/:id' element={<Prodetail></Prodetail>}></Route>
        <Route path='/page2' element={<Page2></Page2>}></Route>
        <Route path='/page3' element={<h1>안녕하세요 반갑습니다</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
