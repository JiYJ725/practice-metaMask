## 기술스택

- CRA
- typescript
- styled-component
- redux-toolkit

## 요구사항

- 데이터 수에 따라 유연하게 표출되는 드롭다운 만들기
- 여러개의 모달을 띄울 수 있는 모달 컴포넌트 만들기
- 크롬플러그인(Metamask) 연동해보기

### etc

- PopUpContainer : 팝업을 등록하고, 배열로 등록된 팝업들을 렌더링 해주며 React Portal을 통해 연결시켜준다. 원하는 태그와 연결시켜준다.
- PopUpTemplate : 팝업의 기본 틀이 되고, react children을 통해 JSXElement를 넘겨받는다.
- 여러가지 PopUp-Component : PopUpTemplate으로 감싼 후 내부에 원하는 형태로 마크업 하여 사용.
- useModal : 컴포넌트 내부 코드 간소화를 위해 redux dispatch 로직을 커스텀 훅으로 사용.
