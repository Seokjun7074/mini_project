import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./style.css";
import axios from "axios";

// 포스트카드 등록폼

const PostForm = () => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);
  const [imageSrc, setImageSrc] = useState("");
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        console.log(reader.result);
        SetForm({ ...form, image: reader.result });
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const initialState = {
    title: "",
    product: "",
    store: "",
    contents: "",
    image: "",
  };

  const [form, SetForm] = useState(initialState);
  //const [dataList, SetDataList] = useState([]);

  const handleChangeState = (event) => {
    SetForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (form.title.trim() === "" || form.contents.trim() === "") return;
    SetForm({ ...form, [event.target.value]: event.target.value });
    //게시글 작성 api 호출

    console.log(form);

    const callSomethingAxios = () => {
      axios.post("http://localhost:3001/posts", form).then((response) => {
        console.log(response.data);
      });
    };

    callSomethingAxios();
    SetForm(initialState);
    setImageSrc("");
    form.current++;
    closeModal();
    window.location.reload();
  };

  return (
    <>
      <button onClick={openModal}>추가하기</button>
      {/* 헤더부분 */}
      <Modal show={show}>
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
            <label>내용</label>
            <input
              name="contents"
              value={form.contents}
              onChange={handleChangeState}
              type="text"
            />
          </div>
          <div>
            <label>작성자</label>
            <input
              name="username"
              value={form.username}
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
            <input
              type="file"
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
            <label htmlFor="preview"></label>
            {imageSrc && <img src={imageSrc} alt="preview-img" />}
          </div>
          <div>
            <button>추가하기</button>
            <button onClick={closeModal}>닫기</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default PostForm;
