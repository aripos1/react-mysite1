// import 라이브러리
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
// import css
import '../../assets/css/main.css';
import '../../assets/css/gallery.css';

const Result = () => {
    const[searchParams] = useSearchParams();
    const saveName = searchParams.get('img');


    return (
        <>
            <div id="wrap">
                <Header/>

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>갤러리</h2>
                        <ul>
                            <li><Link to="">일반갤러리</Link></li>
                            <li><Link to="">파일첨부연습</Link></li>
                        </ul>
                    </div>
                    {/* //aside */}
                    
                    <div id="content">
                        <div id="content-head">
                            <h3>첨부파일연습</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>갤러리</li>
                                    <li className="last">첨부파일연습</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* //content-head */}
                    
                        <div id="file">
                            <div>
                                <img id="resultImg" src={`${process.env.REACT_APP_API_URL}/upload/${saveName}`} alt="업로드 결과 이미지" />
                            </div>
                            <p>
                                <Link id="btnUpload" to="/attach/form">다시 업로드 하기</Link>
                            </p>
                        </div>
                        {/* //file */}
                    </div>
                    {/* //content */}
                </div>
                {/* //container */}

                <Footer/>
                {/* //footer */}
            </div>
            {/* //wrap */}
        </>
    );
}

export default Result;
