## :notes: MONPLAYLIST

분위기에 맞는 음악 플레이리스트를 찾아 들을 수 있는 애플리케이션

<br />

## :pager: 배포 페이지

https://6485a185b6fff37b0e2efde1--monplay.netlify.app/

<br/>

## :books: 기술 스택

> ``React.js`` ``TypeScript`` ``Recoil`` ``CSS`` <br />
> ``Youtube API`` <a href="https://www.npmjs.com/package/@u-wave/react-youtube" >Youtube Player</a>

<br/>

## :eyes: 기능 및 UI

#### 1. 분위기를 고를 수 있다. :point_down:

- 신나는:smile: : ``드라이브`` ``아이돌`` ``노동요`` ``기분전환`` ``내적댄스``
- 조용한:neutral_face:: ``혼자`` ``감성적`` ``집중`` ``인디`` ``잠잘 떄``
- 날씨:cloud:: ``비오는 날`` ``화창한`` ``따뜻한`` ``흐린`` ``새벽``
- ``메인 분위기를 고른 후 서브 분위기를 고를 수 있다.``
- ``촏 12개의 Playlist를 제공 받을 수 있다.``

#### 2. 맘에 드는 플레이리스트를 좋아요:heart: 할 수 있다.

- ``MYPLAYLIST``에서 확인이 가능하다.
- ``추가, 삭제`` 할 수 있다.

#### 3. 검색 :mag:

- 사용자가 ``원하는 키워드``와 관련된 플레이리스트를 받을 수 있다.

#### 4. 플레이어 :headphones:

- ``맘에 드는 플레이리스트를 선택 해 음악을 들을 수 있다.``
- ``볼륨바, 재생, 정지``

#### 5. 반응형 UI :boom:

- ``스마트폰, 태블릿, 모니터`` 다양한 디스플레이:pager:에서 사용 가능하다

<br />

## 2. 구현

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
- <a href="https://www.npmjs.com/package/@u-wave/react-youtube" >Youtube Player</a>을 사용했습니다.
- Player태그의 paused라는 인자는 boolean형을 받아 실행, 중지 할 수 있습니다.
- 플레이리스트를 선택 시 Recoil에 music의 상태를 저장하고 실행하게 해주었습니다.
