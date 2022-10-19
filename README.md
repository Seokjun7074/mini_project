# EAT-편한세상 (편의점 음식 추천 게시판)

<img width="1440" alt="스크린샷 2022-08-18 오후 9 20 26" src="https://user-images.githubusercontent.com/79635274/187026655-acbcf02d-4206-464c-84ea-3d65fc3e4594.png">


## 주요 기능

1. 사진/텍스트로 이루어진 데이터를 서버에 전송
2. 서버로부터 받은 토큰을 쿠키에 저장
3. 인증이 필요한경우 쿠키로부터 토큰을 받아와 서버로 전송


## 배운점 + 잘못한점

1. ### 사진 + 텍스트 데이터를 서버에 전송할 때에는 foramData를 이용해 전송
```javascript
 const setImageFile = (e) => {
    SetImageFile(e.target.files[0]);
  };
  
  
 const onSubmitHandler = (event) => {
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
    dispatch(__postPost(formData));
    SetForm(initialState);
    props.closeModal();
  };
```
formData를 사용하면 각 폼의 필드와 값을 나타내는 key/value들의 집합을 쉽게 구성할 수 있다.
빈 formData를 만들고 이미지 데이터와 json데이터를 넣어준다.


해당 사항들에대해 구글링을 하던 도중 김영한님의 답변을 보게되었다.

> 이런 문제는 보통 이미지와 JSON데이터를 함께 보내지 않습니다.
API를 전송할 때는 보통 content/type을 application/json으로 전송하는데 이것은 multipart/formdata 방식이 아니기 때문입니다.
이런 문제는 보통 다음과 같이 해결합니다.
> 1. 분리 요청
이미지만 AJAX등을 통해서 별도 요청으로 먼저 서버에 전송합니다.
서버는 이미지를 저장하고, 저장된 이미지의 id(또는 파일명)를 클라이언트에 전송합니다.
클라이언트는 이미지의 id와 전송할 데이터를 application/json으로 전송합니다.
> 2. base64 인코딩
이미지를 base64로 인코딩해서 application/json으로 전송할 데이터와 base64로 인코딩된 이미지를 함께 전송합니다.
> 출처 https://www.inflearn.com/questions/307133
    
    
 위의 방법도 한번 고려해봐야겠다.
 
 2. ### 토큰 저장 방식에대해 고민이 필요
 
 현재는 서버로부터 받아온 토큰을 쿠키에 저장했다. 단순히 구글링을 통해 쿠키에 저장하는 방법을 본것이 화근이었다.
 보통 쿠키 또는 로컬스토리지에 토큰을 저장한다고 한다. 두 방법 모두 장단점을 가지고있는데 이부분에 대해서는 추후 자세히 공부한 후 정리할예정이다.
 
 
 => 시니어개발자로 일하고 계신 멘토분의 답변
 
 로컬스토리지의 경우는 말 그대로 로컬환경에서 사용하는 저장소의 의미가 강하기 때문에 요청시에 자동으로 헤더에 실리는 쿠키에 저장하는게 코드 관점에서는 더 나아보인다고 하셨다.
 
 
 
