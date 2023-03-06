import './App.css';
import Labs from "./labs"
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faHome, faHashtag, faEllipsis, faList, faCircleCheck, faGear, faRetweet, faArrowUpFromBracket, faLink } from '@fortawesome/free-solid-svg-icons'
import { far, faBell, faEnvelope, faBookmark, faUser, faCircle, faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faHome, faHashtag, faEllipsis, faList, faCircleCheck, faGear, faRetweet, faArrowUpFromBracket, faLink,
  far, faBell, faEnvelope, faBookmark, faUser, faCircle, faComment, faHeart,
  faTwitter)

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
