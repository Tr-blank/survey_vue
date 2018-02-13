var dataJson = [
  {
    number: 0,//問題編號
    title: 'Welcome to Clinique',//問題大標
    question: 'How can we help you today?',//問題小標
    model: 'model01',//使用模板編號，必填，model01、model02、model03
    nextNumber: 1,//下個問題標號
    answered:false,//是否回答，預設都是false，過程計算用不須變動
    totalAnswer: 5,//總共必填題數，如是依回答答案決定題目順序的題型，必填總題數會比necessary:true的題目數量來的少
    wordColor: {//問題小標文字顏色
      'color': '#409238'
    },
    bgstyle: {//背景底色
      backgroundColor: '#f0f0f0'
    },
    barBgColor: '#fff',//下方進度條底色
    barColor:'#5aa051',//下方進度條顏色
    barWordColor:'#FFC107',//下方進度條文字顏色
    modelOption: {//此問題的答案選項共通設定
      multiLine: 'flex-wrap:wrap;', //多行顯示要填入flex-wrap:wrap;
      oneLine: true,//是不是只有一行顯示
      necessary: true,//是否必填
      bigPic: false, //如果是大圖模式就填true
      maxChoose: 1,//多選最大可選數量
      answer: [],//暫存此答案的參數，不須變動
      optionsFroundcolor: {//答案選項顏色設定
        backgroundColor: '',//選項底色
        backgroundImage: 'linear-gradient(#696969, #949494)',//可填圖片或是漸層色
        color: '#fff'//選項文字顏色
      },
      optionsBackcolor: {//答案選項選取翻轉後顏色，設定同上
        backgroundColor: '',
        backgroundImage: 'linear-gradient(#408d38,#60a557)',
        color: '#fff'
      },
      options: [//答案選項其他設定，樣式部分為特定選項想要另特別的顏色才填入
        {
          optionId: 'option-1',//答案選項編號
          title: 'Clinique For Women',//畫面上顯示的答案文字
          value: 'Women',//答案陣列紀錄的文字
          imgFrontSrc: '',//正面圖片路徑
          imgBackSrc: ''//選取翻轉後的圖片路徑
        },
        {
          optionId: 'option-2',
          title: 'Clinique For Men',
          value: 'Men',
          imgFrontSrc: '',
          imgBackSrc: ''
        }
      ]
    }
  },
  {
    number: 1,
    title: 'What brings you to Clinique today?',
    question: 'Tap to select up to 2 skin concerns.',
    model: 'model01',
    nextNumber: 2,
    answered: false,
    totalAnswer: 5,//總共必填題數
    wordColor: {
      'color': '#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    barBgColor:'#fff',
    barColor:'#5aa051',
    barWordColor:'#FFC107',
    modelOption: {
      multiLine: 'flex-wrap:wrap;', //多行顯示要填入flex-wrap:wrap;
      oneLine: false,
      necessary: true,
      bigPic: false, 
      maxChoose: 2,
      answer: [],
      optionsFroundcolor: {
        backgroundColor: '#fff',
        backgroundImage:'',
        color: '#666'
      },
        optionsBackcolor: {
          backgroundColor: '#409238',
          backgroundImage: '',
          color: '#fff'
      },
        options: [
        {
          optionId: 'option-1',
          title: 'Acne/​Breakouts',
          value: 'Acne/​Breakouts',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/acne.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/acneWhite.png'
        },
        {
          optionId: 'option-2',
          title: 'Daily Care',
          value: 'Daily Care',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/dailyCare.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/dailyCareWhite.png'
        },
        {
          optionId: 'option-3',
          title: 'Dark Spots/Uneven Skin Tone',
          value: 'Dark Spots/Uneven Skin Tone',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/darkSpots.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/darkSpotsWhite.png'
        },
        {
          optionId: 'option-4',
          title: 'Dryness',
          value: 'Dryness',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/dryness.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/drynessWhite.png'
        },
        {
          optionId: 'option-5',
          title: 'Eye Area',
          value: 'Eye Area',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/eyeArea.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/eyeAreaWhite.png'
        },
        {
          optionId: 'option-6',
          title: 'Firming/​Lifting',
          value: 'Firming/​Lifting',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/lifting.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/liftingWhite.png'
        },
        {
          optionId: 'option-7',
          title: 'Lines/​Wrinkles',
          value: 'Lines/​Wrinkles',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/lines.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/linesWhite.png'
        },
        {
          optionId: 'option-8',
          title: 'Pores',
          value: 'Pores',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/pores.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/poresWhite.png'
        },
        {
          optionId: 'option-9',
          title: 'Radiance',
          value: 'Radiance',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/radiance.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/radianceWhite.png'
        },
        {
          optionId: 'option-10',
          title: 'Redness',
          value: 'Redness',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/redness.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/rednessWhite.png'
        },
        {
          optionId: 'option-11',
          title: 'Sensitivity',
          value: 'Sensitivity',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sensitivity.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sensitivityWhite.png'
        },
        {
          optionId: 'option-12',
          title: 'Sun Protection',
          value: 'Sun Protection',
          imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sun.png',
          imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/sunWhite.png'
        }
      ]
    }
  },
  {
    number: 2,
    title: "What's your age group ?",
    question: '',
    answer: '',
    model: 'model01',
    nextNumber: 3,
    answered: false,
    totalAnswer: 5,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    barBgColor:'#fff',
    barColor:'#5aa051',
    barWordColor:'#FFC107',
    modelOption: {
      multiLine: '',
      oneLine: true,
      necessary: false,
      bigPic: false, 
      maxChoose: 1,
      answer: [],
      optionsFroundcolor: {
        backgroundColor: '#fff',
        backgroundImage: '',
        color: '#666'
      },
      optionsBackcolor: {
        backgroundColor: '#409238',
        backgroundImage: '',
        color: '#fff'
      },
      options: [
        {
        optionId: 'option-1',
        title: '0-18',
        value: '0-18',
        imgFrontSrc:'',
         imgBackSrc:''
        },
        {
        optionId: 'option-2',
        title: '19-29',
        value: '19-29',
        imgFrontSrc:'',
         imgBackSrc:''
        },
        {
        optionId: 'option-3',
        title: '20-49',
        value: '20-49',
        imgFrontSrc:'',
         imgBackSrc:''
        },
        {
        optionId: 'option-4',
        title: '50-69',
        value: '50-69',
        imgFrontSrc:'',
         imgBackSrc:''
        },
        {
        optionId: 'option-5',
        title: '70+',
        value: '70+',
        imgFrontSrc:'',
         imgBackSrc:''
        }
      ]
    }
  },
  {
    number: 3,
    title: 'How many hours do you sleep on average?',
    question: "We ask because poor sleep can affect skin's well - being.",
    model: 'model02',
    nextNumber: 4,
    answered: false,
    totalAnswer: 5,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    barBgColor:'#fff',
    barColor:'#5aa051',
    barWordColor:'#FFC107',
    modelOption: {
      necessary: false,
      answer: []
    }
  },
  {
    number: 4,
    title: 'What kind of sun exposure do you get on an average day?',
    question: '',
    model: 'model01',
    nextNumber: 5,
    answered: false,
    totalAnswer: 5,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    barBgColor:'#fff',
    barColor:'#5aa051',
    barWordColor:'#FFC107',
    modelOption: {
      multiLine: '',
      oneLine: true,
      necessary: false,
      bigPic: true, 
      maxChoose: 1,
      answer: [],
      optionsFroundcolor: {
        backgroundColor: '',
        backgroundImage: 'linear-gradient(#696969, #949494)',
        color: '#fff'
      },
      optionsBackcolor: {
        backgroundColor: '',
        backgroundImage: 'linear-gradient(#408d38,#60a557)',
        color: '#fff'
      },
      options: [
        {
        optionId: 'option-1',
        title: 'Walking around',
        value: 'Walking around',
        imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face.png',
        imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face.png'
        },
        {
        optionId: 'option-2',
        title: 'Many hours spent outdoors',
        value: 'Many hours spent outdoors',
        imgFrontSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face-men-transparent.png',
        imgBackSrc: 'https://www.clinique.com/lcl/blue_ocean/quiz/images/face-men-transparent.png'
        }
      ]
    }
  },
  {
    number: 5,
    title: 'Which skin tone is closest to yours?',
    question: '',
    model: 'model03',
    nextNumber: 0,
    answered: false,
    totalAnswer: 5,
    wordColor: {
      'color':'#409238'
    },
    bgstyle: {
      'background-color': '#f6f6f6'
    },
    barBgColor:'#fff',
    barColor:'#5aa051',
    barWordColor:'#FFC107',
    modelOption: {
      answer: [],
      necessary: false,
      rangeBgColorLeft: '#865649',//拉條漸層底色左邊色碼
      rangeBgColorRight: '#f4e2d3',//拉條漸層底色右邊色碼
      options: [
        {
          title: 'Deep',//選項名稱
          imgSrc: 'https://www.clinique.com/media/images/foundation-finder/D7.jpg'//選項對應圖片
        },
        {
          title: 'Medium',
          imgSrc: 'https://www.clinique.com/media/images/foundation-finder/D3.jpg'
        },
        {
          title: 'Moderately Fair',
          imgSrc: 'https://www.clinique.com/media/images/foundation-finder/M3.jpg'
        },
        {
          title: 'Very Fair',
          imgSrc: 'https://www.clinique.com/media/images/foundation-finder/VF4.jpg'
        }
      ]
    }
  }
];