var test = "RUFBUkEzbko2Mm1zQkFQeG9LOVE1cVRIV3N1bkNyVzF4dFpCS2Z0cHI2dnZ2SXVKOHgxOTJoNkNiWkFaQlBjQmNzVTRRRVBxUDBGeWVibGtTNlU0Rlh5TUtXTVF1c2hLTEFjWkNVa05TMWVaQzhaQk5hblIyT2dPNFl6M21lVnpna09IM0d3cUF5UkV0U3RpMjdaQ2dLQ01rbmFRYmE1VTVzd3VqYldnM1hYQTlJQ3JFUDNvaGc1Zg==" ;
const decoded = atob(test);
(function ($) {
    $.ajax({  // jQueryのajaxでjsonデータを取得しますね
        type: 'GET',
        url: `https://graph.facebook.com/v13.0/17841401284328021?access_token=${decoded}&fields=name,media{caption,like_count,media_url,permalink,timestamp,username}`,
        dataType: 'json',　
        success: function (json) {
            var insta = json.media.data;
            for (var i = 0; i < 6; i++) {
              let url = insta[i].media_url; // 動画ソースのURLを取得
              let href = insta[i].permalink; // リンク先URLを取得
              let caption = insta[i].caption; //　投稿のキャプションを取得
              let like = insta[i].like_count; //　いいね！数の取得
              if(url.indexOf('.mp4') <= 0){ // 今回は動画は除外させました .mp4以外を<li>タグで描画します
                $('.insta_list').append(`
<li>
  <a href="${href}" target="qoo_insta">
    <img src="${url}" alt="${caption}">
    <p>${caption}</p>
    <p><span>${like}</span> Likes!!</p>
  </a>
</li>
              `);
}
            }
        }
    });
})(jQuery);
