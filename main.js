$(function() {
  $("#rifle").fadeIn().animate({ right:'270px' }, 2000 );

  $("#h3-1").click(function() {
    $("#rifle").fadeToggle().fadeIn();
    document.getElementById("st").innerHTML = "<img class=\"artical\" src='原作.jpg'>";
    document.getElementById("myDiv").innerHTML = "<br><table class=\"artical\">\
    原作：<font size=\"7\" color=\"#3399FF\">青山剛昌</font>&nbsp;<img style='float:right;' src='青山.png'><br><br>\
    &nbsp;各位好，我是青山!<br>\
    &nbsp;這回的敵人是系列作中首次登場的狙擊手!<br>\
    &nbsp;不斷的使用炸彈來攻擊(笑)<br>\
    &nbsp;而且，若不是動畫，就不會有這樣精湛的演出，<br>\
    &nbsp;緊張驚險的氛圍直到最後一刻，從頭到尾都十分滿足!\
    </table><br clear=\"all\">";
   }
  );
  
  $("#h3-2").click(function() {
    $("#rifle").fadeToggle().fadeIn();
    document.getElementById("st").innerHTML = "<div class=\"artical\"><img src='7.jpg'><br><img src='8.jpg'><br><img src='9.jpg'><br></div>";
    document.getElementById("myDiv").innerHTML = "<br><table>\
    <span style=\"color:#CC0000; font-family:sans-serif; font-size:5;\"><i>劃過天際的第一起狙擊!</i></span><br>\
    &nbsp;&nbsp;科南一行人，正位於海拔635公尺，<br>\
    &nbsp;&nbsp;有著日本第一高之美稱的鈴木塔欣賞絕佳美景的同時，<br>\
    &nbsp;&nbsp;突然，遠處一道閃光!下一瞬間，步槍子彈擊破觀景窗，<br>\
    &nbsp;&nbsp;貫穿一名男子的胸膛\!<br>\
    <br>\
    <span style=\"color:#CC0000; font-family:sans-serif; font-size:5;\"><i>玩弄FBI，追緝神祕的狙擊手!</i></span><br>\
    &nbsp;&nbsp;一瞬間，小蘭和少年偵探團們，被這衝擊的景象所嚇到<br>\
    &nbsp;&nbsp;「來自不可能實現的!居擊距離...這難道是!」科南與高中生偵探<br>\
    &nbsp;&nbsp;世良眞純，一同追緝犯人騎乘的機車，犯人邪惡之手不斷攻擊，<br>\
    &nbsp;&nbsp;炸飛巡邏車而引發一連串的騷動，就在這猛烈的追緝之下，<br>\
    &nbsp;&nbsp;不知不覺，科南與世良的身分也暴露在這危險當中。FBI搜查官<br>\
    &nbsp;&nbsp;茱蒂一行人，全速前往現場支援，最後，<br>\
    &nbsp;&nbsp;犯人的身影竟消失在大海裡。<br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
    <!--<button id=\"second\" style=\"width:20%; background-color:black; color:#00CC66; font-family:sans-serif; font-size:5;\">>>>NEXT</button>--><br>\
    <span style=\"color:#CC0000; font-family:sans-serif; font-size:5;\"><i>隱藏的身影，殘留的謎團...</i></span><br>\
    &nbsp;&nbsp;日本史無前例，警察與FBI有著共同的目標，聯合組成巨大搜查線佈下<br>\
    &nbsp;&nbsp;天羅地網。那顆子彈，彈道研判已顛覆既有常識，<br>\
    &nbsp;&nbsp;在那異常遙遠的距離仍成功射擊，而且，在那狙擊點發現殘留的彈<br>\
    &nbsp;&nbsp;殼，以及1顆4點的骰子，究竟代表著甚麼含意...。<br>\
    &nbsp;&nbsp;過程中，茱蒂因有壓力創傷的情鏡再現狀況，<br>\
    &nbsp;&nbsp;腦海裡浮現遭組織殺害的FBI搜查官赤井秀一身影。不久，<br>\
    &nbsp;&nbsp;搜查線上獲得情資原美國海軍特殊部隊「海豹突擊隊」狙擊兵的存在!<br><br>\
    \
    <span style=\"color:#CC0000; font-family:sans-serif; font-size:5;\"><i>閃光，再現...!東京市中心陷入恐慌!!</i></span><br>\
    &nbsp;&nbsp;探聽到開始著手調查的警察，以及FBI的搜查行動，嘲笑這一切都是做<br>\
    &nbsp;&nbsp;白工，在科南眼前發生第二起狙擊事件!<br>\
    &nbsp;&nbsp;「如果這個意味著倒數計時的話...」不久，大眾傳播媒體大伺報導<br>\
    &nbsp;&nbsp;狙擊事件，連網路上也是火熱討論，東京市中心將陷入空前的恐慌之<br>\
    &nbsp;&nbsp;中，在此同時，神秘的大學研究生，沖矢昂也慢慢的開始有所行動。<br><br><br>\
    </table><br clear=\"all\">";
   }
  );
  
  
  $("#h3-3").click(function() {
    $("#rifle").fadeToggle().fadeIn();
    document.getElementById("st").innerHTML = "<div class=\"artical\"><img src='10.jpg'><br><img src='11.jpg'><br><img src='12.jpg'><br><img src='13.jpg'><br></div>";
    document.getElementById("myDiv").innerHTML = "<table>\
    <tr>\
      <td><img src=\"赤井.png\" style=\"width:130px; float:left;\"><font color=\"#C80000\"><b><i>赤井秀一</i></b></font><br>\
      <br>\
      FBI搜查官。是個不合情理但有手腕的人，有卓越的推理力。<br>\
      同時也是個非常優秀的狙擊手，黑暗組織以\"Silver Bullet\"來代稱。<br>\
      喜歡波本威士忌。過去有潛入黑暗組織深入搜查的經驗，因而與\"Rye\"這個代號劃上等號。\
      由於組織幹部琴酒的策略，在來葉峰山上，與愛車一同葬身火海...</td><hr>\
    </tr>\
    </table>\
    <table>\
    <tr>\
      <td><img src=\"世良.png\" style=\"width:130px; float:left;\"><font color=\"#C80000\"><b><i>世良眞純</i></b></font></b><br>\
      <br>\
      突然某天，就讀帝丹高中的小蘭班上來了位轉學生。擅長使用截拳道，以女高中生偵探的身份活躍其中，<br>\
      交際性格上，對於自己的稱呼，常用謙稱之詞。<br>\
      在飯店隱匿起來的謎樣美少女，真正的身分是赤井秀一的妹妹?<br>\
      到新一家拜訪時，與沖矢昂見面之後，為何所有接觸都產生警戒心。</td><hr>\
    </tr>\
    </table>\
    <table>\
    <tr>\
      <td><img src=\"沖矢.png\" style=\"width:130px; float:left;\"><font color=\"#C80000\"><b><i>沖矢 昂</i></b></font></b><br>\
      <br>\
      東都大學研究生。因為某次世鍵的契機，目前暫居在新一家，<br>\
      和柯南推理能力不分軒輊。<br>\
      總是穿著高領、圍巾等等服裝，總是隱藏脖子的部份。<br>\
      來歷幾乎是個謎，也知道柯南的真正身份<br>\
      和柯南母親有希子有深厚的交情，出乎意料的精通廚藝。</td><hr>\
    </tr>\
    </table>\
    <table>\
    <tr>\
      <td><img src=\"詹姆士.png\" style=\"width:130px; float:left;\"><font color=\"#C80000\"><b><i>詹姆士‧布拉克</i></b></font></b><br>\
      <br>\
      FBI搜查官。來到日本擔任FBI搜查團隊的首領<br>\
      主要負責搜查指揮的工作<br>\
      出生於芝加哥，是赤井秀一最愛的人物<br>\
      與世良眞純有過一面之緣。<br>\
      好像也是峰不二子的愛慕粉絲。</td><hr>\
    </tr>\
    </table>\
    <table>\
    <tr>\
      <td><img src=\"茱蒂.png\" style=\"width:130px; float:left;\"><font color=\"#C80000\"><b><i>茱蒂‧史坦林</i></b></font></b><br>\
      <br>\
      FBI搜查官。擁有相當精準的射擊能力，在槍戰遊戲中也是佼佼者。<br>\
      過去使用「茱蒂‧聖提米利翁」這一個假名，在帝丹高中擔任英文教師，實際上是潛入搜查。<br>\
      因此，柯南等人至今仍稱呼她為「茱蒂老師」。<br>\
      眼鏡是死去父親的遺物。</td><hr>\
    </tr>\
    </table>\
    <table>\
    <tr>\
      <td><img src=\"安德烈.png\" style=\"width:130px; float:left;\"><font color=\"#C80000\"><b><i>安德烈‧卡邁爾</i></b></font></b><br>\
      <br>\
      深受赤井信賴的FBI搜查官。<br>\
      在FBI中，僅次於赤井擁有高超的駕駛技術。<br>\
      過去，曾經和赤井一同出過任務追蹤埋伏琴酒<br>\
      不料後來卻因自己的失誤而告終失敗。</td>\
    </tr>\
    </table><br clear=\"all\">";
   }
  );
  
  
  $("#h3-4").click(function() {
    $("#rifle").fadeToggle().fadeIn();
    document.getElementById("st").innerHTML = "";
    document.getElementById("myDiv").innerHTML = "\
    <iframe width=\"853\" height=\"480\" src=\"//www.youtube.com/embed/Dw10viyB27Q\" frameborder=\"0\" allowfullscreen></iframe>\
    ";
   }
  );
  
  $("#h3-5").click(function() {
    $("#rifle").fadeToggle().fadeIn();
    document.getElementById("st").innerHTML = "";
    document.getElementById("myDiv").innerHTML = "\
    <img src='1.jpg'>&nbsp;<img src='2.jpg'>&nbsp;<img src='3.jpg'>&nbsp;<img src='4.jpg'>&nbsp;<img src='5.jpg'>&nbsp;<img src='6.jpg'>\
    ";
   }
  );
  
  $("#h3-6").click(function() {
    $("#rifle").fadeToggle().fadeIn();
    document.getElementById("st").innerHTML = "";
    document.getElementById("myDiv").innerHTML = "\
    <ul>\
      <li>原作：青山剛昌</li>\
      <li>導演、分鏡：靜野孔文</li>\
      <li>劇本：古內一成</li>\
      <li>分鏡協力：寺岡巌、大畑晃一</li>\
      <li>人物設定 / 總作畫監督：須藤昌朋</li>\
      <li>作畫監督：牟田清司、堀內博之、清水義治、野武洋行、高橋成之、河村明夫</li>\
      <li>美術：涉谷幸弘</li>\
      <li>色彩設計：加藤里惠</li>\
      <li>攝影監督：西山仁</li>\
      <li>3D CGI 導演：後藤優一</li>\
      <li>編集：岡田輝滿</li>\
      <li>錄音監督：浦上靖夫</li>\
      <li>音響效果:橫山正和、橫山亞紀</li>\
      <li>音樂：大野克夫</li>\
      <li>故事編輯：飯岡順一</li>\
      <li>副製作人：米倉功人</li>\
      <li>製作人：諏訪道彥、淺井認、石山桂一</li>\
      <li>動作製作：TMS/V1 Studio</li>\
      <li>製作：「名偵探柯南：異次元的狙擊手」製作委員會（小学館、讀賣テレビ放送、日本テレビ放送網、小学館集英社プロダクション、東宝、トムス・エンタテインメント）</li>\
      <li>配給:東寶</li>\
    </ul>\
    ";
   }
  );
  
  $("#h3-7").click(function() {
    $("#rifle").fadeToggle().fadeIn();
    document.getElementById("st").innerHTML = "";
    document.getElementById("music").innerHTML = "\
    <h3>作詞・歌：柴咲コウ&nbsp;/&nbsp;作曲：内澤崇仁&nbsp;&nbsp;&nbsp;主題曲：ラブサーチライト</h3>\
      <audio controls autoplay>\
        <source src=\"Love Searchlight.mp3\">\
      </audio>\
    ";
   }
  );
  
  $("#last").click(function() {
     alert('此網頁為作業所用，純屬學術用途，參考資訊來自網路。官方網站如下：http://www.conan-movie.jp/index.html');
    }
  );
} );

