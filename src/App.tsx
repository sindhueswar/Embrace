import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Partners from "./components/partners/Partners";
import Commitments from "./components/commitments/commitments";
import Accordion from "./components/accordion/Accordion";
import Accordionimage from "./components/accordion/Accordionimg";
import WorkCarousel from "./components/Works/Works";
import Team from "./components/Team/Team";
import Slider from "./components/Slider/Slider";
import Banner from "./components/Banner/Banner";
import Help from "./components/Help/Help";
import Bottom from "./components/Footer/bottom";

const accordionData = [
  {
    title: "Discovery",
    content:
      "We meet with you to learn about your business, your goals, and your target audience.",
    icon: (
      <svg
        width="106"
        height="107"
        viewBox="0 0 106 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="accordionicon"
      >
        <rect y="0.5" width="106" height="106" rx="24" fill="#3461FF" />
        <g clip-path="url(#clip0_1_860)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.8999 74.1H69.1C71.6898 74.1 73.5298 72.9707 74.6476 71.4182C75.678 69.9853 76 68.3362 76 67.2V53.4C76 52.79 75.7577 52.205 75.3263 51.7736C74.895 51.3423 74.31 51.1 73.7 51.1H66.8V39.6C66.8 37.77 66.073 36.0149 64.779 34.7209C63.485 33.4269 61.73 32.7 59.9 32.7H36.8999C35.0699 32.7 33.3149 33.4269 32.0209 34.7209C30.7269 36.0149 29.9999 37.77 29.9999 39.6V67.2C29.9999 68.3339 30.3219 69.9853 31.3523 71.4182C32.4701 72.973 34.3101 74.1 36.8999 74.1ZM69.1 55.7C69.71 55.7 70.295 55.9423 70.7263 56.3737C71.1577 56.805 71.4 57.39 71.4 58V67.2C71.4 67.81 71.1577 68.395 70.7263 68.8264C70.295 69.2577 69.71 69.5 69.1 69.5C68.49 69.5 67.905 69.2577 67.4736 68.8264C67.0423 68.395 66.8 67.81 66.8 67.2V58C66.8 57.39 67.0423 56.805 67.4736 56.3737C67.905 55.9423 68.49 55.7 69.1 55.7ZM46.0999 48.8C46.0999 48.19 46.3423 47.605 46.7736 47.1736C47.2049 46.7423 47.7899 46.5 48.3999 46.5C49.0099 46.5 49.5949 46.7423 50.0263 47.1736C50.4576 47.605 50.6999 48.19 50.6999 48.8C50.6999 49.41 50.4576 49.995 50.0263 50.4263C49.5949 50.8577 49.0099 51.1 48.3999 51.1C47.7899 51.1 47.2049 50.8577 46.7736 50.4263C46.3423 49.995 46.0999 49.41 46.0999 48.8ZM48.3999 41.9C46.5699 41.9 44.8149 42.6269 43.5209 43.9209C42.2269 45.2149 41.4999 46.97 41.4999 48.8C41.4999 50.63 42.2269 52.385 43.5209 53.679C44.8149 54.973 46.5699 55.7 48.3999 55.7C50.2299 55.7 51.985 54.973 53.279 53.679C54.573 52.385 55.2999 50.63 55.2999 48.8C55.2999 46.97 54.573 45.2149 53.279 43.9209C51.985 42.6269 50.2299 41.9 48.3999 41.9ZM41.4999 60.3C40.8899 60.3 40.3049 60.5423 39.8736 60.9737C39.4422 61.405 39.1999 61.99 39.1999 62.6C39.1999 63.21 39.4422 63.795 39.8736 64.2264C40.3049 64.6577 40.8899 64.9 41.4999 64.9H55.2999C55.9099 64.9 56.495 64.6577 56.9263 64.2264C57.3576 63.795 57.6 63.21 57.6 62.6C57.6 61.99 57.3576 61.405 56.9263 60.9737C56.495 60.5423 55.9099 60.3 55.2999 60.3H41.4999Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_860">
            <rect
              width="46"
              height="46"
              fill="white"
              transform="translate(30 30.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    image: (
      <img
        src="https://file.rendit.io/n/ltivyDUUttVoTSySAHNK.png"
        alt="pic"
        className="accordionpic"
        width={380}
      />
    ),
  },
  {
    title: "Strategy",
    content:
      "We develop a customized marketing strategy that is based on your unique needs and goals.",
    icon: (
      <svg
        width="106"
        height="107"
        viewBox="0 0 106 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="accordionicon"
      >
        <rect y="0.5" width="106" height="106" rx="24" fill="#3461FF" />
        <path
          d="M54.15 35.1C53.845 35.1 53.5525 35.2211 53.3368 35.4368C53.1212 35.6525 53 35.945 53 36.25V42.23C53 45.3971 55.1321 48.0628 58.037 48.877C57.531 55.179 55.7094 59.8825 54.2167 62.7828C54.6399 63.2796 55.0378 63.6499 55.3483 63.9098C56.542 64.908 57.6 66.5341 57.6 68.5627C57.6015 69.7636 57.2178 70.9333 56.5052 71.9H69.1C70.015 71.9 70.8925 71.5365 71.5395 70.8895C72.1865 70.2425 72.55 69.365 72.55 68.45V67.7439C72.55 66.9435 72.2763 66.2052 71.8554 65.6003C70.6134 63.8132 67.0967 58.0333 66.3607 48.8747C67.8104 48.4683 69.0875 47.599 69.9973 46.3994C70.9071 45.1998 71.3997 43.7356 71.4 42.23V36.25C71.4 35.945 71.2788 35.6525 71.0632 35.4368C70.8475 35.2211 70.555 35.1 70.25 35.1H68.525C68.0675 35.1 67.6287 35.2817 67.3052 35.6052C66.9817 35.9287 66.8 36.3675 66.8 36.825V38.55C66.8003 38.701 66.7709 38.8506 66.7133 38.9902C66.6558 39.1299 66.5714 39.2568 66.4648 39.3638C66.2496 39.5799 65.9573 39.7017 65.6523 39.7023C65.3473 39.7029 65.0546 39.5823 64.8385 39.3671C64.6224 39.1518 64.5006 38.8596 64.5 38.5546V38.55L64.4908 36.8158C64.4884 36.3599 64.3056 35.9235 63.9823 35.602C63.6591 35.2804 63.2217 35.1 62.7658 35.1H61.6342C61.1783 35.1 60.7409 35.2804 60.4177 35.602C60.0944 35.9235 59.9116 36.3599 59.9092 36.8158L59.9 38.5546C59.8994 38.8596 59.7776 39.1518 59.5615 39.3671C59.3454 39.5823 59.0527 39.7029 58.7477 39.7023C58.4427 39.7017 58.1504 39.5799 57.9352 39.3638C57.72 39.1477 57.5994 38.855 57.6 38.55V36.825C57.6 36.3675 57.4183 35.9287 57.0948 35.6052C56.7713 35.2817 56.3325 35.1 55.875 35.1H54.15ZM44.95 42C43.618 42 42.3145 42.3856 41.1968 43.1101C40.0792 43.8346 39.1951 44.8672 38.6513 46.0831C38.1075 47.2991 37.9273 48.6464 38.1325 49.9625C38.3376 51.2786 38.9192 52.5072 39.8072 53.5H39.2C38.59 53.5 38.005 53.7423 37.5737 54.1736C37.1423 54.605 36.9 55.19 36.9 55.8C36.9 56.41 37.1423 56.995 37.5737 57.4263C38.005 57.8577 38.59 58.1 39.2 58.1H40.396C39.5404 62.2354 37.2841 64.6228 36.026 65.6739C35.2302 66.3409 34.6 67.3667 34.6 68.5627C34.6 70.405 36.095 71.9 37.9373 71.9H51.965C53.805 71.9 55.3 70.405 55.3 68.5627C55.3 67.3667 54.6698 66.3409 53.874 65.6739C52.6159 64.6228 50.3596 62.2354 49.504 58.1H50.7C51.31 58.1 51.895 57.8577 52.3263 57.4263C52.7577 56.995 53 56.41 53 55.8C53 55.19 52.7577 54.605 52.3263 54.1736C51.895 53.7423 51.31 53.5 50.7 53.5H50.0928C50.9808 52.5072 51.5624 51.2786 51.7675 49.9625C51.9727 48.6464 51.7924 47.2991 51.2487 46.0831C50.7049 44.8672 49.8208 43.8346 48.7032 43.1101C47.5855 42.3856 46.282 42 44.95 42Z"
          fill="white"
        />
      </svg>
    ),
    image: (
      <img
        src="https://file.rendit.io/n/Wp7ZOnDQFfcLI2eBWFj8.png"
        alt="pic"
        className="accordionpic"
        width={380}
      />
    ),
  },
  {
    title: "Execution",
    content:
      "We execute our strategy using the latest digital marketing tools and techniques.",
    icon: (
      <svg
        width="106"
        height="107"
        viewBox="0 0 106 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="accordionicon"
      >
        <rect y="0.5" width="106" height="106" rx="24" fill="#3461FF" />
        <path
          d="M64.5 34.8125C64.5005 34.5278 64.4165 34.2494 64.2586 34.0125C64.1006 33.7757 63.8759 33.591 63.613 33.482C63.35 33.373 63.0605 33.3445 62.7814 33.4002C62.5022 33.4559 62.2458 33.5932 62.0448 33.7948L56.2948 39.5448C56.1613 39.6785 56.0556 39.8372 55.9836 40.0119C55.9116 40.1865 55.8747 40.3736 55.875 40.5625V48.5924L53.7446 50.7199C53.3185 50.6068 52.872 50.593 52.4397 50.6797C52.0073 50.7663 51.6007 50.951 51.251 51.2196C50.9013 51.4882 50.6179 51.8335 50.4227 52.2288C50.2275 52.6242 50.1257 53.0591 50.125 53.5C50.1252 53.9092 50.2127 54.3136 50.3817 54.6862C50.5507 55.0588 50.7973 55.3911 51.105 55.6607C51.4127 55.9304 51.7744 56.1313 52.1659 56.25C52.5575 56.3687 52.9699 56.4025 53.3755 56.3491C53.7812 56.2956 54.1707 56.1562 54.5182 55.9402C54.8656 55.7241 55.163 55.4364 55.3903 55.0962C55.6177 54.756 55.7698 54.3712 55.8365 53.9676C55.9032 53.5639 55.883 53.1506 55.7773 52.7554L57.9076 50.625H65.9375C66.1264 50.6253 66.3135 50.5884 66.4881 50.5164C66.6628 50.4444 66.8215 50.3387 66.9553 50.2053L72.7052 44.4553C72.9068 44.2542 73.0441 43.9978 73.0998 43.7187C73.1555 43.4395 73.127 43.15 73.018 42.8871C72.909 42.6241 72.7243 42.3994 72.4875 42.2415C72.2506 42.0835 71.9722 41.9995 71.6875 42H64.5V34.8125ZM70.089 51.1368C70.5837 54.7166 69.9416 58.3614 68.2533 61.5567C66.5651 64.752 63.9159 67.3364 60.6798 68.945C57.4437 70.5536 53.784 71.1053 50.2175 70.522C46.651 69.9388 43.3578 68.2502 40.8026 65.6946C38.2475 63.1389 36.5595 59.8453 35.977 56.2787C35.3944 52.7121 35.9468 49.0526 37.556 45.8168C39.1653 42.581 41.7502 39.9323 44.9458 38.2446C48.1414 36.557 51.7864 35.9156 55.3661 36.411L54.265 37.5121C53.8641 37.9125 53.546 38.388 53.329 38.9114C53.1119 39.4348 53.0001 39.9959 53 40.5625C50.4412 40.5625 47.9399 41.3213 45.8123 42.7429C43.6847 44.1645 42.0265 46.185 41.0473 48.549C40.0681 50.9131 39.8119 53.5144 40.3111 56.024C40.8103 58.5336 42.0425 60.8389 43.8518 62.6482C45.6611 64.4575 47.9664 65.6897 50.476 66.1889C52.9856 66.6881 55.5869 66.4319 57.951 65.4527C60.315 64.4735 62.3355 62.8153 63.7571 60.6877C65.1787 58.5601 65.9375 56.0588 65.9375 53.5C67.0809 53.499 68.177 53.044 68.985 52.235L70.089 51.1368ZM53 43.4375C51.0098 43.4375 49.0643 44.0277 47.4096 45.1333C45.7548 46.239 44.4651 47.8106 43.7035 49.6493C42.9419 51.4879 42.7426 53.5112 43.1308 55.4631C43.5191 57.415 44.4775 59.208 45.8847 60.6153C47.292 62.0225 49.085 62.9809 51.0369 63.3692C52.9888 63.7574 55.0121 63.5582 56.8508 62.7965C58.6894 62.0349 60.261 60.7452 61.3667 59.0904C62.4723 57.4357 63.0625 55.4902 63.0625 53.5H59.0979L58.7385 53.8594C58.6694 54.9639 58.283 56.025 57.6258 56.9153C56.9685 57.8056 56.0683 58.4874 55.0331 58.8787C53.998 59.2701 52.8719 59.3544 51.79 59.1216C50.7081 58.8888 49.7164 58.3487 48.9339 57.5661C48.1513 56.7836 47.6113 55.7919 47.3784 54.71C47.1456 53.6281 47.2299 52.502 47.6213 51.4669C48.0126 50.4317 48.6944 49.5315 49.5847 48.8743C50.475 48.217 51.5361 47.8306 52.6406 47.7615L53 47.4021V43.4375Z"
          fill="white"
        />
      </svg>
    ),
    image: (
      <img
        src="https://file.rendit.io/n/q5WiNJ80VMNvkMHLn0AO.png"
        alt="pic"
        className="accordionpic"
        width={380}
      />
    ),
  },
  {
    title: "Measurement",
    content:
      "We track the results of our campaigns so that we can make adjustments as needed.",
    icon: (
      <svg
        width="106"
        height="107"
        viewBox="0 0 106 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" 
        className="accordionicon"
      >
        <rect y="0.5" width="106" height="106" rx="24" fill="#3461FF" />
        <path
          d="M72.2841 47.75L47.25 72.7823C46.983 73.0493 46.6661 73.2611 46.3172 73.4057C45.9683 73.5502 45.5944 73.6246 45.2168 73.6246C44.8392 73.6246 44.4653 73.5502 44.1165 73.4057C43.7676 73.2611 43.4507 73.0493 43.1837 72.7823L33.7159 63.3163C33.4489 63.0493 33.2371 62.7324 33.0925 62.3835C32.948 62.0347 32.8736 61.6608 32.8736 61.2832C32.8736 60.9056 32.948 60.5316 33.0925 60.1828C33.2371 59.8339 33.4489 59.517 33.7159 59.25L38.9574 54.0085C39.0242 53.9417 39.1034 53.8887 39.1907 53.8525C39.278 53.8163 39.3715 53.7977 39.4659 53.7977C39.5604 53.7977 39.6539 53.8163 39.7412 53.8525C39.8284 53.8887 39.9077 53.9417 39.9745 54.0085L46.233 60.267C46.3727 60.4067 46.5398 60.5161 46.7237 60.5883C46.9076 60.6605 47.1044 60.694 47.3019 60.6868C47.4993 60.6795 47.6932 60.6316 47.8713 60.5461C48.0494 60.4606 48.208 60.3393 48.3371 60.1898C48.5732 59.905 48.6932 59.5417 48.6732 59.1723C48.6532 58.8029 48.4947 58.4547 48.2293 58.197L42.0067 51.9744C41.8723 51.8397 41.7968 51.6572 41.7968 51.4668C41.7968 51.2765 41.8723 51.094 42.0067 50.9592L44.702 48.2639C44.7688 48.1971 44.8481 48.1441 44.9353 48.1079C45.0226 48.0717 45.1161 48.0531 45.2105 48.0531C45.305 48.0531 45.3985 48.0717 45.4858 48.1079C45.573 48.1441 45.6523 48.1971 45.7191 48.2639L51.9776 54.5224C52.1173 54.6621 52.2844 54.7714 52.4683 54.8437C52.6522 54.9159 52.849 54.9494 53.0465 54.9422C53.2439 54.9349 53.4378 54.887 53.6159 54.8015C53.794 54.716 53.9526 54.5947 54.0817 54.4451C54.3178 54.1604 54.4378 53.797 54.4178 53.4277C54.3979 53.0583 54.2393 52.7101 53.9739 52.4524L47.7585 46.2244C47.6241 46.0897 47.5486 45.9072 47.5486 45.7168C47.5486 45.5265 47.6241 45.344 47.7585 45.2092L50.4538 42.5139C50.5886 42.3795 50.7711 42.304 50.9614 42.304C51.1518 42.304 51.3343 42.3795 51.4691 42.5139L57.7276 48.7724C57.8674 48.9124 58.0345 49.022 58.2186 49.0944C58.4027 49.1668 58.5997 49.2004 58.7974 49.1931C58.9951 49.1859 59.1891 49.1379 59.3674 49.0522C59.5457 48.9665 59.7044 48.845 59.8335 48.6951C60.0694 48.4102 60.1891 48.0467 60.1688 47.6773C60.1484 47.308 59.9896 46.9598 59.7239 46.7024L53.5085 40.4744C53.3741 40.3397 53.2986 40.1572 53.2986 39.9668C53.2986 39.7765 53.3741 39.594 53.5085 39.4592L58.75 34.2177C59.017 33.9507 59.3339 33.7389 59.6828 33.5943C60.0317 33.4498 60.4056 33.3754 60.7832 33.3754C61.1608 33.3754 61.5347 33.4498 61.8835 33.5943C62.2324 33.7389 62.5494 33.9507 62.8163 34.2177L72.2841 43.6837C72.5511 43.9506 72.7629 44.2676 72.9075 44.6165C73.052 44.9653 73.1264 45.3392 73.1264 45.7168C73.1264 46.0944 73.052 46.4683 72.9075 46.8172C72.7629 47.166 72.5511 47.483 72.2841 47.75Z"
          fill="white"
        />
      </svg>
    ),
    image: (
      <img
        src="https://file.rendit.io/n/3RGKmGazR5LLN46jLVNK.png"
        alt="pic"
        className="accordionpic"
        width={380}
      />
    ),
  },
];
function App() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(index);
  };

  useEffect(() => {
    toggleAccordion(openAccordion);

    const index =
      openAccordion >= accordionData.length - 1 ? 0 : openAccordion + 1;

    let timer = setTimeout(() => {
      setOpenAccordion(index);
    }, 3000);

    return () => {
      // console.log("clear timer");
      clearTimeout(timer);
    };
  }, [openAccordion]);

  return (
    <div className="App">
      <Navbar />
      <div className="herosec"><Hero /></div>     
      <Partners />      
      <Commitments />    
      <div className="working">
        <div  className="working1" >
          <div className="howtext">
          <div className="how">How it Works</div>
          <p className="howdesc">
            We believe that the best way to create successful marketing
            campaigns is to work closely with our clients to understand their
            goals and challenges.
          </p>
          </div>
          <div className="image-column">
            {openAccordion !== null && (
              <div className="picture-animation">
                {accordionData.map(
                  (data, index) =>
                    openAccordion === index && (
                      <Accordionimage key={index} Image={data.image} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
         <div className="working2">
          {accordionData.map((data, index) => (
            <Accordion
              // key={index}
              title={data.title}
              isOpen={openAccordion === index}
              icon={data.icon}
              onToggle={() => toggleAccordion(index)}
            >
              <p className="accrcontent">{data.content}</p>
            </Accordion>
          ))}
        </div> 
      </div>
      <WorkCarousel /> 
      <Team />      
      <Slider />       
      <Banner />      
      <Help />
      
      <Bottom />
    </div>
  );
}

export default App;