# QuickSearch3.0

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/example.gif)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled.png)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%201.png)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%202.png)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%203.png)

# 핵심 기능
---

1. 빠른 검색
2. Google , Naver , StackOverFlow , Youtube 검색엔진 별 빠른 검색
3. 빠른 클립보드(`ctrl+v`) 검색
4. 사용자 지정 빠른 바로가기
5. 다크모드 지원
6. 로컬 스토리지로 사용자 내용 저장
    - 저장된 로컬 스토리지를 `json`으로 백업 및 복원

# 기능 설명
---

## 검색 효율적

> 더이상 “웹 브라우저 → `ctrl+v` → `enter` ” 으로 검색하지 말아요.
> 
> - 시작 홈이 Google인 경우에 StackOverFlow에서 검색하고 싶을 시 “웹 브라우저 → 스택 오버플로우 검색 → 스택 오버플로우 접속 →`ctrl+v` → `enter` ” 같은 별로 안걸리지만 답답한 순서에 얽매이지 않아도 됩니다.
> - 이제는 “웹 브라우저 → 스택 오버플로우 선택 → `ctrl+v` ” 작업으로 더 빠른 검색을 하세요.

## 바로가기 북마크를 해두고 싶어요

> “환경설정” 에서 여러개의 북마크(모니터의 역량에 따라(브라우저가 보이는 화면에 따라))를 지정할 수 있어요.
> 

## LocalStorage로 설정들을 저장해요.

> Q. 주기적으로 브라우저 기록을 삭제하는데 같이 삭제되지 않나요?
> 
> 
> A. “환경설정” 에서 설정 내용을 파일로 백업하고 복원할 수 있어요.
> 

## 배경화면을 커스텀할 수 있어요.

> `git clone` 명령어로 이 페이지를 내려받고 `resource` 디렉토리에서 사진을 바꿀 수 있어요.
> 

## 매일 최신버전을 사용하고 싶어요

> [`https://hbchaquicksearch.netlify.app/`](https://hbchaquicksearch.netlify.app/) 사이트를 시작페이지로 지정하면 항상 최신 버전을 사용할 수 있어요.
> 
> - 단, 배경화면은 바꿀수 없어요.

# 시작페이지 적용 방법(chrome)
---

1. [chrome 웹 스토어](https://chrome.google.com/webstore/search/new%20tab%20redirect?hl=ko) 에서 `new tab redirect` 를 검색하고 내려받아요.
    
    ![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%204.png)
    
2. `new tab redirect`확장 프로그램 옵션에서 `Redirect URL` 을 아래와 같이 바꾸거나 `git clone`을 이용하여 로컬에 받은 경우 경로를 써주세요.
    
    ![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%205.png)
    
    - 파일로 받은 경우
        
        ```
        # 윈도우의 경우 
        file:///C:/xxx/index.html
        ```
        

# 소통
---

📋Blog : [https://hbcha0916.tistory.com/](https://hbcha0916.tistory.com/)

📧E-Mail : [hbcha0916@naver.com](mailto:hbcha0916@naver.com)
