배포링크 : https://practice-meta-mask.vercel.app/


## 기술스택

- CRA
- typescript
- styled-component
- redux-toolkit
- web3

## 요구사항

- 데이터 수에 따라 유연하게 표출되는 드롭다운 만들기
- 여러개의 모달을 띄울 수 있는 모달 컴포넌트 만들기
- 크롬플러그인(Metamask) 연동해보기

### etc

- PopUpContainer : 팝업을 등록하고, 배열로 등록된 팝업들을 렌더링 해주며 React Portal을 통해 연결시켜준다. 원하는 태그와 연결시켜준다.
- PopUpTemplate : 팝업의 기본 틀이 되고, react children을 통해 JSXElement를 넘겨받는다.
- 여러가지 PopUp-Component : PopUpTemplate으로 감싼 후 내부에 원하는 형태로 마크업 하여 사용.
- useModal : 컴포넌트 내부 코드 간소화를 위해 redux dispatch 로직을 커스텀 훅으로 사용.

## 시연

- 드롭다운 시연 : 데이터 수에 따라 목록을 동적으로 표출

![드롭다운시연](https://user-images.githubusercontent.com/87750478/200191528-e511dba1-9bf4-4a46-8787-fc6be877a6c9.gif)

<br>

- 팝업 시연

![팝업시연](https://user-images.githubusercontent.com/87750478/200191684-fc29a20d-082d-422e-b580-e11b008fd007.gif)

<br>

- 지갑 연결

![지갑연결](https://user-images.githubusercontent.com/87750478/200191711-d42d2a3b-6d7f-429e-ad99-8386197fe2e4.gif)

<br>

- Metamask 계정, 네트워크 변경 감지 및 변경 내용 UI반영 : 이더리움 메인넷인 경우 Alert표출  

![변화감지](https://user-images.githubusercontent.com/87750478/200191935-d1e45e07-e36f-4fcc-ac0b-adf01a8fab08.gif)

