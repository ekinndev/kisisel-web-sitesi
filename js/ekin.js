$(document).ready(function() {



    $('#dildurum').change(function(event) {

       var ingilizce={
        about:"I was born in Denizli on October 22, 1998. I completed my primary, secondary and high school education here. I am still studying at Ege University. My programming life started in the 7th grade when I wanted to cheat online games. I'm more interested in web programming these days.",
        graphic:"Graphic",
        coding:"Coding",
        works:"WORKS",
        groups:"COMMUNITIES",
        hakkimda:"ABOUT ME",
        contact:"You can contact me from the options below or directly via social media. I'il get back to you as soon as I can.",
        contribute:"DONATE",
        donatetext:"If you want to contribute a student.",
        iletisim:"CONTACT ME",
        copy:"Copyright © 2019 Ekin Abalıoğlu All Rights Reserved.",
        esoing:"Even when I was preparing for college, I wanted to be a member of a dance community. The first community I'm a member of. I made very good friends for a year and danced to the fullest.",
        esotitle:"Esodans Community",
        egeisleting:"Thanks to this community, I had the opportunity to visit many companies throughout the year. We also organized very nice lounge activities.",
        egeislettitle:"Ege Managament",
        aegeeing:"The 2nd semester I enrolled in the international community. We're gonna do better things next year.",

        menuhakkim:"About Me",
        menuworks:"Works",
        menutop:"Communities",
        menuilet:"Contact Me",
        menubag:"Donate",


        slider1text:"A picture from the dorm room.",
        slider2title:"Famous Ege University Waterfall",
        slider2text:"Everyone gets their photos taken at least once.",
        slider3title:"The path of the Faculty of Nursing",
        slider3text:"Faculty of Nursing (Left Side)",

        slider4text:"Sunset in Alsancak.",
        slider5title:"Ege University Campus",
        slider5text:"Dormitory Road."

    };
    var turkce={
        about:"22 Ekim 1998 tarihinde Denizli'de doğdum.İlkokul ortaokul ve Lise öğrenimini burada tamamlayarak 2018 yılında Ege Üniversitesi Bilgisayar Mühendisliği bölümüne girmeye hak kazandım. Hala Ege Üniversitesi'nde öğrenimime devam ediyorum. Programcılık hayatım 7. Sınıfta online oyunlara hile yazmak istememle başladı.Bu sıralar web programlama ile daha çok ilgileniyorum.",
        graphic:"Grafik",
        coding:"Kodlama",
        works:"PORTFOLYO",
        groups:"TOPLULUKLAR",
        hakkimda:"HAKKIMDA",
        contact:"Aşağıda bulunan seçeneklerden ya da direkt sosyal medya üzerinden bana ulaşabilirsin. Sana en kısa sürede geri döneceğim.",
        contribute:"BAĞIŞ",
        donatetext:"Öğrenci birine katkıda bulunmak istersen :)",
        iletisim:"BANA ULAŞIN",
        copy:"Copyright © 2019 Ekin Abalıoğlu | Kişisel Web Sitesi Tüm Hakları Saklıdır.",
        esoing:"Üniversite sınavına hazırlanırken bile bir dans topluluğuna üye olmak istiyordum. İlk üye olduğum topluluk olur. 1 sene boyunca çok güzel dostlar edinip doyasıya dans ettik.",
        esotitle:"Esodans Topluluğu",
        egeisleting:"Bu topluluk sayesinde sene boyunca birçok şirketi gezme fırsatı edindim. Çok güzel salon etkinlikleri de düzenledik.",
        egeislettitle:"Ege İşletme",
        aegeeing:"2. dönem kayıt olduğum uluslararası topluluk. Seneye birlikte daha güzel işler başaracağız.",

        menuhakkim:"Hakkımda",
        menuworks:"Portfolyo",
        menutop:"Topluluklar",
        menuilet:"Bana Ulaşın",
        menubag:"Bağış",   

        slider1text:"Yurt odasından bir kare.",
        slider2title:"Meşhur Ege Üniversitesi Şelalesi",
        slider2text:"Herkes en az bir kere burada fotoğraf çektirir.",
        slider3title:"Hemşirelik Fakültesi Yolu",
        slider3text:"Hemşirelik Fakültesi(Sol Taraf)",

        slider4text:"Alsancak gün batımı.",
        slider5title:"Ege Üniversitesi Kampüsü",
        slider5text:"Öğrenci Köyü Yolu"
    };



    if ($('#dildurum').val()==="TR") {


        //About
        $('#about-me h1').text(turkce["hakkimda"]);
        $('#about-me p').text(turkce['about']);
        $('#about-me .grafik').text(turkce['graphic']);
        $('#about-me .kod').text(turkce['coding']);
    //Works
    $('#works h1').text(turkce['works']);
    //Topluluklar
    $('#groups-me h1').text(turkce['groups']);
    $('#groups-me .eso .card-title').text(turkce['esotitle']);
    $('#groups-me .eso .card-text').text(turkce['esoing']);

    $('#groups-me .egeislet .card-title').text(turkce['egeislettitle']);
    $('#groups-me .egeislet .card-text').text(turkce['egeisleting']);
    
    $('#groups-me .aegee .card-text').text(turkce['aegeeing']);
    //Ulaşım
    $('#contact-me h1').text(turkce['iletisim']);
    $('#contact-me .contacttext').text(turkce['contact']);
    //Bağış
    $('#donate-me h1').text(turkce['contribute']);
    $('#donate-me small').text(turkce['donatetext']);
    //footer
    $('#imza small').text(turkce['copy']);
    //Menü
    $('#Menu .hak a').text(turkce['menuhakkim']);
    $('#Menu .por a').text(turkce['menuworks']);
    $('#Menu .top a').text(turkce['menutop']);
    $('#Menu .ban a').text(turkce['menuilet']);
    $('#Menu .bag a').text(turkce['menubag']);
    //Slider

    $('.1text').text(turkce['slider1text']);
    $('.2title').text(turkce['slider2title']);
    $('.2text').text(turkce['slider2text']);
    $('.3title').text(turkce['slider3title']);
    $('.3text').text(turkce['slider3text']);

    $('.4text').text(turkce['slider4text']);
    $('.5title').text(turkce['slider5title']);
    $('.5text').text(turkce['slider5text']);


}
else if($('#dildurum').val()==="EN")
{
    $('#about-me h1').text(ingilizce["hakkimda"]);
    $('#about-me p').text(ingilizce['about']);
    $('#about-me .grafik').text(ingilizce['graphic']);
    $('#about-me .kod').text(ingilizce['coding']);
    //Works
    $('#works h1').text(ingilizce['works']);
    //Topluluklar
    $('#groups-me h1').text(ingilizce['groups']);
    $('#groups-me .eso .card-title').text(ingilizce['esotitle']);
    $('#groups-me .eso .card-text').text(ingilizce['esoing']);

    $('#groups-me .egeislet .card-title').text(ingilizce['egeislettitle']);
    $('#groups-me .egeislet .card-text').text(ingilizce['egeisleting']);
    
    $('#groups-me .aegee .card-text').text(ingilizce['aegeeing']);
    //Ulaşım
    $('#contact-me h1').text(ingilizce['iletisim']);
    $('#contact-me .contacttext').text(ingilizce['contact']);
    //Bağış
    $('#donate-me h1').text(ingilizce['contribute']);
    $('#donate-me small').text(ingilizce['donatetext']);
    //footer
    $('#imza small').text(ingilizce['copy']);
    //Menü
    $('#Menu .hak a').text(ingilizce['menuhakkim']);
    $('#Menu .por a').text(ingilizce['menuworks']);
    $('#Menu .top a').text(ingilizce['menutop']);
    $('#Menu .ban a').text(ingilizce['menuilet']);
    $('#Menu .bag a').text(ingilizce['menubag']);
    //Slider

    $('.1text').text(ingilizce['slider1text']);
    $('.2title').text(ingilizce['slider2title']);
    $('.2text').text(ingilizce['slider2text']);
    $('.3title').text(ingilizce['slider3title']);
    $('.3text').text(ingilizce['slider3text']);

    $('.4text').text(ingilizce['slider4text']);
    $('.5title').text(ingilizce['slider5title']);
    $('.5text').text(ingilizce['slider5text']);
}
});






    //About
    












    
    

    





    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:32,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,

        autoplayHoverPause:true,


        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })



    $('.nav-link, .navbar-brand').on('click', function(event) {

      if (this.hash!=="") {}
          event.preventDefault();
      var hash=this.hash;

      $('html').animate({
         scrollTop:$(hash).offset().top
     },600,function(){
         window.location.hash=hash;
         console.log(window.location.hash);
     });


  });


    $('body').scrollspy({
        target: '#anaNav',
        offset:80

    });




});