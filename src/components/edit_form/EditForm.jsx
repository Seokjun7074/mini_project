import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { getCookies } from "../../shared/cookies";
// 포스트카드 등록폼

const EditForm = (props) => {
  const { data } = props
  console.log(props)
  const username = useSelector((state) => state.user.username);
  const token = getCookies("myToken");
  const API_URL = process.env.REACT_APP_API_URL;

  const initialState = {
    title: data.title,
    product: data.product,
    store: data.store,
    contents: data.contents,
  };

  const [form, SetForm] = useState(initialState);
  const [imageFile, SetImageFile] = useState();
  const formData = new FormData();

  const handleChangeState = (event) => {
    SetForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const callSomethingAxios = () => {
    axios
      .put(
        // `${API_URL}/api/posts`,
        "http://localhost:3001/posts",
        formData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("응답", response.data);
      });
  };

  const setImageFile = (e) => {
    SetImageFile(e.target.files[0]);
    for (const keyValue of formData) console.log(keyValue);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (form.title.trim() === "" || form.contents.trim() === "") return;
    formData.append(
      "requestDto",
      new Blob([JSON.stringify(form)], {
        type: "application/json",
      })
    );

    if (imageFile !== undefined) {
      formData.append("imageFile", imageFile);
    }
    callSomethingAxios();
    SetForm(initialState);
    props.closeModal();
    window.location.reload();
  };

  return (
    <>
      {/* 헤더부분 */}
      <form onSubmit={onSubmitHandler}>
      <div>
          <label>제목</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChangeState}
            type="text"
          />
        </div>
        <div>
          <label>편의점명</label>
          <input
            name="store"
            value={form.store}
            onChange={handleChangeState}
            type="text"
          />
        </div>
        <div>
          <label>상품명</label>
          <input
            name="product"
            value={form.product}
            onChange={handleChangeState}
            type="text"
          />
        </div>
        <div>
          <p>이미지 미리보기</p>
          <input type="file" onChange={setImageFile} />
          <label htmlFor="preview"></label>
          {/* {imageSrc && <img src={imageSrc} alt="preview-img" />} */}
        </div>
        <div>
          <button>수정하기</button>
          <button onClick={props.closeModal}>닫기</button>
        </div>
      </form>
    </>
  );
}
  


export default EditForm;
