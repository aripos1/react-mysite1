//import 라이브러리
import React from 'react';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
//import css
import '../../assets/css/main.css';
import '../../assets/css/board.css';

const Read = () => {
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>
        <div id="wrap">
            <Header/>

            <div id="container" className="clearfix">
                <div id="aside">
                    <h2>게시판</h2>
                    <ul>
                        <li><a href="">일반게시판</a></li>
                        <li><a href="">댓글게시판</a></li>
                    </ul>
                </div>
                {/* //aside */}

                <div id="content">

                    <div id="content-head">
                        <h3>일반게시판</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>게시판</li>
                                <li className="last">일반게시판</li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                    {/* //content-head */}

                    <div id="board">
                        <div id="read">
                            <form action="#" method="get">
                                {/* 작성자 */}
                                <div className="form-group">
                                    <span className="form-text">작성자</span>
                                    <span className="form-value">정우성</span>
                                </div>
                                
                                {/* 조회수 */}
                                <div className="form-group">
                                    <span className="form-text">조회수</span>
                                    <span className="form-value">123</span>
                                </div>
                                
                                {/* 작성일 */}
                                <div className="form-group">
                                    <span className="form-text">작성일</span>
                                    <span className="form-value">2020-03-02</span>
                                </div>
                                
                                {/* 제목 */}
                                <div className="form-group">
                                    <span className="form-text">제 목</span>
                                    <span className="form-value">여기에는 글제목이 출력됩니다.</span>
                                </div>
                            
                                {/* 내용 */}
                                <div id="txt-content">
                                    <span className="form-value">
                                        여기에는 본문내용이 출력됩니다.<br />
                                        여기에는 본문내용이 출력됩니다.<br />
                                        여기에는 본문내용이 출력됩니다.<br />
                                        여기에는 본문내용이 출력됩니다.<br />
                                        여기에는 본문내용이 출력됩니다.<br />
                                        여기에는 본문내용이 출력됩니다.<br />
                                        여기에는 본문내용이 출력됩니다.<br />
                                        여기에는 본문내용이 출력됩니다.<br />
                                    </span>
                                </div>
                                
                                <a id="btn_modify" href="">수정</a>
                                <a id="btn_modify" href="">목록</a>
                                
                            </form>
                            {/* //form */}
                        </div>
                        {/* //read */}
                    </div>
                    {/* //board */}
                </div>
                {/* //content  */}

            </div>
            {/* //container */}

            <Footer/>
            {/* //footer */}
        </div>
        </>
    );
}

export default Read;
