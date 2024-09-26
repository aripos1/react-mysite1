//import 라이브러리
import React from 'react';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
//import css
import '../../assets/css/main.css';
import '../../assets/css/board.css';
const WriteForm = () => {
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
                        <div id="writeForm">
                            <form action="#" method="get">
                                {/* 제목 */}
                                <div className="form-group">
                                    <label className="form-text" htmlFor="txt-title">제목</label>
                                    <input type="text" id="txt-title" name="" value="" placeholder="제목을 입력해 주세요" />
                                </div>
                            
                                {/* 내용 */}
                                <div className="form-group">
                                    <textarea id="txt-content" placeholder="내용을 입력해 주세요"></textarea>
                                </div>
                                
                                <a id="btn_cancel" href="">취소</a>
                                <button id="btn_add" type="submit">등록</button>
                                
                            </form>
                            {/* //form */}
                        </div>
                        {/* //writeForm */}
                    </div>
                    {/* //board */}
                </div>
                {/* //content  */}


            </div>
            {/* //container  */}

            <Footer/>
            {/* //footer */}
        </div>
        </>
    );
}
export default WriteForm;
