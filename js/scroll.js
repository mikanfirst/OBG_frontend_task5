window.addEventListener('load', (event) => {

    document.getElementById('button1').addEventListener('click', () => {

// content3の表示位置を取得
        var content3 = document.getElementById('contents3');
        var content_position = content3.getBoundingClientRect();

// content3へ移動
        window.scrollTo( 0, content_position.top);

    });
});