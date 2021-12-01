# Portfolio 2022

React로 개발한 개인 포트폴리오 사이트입니다. 정보를 최대한 간결하게 전달하고자, 원 페이지로 제작하였습니다. 2년간 퍼블리셔로 근무했던 경력과 개발자로 성장하고자 공부하고 진행한 프로젝트를 기재했습니다. 외부 링크를 통해 개인 github와 노션 페이지, 그리고 이력서를 확인하실 수 있습니다.

페이지 링크: [**https://hursh7.github.io/portfolio2022/**](https://hursh7.github.io/portfolio2022/)

## Preview
<img src="https://user-images.githubusercontent.com/48500615/144229441-a81efd2d-3f02-4d79-8854-685f43b9c787.png" width="90%" alt="프로젝트 미리보기" />

## Table of Contents
1. [About the Project](#About-the-Project)
2. [Tech Stack](#Tech-Stack)
3. [Functions](#Functions) 
4. [Reference](#Reference) 

***  
### About the Project  
* ```React``` 의 **HOOKS** 방식을 사용하여 개발한 웹 어플리케이션.  
* ```Email JS``` 를 통해 **Contact**의 메일 보내기 기능 구현.  
* **스크롤 이벤트**를 활용해 원페이지 내 스크롤 이동 기능 구현(Navigation, Top Button).    
* PC, Tablet, Mobile 해상도 대응하는 반응형으로 구현.

### Tech Stack  
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white" alt="JavaScript" /> <img src="https://img.shields.io/badge/PostCss-DD3A0A?style=flat-square&logo=PostCss&logoColor=white" alt="postCss" /> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="React" />

### Functions
* App 컴포넌트에서 스크롤 이벤트를 이용해 구현한 네비게이션 기능을 각각 해당 컴포넌트에 **Props**로 넘기기 위해 ```forwardRef``` 기능 사용. 
* ```useState``` 와 **css**에서의 조건문을 활용하여 모바일 토글 메뉴 구현.
* ```useScrollFadein``` **Custom Hooks** 활용하여 스크롤 이동 시 요소들 fade in 되며 나타나는 애니메이션 구현.
* ```Email JS``` 라이브러리 활용하여 **Contact**의 메일 보내기 기능 구현.

### Reference
* [**EmailJS**](https://www.emailjs.com/)
* [**useScrollFadeIn**](https://github.com/jus0k/scroll-hooks)
