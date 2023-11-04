let choised_num = '';
let s ='';
let i_1 = 0;
    let i_2 = -10;
    let s_1 ='';
    let s_2='';
    let index_s = 0;
    let index_f = 0;
let str_f_l ='';
let sz_1='';
let sz_2='';
let content ='';
// ----< Matn bilan ishlash >-----
let String_text ='';
let choise_ ='';
let choise_of_mine = 0;
let NumOfLines = 0;
let RanNum = 0;
let RanNumFor4 = [0, 0, 0, 0];
let StrForRNFor4 = ['', '', '', ''];
let arENG = ['', '', '', ''];
let arUZB = ['', '', '', ''];
let TrueAnswer = 0;

TextVocINTOstr();
CalNumLines();
ChoiseRandomNum();
ForNumToStr();
UpDateQuestions();

// function for reading text file and do it into String
function TextVocINTOstr() { 
    fetch('text_files/text.txt')
    .then(function(response){
            return response.text();
    })
    .then(function(data){
        {
            localStorage.setItem('LocalStorageData', JSON.stringify(data));
        }
    })
    .catch(function(error){
        console.log(error);
    })
    f2();
}   function f2() {
    String_text = localStorage.getItem('LocalStorageData');
}
// for knowing how many lines are there
function CalNumLines() {
    i_1 = 0;
    index_s = 1;
    for (let i=1; i<=String_text.length-6; i++) {
        if (String_text.substr(i,7) === '_/end/_') {
            i_1 +=1;
            index_f = (i-1);
            s_1 = String_text.substr(index_s, (index_f-index_s+1));
            index_s = ( i+7+4 );
            str_f_l = s_1;
        }
    }
    NumOfLines = i_1;
    console.log('N.O.L: '+NumOfLines);
}
// for calculate 4 random for questions !
function ChoiseRandomNum() {
    i_1=0;
    i_2=0;
    RanNumFor4 = [0, 0, 0, 0];
    while (i_1 <= 3) {
        i_2 = Math.floor(Math.random()*NumOfLines+1);
        if  (  i_2 === RanNumFor4[0] 
            || i_2 === RanNumFor4[1] 
            || i_2 === RanNumFor4[2] 
            || i_2 === RanNumFor4[3]) {
            // empty place
        } else {
            RanNumFor4[i_1] = i_2;
            console.log(i_1+' - '+RanNumFor4[i_1]);
            i_1++;
        }
    }
}

function ForNumToStr() {
    for (let j_=1; j_<=4; j_++) {
        StrForRNFor4[j_-1]='0';
        i_1 = 0;s
        index_s = 1;
        for (let i=1; i<=String_text.length-6; i++) {
            if (String_text.substr(i,7) === '_/end/_') {
                i_1 +=1;
                index_f = (i-1);
                s_1 = String_text.substr(index_s, (index_f-index_s+1));
                index_s = ( i+7+4 );
                if (RanNumFor4[j_-1] === i_1) {
                    StrForRNFor4[j_-1] = s_1;
                }
            }
        }
    }
    for (let j=1; j<=4; j++) { 
        for (let i=1; i<= StrForRNFor4[j-1].length; i++) {
            if (StrForRNFor4[j-1].substr(i,7) === '_/uzb/_') {
                i_1=i;
            }
            if (StrForRNFor4[j-1].substr(i,8) === '_/data/_') {
                i_2=i;
            }
        }
        arENG[j-1] = StrForRNFor4[j-1].substr(7, i_1-7);
        arUZB[j-1] = StrForRNFor4[j-1].substr(i_1+7,i_2-(i_1+7));
    }
    
    for (let j=1; j<=4; j++) { 
        console.log(j+'-eng-'+arENG[j-1]);
        console.log(j+'-uz-'+arUZB[j-1]);
    }
}

function UpDateQuestions() {
    TrueAnswer = Math.floor(Math.random()*4) ;
    document.querySelector('.voc_test_question_p').innerHTML =
    arENG[TrueAnswer] ;
    console.log(TrueAnswer);
    for (let i=1; i<=4; i++) {
        document.querySelector('.voc_option_0_'+i).innerHTML =
        arUZB[i-1];
    }
    localStorage.setItem('TrueAnswer_InLS', JSON.stringify(TrueAnswer));
    localStorage.setItem('arENG_InLS', JSON.stringify(arENG));
    localStorage.setItem('arUZB_InLS', JSON.stringify(arUZB));
} 




function ClickedOptionForTest(choised_num) {
    choise_of_mine = Number(choised_num);
    localStorage.setItem('choised_optins',JSON.stringify(choise_of_mine));
    window.location.href = 'voc_test_2.html';
}