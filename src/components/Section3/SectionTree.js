import React from "react";
import "../../Css/SectionTree.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function SectionTree() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
  
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bgSectionTree">
      <h1 className="titleProject">פרויקטים</h1>
      <Carousel responsive={responsive} className="divCarousel">
       <div className="positionEveyCard">
       <img className="imgCarousel" src="https://www.l-page.co.il/wp-content/uploads/2022/04/%D7%A4%D7%99%D7%A0%D7%95%D7%99-%D7%91%D7%99%D7%A0%D7%95%D7%99-%D7%99%D7%91%D7%A0%D7%94-%D7%94%D7%A9%D7%97%D7%A3.jpg" alt="one"/>
       <p className="textHouse">פינוי בינוי יבנה השחף</p>
       </div> 
       <div className="positionEveyCard">
       <img className="imgCarousel" src="https://www.l-page.co.il/wp-content/uploads/2022/04/%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%9E%D7%92%D7%95%D7%A8%D7%99%D7%9D-%D7%94%D7%A9%D7%A7%D7%9E%D7%94-4-%D7%91%D7%AA-%D7%99%D7%9D.jpg" alt="two"/>
       <p className="textHouse">פרוייקט מגורים השקמה 4 בת-ים</p>
       </div> 
       <div className="positionEveyCard">
       <img className="imgCarousel" src="https://www.l-page.co.il/wp-content/uploads/2022/04/%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%9E%D7%92%D7%95%D7%A8%D7%99%D7%9D-%D7%9B%D7%A0%D7%A8%D7%AA-2-%D7%91%D7%AA-%D7%99%D7%9D.jpg" alt="tree"/>
       <p className="textHouse">פרוייקט מגורים כנרת 2 בת-ים</p>
       </div> 
       <div className="positionEveyCard">
       <img className="imgCarousel" src="https://www.l-page.co.il/wp-content/uploads/2022/04/%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98-%D7%AA%D7%9E%D7%90-38-%D7%95%D7%91%D7%A0%D7%99%D7%99%D7%9F-%D7%9C%D7%A9%D7%99%D7%9E%D7%95%D7%A8-%D7%A9%D7%A0%D7%A7%D7%99%D7%9F-52-%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91.jpg" alt="four"/>
       <p className="textHouse">פרוייקט תמ"א 39 תל-אביב</p>
       </div>
      </Carousel>
      ;
    </div>
  );
}

export default SectionTree;
