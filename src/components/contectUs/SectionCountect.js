import React from 'react'
import '../../Css/SectionCountent.css'
import { TbBrandWhatsapp } from 'react-icons/tb';
import { ImGooglePlus } from 'react-icons/im';
import { TiSocialFacebook } from 'react-icons/ti';

function SectionCountect() {
  return (
    <div className='BgSectionCountant'>
      <div className='div1Countent'> 
        <h1 className='titleContect'>צרו קשר</h1>
        <p className='title2Countent'>בואו לקחת חלק ולהיות חלק מסיפורי ההצלחה שלנו!</p>
      </div>
      <div className='divSectionEmail'>
        <div className='divInside' data-aos="fade-right">
          <p className='title2Countent'>טלפון: 050-5688521</p>
          <p className='title2Countent'>דוא"ל: info@wgroup.co.il</p>
          <p className='title2Countent'>כתובתנו: האלון 23, נשר</p>
          <div className='divIcons'>
            <span className='title2Countent1'><TbBrandWhatsapp/></span>
            <span className='title2Countent1'><ImGooglePlus/></span>
            <span className='title2Countent1'><TiSocialFacebook/></span>
          </div>
        </div>
        <div >
        <form className='form'>
          <input placeholder='שם מלא'/>
          <input placeholder='טלפון'/>
          <input placeholder='הודעה'/>
        </form>
        <div className='btnDivButton'>
        <button className='btnContevt'>שלחו הודעה</button>

        </div>
        </div>
      </div>
      <div className='divLest'>

        <span className='title2Countent2'>כל הזכויות שמורות ל עמית אשר</span>
      </div>
    </div>
  )
}

export default SectionCountect