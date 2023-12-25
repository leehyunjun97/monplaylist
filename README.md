## :notes: MONPLAYLIST

분위기에 맞는 음악 플레이리스트를 찾아 들을 수 있는 애플리케이션


<br />

## :pager: 배포 페이지

https://6485a185b6fff37b0e2efde1--monplay.netlify.app/

<br/>

## :books: 기술 스택

> ``React.js`` ``TypeScript`` ``Recoil`` ``CSS`` <br />
> ``Youtube API``

<br/>

## 구조

```
src
├── assets
├── components  
│    ├── common
│    │    ├── Button
│    │    ├── Card
│    │    ├── Input
│    │    ├── Loading
│    │    ├── Modal
│    │    ├── Text
│    │    ├── Toast
│    │    ├── Ul
│    ├── header
│    ├── player
├── hooks
├── pages
│    ├── home
│    ├── myPlaylist
│    ├── otherSearch
│    ├── playlist
│    ├── signup
├── recoil
│    ├── emotion
│    ├── music
│    ├── search
├── services
│    ├── youtube
├── types
├── utils
├── App.tsx
├── index.css
├── index.tsx
```

<br />

## :eyes: 기능 및 UI

#### 1. 분위기를 고를 수 있다. :point_down:

- 신나는 :smile: : ``드라이브`` ``아이돌`` ``노동요`` ``기분전환`` ``내적댄스``
- 조용한 :neutral_face:: ``혼자`` ``감성적`` ``집중`` ``인디`` ``잠잘 떄``
- 날씨 :cloud:: ``비오는 날`` ``화창한`` ``따뜻한`` ``흐린`` ``새벽``
- ``메인 분위기를 고른 후 서브 분위기를 고를 수 있다.``
- ``촏 12개의 Playlist를 제공 받을 수 있다.``

<br />

![chooseEmotion](https://github.com/leehyunjun97/monplaylist/assets/130208301/e93b4e0a-12be-4f20-b488-e40eac24d47f)

#### 2. 맘에 드는 플레이리스트를 좋아요 :heart: 할 수 있다.

- ``MYPLAYLIST``에서 확인이 가능하다.
- ``추가, 삭제`` 할 수 있다.

<br />

![myFavorite](https://github.com/leehyunjun97/monplaylist/assets/130208301/866d27f8-a1ac-47d4-91ff-a87e56a4cca2)

#### 3. 검색 :mag:

- 사용자가 ``원하는 키워드``와 관련된 플레이리스트를 받을 수 있다.

<br />

![search2](https://github.com/leehyunjun97/monplaylist/assets/130208301/6a76cd39-8f97-4adc-9256-14ef115e988a)

#### 4. 플레이어 :headphones:

- ``맘에 드는 플레이리스트를 선택 해 음악을 들을 수 있다.``
- ``볼륨바, 재생, 정지``

<br />

![playerbar](https://github.com/leehyunjun97/monplaylist/assets/130208301/36bf83b7-af18-4600-92c4-e90de0e988fa)

#### 5. 반응형 UI :boom:

- ``스마트폰, 태블릿, 모니터`` 다양한 디스플레이에서 사용 가능하다

<br />

![반응형1](https://github.com/leehyunjun97/monplaylist/assets/130208301/e9fcfbee-cc30-4474-a6ad-1d3b85d54e61)
![반응형2](https://github.com/leehyunjun97/monplaylist/assets/130208301/a035a619-cbcf-409b-b92b-a143001afeed)
![반응형3](https://github.com/leehyunjun97/monplaylist/assets/130208301/cbca041d-ff66-46e7-beec-f6de712c4dee)

<br />

## :pencil2: 구현

#### 화면 구성
- ``react-router-dom을 사용해 Page Routing을 했습니다.``
- ``Header태그와 Player태그 사이에 Outlet태그를 사용해 Header와 Player를 고정 시켰습니다.``

#### 1. Choose Emotion
- ``Recoil``을 사용해 ``Main Emotion List와 Sub Emotion List``의 상태를 관리해주었습니다.
- 사용자가 Main을 골랐을 시 ``isActive로 걸 맞는 Sub List를 map``으로 뿌려주었습니다.

#### 2. Youtube API 요청
- ``Main Page의 Start Button``이나 ``Search input``를 통해 호출
- ``axios``와 ``useQuery``를 사용해 Youtube API를 호출 했습니다.
- ``Recoil의 Choose Emotion``의 상태가 업데이트 될 때마다 재 호출 했습니다.
- ``cacheTime staleTime``을 사용해 호출 제한이 있는 API의 ``무분별한 호출을 방지``해주었습니다.

#### 3. MyFavoriteList
- 호출 받은 List의 Music Card위에 하트 버튼을 통해 추가, 삭제 되도록 했습니다.
- 추가한 Music은 ``favorit이란 Recoil state``로 관리하였습니다.
- 제공 받은 ``Youtube Card의 id와 state의 id를 비교해 하트를 빨간색으로 칠해주었습니다.``
- ``filter로 찾은 List의 langth로 비교``

#### 4. Player
- <a href="https://www.npmjs.com/package/@u-wave/react-youtube" >u-wave/react-youtube</a> 라이브러리를 사용했습니다.
- ``Player태그의 paused라는 인자는 boolean형``을 받아 실행, 중지 할 수 있습니다.
- ``display는 none``으로 화면은 안 보이도록 해 Player 느낌을 받을 수 있게 해주었습니다.
- 플레이리스트를 선택 시 Recoil에 Music의 상태를 저장과 동시에 실행하게 해주었습니다.
- Player의 ``볼륨 값을 Recoil state로 따로 관리``하였습니다.

#### 5. 반응형 UI
- ``CSS display의 grid방식``을 사용해 플레이리스트를 보여주었습니다.
- ``@media를 사용해 max-width별로 값을 변경해주었습니다.``

<br />

## :blush: 느낀 점
React를 배우고 처음 시작하는 프로젝트로써 하나부터 열까지 어려움이 있었다고 해도 과언이 아니었습니다. <br/>
페이지를 라우팅하는거부터, 컴포넌트 나누는 것, 폴더 구조등 초반에는 어색했지만 하면서 점점 가속이 붙었던 것 같습니다. <br/>
어느 정도 일정한 규칙같은 느낌이 있었던 것 같았습니다. ( ul, li, map, filter 등) <br/>
Recoil 라이브러리를 알게 되면서 상태 관리 라이브러리의 장점의 대해서 많이 알게 된거 같습니다. <br />
Youtube Player의 라이브러리도 여러 번 바꿔가면서 이 라이브러리도 한 리액트의 사용자가 만들어서 장 단점이 있고, <br/>
내 프로젝트에 맞는 라이브러리가 있겠구나 라고 느꼈습니다. <br/>
처음엔 jsx로 시작했지만, tsx로 변경하는 과정에서 타입을 지정해주면서 "왜 굳이 이렇게 까지 타입을 지정해서 써야되지" 의문을 가졌지만, <br />
생각해보니 "여러 사람이 모여 프로젝트를 진행 할 때 이를 통해 유지보수가 더욱 쉽겠구나" 라고 느끼면서, <br />
좀 더 타입스크립트의 이점을 이 프로젝트에 적용하지 못한 점이 아쉽게 느껴졌습니다. <br /><br/>
중간중간 이유도 모르겠는 에러, 오타, api 하루 호출 제한, CSS 디자인 등 어려움이 있었지만,
"개발자라면 누구나 겪는 일이지" 하고<br/>
마인드컨트롤을 했던 것 같고, 해결 했을 때에 뿌듯함으로 이겨냈던 것 같습니다.



