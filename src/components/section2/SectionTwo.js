import React from "react";
import "../../Css/SectionTwo.css";

function SectionTwo() {
  return (
    <div className="divSectionTwo">
      <div className="collectionDivSectionTwo">
        <div>
          <img  data-aos="fade-up" className ="imgSectionTwo" src="https://www.l-page.co.il/wp-content/uploads/2022/03/KIRYATYAM.jpg"/>
        </div>
        <div className="textDivSectionTwo" data-aos="fade-down">
    
          <span className="textSpan">
            קבוצת W גרופ אשר בבעלות יצחק וסרשטיין אחראית להקמת שכונות מגורים
            רבים ומבנים לתעשיה ומסחר המתפרשים על עשרות אלפי מטרים רבועים. החברה
            פועלת בשוק הישראלי ומחוצה לו. כאשר המטרה והחזון העיקריים שעומדים
            לנגד עיניו של יצחק וסרשטיין הם לפתח תשתיות ונדלן באיכות גבוהה
            ואמינות רבה. בנוסף , הוא מקפיד לשלב טכנולוגיות התומכות בבניה ירוקה.
          </span>
          <span className="textSpan">
          שותפיו העסקים של יצחק הם מומחים ובעלי ידע וניסיון בתחומי היזמות, הכספים, ההנדסה ותפעול הבניה.
          </span>
          <br/>
          <span className="textSpan" >
          שילוב היתרונות הייחודיים של יצחק, הידע הניסיון והצוות המקצועי הם אלו שהופכים את הקבוצה עצמה לסיפור הצלחה.
          </span>
          <br/>
          <strong><span className="titleLinks">קישורים מומלצים:</span></strong>
          <div className="digitalDiv">
            <button className="btnGold">כרטיס ביקור דיגיטלי</button>
            <button className="btnGold">קראו חוות דעת</button>
            <button className="btnGold">אתר הבית W</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
