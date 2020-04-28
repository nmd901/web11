var Links = {
  setColor: function(color) {
    var alist = document.querySelectorAll('a'); //< !--변수 alist 라는 변수를 만들고, 자바스크립트 쿼리셀렉터 a태그 를 이 변수와 같다고 본다-- >
    var i = 0; //< !--또한 변수 i 를 선언하고, 0 을 i 에 넣는다-- >
    while (i < alist.length) {
      //<!--반복문 while 을 실행하고, i 값이 alist 의 요소 개수 보다 작을때만 반복문을 계속 실행시킨다.(값이 같아지면 실행 중지) -- >
      alist[i].style.color = color; //< !--a 태그의 모든 요소 들이 i 값이 증가됨에 따라 하나하나씩 소환되고, 그 텍스트 칼라가 color 라는 매개변수이고, 여기에 인수값이 들어간다-- >
      i = i + 1; //< !--한싸이클 돌때마다 현재의 i 값에 1 이 더해진다.이 반복문은 alist의 요소 개수와 같아 지는 순간(즉 페이지 안의
    }
    // $('a').css('color', color); // 이 웹페이지에 있는 모든 a 태그에 대하여, 색깔을 인자값 대로 한다.
  }
}

// function LinksSetColor(color) { //LinksSelector 의 매개변수는 color 이다.
//   var alist = document.querySelectorAll('a'); //< !--변수 alist 라는 변수를 만들고, 자바스크립트 쿼리셀렉터 a태그 를 이 변수와 같다고 본다-- >
//   var i = 0; //< !--또한 변수 i 를 선언하고, 0 을 i 에 넣는다-- >
//   while (i < alist.length) {
//     //<!--반복문 while 을 실행하고, i 값이 alist 의 요소 개수 보다 작을때만 반복문을 계속 실행시킨다.(값이 같아지면 실행 중지) -- >
//     alist[i].style.color = color; //< !--a 태그의 모든 요소 들이 i 값이 증가됨에 따라 하나하나씩 소환되고, 그 텍스트 칼라가 color 라는 매개변수이고, 여기에 인수값이 들어간다-- >
//     i = i + 1; //< !--한싸이클 돌때마다 현재의 i 값에 1 이 더해진다.이 반복문은 alist의 요소 개수와 같아 지는 순간(즉 페이지 안의 모든 a 태그의 색을 변경시킨 후) 종료된다-- >
//   }
// }

// Body 라는 객체를 선언하는방법임
var Body = {
  setFontColor: function(color) { // Body 라는 객체 안에 setFontColor 이라는 키값 이 있고, 그 안에 function 이 정보(=데이터) 로 들어가 있음.  setFontColor 은 함수이면서 객체에 소속되어 있기 때문에 우리는 이것을 메쏘드 라고 부른다!!!
    var target = document.querySelector('body');
    target.style.color = color;
    // $('body').css('color', color) // 이 웹페이지에 있는 모든 body 태그에 대하여, 색깔을 인자값 대로 한다.

  }, //property 와 또 다른 property 를 구분해 주기 위해서 코마(,) 를 찍어줘야 한다.

  setBackgroundColor: function(color) {
    var target = document.querySelector('body');
    target.style.backgroundColor = color;
    // $('body').css('backgroundColor', color) // 이 웹페이지에 있는 모든 body 태그에 대하여, 배경색깔을 인자값 대로 한다.
  }
}


// function BodySetFontColor(color) {
//   var target = document.querySelector('body');
//   target.style.color = color; //< !--if 값이 참 일경우, 글자 색 또한 매개변수 color 이 된다.-- >
//   //  근데 function 안에 target 이 들어간 블록이 들어가면 안됨? 해보니까 작동 안되던데 왜 안되는거지??
// }

// function BodySetBackgroundColor(color) {
//   var target = document.querySelector('body');
//   target.style.backgroundColor = color; //
// }

function nightDayHandler(self) { //nightDayHandler 함수에 this 라는 인자 값이 대입됨. self 는 이 함수의 매개변수임.
  var target = document.querySelector('body'); //변수 target 이라는 변수는 자바스크립트가  "querySelector 라는 메쏘드의 '인자로써 body 태그' 를 넣었을때 불러와지는 데이터" 라는 뜻-- >
  if (self.value === 'colors1.js 객체&메쏘드 night mode on') {
    //<!--nightDayHandler 라는 함수에 this가 들어가 있고, this의 value 값과 원래 상태의 밸류값의 비교 연산을 실시해서, 참일경우와 거짓일경우에 따라서 프로그램을 실행시킨다-- >
    Body.setBackgroundColor('black'); // Body 라는 객체에 setBackgroundColor 라는 함수의 파라미터에다가 black 이라는 인수값을 넣는다.
    Body.setFontColor('yellow'); // Body 라는 객체에 setFontColor 라는 함수의 파라미터에다가 yellow 라는 인수값을 넣는다.
    self.value = 'colors1.js 객체&메쏘드 day mode on'; //< !--if 값이 참 일경우, 현재 소속된 태그의 밸류값을 'day mode on' 으로 치환한다-- >

    Links.setColor('yellow'); // ㅣLinksSetColor 라는 함수의 파라미터에다가 red 라는 인수값을 넣는다.

  } else {
    //<!--버튼을 다시한번 더 클릭했을때, input 태그의 밸류값은 'day mode on' 이므로, 온클릭시 if 조건에 대하여 거짓이 되어, 이곳 else 로 점프해 온다-- >
    //var target = document.querySelector('body'); 변수 선언 위에 있지만, 그냥 한번 더 써줌.
    Body.setBackgroundColor('white'); // BodySetBackgroundColor 함수의 파라미터 자리에 powderblue 라는 인수값을 넣는다.
    Body.setFontColor('black'); // BodySetFontColor 라는 함수의 파라미터 자리에 black 이라는 인수값을 넣는다.
    self.value = 'colors1.js 객체&메쏘드 night mode on'; // nightDayHandler 라는 함수의 파라미터값인 self 에다가 인수 this 를 넣는다.
    Links.setColor('blue');
  }
}
