// import 라이브러리
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';
import axios from 'axios';
// import css
import '../../assets/css/main.css';
import '../../assets/css/gallery.css';

const Form = () => {
    const [profileImg, setProfileImg] = useState([]);
    const navigate = useNavigate();
    const handleImg = (e) => {
        setProfileImg(e.target.files[0]);


    }
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지

        const formData = new FormData();
        formData.append("profileImg", profileImg);

        axios({
            method: 'post', // put, post, delete
            url: `${process.env.REACT_APP_API_URL}/api/attachs`,

            //get delete
            // headers: { "Content-Type": "application/json; charset=utf-8" }, // post put
            headers: { "Content-Type": "multipart/form-data" },             //첨부파일

            // params: guestbookVo, // get delete 쿼리스트링(파라미터)
            // data: guestbookVo, // put, post, JSON(자동변환됨)
            data: formData, // 첨부파일 multipart방식

            // responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            const saveName = response.data.apiData;
            
            navigate(`/attach/result?img=${saveName}`);
        }).catch(error => {
            console.log(error);
        });

    }


    return (
        <>
            <div id="wrap">
                <Header />

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
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <table>
                                    <colgroup>
                                        <col style={{ width: '600px' }} />
                                    </colgroup>
                                    <tbody>
                                        {/* <tr>
                                            <td className="text-left">
                                                <input type="text" name="content" value="" />
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td className="text-left">
                                                <input type="file" name="file" onChange={handleImg} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <button type="submit">파일업로드</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        {/* //file */}
                    </div>
                    {/* //content */}
                </div>
                {/* //container */}

                <Footer />
                {/* //footer */}
            </div>
            {/* //wrap */}
        </>
    );
};

export default Form;
