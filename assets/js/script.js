//     setTimeout(function () { resetcssordi()}, 2000);

$(document).ready(function () {
  var score = 0;
  var scoreOrdi = 0;
  var victoirePlayer = 0;
  var reponse = null;
  var victoireOrdi = 0;
  var totalplay = victoirePlayer + victoireOrdi;
  $(".adversary").css("visibility", "visible");
  $("#resultat").html("");
  // var percentplayer =(victoirePlayer/totalplayer)*100 ;
  // var pp = parseInt(percentplayer)+'%';
  // $("#percentplayer").html(pp);


  $('.shifumi').draggable({
    snap: '#arena', // snap permet aux blocs que l'on déplace d'être attirés pas le bloc #droppableGamer
    snapMode: 'inner', // snapMode : 'inner' permet de rendre le bloc #droppableGamer magnétisque
    revert: function () {         $(this).delay(1500);         return true     },     revertduration: 2000 
  });
  //  $("#answer").html("");
  // setTimeout(function () {

    $('#stone').mouseup(function () {
      reponse = 1;
      // $('#stone').fadeOut();
    });
    $('#paper').mouseup(function () {
      reponse = 2;
    });
    $('#scisors').mouseup(function () {
      reponse = 3;
       
    });
  // }, 2000);
  
  $("#arena").droppable({
    accept: '.shifumi',
    drop: function (event, ui) {
      // C'est ici que vous allez mettre toutes vos conditions et toutes les incrémentations de variables.
      var reponseordi = Math.floor(Math.random() * (2 + 1) + 1);
      if (reponseordi == 1) {
        // setTimeout(function () {
          $("#answer").html("<img src=\"assets/img/warrior-pc.png\" class=\"shifumimonster\" >");
        // }, 000);
      } else if (reponseordi == 2) {
        // setTimeout(function () {
          $("#answer").html("<img src=\"assets/img/mage-pc.png\" class=\"shifumimonster\" >");
        // }, 000);
      } else if (reponseordi == 3) {
        // 
          $("#answer").html("<img src=\"assets/img/rogue-pc.png\" class=\"shifumimonster\">");
        
       
      } 
      

      console.log(reponseordi)
      if (reponseordi == 1) {
        $("#stonem").css("visibility", "hidden");
        // setTimeout(function () {$('.adversary').fadeOut();}, 500);
        // setTimeout(function () {$('.adversary').fadein();}, 500);
      } else if(reponseordi == 2){
        $("#paperm").css("visibility", "hidden");
      } else if(reponseordi == 3 ){
        $("#scisorsm").css("visibility", "hidden");
      };


      if (reponseordi == reponse) {
        setTimeout(function () {
          $("#resultat").html("MATCH NUL");
        }, 1000);
    
        setTimeout(function () { $(".shifumim").css("visibility", "visible");}, 1300);    
        setTimeout(function () { reponseordi=5;
          if (reponseordi == 5) {
          $("#answer").html("<img src=\"\" class=\"shifumimonster\" >")
          ;};}, 1300);
      }
      else if (
        (reponseordi == 3 && reponse == 2) ||
        (reponseordi == 2 && reponse == 1) ||
        (reponseordi == 1 && reponse == 3)
      ) {
        scoreOrdi++;
        setTimeout(function () {
          $("#scoreOrdi").html(parseInt($("#scoreOrdi").html()) + 1);
          $("#resultat").html("ESSAYE ENCORE !");
        }, 1000);
        
        setTimeout(function () {$(".shifumim").css("visibility", "visible");}, 1300);
        setTimeout(function () { reponseordi=5;
          if (reponseordi == 5) {
          $("#answer").html("<img src=\"\" class=\"shifumimonster\" >")
          ;};}, 1300);
        
      }
      else {
        score++;
        setTimeout(function () {
          $("#score").html(parseInt($("#score").html()) + 1);
          $("#resultat").html("VICTORY IS GLORY!");
        }, 1000);
      
        setTimeout(function () {$(".shifumim").css("visibility", "visible");}, 1300);
          setTimeout(function () { reponseordi=5;
          if (reponseordi == 5) {
          $("#answer").html("<img src=\"\" class=\"shifumimonster\" >")
          ;};}, 1300);
      };
      if (score == 3) {
        score = 0;
        scoreOrdi = 0;
        victoirePlayer++;
        $("#score").html(0);
        $("#scoreOrdi").html(0);
        $("#answer").html("<source src=\"assets/media/loose.mp3\">");
        $("#victoirePlayer").html(parseInt($("#victoirePlayer").html()) + 1);
        alert("EASY WIN !");
        var percentplayer = (parseInt(victoirePlayer) / (parseInt(victoirePlayer)+parseInt(victoireOrdi)) * 100);
      var pp = parseInt(percentplayer) + '%';
      $("#percentplayer").html(pp);

      var percentordi = 100-parseInt(percentplayer);
      var po = parseInt(percentordi) + '%';
      $("#percentordi").html(po);
      } else if (scoreOrdi == 3) {
        score = 0;
        scoreOrdi = 0;
        victoireOrdi++;
        $("#score").html(0);
        $("#scoreOrdi").html(0);
        $("#victoireOrdi").html(parseInt($("#victoireOrdi").html()) + 1);
        alert("LOOSER...");
        var percentplayer = (parseInt(victoirePlayer) / (parseInt(victoirePlayer)+parseInt(victoireOrdi)) * 100);
      var pp = parseInt(percentplayer) + '%';
      $("#percentplayer").html(pp);

      var percentordi = 100-parseInt(percentplayer);
      var po = parseInt(percentordi) + '%';
      $("#percentordi").html(po);
    }; console.log(reponseordi);
    }
  });
});