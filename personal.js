let firstBtn = document.querySelector('#gamebtn');
let frm = document.querySelector('#form');
let userName = document.querySelector('#player');
let secondBtn = document.querySelector('#nextWelcome');
let userMsg = document.querySelector('#msg');
let thirdBtn = document.querySelector('#seebtn');
let yourMsg = document.querySelector('#secret');
let randam = document.querySelector('#dice');
let image=document.querySelector('#loveMsg');

image.classList.add('display');
randam.classList.add('display');
yourMsg.classList.add('display');
thirdBtn.classList.add('display');
nextWelcome.classList.add('display');
userMsg.classList.add('dislay');
frm.classList.add('display');

let btnClick = () => {
    firstBtn.classList.add('display');
    frm.classList.remove('display');
    nextWelcome.classList.remove('display');
};

firstBtn.addEventListener('click', btnClick);


let welcome = () => {
    let userNamevalue = userName.value;
    frm.classList.add('display');
    nextWelcome.classList.add('display');
    userMsg.classList.remove('display');
    userMsg.innerHTML = `Hi ${userNamevalue},let's see how your day goes today 😀`
    thirdBtn.classList.remove('display');
};

secondBtn.addEventListener('click', welcome);

let lastSee = () => {
    let userNamevalue = userName.value;
    randam.classList.remove('display');
    let randamMsg = [
        "உங்களை விட அழகானவர் 🥰 இந்த உலகத்தில் பிறக்க வாய்ப்பே இல்லை 😉. உங்கள் அழகின் இரகசியம் என்னவோ? 🤔 உங்கள் இலக்கும் உங்களை தேடி வருகிறது 💪.",
        "ஆகா 😮 நீங்களா 😍உங்களுடைய இந்த அருமையான பேச்சுக்கு என்ன காரணமோ 🤔?",
        "நீங்கள் 🧐 மிகவும் தையிரமானவர் 💪.உங்கள் இலக்குக்கான தூரம் பக்கத்தில் வந்து விட்டது 😎",
        "உங்கள் நகைச்சுவைக்கு 😜 உங்களை சுற்றி இருப்பவர்கள் அனைவரும் சிரிப்பார்கள் 🤣",
        " நீங்கள் தான் இந்த உலகத்தின் ஒளி விளக்கு 💡.இலக்கை அடையும் வரை ஓடிக் கொண்டிருக்கும் உங்களைப் பார்த்து நான் வியக்குறேன் 😮",
        "பலவிதமான பிரச்சனைகளை 🤫 நீங்கள் கடந்து வந்துள்ளீர்கள் இனி வரப்போகும் பிரச்சனைகள் 😏 அனைத்தும் உங்கள் கால் தூசுக்கு சமம் 😎",
        "உங்கள் வாக்குகள் மிக அருமையாக இருக்கின்றன 🧐",
        "உங்களுடைய நேர்மையான பேச்சுக்கு 😮 நீங்கள் எங்கோ இருக்க வேண்டியவர் 😎"
    ];
    image.classList.remove('display');
    userMsg.classList.add('display');
    thirdBtn.classList.add('display');
    yourMsg.classList.remove('display');
    randam = Math.floor(Math.random() * randamMsg.length);
    console.log(randamMsg[randam]);
    yourMsg.textContent = randamMsg[randam];
};

thirdBtn.addEventListener('click', lastSee);