
// ----< Matn bilan ishlash >-----
let String_text ='';
let choise_of_mine = 0;
let NumOfLines = 0;
let RanNum = 0;
let RanNumFor4 = [0, 0, 0, 0];
let StrForRNFor4 = ['', '', '', ''];
let arENG = ['', '', '', ''];
let arUZB = ['', '', '', ''];
let TrueAnswer = 0;


ChekingTheAnswer();
UpDatePage();

// in that we chaked answer
function ChekingTheAnswer() {
    TrueAnswer = JSON.parse(localStorage.getItem('TrueAnswer_InLS'));
    arENG = JSON.parse(localStorage.getItem('arENG_InLS'));
    arUZB = JSON.parse(localStorage.getItem('arUZB_InLS'));
    choise_of_mine =Number(JSON.parse(localStorage.getItem('choised_optins')));
    console.log(TrueAnswer);
    console.log(arENG[TrueAnswer]);
    console.log(arUZB[TrueAnswer]);
    console.log(choise_of_mine);
}

// got othe naext page
function NextPage() {
    window.location.href = 'voc_test_1.html';
}

// for this we update the page
function UpDatePage() {
    if (TrueAnswer === choise_of_mine) {
        document.querySelector('.voc_chek_position').innerHTML =
        'Correct';
        document.querySelector('.voc_chek_position').
            classList.remove('in_correct');
    } else {
        document.querySelector('.voc_chek_position').innerHTML =
        'In-correct';
        document.querySelector('.voc_chek_position').
            classList.add('in_correct');
    }
    document.querySelector('.voc_chek_eng_t').innerHTML =
    arENG[TrueAnswer];
    document.querySelector('.voc_chek_uzb_t').innerHTML =
    arUZB[TrueAnswer];
}
