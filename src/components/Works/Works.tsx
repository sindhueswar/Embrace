// import React, { useState, useEffect } from "react";
// import "./works.css";

// const WorkCarousel = () => {
//   const images = [
//     "https://file.rendit.io/n/4bBcjlIdaN7oa08rBuVz.png",
//     "https://file.rendit.io/n/TX13oveze5WBmwKjPI1Q.png",
//     "https://file.rendit.io/n/dqXPTpYydKfkgdjVOry4.png",
//     "https://file.rendit.io/n/aWopYgxcu8gULzmvdD5I.png",
//     "https://file.rendit.io/n/wjsS7O8RJXHxi5v5SWji.png",
//     "https://file.rendit.io/n/iWucqU8XZ9XHe51mVj6H.png",
//     "https://file.rendit.io/n/Ii5aAut4tXyg4rwpE4Sn.png",
//     "https://file.rendit.io/n/vSBaArbFfqYP5xOBwO08.png",
//     "https://file.rendit.io/n/iczykH0Av0UJHe788l1K.png",
//   ];

//   const textDescriptions = [
//     "Apple",
//     "Coca-cola",
//     "Nike",
//     "Fhgbnh",
//     "Msnwc",
//     "Tghbc",
//     "Rgfvl",
//     "Yvbcgh",
//     "Rlmmb",
//   ];

//   const itemsPerPage = 3;
//   const [paginationClicked, setPaginationClicked] = useState(false);
//   const [activePage, setActivePage] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);
//   const handlePaginationClick = (index: number) => {
//     setActivePage(index);
//     setPaginationClicked(true);
//     setAutoplay(false);
//     setTimeout(() => {
//       // setPaginationClicked(false);
//       console.log("console", index);
//       setActivePage((prevPage) =>
//         prevPage === totalPages - 1 ? 0 : prevPage + 1
//       );
//     }, 4000);
//   };
//   const totalPages = Math.ceil(images.length / itemsPerPage);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setActivePage((prevPage) =>
//         prevPage === totalPages - 1 ? 0 : prevPage + 1
//       );
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [totalPages]);

//   const renderImagesWithText = () => {
//     const startIndex = activePage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     const imageElements = [];
//     for (let index = startIndex; index < endIndex; index++) {
//       imageElements.push(
//         <div key={index} className="carousel-item">
//           <img
//             src={images[index]}
//             alt={`Slide ${index}`}
//             className="carousel-image"
//           />
//           <p className="image-description">{textDescriptions[index]}</p>
//         </div>
//       );
//     }

//     return <div className="carousel-row">{imageElements}</div>;
//   };

//   return (
//     <div className="work-carousel">
//       <h2 className="work-heading">Our Work</h2>
//       <div className="workdesc">A glimpse of our portfolio</div>
//       <div className="carousel-container">{renderImagesWithText()}</div>

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePaginationClick(index)}
//             className={`pagination-button ${
//               index === activePage ? "active" : ""
//             }`}
//           >
//             {" "}
//           </button>
//         ))}
//       </div>
//       <button className="see">See More</button>
//     </div>
//   );
// };

// export default WorkCarousel;













































































import React, { useState, useEffect } from "react";
import "./works.css";

const WorkCarousel = () => {
  const images = [
    "https://file.rendit.io/n/4bBcjlIdaN7oa08rBuVz.png",
    "https://file.rendit.io/n/TX13oveze5WBmwKjPI1Q.png",
    "https://file.rendit.io/n/dqXPTpYydKfkgdjVOry4.png",
    "https://file.rendit.io/n/aWopYgxcu8gULzmvdD5I.png",
    "https://file.rendit.io/n/wjsS7O8RJXHxi5v5SWji.png",
    "https://file.rendit.io/n/iWucqU8XZ9XHe51mVj6H.png",
    "https://file.rendit.io/n/Ii5aAut4tXyg4rwpE4Sn.png",
    "https://file.rendit.io/n/vSBaArbFfqYP5xOBwO08.png",
    "https://file.rendit.io/n/iczykH0Av0UJHe788l1K.png",
    "https://file.rendit.io/n/yh2BoNxwVSlDtzHLSk7o.png",
    "https://file.rendit.io/n/5ZdeoiTf8YgUwoEsqNjY.png",
    "https://file.rendit.io/n/jNQjOHUAj6J4TX2HkiLl.png"
  ];

  const textDescriptions = [
    "Apple",
    "Coca-cola",
    "Nike",
    "Fhgbnh",
    "Msnwc",
    "Tghbc",
    "Rgfvl",
    "Yvbcgh",
    "Rlmmb",
    "Kbdhb",
    "Mhbds",
    "Vgvbd"
  ];
        
    
   
  const [activePage, setActivePage] = useState(0);
  const [paginationClicked, setPaginationClicked] = useState(false);
  // const [activePage, setActivePage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const itemsPerPage = () => {
    // if (window.innerWidth >= 1200) {
    //   return 3;
    // } else 
    if (window.innerWidth <= 700 && window.innerWidth>=401) {
      return 2;
    } else if (window.innerWidth <= 400){
        return 1;
    }
    else {
      return 3;
    }
  };
  console.log("Itemsperpage",itemsPerPage())
  console.log("window.innerWidth",window.innerWidth)
  const totalPages = Math.ceil(images.length / itemsPerPage());
  console.log("TotalPages",totalPages)
  const handlePaginationClick = (index: number) => {
        setActivePage(index);
        setPaginationClicked(true);
        setAutoplay(false);
        setTimeout(() => {
          setPaginationClicked(false);
          console.log("console", index);
          setActivePage((prevPage) =>
            prevPage === totalPages - 1 ? 0 : prevPage + 1
          );
        }, 999999999);
      };
  useEffect(() => {
    const totalItems = images.length;
    const itemsPerPageCount = itemsPerPage();
    const totalPages = Math.ceil(totalItems / itemsPerPageCount);

    const intervalId = setInterval(() => {
      setActivePage((prevPage) =>
        prevPage === totalPages - 1 ? 0 : prevPage + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const renderImagesWithText = () => {
    const startIndex = activePage * itemsPerPage();
    const endIndex = startIndex + itemsPerPage();

    const imageElements = [];
    for (let index = startIndex; index < endIndex; index++) {
      if (index < images.length) {
        imageElements.push(
          <div key={index} className="carousel-item">
            <img
              src={images[index]}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
            <p className="image-description">{textDescriptions[index]}</p>
          </div>
        );
      }
    }

    return <div className="carousel-row">{imageElements}</div>;
  };

  return (
    <div className="work-carousel">
      <h2 className="work-heading">Our Work</h2>
      <div className="workdesc">A glimpse of our portfolio</div>
      <div className="carousel-container">{renderImagesWithText()}</div>
      <div className="pagination">
         {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`pagination-button ${
              index === activePage ? "active" : ""
            }`}
          >
            {" "}
          </button>
        ))}
      </div>
      <button className="see">See More</button>

    </div>
  );
};

export default WorkCarousel;
  