//import 라이브러리
import React from 'react';

//import 컴포넌트
//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
//import css
import '../../assets/css/main.css';
import '../../assets/css/gallery.css';

const List = () => {
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>
          <div id="wrap">
			<Header/>

            <div id="container" className="clearfix">
                <div id="aside">
                    <h2>갤러리</h2>
                    <ul>
                        <li><a href="">일반갤러리</a></li>
                        <li><a href="">파일첨부연습</a></li>
                    </ul>
                </div>
                {/* //aside */}
                
                <div id="content">
                    <div id="content-head">
                        <h3>일반갤러리</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>갤러리</li>
                                <li className="last">일반갤러리</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* //content-head */}

                    <div id="gallery">
                        <div id="list">
                            <button id="btnImgUpload">이미지올리기</button>
                            <div className="clear"></div>

                            <ul id="viewArea">
                                {/* 이미지반복영역 */}
                                <li>
                                    <div className="view">
                                        <img className="imgItem" src="../../assets/image/Gangho-dong.jpg" alt="Gangho-dong" />
                                        <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                    </div>
                                </li>

                                <li>
                                    <div className="view">
                                        <img className="imgItem" src="../../assets/image/Jeongjae-Lee.jpg" alt="Jeongjae-Lee" />
                                        <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                    </div>
                                </li>

                                <li>
                                    <div className="view">
                                        <img className="imgItem" src="../../assets/image/JeonSoMin.jpg" alt="JeonSoMin" />
                                        <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                    </div>
                                </li>

                                <li>
                                    <div className="view">
                                        <img className="imgItem" src="../../assets/image/JiseokJin.jpg" alt="JiseokJin" />
                                        <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                    </div>
                                </li>

                                <li>
                                    <div className="view">
                                        <img className="imgItem" src="../../assets/image/JungWooSung.jpg" alt="JungWooSung" />
                                        <div className="imgWriter">작성자: <strong>유재석</strong></div>
                                    </div>
                                </li>
                                {/* 이미지반복영역 */}
                            </ul>
                        </div>
                        {/* //list */}
                    </div>
                    {/* //gallery */}
                </div>
                {/* //content */}
            </div>
            {/* //container */}

           <Footer/>
            {/* //footer */}
          </div>
        </>
    );
}

export default List;
