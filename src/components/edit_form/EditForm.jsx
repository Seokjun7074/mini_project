import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./style.css";
import {
  PostImagePreview,
  InputWrapper,
  TextInput,
  PostFormWrapper,
  PostImageBox,
  PostButton,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getCookies } from "../../shared/cookies";
import { __postDetail } from "../../redux/async/detailThunk";
// 포스트카드 등록폼

const EditForm = (props) => {
  const { data } = props;
  const username = useSelector((state) => state.user.username);
  const token = getCookies("myToken");
  const API_URL = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
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

  const setImageFile = (e) => {
    SetImageFile(e.target.files[0]);
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
    // console.log(data.post_id);
    const submitData = {
      id: data.post_id,
      formData,
    };
    dispatch(__postDetail(submitData));
    SetForm(initialState);
    props.closeModal();
    // window.location.reload();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <PostFormWrapper>
          <PostImageBox>
            {imageFile && (
              <PostImagePreview
                src={URL.createObjectURL(imageFile)}
                alt="preview-img"
              />
            )}
          </PostImageBox>
          <div>
            <InputWrapper>
              <label>제목</label>
              <TextInput
                name="title"
                value={form.title}
                onChange={handleChangeState}
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <label>내용</label>
              <TextInput
                name="contents"
                value={form.contents}
                onChange={handleChangeState}
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <label>편의점명</label>
              <TextInput
                name="store"
                value={form.store}
                onChange={handleChangeState}
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <label>상품명</label>
              <TextInput
                name="product"
                value={form.product}
                onChange={handleChangeState}
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <p>이미지 미리보기</p>
              <input type="file" onChange={setImageFile} />
              <label htmlFor="preview"></label>
            </InputWrapper>
            <InputWrapper>
              <PostButton>추가하기</PostButton>
              <PostButton onClick={props.closeModal}>닫기</PostButton>
            </InputWrapper>
          </div>
        </PostFormWrapper>
      </form>
      {/* <form onSubmit={onSubmitHandler}>
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
        </div>
        <div>
          <button>수정하기</button>
          <button onClick={props.closeModal}>닫기</button>
        </div>
      </form> */}
    </>
  );
};

export default EditForm;
