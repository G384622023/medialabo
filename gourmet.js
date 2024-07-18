/////////// 課題3-2 ここからプログラムを書こう

/*
console.log('検索結果1件目');
console.log('名前:'+data.results.shop[0].name);
console.log('アクセス:'+data.results.shop[0].access);
console.log('住所:'+data.results.shop[0].address);
console.log('予算:'+data.results.shop[0].budget.name);
console.log('キャッチコピー:'+data.results.shop[0].catch);
console.log('ジャンル:'+data.results.shop[0].genre.name);
console.log('営業時間:'+data.results.shop[0].open);
console.log('最寄駅:'+data.results.shop[0].station_name);
console.log('サブジャンル:'+data.results.shop[0].sub_genre.name);

console.log('');

console.log('検索結果2件目');
console.log('名前:'+data.results.shop[1].name);
console.log('アクセス:'+data.results.shop[1].access);
console.log('住所:'+data.results.shop[1].address);
console.log('予算'+data.results.shop[1].budget.name);
console.log('キャッチコピー:'+data.results.shop[1].catch);
console.log('ジャンル:'+data.results.shop[1].genre.name);
console.log('営業時間:'+data.results.shop[1].open);
console.log('最寄駅:'+data.results.shop[1].station_name);
console.log('サブジャンル:'+data.results.shop[1].sub_genre.name);
*/

/////////// 課題4-2

let z1 = "居酒屋";
let z2 = "ダイニングバー・バル";
let z3 = "創作料理";
let z4 = "和食";
let z5 = "洋食";
let z6 = "イタリアン・フレンチ";
let z7 = "中華";
let z8 = "焼肉・ホルモン";
let z9 = "アジア・エスニック料理";
let z10 = "各国料理";
let z11 = "カラオケ・パーティ";
let z12 = "バー・カクテル";
let z13 = "ラーメン";
let z14 = "カフェ・スイーツ";
let z15 = "その他グルメ";
let z16 = "お好み焼き・もんじゃ";
let z17 = "韓国料理";

/*let b = document.querySelector('button#print');
b.addEventListener('click', print);
*/
　
function print(data){

    let i = document.querySelector('input[name="kensaku"]');
    let k = i.value;

    console.log('検索キー:'+k);
  
    let r = document.querySelectorAll('div#result>*');
  
    for (let i=0; i<r.length; i=i+1) {
      r[i].remove();
    }
  
    if(z1==k||z2==k||z3==k||z4==k||z5==k||z6==k||z7==k||z8==k||z9==k||z10==k||z11==k||z12==k||z13==k||z14==k||z15==k||z16==k||z17==k){
      let div = document.querySelector('div#result');

      let pi00 = document.createElement('p');
      pi00.textContent = 'グルメ情報（検索結果は'+data.results.shop.length+'件）';
      div.insertAdjacentElement('beforeend',pi00);

      for(let i=0;i<data.results.shop.length;i=i+1){  

        let pi01 = document.createElement('li');
        pi01.textContent = '・検索結果'+(i+1)+'件目';
        pi01.style.backgroundColor='#b8e0ff';
        div.insertAdjacentElement('beforeend',pi01);

        let pi0 = document.createElement('li');
        pi0.textContent = '　・名前:'+data.results.shop[i].name;
        pi0.style.fontStyle='italic';
        pi0.style.backgroundColor='skyblue';
        div.insertAdjacentElement('beforeend',pi0);

        let pi1 = document.createElement('li');
        pi1.textContent = '　・アクセス:'+data.results.shop[i].access;
        pi1.style.fontStyle='italic';
        pi1.style.backgroundColor='skyblue';
        div.insertAdjacentElement('beforeend',pi1);

        let pi2 = document.createElement('li');
        pi2.textContent = '　・住所:'+data.results.shop[i].address;
        pi2.style.fontStyle='italic';
        pi2.style.backgroundColor='skyblue';
        div.insertAdjacentElement('beforeend',pi2);

        let pi3 = document.createElement('li');
        pi3.textContent = '　・予算:'+data.results.shop[i].budget.name;
        pi3.style.fontStyle='italic';
        pi3.style.backgroundColor='skyblue';
        div.insertAdjacentElement('beforeend',pi3);

        let pi4 = document.createElement('li');
        pi4.textContent = '　・キャッチコピー:'+data.results.shop[i].catch;
        pi4.style.fontStyle='italic';
        pi4.style.backgroundColor='skyblue';
        pi4.style.fontWeight='bold';
        div.insertAdjacentElement('beforeend',pi4);

        let pi5 = document.createElement('li');
        pi5.textContent = '　・ジャンル:'+data.results.shop[i].genre.name;
        pi5.style.fontStyle='italic';
        pi5.style.backgroundColor='skyblue';
        div.insertAdjacentElement('beforeend',pi5);

        let pi6 = document.createElement('li');
        pi6.textContent = '　・営業時間:'+data.results.shop[i].open;
        pi6.style.fontStyle='italic';
        pi6.style.backgroundColor='skyblue';
        div.insertAdjacentElement('beforeend',pi6);

        let pi7 = document.createElement('li');
        pi7.textContent = '　・最寄駅:'+data.results.shop[i].station_name;
        pi7.style.fontStyle='italic';
        pi7.style.backgroundColor='skyblue';
        div.insertAdjacentElement('beforeend',pi7);

        let pi8 = document.createElement('li');
        pi8.textContent = '';
        div.insertAdjacentElement('beforeend',pi8);
      }
    } 

}

let b = document.querySelector('button#print');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
    let i = document.querySelector('input[name="kensaku"]');
    let k = i.value;
    // URL を設定
    // 検索キー　ジャンル　取得
    let genre;
    let url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/G001.json";
    if(z1==k){
      genre = 'G001';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z2==k){
      genre = 'G002';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z3==k){
      genre = 'G003';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z4==k){
      genre = 'G004';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z5==k){
      genre = 'G005';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z6==k){
      genre = 'G006';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z7==k){
      genre = 'G007';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z8==k){
      genre = 'G008';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z9==k){
      genre = 'G009';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z10==k){
      genre = 'G010';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z11==k){
      genre = 'G011';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z12==k){
      genre = 'G012';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z13==k){
      genre = 'G013';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z14==k){
      genre = 'G014';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z15==k){
      genre = 'G015';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z16==k){
      genre = 'G016';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else if(z17==k){
      genre = 'G017';
      url = "https://www.nishita-lab.org/web-contents/jsons/hotpepper/"+genre+".json";
    } else {
      let div = document.querySelector('div#result');
      let p = document.createElement('p');
      p.textContent='他のワードを検索してください';
      p.style.fontSize='bold';
      div.insertAdjacentElement('beforeend',p);
    }

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}