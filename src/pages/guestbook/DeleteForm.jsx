//import 라이브러리
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
import axios from 'axios';
//import css
import '../../assets/css/main.css';
import '../../assets/css/guestbook.css';
const DeleteForm = () => {
    const { no } = useParams(); // URL에서 no 값을 가져옴
    const navigate = useNavigate();
    const [password, setPassword] = useState(''); // 비밀번호 상태 추가

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/guestbooks/${no}`) // 서버에서 해당하는 데이터를 요청
            .then(response => {
                console.log(response.data); // 데이터 로드 후 콘솔에 출력
            })
            .catch(error => {
                console.error("데이터 로드 실패:", error); // 데이터를 불러오지 못했을 때 콘솔에 오류 출력
            });
    }, [no]);

    // 삭제 버튼 클릭 시 실행되는 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 동작을 막음

        // 서버로 비밀번호와 함께 삭제 요청 보내기
        axios.delete(`${process.env.REACT_APP_API_URL}/api/guestbooks/${no}`, {
            data: { password } // Request Body로 비밀번호 전송
        })
            .then(response => {
                if (response.data) {
                    console.log("삭제 성공");
                    navigate("/guestbook/addlist"); // 성공일 때만 리다이렉트
                } else {
                    console.log("삭제 실패: 비밀번호가 일치하지 않음");
                    alert("비밀번호가 일치하지 않습니다.");
                }

            })
            .catch(error => {
                console.error("삭제 실패:", error); // 삭제 실패 시 콘솔에 오류 출력
            });
    };

    return (
        <>
            <div id="wrap">
                <Header />
                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>방명록</h2>
                        <ul>
                            <li>일반방명록</li>
                            <li>ajax방명록</li>
                        </ul>
                    </div>
                    {/* //aside */}

                    <div id="content">

                        <div id="content-head">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* //content-head */}

                        <div id="guestbook">
                            <form onSubmit={handleSubmit}> {/* onSubmit 핸들러 연결 */}
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>비밀번호</td>
                                            <td>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 핸들링
                                                    required
                                                />
                                            </td>
                                            <td><button type="submit">삭제</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                            <br />
                            <br />
                            <Link to="/" rel='noreferrer noopener'> 리스트로 이동</Link> {/* 리스트로 이동 */}
                        </div>
                        {/* //guestbook */}
                    </div>
                    {/* //content  */}

                </div>
                {/* //container  */}

                <Footer />
                {/* //footer */}

            </div>
        </>
    );
}

export default DeleteForm;
