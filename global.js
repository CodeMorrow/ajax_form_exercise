window.addEventListener("load", function() {

	var addBandMember = document.getElementById("addBandMember");
	var album = document.getElementById("album");
	var albumArtist = document.getElementById("albumArtist");
	var albumImages = document.getElementById("albumImages");
	var albumImages__backButton = document.getElementById("albumImages__backButton");
	var albumInfo = document.getElementById("albumInfo");
	var albumTracks = document.getElementById("albumTracks");
	var albumTracks__backButton = document.getElementById("albumTracks__backButton");
	var backButton = document.getElementsByClassName("backButton");
	var bandMember__location = document.getElementById("bandMember__location");
	var bandMemberBackButton = document.getElementById("bandMemberBackButton");
	var bandMemberNames = document.getElementById("bandMemberNames");
	var bandMembers = document.getElementById("bandMembers");
	var bandMembers__info = document.getElementById("bandMembers__info");
	var bandName = document.getElementById("bandName");
	var confirmation = document.getElementById("confirmation");
	var homeButton = document.getElementById("homeButton")
	var nextButton = document.getElementsByClassName("nextButton");
	var submitButton = document.getElementById("submit");


// ############### Code of all my Next Buttons ##################

	nextButton[0].addEventListener('click', function(){

		album.style.display = "none";
		bandMembers.style.display ="block";
		bandMemberBackButton.style.display = "none";
		bandName.innerHTML = "Add " + albumArtist.value +"'s Members";

	});

	nextButton[1].addEventListener('click', function(){

		bandMembers.style.display ="none";
		bandMembers__info.style.display = "block";
		bandMember__location.innerHTML = "Add " + bandMemberName1 +"'s location";
	});

	nextButton[2].addEventListener('click', function(){

		bandMembers__info.style.display ="none";
		albumImages.style.display = "block";

		albumImages__backButton.style.display = "none"

	});

	nextButton[3].addEventListener('click', function(){

		albumImages.style.display = "none";
		albumInfo.style.display = "block";

	});

	nextButton[4].addEventListener('click', function(){

		albumInfo.style.display = "none";
		albumTracks.style.display = "block";

		albumTracks__backButton.style.display = "none";

	});

	submitButton.addEventListener('click', function(){

		albumTracks.style.display = "none";
		confirmation.style.display = "block";

	});

// ############### Code of all my Back Buttons ##################

	backButton[0].addEventListener('click', function(){
		album.style.display = "block";
		bandMembers.style.display ="none";
	});

	backButton[1].addEventListener('click', function(){
		bandMembers.style.display ="block";
		bandMembers__info.style.display = "none";
	});

	backButton[2].addEventListener('click', function(){
		bandMembers__info.style.display ="block";
		albumImages.style.display = "none";
	});

	backButton[3].addEventListener('click', function(){
		albumImages.style.display = "block";
		albumInfo.style.display = "none";
	});

	backButton[4].addEventListener('click', function(){
		albumInfo.style.display = "block";
		albumTracks.style.display = "none";

	});

// ############### Code for Add Band Member Code ############## -WIP

	addBandMember.addEventListener('click', function(){
debugger;
		var i = 1;
		i++;
		var newBandMember = document.createElement('div');
		newBandMember.setAttribute("id", "bandMember"+i+"");
		newBandMember.innerHTML = '<input type="text" id="bandMemberName'+i+'" name="bandMember" placeholder="Name"><input type="text" id="bandMember__insturment'+i+'" name="bandMemberInsturment" placeholder="Insturment(s)"><p>Seperate multiple insturments with a comma.</p>';
		bandMemberNames.appendChild(newBandMember);

		bandMemberBackButton.style.display = "block";

		var previousMember = document.getElementById('bandMember'+(i-1));
		previousMember.style.display = "none";
	});

});