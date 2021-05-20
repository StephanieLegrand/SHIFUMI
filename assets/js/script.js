//     setTimeout(function () { resetcssordi()}, 2000);

$(document).ready(function () {
  var score = 0;
  var scoreOrdi = 0;
  var victoirePlayer = 0;
  var reponse = null;
var victoireOrdi = 0;
      var totalplay = victoirePlayer + victoireOrdi;
  $(".adversary").css("visibility", "visible");
  // var percentplayer =(victoirePlayer/totalplayer)*100 ;
  // var pp = parseInt(percentplayer)+'%';
  // $("#percentplayer").html(pp);


  $('.shifumi').draggable({
    snap: '#arena', // snap permet aux blocs que l'on déplace d'être attirés pas le bloc #droppableGamer
    snapMode: 'inner', // snapMode : 'inner' permet de rendre le bloc #droppableGamer magnétisque
    revert: true,
  });
  //  $("#answer").html("");
  $('#stone').mouseup(function () {
    reponse = 1;

  });
  $('#paper').mouseup(function () {
    reponse = 2;

  });
  $('#scisors').mouseup(function () {
    reponse = 3;

  });

  $("#arena").droppable({
    accept: '.shifumi',
    drop: function (event, ui) {
      // C'est ici que vous allez mettre toutes vos conditions et toutes les incrémentations de variables.
      var reponseordi = Math.floor(Math.random() * (2 + 1) + 1);
      if (reponseordi == 1) {
        $("#answer").html("<img src=\"assets/img/stonem.png\" id=\"stonem\" class=\"shifumimonster\">");
      } else if (reponseordi == 2) {
        $("#answer").html("<img src=\"assets/img/paperm.png\" id=\"paperm\" class=\"shifumimonster\">");
      } else if (reponseordi == 3) {
        $("#answer").html("<img src=\"assets/img/scisorsm.png\" id=\"scisorsm\" class=\"shifumimonster\">");
      }

      
      var percentplayer = ((parseInt(victoirePlayer) / parseInt(totalplay)) * 100);
      var pp = parseInt(percentplayer) + '%';
      $("#percentplayer").html(pp);

      var percentordi = ((parseInt(victoireOrdi) / parseInt(totalplay)) * 100);
      var po = parseInt(percentordi) + '%';
      $("#percentordi").html(po);

      console.log(reponseordi)
      if (reponseordi) {
        $(".adversary").css("visibility", "hidden");
      }


      if (reponseordi == reponse) {
        $("#resultat").html("MATCH NUL");

      }
      else if (
        (reponseordi == 3 && reponse == 2) ||
        (reponseordi == 2 && reponse == 1) ||
        (reponseordi == 1 && reponse == 3)
      ) {
        scoreOrdi++;
        $("#scoreOrdi").html(parseInt($("#scoreOrdi").html()) + 1);
        $("#resultat").html("ESSAYE ENCORE !");
      }
      else {
        score++;
        $("#score").html(parseInt($("#score").html()) + 1);
        $("#resultat").html("VICTORY IS GLORY!");
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
      } else if (scoreOrdi == 3) {
        score = 0;
        scoreOrdi = 0;
        victoireOrdi++;
        $("#score").html(0);
        $("#scoreOrdi").html(0);
        $("#victoireOrdi").html(parseInt($("#victoireOrdi").html()) + 1);
        alert("LOOSER...");
      };
    }
  });
});