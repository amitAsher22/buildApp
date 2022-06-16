import React from 'react'
import '../../Css/ScrtionOne.css'
import Avatar from 'react-avatar';
import img from '../../Images/one.jpg'

function SectionOne() {
  return (
    <div className='BgSectionOne'>
    <div className='divNameSectionOne'>
      <h1 className='nameOfOwner' data-aos="zoom-in">עמית אשר</h1>
    </div>

    <div className='ImgAndTextSectionOne'>
    <div className='textDivSectionOneRight'>
        <p className='textSectionOne'>יצחק וסרשטיין הוא המנכ"ל והבעלים של קבוצת W גרופ. הקבוצה עוסקת בבניה ופיתוח של פרוייקטים עבור מגורים, מתחמי תעסוקה, תשתיות ואנרגיה מתחדשת. את פעילות החברה מנהל יצחק וסרשטיין מעל ל 26 שנים. כאשר הוא מביא עמו ידע וניסיון רב שנים בתחום ניהול פיקוח הנדסי ופיקוח בפועל. כשמדובר ביזמות, ידע עשיר וניסיון רב מהווים בסיס משמעותי להצלחה</p>
      </div>
      <div className='Avatart'>
      <Avatar  src={img} size={350} round="200px" />
      </div>
     
    </div>

    </div>
  )
}

export default SectionOne