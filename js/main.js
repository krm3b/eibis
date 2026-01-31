$(function () {
  hamburger();
  fadeIn();
  headermask();
});

function hamburger() {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
  });

  // メニューのリンクをクリックした時、ナビ非表示
  $("nav").on("click", function () {
    $("header").removeClass("open");
  });
}

function fadeIn() {
  $(window).on('scroll', function () {
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      } else {
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
    });
  });
}

function headermask() {
    var lastScrollTop = 0;
    var $header = $('header');

    $(window).on('scroll', function () {
        var st = $(this).scrollTop();

        if (st > lastScrollTop && st > 50) {
            // 下スクロールかつ50px以上スクロールしたらヘッダー非表示
            $header.addClass('hide');
        } else {
            // 上スクロール、またはページ上部付近ならヘッダー表示
            $header.removeClass('hide');
        }
        lastScrollTop = st;
    });
}
