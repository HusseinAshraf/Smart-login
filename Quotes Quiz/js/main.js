var nextBtn = document.querySelector('#nextBtn');
var previousBtn=document.querySelector('#previousBtn');
var tweetQuote=document.querySelector('#tweetQuote');
var copyQuote=document.querySelector('#copyQuote');
var speak=document.querySelector('#speak');
var back=document.querySelector('back')

var quoteObject=[
   {
      quoteText:`
      "اللهم أنت ربي، لا إله إلا أنت، خلَقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شرِّ ما صنعت، أبُوء لك بنعمتك عليّ وأبوء بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت"، قال: "مَن قالها من النهار موقنًا بها، فمات من يومه قبل أن يُمسي، فهو من أهل الجنة، ومن قالها من الليل وهو مُوقن بها، فمات قبل أن يُصبح، فهو من أهل الجنة"

      `,

      Writer:` رواه البخاري`
   },
   {
      quoteText:`
      "إذا أصبح أحدكم فليقل: اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور".
وإذا أمسى فليقل: "اللهم بك أمسينا، وبك أصبَحنا، وبك نحيا، وبك نموت، وإليك المصير"؛


      `,
      Writer:`رواه الترمذي.`
   },
   {
      quoteText: `
      "أصبحنا (أمسينا) على فِطرة الإسلام، وكلمة الإخلاص، ودين نبينا محمد -صلى الله عليه وسلم- ومِلة أبينا إبراهيم حنيفًا مسلمًا وما كان من المشركين"؛

      `,
      Writer: `رواه أحمد.`
   },
   {
      quoteText:`"اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي، وأهلي ومالي، اللهم استُر عوراتي، وآمِن رَوعاتي، اللهم احفظني من بين يدي ومن خلفي، وعن يميني وعن شمالي، ومن فوقي، وأعوذ بعظمتك أن أُغتال من تحتي"، قال أبو داود: قال وكيع: يعني: الخسْف؛`
      ,

      Writer:`رواه أبو داود.`
   },
   {
      quoteText:`
      "أصبحنا وأصبح (أمسينا وأمسى) المُلك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، ربِّ أسألك خير ما في هذا اليوم (الليلة)، وخير ما بعده، وأعوذ بك من شرِّ ما في هذا اليوم (الليلة)، وشر ما بعده، ربِّ أعوذ بك من الكسل، وسوء الكِبَر، ربِّ أعوذ بك من عذابٍ في النار وعذاب في القبر"؛
`,
      Writer:`رواه مسلم.`
   },
   {
      quoteText: `"اللهم فاطر السموات والأرض، عالم الغيب والشهادة، ربَّ كلِّ شيء ومليكه، أشهد أنْ لا إله إلا أنت، أعوذ بك من شرِّ نفسي، وشر الشيطان وشِرْكه، وأن أَقترف على نفسي سوءًا، أو أجرَّه إلى مسلم"؛`,
      Writer:`رواه الترمذي.`
   },
   {
      quoteText: `"رضيت بالله ربًّا، وبالإسلام دينًا، وبمحمد -صلى الله عليه وسلم- نبيًّا"، "من قالها حين يُصبح وحين يمسي، كان حقًّا على الله أن يُرضيه"؛`,
      Writer: `رواه الترمذي.`
   },
   {
      quoteText:  `"يا حي يا قيُّوم، برحمتك أستغيث، أصلِح لي شأني كله، ولا تَكلني إلى نفسي طرْفة عينٍ"؛`,
      Writer: `رواه الحاكم.`
   },
   {
      quoteText: `﴿ اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيم ﴾`,
      Writer:  `[البقرة: 255].`
   }
]

var lastQuoteNum = 0;
var previousQuoteNum = [];

var shareQuoteTextNext;
var shareQuoteWriterNext;

var shareQuoteTextPrevious;
var shareQuoteWriterPrevious;

var nextQuote = true;

function nextBtnRandom() {

    var quote = Math.floor(Math.random() * quoteObject.length);

    for (var i = 0; i < quoteObject.length; i++) {

        if (i == quote) {

            if (quote != lastQuoteNum) {
                document.getElementById('quotes').innerHTML = quoteObject[i].quoteText;
                document.getElementById('writer').innerHTML = quoteObject[i].Writer;

                previousQuoteNum.push(quote);
                lastQuoteNum = quote;

                shareQuoteTextNext = quoteObject[i].quoteText;
                shareQuoteWriterNext = quoteObject[i].Writer;
                nextQuote = true;
            }
            else {
                quote = Math.floor(Math.random() * 10);
                i = -1;
            }
        }
    }
};

function previousBtnRandom() {

    for (var j = 0; j < previousQuoteNum.length; j++) {

        if (j == previousQuoteNum.length - 1 && previousQuoteNum.length > 1) {
            document.getElementById('quotes').innerHTML = quoteObject[previousQuoteNum[j - 1]].quoteText;
            document.getElementById('writer').innerHTML = quoteObject[previousQuoteNum[j - 1]].Writer;
            previousQuoteNum.pop(1)

            shareQuoteTextPrevious = quoteObject[previousQuoteNum[j - 1]].quoteText;
            shareQuoteWriterPrevious = quoteObject[previousQuoteNum[j - 1]].Writer;
            nextQuote = false;
        }

    }
};


function tweetQuoteRandom() {
   if (nextQuote == true) {
       const tweetUrl = `https://twitter.com/intent/tweet?text=${shareQuoteTextNext}  ${shareQuoteWriterNext}`;
       window.open(tweetUrl, "_blank");
   }
   else {
       const tweetUrl = `https://twitter.com/intent/tweet?text=${shareQuoteTextPrevious}  ${shareQuoteWriterPrevious}`;
       window.open(tweetUrl, "_blank");
   }
};

function copyQuoteRandom() {
   if (nextQuote == true) {
       navigator.clipboard.writeText(shareQuoteTextNext + ' ' + shareQuoteWriterNext);
   }
   else {
       navigator.clipboard.writeText(shareQuoteTextPrevious + ' ' + shareQuoteWriterPrevious);
   }
};
function speakRandom() {

   if (nextQuote == true) {
       var voiceQuoteNext = shareQuoteTextNext + ' ' + shareQuoteWriterNext;
       var read = new SpeechSynthesisUtterance(String(voiceQuoteNext));
       read.lang = "en";
       window.speechSynthesis.speak(read);
   }
   else {
       var voiceQuotePrevious = shareQuoteTextPrevious + ' ' + shareQuoteWriterPrevious;
       var read = new SpeechSynthesisUtterance(String(voiceQuotePrevious));
       read.lang = "en";
       window.speechSynthesis.speak(read);    }

};

previousBtn.addEventListener('click' , previousBtnRandom);
nextBtn.addEventListener('click' , nextBtnRandom);
tweetQuote.addEventListener('click' , tweetQuoteRandom);
copyQuote.addEventListener('click' , copyQuoteRandom);
speak.addEventListener('click' , speakRandom);

function backPage() {
    window.location.href =
      "../pages/home.html";
  }
  back.addEventListener("click", backPage);
  