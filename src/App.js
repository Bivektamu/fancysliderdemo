import "./App.scss";
import { Slider } from "react-fancyslider";

import imgO from "./images/1.jpg";
import imgT from "./images/2.jpg";
import imgTh from "./images/3.jpg";
import imgF from "./images/4.jpg";
import imgFi from "./images/5.jpg";
import imgS from "./images/6.jpg";

function App() {
  const imgArray1 = [imgO, imgT, imgTh, imgF, imgFi, imgS];
  const imgArray2 = [imgF, imgFi, imgS, imgO];
  const imgArray3 = [imgF, imgFi, imgS, imgO];

  return (
    <div className="App">
      <header className="App-header">Fancy Slider Library Demo</header>
      <main>
        <section className="container1">
          <Slider
            className="slider1"
            slideToShow={3}
            images={imgArray1}
            auto={false}
            timer={1000}
            transitionTime={500}
            directionNav={true}
            controlNav={true}
            gap={50}
          />
          <div className="pre">
            <span className="code">
              &#60;Slider className="slider1" slideToShow=&#123;3&#125; images = &#123;imgArray1&#125;
              auto=&#123;true&#125; timer=&#123;1000&#125; transitionTime =
              &#123;500&#125; directionNav = &#123;true&#125;
              controlNav=&#123;true&#125; gap=&#123;50&#125; /&#62;
            </span>
          </div>
        </section>

        <section className="container2">
          <Slider
            className="slider2"
            slideToShow={2}
            auto={false}
            animationEasing={'fade'}
            images={imgArray2}
            timer={2000}
            transitionTime={500}
            directionNav={true}
            gap={80}
          />
          <div className="pre">
            <span className="code">
              &#60;Slider className="slider2" slideToShow=&#123;2&#125; images=&#123;imgArray2&#125;
              auto=&#123;true&#125; animationEasing=&#123;fade&#125; timer=&#123;2000&#125; transitionTime=&#123;500&#125; directionNav=&#123;true&#125; gap=&#123;80&#125; /&#62;
            </span>
          </div>
        </section>


        <section className="container3">
        <Slider
          className="slider3"
          slideToShow={1}
          images={imgArray3}
          auto={false}
          animationEasing={'slide'}
          transitionTime={300}
          directionNav={true}
          controlNav={true}
        />
          <div className="pre">
            <span className="code">
              &#60;Slider className="slider3" slideToShow=&#123;1&#125; images=&#123;imgArray3&#125;
              auto=&#123;false&#125; animationEasing=&#123;slide&#125; transitionTime=&#123;300&#125; directionNav=&#123;true&#125; controlNav=&#123;true&#125; /&#62;
            </span>
          </div>
        </section>

       
      </main>
    </div>
  );
}

export default App;
