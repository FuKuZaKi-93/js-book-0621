# 6/21 課題 学んだ記録

自身が学んだ記録を作りましょう。

- 関数(`function` で始まるコード)は全て function.js に書きます
- その他をREADME.md（このファイル）に書いていきます
    - 書き方は README-example.md (同じフォルダに同梱) を参考にしてください
- 書き方は自身でアレンジしてもかまいません


--------------------------------------

## 授業スライドの説明（4時間目～5時間目）

説明の中で実行したログ、分かったこと、疑問などがあればここに書く。

### Consoleの実行ログ

```
5-2-1 関数型の変数(p.111)
function hello(name) {
    return'こんにちは、'+name+'さん';
}
undefined
hello('藤原')
"こんにちは、藤原さん"
var myFunction = hello;
undefined
myFunction
function hello(name) {
    return'こんにちは、'+name+'さん';
}
myFunction('藤原')
"こんにちは、藤原さん"


5-2-2 関数型の引数(p.112)
function double(x){
    return x * 2; //引数を2倍にして返す関数
}
undefined
double(1)
2
double(2)
4
var numbers = [1,2,3,4,5];
undefined
numbers.map(double)
(5) [2, 4, 6, 8, 10]


5-2-3 関数式(p.113)
function foo(){
    return "hello";
}
undefined
var a = function foo(){
    return "hello";
}
undefined


5-2-4 無名関数(p.114)
function foo(){
    return "hello";
}
undefined
var a=function(){
    return "hello";
}
undefined


二つの無名関数
var a=function(){
    return "hello";
}
undefined
var a = () => {
    return "hello";
}
undefined


無名関数の例：map関数
//普通の無名関数
numbers.map(function(x){
    return 2 * x;
})
(5) [2, 4, 6, 8, 10]
//アロー関数式（正式）
numbers.map((x) =>{
    return 2 * x;
})
(5) [2, 4, 6, 8, 10]
//アロー関数式（省略した書き方）
numbers.map(x => 2 * x)
(5) [2, 4, 6, 8, 10]


6-3-2 再帰：階乗をJavaScriptで書く
function f(n){
    if (n<= 0){
        return 1;
    }
    return n * f(n-1);
}
undefined
f(3)
6
f(1)
1


6-4-3 クロージャ：例カウンター(p.138)
function newCounter(){
    var count = 1;
    return () => count++;
}
undefined
var counter1 = newCounter();
undefined
var counter2 = newCounter();
undefined
counter1()
1
counter1()
2
counter1()
3
counter2()
1
counter2()
2
counter2()
3
counter1()
4
counter1()
5
counter2()
4



```

### Console以外の動き（もしあれば）

【ここに書く（なければ省略可）】

### 分かったこと

【ここに書く】

### 疑問・分からないこと（もしあれば）

【ここに書く（なければ省略可）】

--------------------------------------

以下、教科書の自分で読んだ・実行した箇所について書く。

## 5-1 連想配列と無名関数 (p.102)
## 5-1-1 データ設計

### Consoleの実行ログ

```
var examinationScores = [
    59,84,77,53,41,20,42,53,55,54,
	36,48,64,70,45,54,42,50,49,53,
	68,60,66,57,52,55,82,61,51,43,
	57,65,81,63,45
];
```

### Console以外の動き（もしあれば）

【ここに書く（なければ省略可）】

### 分かったこと

【ここに書く】

### 疑問・分からないこと（もしあれば）

【ここに書く（なければ省略可）】


## 5-1-2 二次配列 (p.104)
### Consoleの実行ログ
var informationExaminationScores=[
    59,84,77,53,41,20,42,53,55,54,
	36,48,64,70,45,54,42,50,49,53,
	68,60,66,57,52,55,82,61,51,43,
	57,65,81,63,45
];
var englishExaminationScores=[
    60,69,56,65,61,43,65,52,59,61,
    51,51,68,68,45,64,49,60,59,55,
    52,60,59,48,56,55,67,63,54,36,
    50,55,63,50,50
];
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-2 二次配列 (p.104)
### Consoleの実行ログ
var examinationScores=[[
    59,84,77,53,41,20,42,53,55,54,
	36,48,64,70,45,54,42,50,49,53,
	68,60,66,57,52,55,82,61,51,43,
	57,65,81,63,45
],[
    60,69,56,65,61,43,65,52,59,61,
    51,51,68,68,45,64,49,60,59,55,
    52,60,59,48,56,55,67,63,54,36,
    50,55,63,50,50
]];
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
examinationScores[0];    //情報のテスト結果（の配列）
examinationScores[1];    //英語のテスト結果（の配列）
examinationScores[0][0]; //出席番号1番の学生の情報のテスト結果
59
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
var information = 0;
var english = 1;
examinationScores[information];
examinationScores[english];
examinationScores[information][0]; //出席番号1番の学生の情報のテスト結果
59
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.106)
### Consoleの実行ログ
var INFORMATION = 0;
var ENGLISH = 1;
examinationScores[INFORMATION];
examinationScores[ENGLISH];
examinationScores[INFORMATION][0]; //出席番号1番の学生の情報のテスト結果
59
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）


## 5-1-3 定数 (p.105)
### Consoleの実行ログ
### Console以外の動き（もしあれば）
### 分かったこと
### 疑問・分からないこと（もしあれば）