import logo from './assets/img/mubariz.jpg';
import './App.css';

function App() {
  return (
    <div className="common">
      <div className="container">
        <div className="cv">
          <div className="up">
            <div className="col-4">
            <div className="img">
                <img src={logo}></img>
              </div>
            </div>
            <div className="col-8">
              <div className="text">
                <p><b>Senior AI Developer</b>developing in machine language.Experience in a number of large companies.well-versed programming languages include htmls,css,JavaScript,phyton,c#</p>
              </div>
            </div>
            <div className="name">
              <b>Mubariz Aghayev</b>
            </div>
          </div>
          <div className="down">
            <div className="col-4">
              <div className="left">
                <div>
                  <label><b>Phone:</b></label><br></br>
                  <span>+994-055-223-08-33</span>
                </div><br></br>
                <div>
                  <label><b>Email:</b></label><br></br>
                  <span><a href="">mubarizra@code.edu.az</a></span>
                </div><br></br>
                <div>
                  <label><b>Linkedin:</b></label><br></br>
                  <span><a href="">linkedin.com/mubarizagayev</a></span>
                </div><br></br>
                <h1><b>Skill Highlights</b></h1>
                <div className="line"></div>
                <ul className="mt-3">
                  <li><b>Skill highlights</b></li>
                  <li><b>the ability to build an algorithm</b></li>
                  <li><b>Leadership</b></li>
                  <li><b>Creative design</b></li>
                  <li><b>Complex problem solving</b></li>
                  <li><b>Innovative</b></li>
                  <li><b>Service-focused</b></li>
                </ul><br></br>
                <h1><b>Languages</b></h1>
                <div className="line"></div>
                <span>Azeribaijan-Native</span>
                <span>English-B2</span>
                <span>Turkish-C1</span>
              </div>
            </div>
            <div className="col-8">
              <div className="right">
                <h1><b>Experience</b></h1>
                <div className="line"></div>
                <div className="mt-5">
                  <h5 >Back-End developer - Linnify Company, Switzerland</h5>
                  <ul>
                    <li>Data menegment</li>
                    <li>System management control</li>
                  </ul>
                </div>

                <div className="mt-5">
                  <h5 >AI developer - Medelly Company, Stockholm, Swedan</h5>
                  <ul>
                    <li>Management of system machines</li>
                    <li>Writing artificial intelligence</li>
                  </ul>
                </div>

                <h1><b>Education</b></h1>
                <div className="line"></div><br></br>
                <h5>Bachelor of science : Computer science - Azeribaijan State Oil and Industry University, Baku, Azeribaijan </h5>
                <h5>Master of science : Artificial intellegence - ETH Zurich, Zurich, Switzerland </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
