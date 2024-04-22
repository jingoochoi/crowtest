// import logo from './logo.svg';
import './App.css';
import { titles } from './crow';
// import { news } from './crow2';
// import { lang } from './crow3';
// const lang = require('./crow3.js'); // 모듈 가져오기
// import lang from './crow3';

// console.log(lang); // 모듈 사용

function App() {
  return (
    <div className="App">
      <div>{titles}</div>
      {/* <div>{news}</div> */}
      {/* <div>{lang}</div> */}
    </div>
  );
}

export default App;
// 결국 크롤링(스크래핑)은 서버에서 동작하게 하는 것이 권장된다. 깃허브만 특이하게 고유의 특징으로 크롤링이 된다. 프론트엔드만으로는 안 된다!!!