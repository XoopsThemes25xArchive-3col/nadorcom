var nav=navigator.appName;
var Ver=parseInt(navigator.appVersion);

//Vérification des navigateurs. Désolé, l'horloge ne peut pas fonctionner avec les versions moins récentes:

if (((nav == "Netscape") && (Ver >= 3)) || ((nav == "Microsoft Internet Explorer") && (Ver > 3))) {

      Chiffre0 = new Image();
      Chiffre1 = new Image();
      Chiffre2 = new Image();
      Chiffre3 = new Image();
      Chiffre4 = new Image();
      Chiffre5 = new Image();
      Chiffre6 = new Image();
      Chiffre7 = new Image();
      Chiffre8 = new Image();
      Chiffre9 = new Image();
      Eteint = new Image();
      DeuxPts = new Image();

//Les images sont chargées avant de lancer l'horloge pour éviter les délais de chargement.
//Ainsi l'affichage sera correct.

      Chiffre0.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/0.gif";
      Chiffre1.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/1.gif";
      Chiffre2.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/2.gif";
      Chiffre3.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/3.gif";
      Chiffre4.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/4.gif";
      Chiffre5.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/5.gif";
      Chiffre6.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/6.gif";
      Chiffre7.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/7.gif";
      Chiffre8.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/8.gif";
      Chiffre9.src = "http://www.jeune-maghreb.com/themes/nomad/img/clock/9.gif";

      Eteint.src = "http://www.alkelaa.net/themes/nomad/img/clock/Eteint.gif";
      DeuxPts.src = "http://www.alkelaa.net/themes/nomad/img/clock/DeuxPts.gif"; 

      var ChifArray = new initArray("Chiffre0","Chiffre1", "Chiffre2", "Chiffre3", "Chiffre4", "Chiffre5", "Chiffre6", "Chiffre7", "Chiffre8", "Chiffre9");
}


function initArray() { 

      this.length = initArray.arguments.length
      for (var i = 0; i < this.length; i++)
      this[i+1] = initArray.arguments[i]

}

function initheure() {

      maintenant = new Date();
      Sec = maintenant.getSeconds();
      Min = maintenant.getMinutes();
      Heure = maintenant.getHours();

      if (Sec>9){
            DSec = parseInt(Sec/10);
            USec = Sec - 10*DSec;
      } else {
            DSec = 0;
            USec = Sec;
      }

      if (Min>9){
            DMin = parseInt(Min/10);
            UMin = Min - 10*DMin;
      } else {
            DMin = 0;
            UMin = Min;
      }

     if (Heure>9){
            DHeure = parseInt(Heure/10);
            UHeure = Heure - 10*DHeure;
      } else {
            DHeure = 0;
            UHeure = Heure;
      }

      Pts = "Eteint";

      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + DHeure +".gif" + "' ALT='Heure' WIDTH=16 HEIGHT=21 BORDER=0 Name='DH'>");
      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + UHeure +".gif" + "' ALT='Heure' WIDTH=16 HEIGHT=21 BORDER=0 Name='UH'>");
      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + Pts +".gif" + "' ALT='Heure' WIDTH=7 HEIGHT=21 BORDER=0 Name='Pt1'>");
      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + DMin +".gif" + "' ALT='Heure' WIDTH=16 HEIGHT=21 BORDER=0 Name='DM'>");
      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + UMin +".gif" + "' ALT='Heure' WIDTH=16 HEIGHT=21 BORDER=0 Name='UM'>");
      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + Pts +".gif" + "' ALT='Heure' WIDTH=7 HEIGHT=21 BORDER=0 Name='Pt2'>");
      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + DSec +".gif" + "' ALT='Heure' WIDTH=16 HEIGHT=21 BORDER=0 Name='DS'>");
      document.write("<IMG SRC='" + "http://www.alkelaa.net/themes/nomad/img/clock/" + USec +".gif" + "' ALT='Heure' WIDTH=16 HEIGHT=21 BORDER=0 Name='US'>");

      AffTemp();

}

function AffTemp(){

      maintenant = new Date();
      Tmps = maintenant.getTime();

      if (Pts == "DeuxPts") {
            Pts = "Eteint";
      } else {
            Pts = "DeuxPts";
      }
      <!-- Test du navigateur (type et version) -->

      if (((nav == "Netscape") && (Ver >= 3)) || ((nav == "Microsoft Internet Explorer") && (Ver > 3))) {

           // <!-- Si ok affichage de l'heure -->

            maintenant = new Date();
            Sec = maintenant.getSeconds();
            Min = maintenant.getMinutes();
            Heure = maintenant.getHours();

            if (Sec>9){
                  DSec = parseInt(Sec/10);
                  USec = Sec - 10*DSec;
            } else {
                  DSec = 0;
                  USec = Sec;
            }
            if (Min>9){
                  DMin = parseInt(Min/10);
                  UMin = Min - 10*DMin;
            } else {
                  DMin = 0;
                  UMin = Min;
            }
            if (Heure>9){
                  DHeure = parseInt(Heure/10);
                  UHeure = Heure - 10*DHeure;
            } else {
                  DHeure = 0;
                  UHeure = Heure;
            }

            document.images["DH"].src=eval
            (ChifArray[(DHeure + 1)] + ".src");
            document.images["UH"].src=eval
            (ChifArray[(UHeure + 1)] + ".src");
            document.images["Pt1"].src=eval
            (Pts + ".src");
            document.images["DM"].src=eval
            (ChifArray[(DMin + 1)] + ".src");
            document.images["UM"].src=eval
            (ChifArray[(UMin + 1)] + ".src");
            document.images["Pt2"].src=eval
            (Pts + ".src");
            document.images["DS"].src=eval
            (ChifArray[(DSec + 1)] + ".src");
            document.images["US"].src=eval
            (ChifArray[(USec + 1)] + ".src");

            maintenant = new Date();
            Tmps = maintenant.getTime() - Tmps;

            pause = setTimeout("AffTemp()",(500-Tmps));


      }

}


