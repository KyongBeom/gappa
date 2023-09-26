import React, { useEffect, useState } from 'react';
import HeaderSub from '../../Common/HeaderSub';
import { useNavigate } from 'react-router-dom';
import style from './LendPage.module.css';
import { customAxios } from '../../api/customAxios';

const LendPage = () => {
  const navigate = useNavigate();
  const [resApply, setResApply] = useState({});

  useEffect(() => {
    getApply();
  }, []);

  const getApply = () => {
    customAxios.get('/loan/apply/9')
    .then((res)=>{
      console.log(res);
      setResApply(res.data);
    })
    .catch((res)=>{
      console.log(res);
    })
  }

  return (
    <div className={style.body}>
      <HeaderSub title={"대금 신청"} />
      <div className={style.container}>
        <div className={style.messageBox}>
          <div className={style.message}><span className={style.bold}>{ resApply.fromUser }</span> 님이 <span className={style.bold}>{resApply.toUser}</span> 님에게</div>
          <div className={style.message}><span className={style.bold}>{ (resApply.principal).toLocaleString() }원</span> 을 요청했어요</div>
        </div>
        <div className={style.detailBox}>
          <div className={style.title}>요청 대출 내용</div>
          <div className={style.detail}>
            <div className={style.detailKey}>대출금</div>
            <div className={style.detailValue}>{(resApply.principal).toLocaleString()}원</div>
          </div>
          <div className={style.detail}>
            <div className={style.detailKey}>신청일자</div>
            <div className={style.detailValue}>{resApply.startDate}</div>
          </div>
          <div className={style.title}>요청 상환일</div>
          <div className={style.detail}>
            <div className={style.detailKey}>상환일</div>
            <div className={style.detailValue}>{resApply.redemptionDate}</div>
          </div>
          <div className={style.title}>대출 현황</div>
          <div>
            여긴 대출현황@!
          </div>
        </div>
        <div className={style.btnBox}>
          <button onClick={()=> navigate('/lend/refuse')}>거절</button>
          <button onClick={()=> navigate('/lend/check')}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default LendPage;