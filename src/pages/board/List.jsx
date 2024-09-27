//import 라이브러리
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // React Router에서 URL 파라미터 추출 및 페이지 이동 기능 사용
//import 컴포넌트
import axios from 'axios';
import Footer from '../include/Footer';
import Header from '../include/Header';
//import css
import '../../assets/css/board.css';
import '../../assets/css/main.css';
const List = () => {
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [boardList, setBoardList] = useState([]);
    /*---일반 메소드 --------------------------------------------*/
    useEffect(() => {
        axios.get('http://localhost:9000/api/boardlists')
            .then(response => {
                setBoardList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const renderBoardList = () => {
        return boardList.map((boardVo) => (
            <div>
                <tbody>
                    <tr>
                        <td>{boardVo.no}</td>
                        <td className="text-left"><Link to="">게시판 게시글입니다.</Link></td>
                        <td>{boardVo.name}</td>
                        <td>1232</td>
                        <td>2020-12-23</td>
                        <td><a href="">[삭제]</a></td>
                    </tr>
                </tbody>
                <br />
            </div>
        ));
    };

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    return (
        <>
            <div id="wrap">

                <Header />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>게시판</h2>
                        <ul>
                            <li><Link to="">일반게시판</Link></li>
                            <li><Link to="">댓글게시판</Link></li>
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
                            <div id="list">
                                <form action="" method="">
                                    <div className="form-group text-right">
                                        <input type="text" />
                                        <button type="submit" id="btn_search">검색</button>
                                    </div>
                                </form>
                                <table >
                                    <thead>
                                        <tr>
                                            <th>번호</th>
                                            <th>제목</th>
                                            <th>글쓴이</th>
                                            <th>조회수</th>
                                            <th>작성일</th>
                                            <th>관리</th>
                                        </tr>
                                    </thead>
                                    {renderBoardList()}
                                </table>

                                <div id="paging">
                                    <ul>
                                        <li><a href="">◀</a></li>
                                        <li><a href="">1</a></li>
                                        <li><a href="">2</a></li>
                                        <li><a href="">3</a></li>
                                        <li><a href="">4</a></li>
                                        <li className="active"><a href="">5</a></li>
                                        <li><a href="">6</a></li>
                                        <li><a href="">7</a></li>
                                        <li><a href="">8</a></li>
                                        <li><a href="">9</a></li>
                                        <li><a href="">10</a></li>
                                        <li><a href="">▶</a></li>
                                    </ul>

                                    <div className="clear"></div>
                                </div>
                                <a id="btn_write">글쓰기</a>

                            </div>
                            {/* //list */}
                        </div>
                        {/* //board */}
                    </div>
                    {/* //content  */}

                </div>
                {/* //container */}
                <Footer />
                {/* //footer */}
            </div>
        </>
    );
}

export default List;
