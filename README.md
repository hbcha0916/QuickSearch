# QuickSearch3.0

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled.gif)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled.png)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%201.png)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%202.png)

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%203.png)

# 🌟업데이트

### 2023 06 22

---

- 배경화면을 설정할 수 있습니다!
- 시계 부분에 배경을 넣었습니다(배경화면 변경 기능 대응)

### 2023 06 21

---

![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%204.png)

- 이제 자동완성 기능을 사용할 수 있습니다!
- `suggestqueries.google.com` API로 자동 검색 기능을 적용하였습니다.
- 사용 방법
    - 검색창에 검색어를 입력하면 검색창 상단에 자동 완성 키워드가 5개가 나열됩니다.

# 구동

[https://hbchaquicksearch.netlify.app/](https://hbchaquicksearch.netlify.app/)

[시작페이지](https://hbchaquicksearch.netlify.app/)

# 핵심 기능

1. 빠른 검색
2. Google , Naver , StackOverFlow , Youtube 검색엔진 별 빠른 검색
3. 빠른 클립보드(`ctrl+v`) 검색
4. 사용자 지정 빠른 바로가기
5. 다크모드 지원
6. 로컬 스토리지로 사용자 내용 저장
    - 저장된 로컬 스토리지를 `json`으로 백업 및 복원

# 사용 방법

### 바로가기 추가

1. 왼쪽 상단 톱니바퀴를 누릅니다.
2. `바로가기 키 설정` 부분에 `+` 버튼을 누릅니다.
3. 바로가기 이름을 타이핑 후 확인버튼을 눌러주세요.
4. 바로가기 링크를 타이핑 후 확인버튼을 눌러주세요.
    - 링크는 `http://` , `https://` 부터 넣어줍니다.

### 바로가기 삭제

1. 왼쪽 상단 톱니바퀴를 누릅니다.
2. `바로가기 키 설정` 부분에 `X` 버튼을 누릅니다.
3. `X` 가 채크된 상태에서 삭제할 바로가기 버튼을 클릭해줍니다.
4. ‘해당 내용이 지워집니다. 계속 하시겠습니까?’ 알림에 ‘확인’버튼을 눌러줍니다.

### 바로가기 수정

1. 왼쪽 상단 톱니바퀴를 누릅니다.
2. `바로가기 키 설정` 부분에 수정할 바로가기를 클릭합니다.
3. 이름과 링크를 수정해 주세요.

### 설정파일 내보내기(JSON)

> 기본적으로 설정들은 localhost 에 저장됩니다.
> 
1. 왼쪽 상단 톱니바퀴를 누릅니다.
2. 설정창 상단에 가장 오른쪽 아이콘을 누릅니다.

### 설정파일 가져오기(JSON)

1. 왼쪽 상단 톱니바퀴를 누릅니다.
2. ☆ 버튼을 눌러 내보냈던 JSON파일을 가져옵니다.

### 클립보드 바로검색

1. 허공에 붙여놓기 단축키(`ctrl + v`) 키를 누릅니다.

### 배경화면 변경

1. 왼쪽 상단 톱니바퀴를 누릅니다.
2. `배경화면 설정` 부분에 `CUSTOM` 을 선택하고 다크모드일 경우, 라이트모드일 경우 배경화면 URL을 입력합니다.
3. `적용` 버튼을 클릭합니다.
4. 다시 기본 배경화면을 적용하려면 `DEFAULT` 를 선택합니다.

# 기능 설명

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

> `~~git clone` 명령어로 이 페이지를 내려받고 `resource` 디렉토리에서 사진을 바꿀 수 있어요.~~
> 
> 
> 설정에서 배경화면 URL을 지정하여 사용할 수 있어요.
> 

## 매일 최신버전을 사용하고 싶어요

> [`https://hbchaquicksearch.netlify.app/`](https://hbchaquicksearch.netlify.app/) 사이트를 시작페이지로 지정하면 항상 최신 버전을 사용할 수 있어요.
> 
> - ~~단, 배경화면은 바꿀수 없어요.~~

# 시작페이지 적용 방법(chrome)

1. [chrome 웹 스토어](https://chrome.google.com/webstore/search/new%20tab%20redirect?hl=ko) 에서 `new tab redirect` 를 검색하고 내려받아요.
    
    ![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%205.png)
    
2. `new tab redirect`확장 프로그램 옵션에서 `Redirect URL` 을 아래와 같이 바꾸거나 `git clone`을 이용하여 로컬에 받은 경우 경로를 써주세요.
    
    ![Untitled](QuickSearch3%200%20fc73fb7789554ed8a07973a596b051ce/Untitled%206.png)
    
    - 파일로 받은 경우
        
        ```
        # 윈도우의 경우 
        file:///C:/xxx/index.html
        ```
        

# 소통

📋Blog : [https://hbcha0916.tistory.com/](https://hbcha0916.tistory.com/)

📧E-Mail : [hbcha0916@naver.com](mailto:hbcha0916@naver.com)