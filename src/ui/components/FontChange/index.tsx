import { useState } from 'react'
import sc from './fontchange.module.scss'

const FontChange = () => {
  const [fontSize, setFonSize] = useState('14')

  const increaseFontSize = () => {
    setFonSize((prevSize) => {
      const newSize = parseInt(prevSize) + 1
      return `${newSize}`
    } )
  }
  const decreaseFontSize = () => {
    setFonSize((prevSize) => {
      const newSize = parseInt(prevSize) - 1
      return `${newSize}`
    } )
  } 
  
  return (
    <>
    <div className="btn-group">
      <div className={sc.dropdown}>
        <button className="btn dropdown-toggle " type="button">
          <svg viewBox="0 0 24 24" version="1.1" fill="#25396f">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>ic_fluent_text_font_size_24_filled</title>{" "}
              <desc>Created with Sketch.</desc>{" "}
              <g
                id="Icons"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
              >
                {" "}
                <g
                  id="ic_fluent_text_font_size_24_filled"
                  fill="#25396f"
                  fillRule="nonzero"
                >
                  {" "}
                  <path
                    d="M9.96973134,16.1676988 L14.5597933,3.65629281 C14.8658898,2.82190042 16.0062636,2.7839735 16.3882035,3.54251203 L16.4374349,3.65629281 L21.9389727,18.6530071 C22.1291829,19.1715035 21.8630543,19.7460237 21.3445578,19.9362339 C20.8630969,20.1128576 20.3333297,19.8960056 20.1078122,19.4489883 L20.0613311,19.3418191 L18.6507313,15.4986988 L12.3457313,15.4986988 L10.9040947,19.4185072 L10.9040947,19.4185072 L10.8631472,19.4974307 L10.8631472,19.4974307 L10.7910689,19.6055793 L10.7910689,19.6055793 L10.7134865,19.6954421 L10.7134865,19.6954421 L10.6286155,19.7731048 L10.6286155,19.7731048 L10.5461422,19.8334381 L10.5461422,19.8334381 L10.4957113,19.8642525 L10.4957113,19.8642525 L10.411619,19.9074431 L10.411619,19.9074431 L10.3076065,19.9480193 L10.3076065,19.9480193 L10.2029659,19.9761277 L10.2029659,19.9761277 L10.0696716,19.9950212 L10.0696716,19.9950212 L9.96236211,19.997081 L9.96236211,19.997081 L9.89175982,19.9920615 L9.89175982,19.9920615 L9.78921006,19.9756858 L9.78921006,19.9756858 L9.63922865,19.9311953 L9.63922865,19.9311953 L9.56990029,19.901584 L9.56990029,19.901584 L9.46987671,19.8472224 L9.46987671,19.8472224 L9.35831456,19.7671539 L9.35831456,19.7671539 L9.26665026,19.680721 L9.26665026,19.680721 L9.20269015,19.6050585 L9.20269015,19.6050585 L9.14144021,19.5150962 L9.14144021,19.5150962 L9.08735353,19.4126293 L9.08735353,19.4126293 L8.34173134,17.4996988 L4.65473134,17.4996988 L3.93200399,19.3598611 C3.74612765,19.8378261 3.23314027,20.091838 2.74868178,19.9654159 L2.63755197,19.9294171 C2.15958693,19.7435407 1.90557508,19.2305533 2.03199719,18.7460949 L2.06799601,18.634965 L5.56653421,9.63877441 C5.88137646,8.82918461 6.9873796,8.79063271 7.37757051,9.52311873 L7.43054218,9.63877441 L9.96973134,16.1676988 L14.5597933,3.65629281 L9.96973134,16.1676988 Z M6.49853819,12.7602387 L5.43273134,15.4996988 L7.56373134,15.4996988 L6.49853819,12.7602387 Z M15.4986141,6.90424881 L13.0787313,13.4986988 L17.9167313,13.4986988 L15.4986141,6.90424881 Z"
                    id="Color"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <div className={sc['dropdown-content']} >
          <span className={sc['dropdown-item']} onClick={increaseFontSize}>A+</span>
          <span className={sc['dropdown-item']} onClick={decreaseFontSize}>A-</span>
        </div>
      </div>
    </div>
      <style>
        {`:root { --font-size: ${fontSize}px; }`}
      </style>
    </>
  )
}

export default FontChange