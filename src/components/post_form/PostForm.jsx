import React, { useState } from "react";
import Modal from "../modal/Modal";
import axios from "axios";
import { useSelector } from "react-redux";
import { getCookies } from "../../shared/cookies";
import {
  PostImagePreview,
  InputWrapper,
  TextInput,
  PostFormWrapper,
  PostImageBox,
  PostButton,
} from "./style";
// 포스트카드 등록폼
import { useDispatch } from "react-redux";
import { __postPost } from "../../redux/async/postThunk";

const PostForm = (props) => {
  const username = useSelector((state) => state.user.username);
  const API_URL = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();

  const initialState = {
    title: "",
    product: "",
    store: "",
    contents: "",
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

  //게시글 작성 api 호출
  // const callSomethingAxios = () => {
  //   axios
  //     .post(
  //       `${API_URL}/api/posts`,
  //       // "http://localhost:3001/posts",
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log("응답", response.data);
  //     });
  // };

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
    // callSomethingAxios();
    dispatch(__postPost(formData));
    SetForm(initialState);
    props.closeModal();
    // window.location.reload();
  };

  return (
    <>
      {/* 헤더부분 */}
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
    </>
  );
};

export default PostForm;
