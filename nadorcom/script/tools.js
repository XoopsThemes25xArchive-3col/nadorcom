function getBloc(url,id,color){

	if (color==undefined) color = 'red';
	$(id).innerHTML = '<br /><center><img src="media/loader_'+color+'.gif" /></center>';
	var xhr_object = null;

	if(window.XMLHttpRequest) // Firefox
	xhr_object = new XMLHttpRequest();
	else if(window.ActiveXObject) // Internet Explorer
	xhr_object = new ActiveXObject("Microsoft.XMLHTTP");
	else { // XMLHttpRequest non supporté par le navigateur
		alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
		//return;
	}
	xhr_object.open("GET", url, true);
	xhr_object.onreadystatechange = function() {
		if(xhr_object.readyState > 3)
		{
			$(id).innerHTML = xhr_object.responseText;
		}
	}
	xhr_object.send(null);
}

function getAll(url,id){

	if(window.XMLHttpRequest) // Firefox
	xhr_object = new XMLHttpRequest();
	else if(window.ActiveXObject) // Internet Explorer
	xhr_object = new ActiveXObject("Microsoft.XMLHTTP");
	else { // XMLHttpRequest non supporté par le navigateur
		alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
		//return;
	}
	xhr_object.open("GET", url, true);
	xhr_object.onreadystatechange = function() {
		if(xhr_object.readyState > 3)
		{
			$(id).innerHTML = xhr_object.responseText;
		}
	}
	xhr_object.send(null);
}

function onIn(obj,msg,div){
	obj.style.backgroundColor = "#E2E2E2";
	div.innerHTML=msg;
}

function onIn2(obj){
	obj.style.backgroundColor = "#E2E2E2";
}

function onOut(obj,div){
	obj.style.backgroundColor = "#ffffff";
	div.innerHTML="";
}

function onOut2(obj){
	obj.style.backgroundColor = "#ffffff";
}

function download_mobile(div,code)
{
	msg='<div class="envoi_sms">Pour envoyer des sms gratuitement, inscrivez-vous ou connectez vous (10 sms de plus au téléchargement)</div><strong>Envoyez <span class="color_musique">MOB'+code+'</span> au <span class="color_musique">5057</span> pour avoir votre code de téléchargement</strong><div><br />Le prix du SMS est de 6 DH TTC</div><br /><div class="download_msg_cvg">En télechargeant le single, le Client reconnait avoir pris connaissance et accepte expressément <a href="25-cgv.html">les Conditions générales de vente</a></div>';
	document.getElementById("bloc_dload").style.display = "block";
	div.innerHTML=msg;
}

function verifTicket(icode,iticket){
	alert(icode + ' '  + iticket);


}

function ReverseContentDisplay(d) {
	if(d.length < 1) {
		return;
	}
	if(document.getElementById(d).style.display == "none") {
		document.getElementById(d).style.display = "block";
	}else {
		document.getElementById(d).style.display = "none";
	}
}

//We wrap all the code in an object so that it doesn't interfere with any other code
var scroller = {
	init:   function() {
		//collect the variables
		scroller.docH = document.getElementById("content").offsetHeight;
		scroller.contH = document.getElementById("container").offsetHeight;
		scroller.scrollAreaH = document.getElementById("scrollArea").offsetHeight;
		//calculate height of scroller and resize the scroller div
		//(however, we make sure that it isn't to small for long pages)
		scroller.scrollH = (scroller.contH * scroller.scrollAreaH) / scroller.docH;
		//if(scroller.scrollH < 15) scroller.scrollH = 15;
		document.getElementById("scroller").style.height = Math.round(scroller.scrollH) + "px";

		//what is the effective scroll distance once the scoller's height has been taken into account
		scroller.scrollDist = Math.round(scroller.scrollAreaH-scroller.scrollH);

		//make the scroller div draggable
		Drag.init(document.getElementById("scroller"),null,0,0,-1,scroller.scrollDist);

		//add ondrag function
		document.getElementById("scroller").onDrag = function (x,y) {
			var scrollY = parseInt(document.getElementById("scroller").style.top);
			var docY = 0 - (scrollY * (scroller.docH - scroller.contH) / scroller.scrollDist);
			document.getElementById("content").style.top = docY + "px";
		}
	}
}

function onUpload(msg,div){
	div.innerHTML=msg;
}

function search_nkw(urlroot){
	searched = document.getElementById("nkw").value;
	searched=searched.replace(/ /g, '-')
	window.location = urlroot + '13-' + searched + '.html';
}

function verifyMail(){
	var reg = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
	if(document.form_newsletter.email_user.value=='' || (reg.exec(document.form_newsletter.email_user.value) == null)){
		document.getElementById('error1').innerHTML = 'Votre e-mail n\'est pas valide !<br>';
		document.form_newsletter.email_user.focus();
		return false;
	}else{
		return true;
	}

}



function verifycontact(){
	var reg1=/^[a-zA-Z]{3,20}$/;
	var regtel=/^[0-9]{9,13}$/;
	var regmail = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
	var msg = "";
	var verif	= true;

	if (document.form1.contact_lname.value =='' || (reg1.exec(document.form1.contact_lname.value) == null)){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez pr&eacute;ciser votre nom de famille !<br>';
		document.form1.contact_lname.focus();
		verif= false;
	}
	if (document.form1.contact_fname.value =='' || (reg1.exec(document.form1.contact_fname.value) == null)){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez pr&eacute;ciser votre pr&eacute;nom !<br>';
		document.form1.contact_fname.focus();
		verif= false;
	}
	if (document.form1.contact_tel.value =='' || (regtel.exec(document.form1.contact_tel.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre num&eacute;ro de t&eacute;lephone doit contenir au moins 9 chiffres !<br>';
		document.form1.contact_tel.focus();
		verif= false;
	}
	if (document.form1.contact_mail.value =='' || (regmail.exec(document.form1.contact_mail.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> L\'adresse mail que vous avez indiqu&eacute;e n\'est pas valide !<br>';
		document.form1.contact_mail.focus();
		verif= false;
	}
	if (document.form1.contact_comment.value ==''){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez indiquer votre message ! <br>';
		document.form1.contact_comment.focus();
		verif= false;
	}
	document.getElementById('error_contact').innerHTML = msg+'<br>';
	return verif;
}
function verifyForm() {

	var reg=/^[a-zA-Z0-9]{5,20}$/;
	var reg1=/^[a-zA-Z]{3,20}$/;
	var regtel=/^[0-9]{9,13}$/;
	var msg = "";
	var verif	= true;

	/*v&eacute;rifie le champ login*/

	if (document.inscription.login.value =='' || (reg.exec(document.inscription.login.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre login doit contenir entre 5 et 20 caract&egrave;res(pas d\'espace ni de caract&egrave;res sp&eacute;ciaux) !<br>';
		document.inscription.login.focus();
		verif= false;
	}

	/*v&eacute;rifie le champ Password*/

	if(document.inscription.passwd.value=='' || (reg.exec(document.inscription.passwd.value) == null)){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre mot de passe doit contenir entre 5 et 20 caract&egrave;res(pas d\'espace ni de caract&egrave;res<br>&nbsp;&nbsp;sp&eacute;ciaux) !<br>';
		document.inscription.passwd.focus();
		verif= false;
	}

	if(document.inscription.passwd.value!=document.inscription.passwd1.value){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Les deux mots de passe entr&eacute;s doivent &ecirc;tre identiques !<br>';
		document.inscription.passwd1.focus();
		verif= false;
	}

	/*v&eacute;rifier le champ nom*/

	if (document.inscription.lname.value == ''){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez pr&eacute;ciser votre nom de famille !<br>';
		document.inscription.lname.focus();
		verif= false;
	}

	/*v&eacute;rifier le champ pr&eacute;nom*/

	if (document.inscription.fname.value == ''){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez pr&eacute;ciser votre pr&eacute;nom !<br>';
		document.inscription.fname.focus();
		verif= false;
	}

	if(document.inscription.day.selectedIndex == 0 ){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous avez oubli&eacute; de pr&eacute;ciser votre jour de naissance !<br>';
		verif= false;
	}
	if(document.inscription.months.selectedIndex == 0){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous avez oubli&eacute; de pr&eacute;ciser votre mois de naissance !<br>';
		verif= false;
	}
	if(document.inscription.year.selectedIndex==0){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous avez oubli&eacute; de pr&eacute;ciser votre ann&eacute;e de naissance !<br>';
		verif= false;
	}



	var email = document.inscription.email.value;
	var reg = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
	if(email == "") //si pas d'email entrer
	{
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez indiquer votre adresse mail !<br>';
		document.inscription.email.focus();
		verif= false;
	}
	else
	{
		var result = ((reg.exec(email)!=null));
		if(result==false) //si l'email n'est pas valide
		{
			msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre adresse mail doit &ecirc;tre valide !<br>';
			document.inscription.email.focus();
			verif= false;
		}

	}

	if (document.inscription.gsm.value =='' || (regtel.exec(document.inscription.gsm.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre num&eacute;ro de t&eacute;lephone doit contenir au moins 9 chiffres !<br>';
		document.inscription.gsm.focus();
		verif= false;

	}

	if (document.inscription.country.value ==''){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez s&eacute;lectionner votre pays !<br>';
		document.inscription.country.focus();
		verif= false;
	}

	if (document.inscription.city.value =='' || (reg1.exec(document.inscription.city.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre devez indiquer la ville ou vous habitez !<br>';
		document.inscription.city.focus();
		verif= false;
	}

	document.getElementById('error').innerHTML = msg;

	return verif;

}

function verifyFormClientIAM(){

	var reg=/^[a-zA-Z]{3,30}$/;
	var regtel=/^[0-9]{9,13}$/;
	var regmail = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
	var msg = "";
	var verif	= true;

	/*v&eacute;rifie le champ nom*/
	if (document.ClientForm.client_nom.value ==''){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez saisir votre nom de famille!<br>';
		document.ClientForm.client_nom.focus();
		verif= false;
	}

	/*v&eacute;rifie le champ prénom*/
	if (document.ClientForm.client_prenom.value ==''){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez saisir votre pr&eacute;nom!<br>';
		document.ClientForm.client_prenom.focus();
		verif= false;
	}
	
	
	/*v&eacute;rifie le champ ville*/
	if (document.ClientForm.client_ville.value == -1){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez s&eacute;lectionner une ville!<br>';
		document.ClientForm.client_ville.focus();
		verif= false;
	}

	/*v&eacute;rifie le champ profession*/
	if (document.ClientForm.client_profession.value ==''){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez saisir votre profession!<br>';
		document.ClientForm.client_profession.focus();
		verif= false;
	}
	/*v&eacute;rifie le champ tél*/
	if (document.ClientForm.client_tel.value =='' || (regtel.exec(document.ClientForm.client_tel.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Veuillez saisir un num&eacute;ro de t&eacute;l&eacute;phone correct !<br>';
		document.ClientForm.client_tel.focus();
		verif= false;
	}

	if (document.ClientForm.client_email.value =='' || (regmail.exec(document.ClientForm.client_email.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre adresse mail doit &ecirc;tre valide !<br>';
		document.ClientForm.client_email.focus();
		verif= false;
	}


	if (!isDate(document.ClientForm.client_annee.value+'-'+document.ClientForm.client_mois.value+'-'+document.ClientForm.client_jour.value)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Veuillez s&eacute;lectionner une date valide !<br>';
		document.ClientForm.client_jour.focus();
		verif= false;
	}

	document.getElementById('error').innerHTML = msg;
	return verif;

}

function ViderFormClientIAM(){
	document.ClientForm.client_nom.value ='';
	document.ClientForm.client_prenom.value ='';
	document.ClientForm.sexe_M.checked='checked';
	document.ClientForm.sexe_F.checked='';
	document.ClientForm.client_ville.value =0;
	document.ClientForm.client_jour.value ='01';
	document.ClientForm.client_mois.value ='01';
	document.ClientForm.client_annee.value ='1970';
	document.ClientForm.client_profession.value ='';
	document.ClientForm.client_tel.value ='';
	document.ClientForm.client_email.value ='';
	document.ClientForm.client_sport.checked='checked';
	document.ClientForm.client_cinema.checked='checked';
	document.ClientForm.client_actualite.checked='checked';
	document.ClientForm.client_jeu.checked='checked';
	document.ClientForm.client_musique.checked='checked';
	document.ClientForm.contact_oui.checked='checked';
	document.ClientForm.contact_non.checked='';
	document.getElementById('error').innerHTML = '';
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
	// EXCEPT for centurial years which are not also divisible by 400.
	return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}

function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
	}
	return this
}

function isDate(dtStr){
	var dtCh= "-";

	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strYear=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strDay=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)

	if ((month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		return false;
	}
	return true;
}

function verifyFormSms() {

	var regtel=/^[0-9]{9,13}$/;
	var reg=/^[a-zA-Z0-9]{0,200}$/;
	var msg = "";
	var verif	= true;

	if (document.sms.to.value =='' || (regtel.exec(document.sms.to.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vérifiez le numéro de téléphone de la destination !<br>';
		document.sms.to.focus();
		verif= false;

	}

	if (document.sms.texte.value =='' || (reg1.exec(document.sms.texte.value) == null)){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez remplir le champ texte !<br>';
		document.sms.texte.focus();
		verif= false;
	}

	document.getElementById('erreur').innerHTML = msg;

	return verif;
}

function verifyFormProfil() {

	var reg=/^[a-zA-Z0-9]{5,20}$/;
	var reg1=/^[a-zA-Z]{3,20}$/;
	var regtel=/^[0-9]{9,13}$/;
	var msg = "";
	var verif	= true;

	/*v&eacute;rifie le champ login*/

	if (document.inscription.login.value ==''){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre login doit contenir entre 5 et 20 chiffres/lettres(pas d\'espace ni de caract&egrave;res sp&eacute;ciaux) !<br>';
		document.inscription.login.focus();
		verif= false;
	}

	if(document.inscription.passwd.value !=''){
		if((reg.exec(document.inscription.passwd.value) == null)){
			msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre mot de passe doit contenir entre 5 et 20 caract&egrave;res(pas d\'espace ni de caract&egrave;res<br>&nbsp;&nbsp;sp&eacute;ciaux) !<br>';
			document.inscription.passwd.focus();
			verif= false;
		}
	}

	/*v&eacute;rifie le champ Password*/

	if(document.inscription.passwd.value!=document.inscription.passwd1.value){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Les deux mots de passe entr&eacute;s doivent &ecirc;tre identiques !<br>';
		document.inscription.passwd1.focus();
		verif= false;
	}

	/*v&eacute;rifier le champ nom*/

	if (document.inscription.lname.value == ''){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez pr&eacute;ciser votre nom de famille !<br>';
		document.inscription.lname.focus();
		verif= false;
	}

	/*v&eacute;rifier le champ pr&eacute;nom*/

	if (document.inscription.fname.value == ''){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez pr&eacute;ciser votre pr&eacute;nom !<br>';
		document.inscription.fname.focus();
		verif= false;
	}

	if(document.inscription.day.value==''){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous avez oubli&eacute; de pr&eacute;ciser votre jour de naissance !<br>';
		verif= false;
	}
	if(document.inscription.months.selectedIndex==0){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous avez oubli&eacute; de pr&eacute;ciser votre mois de naissance !<br>';
		verif= false;
	}
	if(document.inscription.year.value==''){
		msg+='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous avez oubli&eacute; de pr&eacute;ciser votre ann&eacute;e de naissance !<br>';
		verif= false;
	}



	var email = document.inscription.email.value;
	var reg = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;
	if(email == "") //si pas d'email entrer
	{
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez indiquer votre adresse mail !<br>';
		document.inscription.email.focus();
		verif= false;
	}
	else
	{
		var result = ((reg.exec(email)!=null));
		if(result==false) //si l'email n'est pas valide
		{
			msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre adresse mail doit &ecirc;tre valide !<br>';
			document.inscription.email.focus();
			verif= false;
		}

	}

	if (document.inscription.gsm.value =='' || (regtel.exec(document.inscription.gsm.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Votre num&eacute;ro de t&eacute;lephone doit contenir entre 9 et 13 chiffres !<br>';
		document.inscription.gsm.focus();
		verif= false;

	}

	if (document.inscription.country.value ==''){
		msg +='<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez s&eacute;lectionner votre pays !<br>';
		document.inscription.country.focus();
		verif= false;
	}

	if (document.inscription.city.value ==''|| (reg1.exec(document.inscription.city.value) == null)){
		msg += '<img src="media/tiret.gif" width="4" height="5" align="absmiddle" /> Vous devez indiquer la ville ou vous habitez !<br>';
		document.inscription.city.focus();
		verif= false;
	}

	document.getElementById('erreur').innerHTML = msg;

	return verif;

}

function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#" )!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?" ))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
		if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function f_tagSelected(id,nbElts,classe){
	for(var i=1; i<=nbElts; i++){
		if(document.getElementById(classe+i)){
			document.getElementById(classe+i).className = 'tab';
		}
	}
	if(document.getElementById(classe+id)){
		document.getElementById(classe+id).className = 'tab_selected';
	}
}


var Timer;
var Pas = 3;
function moveLayer(Sens) {
	Objet=document.getElementById("contenu");
	if(parseInt(Objet.style.top) + (Pas*Sens)>0)  {
		clearTimeout(Timer);
	}
	else if(parseInt(Objet.style.top) + (Pas*Sens)<-(Objet.offsetHeight-document.getElementById("support").offsetHeight)) {
		clearTimeout(Timer);
	}
	else {
		Objet.style.top = (parseInt(Objet.style.top) + (Pas*Sens)) + "px";
	}
	Timer = setTimeout("moveLayer(" + Sens + ");", 30);
}

function f_affiche_bloc_astuce(id){
	for(var i=1; i<=3; i++){
		document.getElementById("container_"+i).style.display = "none";
		document.getElementById("current_"+i).className = "";
	}
	document.getElementById("container_"+id).style.display = "block";
	document.getElementById("current_"+id).className = "current";
}

function f_show_sMenu(id,idLink){
	for(var i = 1; i<=5; i++){
		if(document.getElementById("smenu_"+i)){
			document.getElementById("smenu_"+i).style.visibility = "hidden";
		}

	}
	if(document.getElementById("smenu_"+id)){
		document.getElementById("smenu_"+id).style.visibility = "visible";
	}
	if(id != ''){
		if(document.getElementById(idLink)){
			document.getElementById(idLink).className = idLink+"_active";
		}
	}else{
		if(document.getElementById(idLink)){
			document.getElementById(idLink).className = idLink;
		}
	}
}

function getTmp(){

	var temps = new Date();

	var heures = temps.getHours();
	var minutes = temps.getMinutes();
	var secondes = temps.getSeconds();

	document.getElementById("Heure").src = getImg(heures);
	document.getElementById("DP1").src = getImg(60);
	document.getElementById("Minute").src = getImg(minutes);
	document.getElementById("DP2").src = getImg(60);
	document.getElementById("Seconde").src = getImg(secondes);

	setTimeout("getTmp()",1000);

}

function getImg(img) {

	var mem;

	switch(img) {

		case 0 : mem = "media/heure/00.gif"; break;
		case 1 : mem = "media/heure/01.gif"; break;
		case 2 : mem = "media/heure/02.gif"; break;
		case 3 : mem = "media/heure/03.gif"; break;
		case 4 : mem = "media/heure/04.gif"; break;
		case 5 : mem = "media/heure/05.gif"; break;
		case 6 : mem = "media/heure/06.gif"; break;
		case 7 : mem = "media/heure/07.gif"; break;
		case 8 : mem = "media/heure/08.gif"; break;
		case 9 : mem = "media/heure/09.gif"; break;
		case 10 : mem = "media/heure/10.gif"; break;
		case 11 : mem = "media/heure/11.gif"; break;
		case 12 : mem = "media/heure/12.gif"; break;
		case 13 : mem = "media/heure/13.gif"; break;
		case 14 : mem = "media/heure/14.gif"; break;
		case 15 : mem = "media/heure/15.gif"; break;
		case 16 : mem = "media/heure/16.gif"; break;
		case 17 : mem = "media/heure/17.gif"; break;
		case 18 : mem = "media/heure/18.gif"; break;
		case 19 : mem = "media/heure/19.gif"; break;
		case 20 : mem = "media/heure/20.gif"; break;
		case 21 : mem = "media/heure/21.gif"; break;
		case 22 : mem = "media/heure/22.gif"; break;
		case 23 : mem = "media/heure/23.gif"; break;
		case 24 : mem = "media/heure/24.gif"; break;
		case 25 : mem = "media/heure/25.gif"; break;
		case 26 : mem = "media/heure/26.gif"; break;
		case 27 : mem = "media/heure/27.gif"; break;
		case 28 : mem = "media/heure/28.gif"; break;
		case 29 : mem = "media/heure/29.gif"; break;
		case 30 : mem = "media/heure/30.gif"; break;
		case 31 : mem = "media/heure/31.gif"; break;
		case 32 : mem = "media/heure/32.gif"; break;
		case 33 : mem = "media/heure/33.gif"; break;
		case 34 : mem = "media/heure/34.gif"; break;
		case 35 : mem = "media/heure/35.gif"; break;
		case 36 : mem = "media/heure/36.gif"; break;
		case 37 : mem = "media/heure/37.gif"; break;
		case 38 : mem = "media/heure/38.gif"; break;
		case 39 : mem = "media/heure/39.gif"; break;
		case 40 : mem = "media/heure/40.gif"; break;
		case 41 : mem = "media/heure/41.gif"; break;
		case 42 : mem = "media/heure/42.gif"; break;
		case 43 : mem = "media/heure/43.gif"; break;
		case 44 : mem = "media/heure/44.gif"; break;
		case 45 : mem = "media/heure/45.gif"; break;
		case 46 : mem = "media/heure/46.gif"; break;
		case 47 : mem = "media/heure/47.gif"; break;
		case 48 : mem = "media/heure/48.gif"; break;
		case 49 : mem = "media/heure/49.gif"; break;
		case 50 : mem = "media/heure/50.gif"; break;
		case 51 : mem = "media/heure/51.gif"; break;
		case 52 : mem = "media/heure/52.gif"; break;
		case 53 : mem = "media/heure/53.gif"; break;
		case 54 : mem = "media/heure/54.gif"; break;
		case 55 : mem = "media/heure/55.gif"; break;
		case 56 : mem = "media/heure/56.gif"; break;
		case 57 : mem = "media/heure/57.gif"; break;
		case 58 : mem = "media/heure/58.gif"; break;
		case 59 : mem = "media/heure/59.gif"; break;
		case 60 : mem = "media/heure/DP.gif"; break;
	}

	return mem;

}

function favoris(rubrique, sLink) {
	if(rubrique != ''){
		rubrique = "-"+rubrique;
	}
	if ( navigator.appName != 'Microsoft Internet Explorer' ){
		window.sidebar.addPanel("Nomad"+rubrique,sLink,"");
	}else {
		window.external.AddFavorite(sLink,"Nomad"+rubrique);
	}
}

function LimiterTextArea(nom_controletexte, nbcar, nom_controledecompte) 
{ 
	var moncontroletexte = document.getElementById(nom_controletexte);

	var moncontroledecompte = document.getElementById(nom_controledecompte);

	if (moncontroletexte && moncontroledecompte)
	{

		moncontroletexte.onclick = function(){TextAreaEstRempli(moncontroletexte, nbcar, moncontroledecompte)}; 
		moncontroletexte.onblur = function(){TextAreaEstRempli(moncontroletexte, nbcar, moncontroledecompte)}; 
		moncontroletexte.onkeyup = function(){TextAreaEstRempli(moncontroletexte, nbcar, moncontroledecompte)}; 
		moncontroletexte.onkeypress = function(){TextAreaEstRempli(moncontroletexte, nbcar, moncontroledecompte)}; 

		// *** Affichage du nombre de caractères restant 
		if(moncontroledecompte.type)
			moncontroledecompte.value = NbCarRestant(moncontroletexte, nbcar);			// Pour un input de formulaire		
		else
			moncontroledecompte.innerHTML = '('+NbCarRestant(moncontroletexte, nbcar)+')';	// Pour un élément HTML	

	}
} 

// TextAreaEstRempli 
// args : textarea moncontroletexte, int nbcar, element_HTML moncontroledecompte 
// return : bool 
// Renvoie vrai si le nombre de caractères maximum du textarea n'est pas atteint 
function TextAreaEstRempli(moncontroletexte, nbcar, moncontroledecompte) 
{ 
	if (moncontroletexte) 
	{ 
		if (moncontroletexte.value.length <= nbcar) 
		{ 
			//alert("pas rempli"); 
			// mes actions ... 

			// *** Affichage du nombre de caractères restant ***
			if(moncontroledecompte.type)
				moncontroledecompte.value = NbCarRestant(moncontroletexte, nbcar);
			else
				moncontroledecompte.innerHTML = '('+NbCarRestant(moncontroletexte, nbcar)+')';

			return true; 
		} 
		else 
		{ 
			//alert("rempli"); 
			// mes actions ... 

			// Affichage du nombre de caractères restant 
			moncontroletexte.value = moncontroletexte.value.substr(0, nbcar); 

			// *** Affichage du nombre de caractères restant
			if(moncontroledecompte.type)
				moncontroledecompte.value = NbCarRestant(moncontroletexte, nbcar);
			else
				moncontroledecompte.innerHTML = '('+NbCarRestant(moncontroletexte, nbcar)+')';
				
			return false; 
		} 
	} 
} 

// NbCarRestant 
// args : textarea moncontroletexte, int nbcar 
// return : int 
// Renvoie le nombre de caractère à saisir 
function NbCarRestant(moncontroletexte, nbcar) 
{ 
	if (moncontroletexte.value.length)
		return new Number(nbcar - moncontroletexte.value.length); 
	else
		return new Number(nbcar);
} 




