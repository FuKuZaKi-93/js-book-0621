// ここに関数(function)を書く
// 注意：同じ名前の関数は、下に書いたものが優先される

// 以下は記入例。
// コメントに「どこに書いてあるコードか」が分かるように書く。（最低でもページ数を書く）

// リスト4.1 (p.79)
function sum() {
    var total = 0;
    for (var counter = 1; counter <= 10; counter++ ){
        total += counter;
    }
    window.alert(total);
}

// p.103
function calculateTotal(scores){
    var total=0;
    for (var index=0;index<scores.length;index++){
        total +=scores[index];
    }
    return total;
}

function calculateAverage(scores){
    return calculateTotal(scores)/scores.length;
}

// 