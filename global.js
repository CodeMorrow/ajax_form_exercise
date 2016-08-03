window.addEventListener("load", function() {

	var addBandMember = document.getElementById("addBandMember");
	var album = document.getElementById("album");
	var albumArtist = document.getElementById("albumArtist");
	var albumImages = document.getElementById("albumImages");
	var albumImages__backButton = document.getElementById("albumImages__backButton");
	var albumInfo = document.getElementById("albumInfo");
	var albumTitle = document.getElementById("albumTitle");
	var albumTracks = document.getElementById("albumTracks");
	var albumTracks__backButton = document.getElementById("albumTracks__backButton");
	var bandMember__location = document.getElementById("bandMember__location");
	var bandMemberBackButton = document.getElementById("bandMemberBackButton");
	var bandMemberNames = document.getElementById("bandMemberNames");
	var bandMembers = document.getElementById("bandMembers");
	var bandMembers__info = document.getElementById("bandMembers__info");
	var bandName = document.getElementById("bandName");
	var confirmation = document.getElementById("confirmation");
	var confirmationMessage = document.getElementById("confirmationMessage");
	var homeButton = document.getElementById("homeButton")
	var submitButton = document.getElementById("submit");

	var backButton = document.getElementsByClassName("backButton");
	var eachBandMember = document.getElementsByClassName("eachBandMember");
	var nextButton = document.getElementsByClassName("nextButton");


// ############################################## Code of all my Next Buttons #############################################

	nextButton[0].addEventListener('click', function(){

		album.style.display = "none";
		bandMembers.style.display ="block";
		bandMemberBackButton.style.display = "none";
		bandName.innerHTML = "Add " + albumArtist.value +"'s Members";

	});

	nextButton[1].addEventListener('click', function(){
debugger;
		bandMembers.style.display ="none";

		if (eachBandMember.length === 1) {

			var bandMemberName1 = document.getElementById("bandMemberName1");
			var bandMemberLocation1 = document.getElementById("bandMemberLocation1");
			var bandMemberImage1 = document.getElementById("bandMemberImage1");
			
			bandMembers__info.style.display = "block";
			bandMemberLocation1.innerHTML = bandMemberName1.value +"'s location";
			bandMemberImage1.innerHTML = bandMemberName1.value +"'s Image";

		} else {
			
			for (var i = 1; i <= eachBandMember.length; i++) {
				
				var newBandMemberInfo = document.createElement('div');
				
				newBandMemberInfo.setAttribute("class", "eachBandMemberInfo");
				newBandMemberInfo.innerHTML = '<div style="display:none;" id="eachBandMemberInfo'+i+'"><input type="button" class="bandMemberInfoBackButton" value="<"><p id="bandMemberLocation'+i+'">--</p><input type="text" id="bandMember__location'+i+'" name="bandMember__location"><p id="bandMemberImage'+i+'">--</p><input type="button" class="bandMemberInfoForwardButton" value=">"></div>';
				bandMembers__info.insertBefore(newBandMemberInfo, backButton[1]);

			}

			var eachBandMemberInfo1 = document.getElementById("eachBandMemberInfo1")
			var bandMemberName1 = document.getElementById("bandMemberName1");
			var bandMemberLocation1 = document.getElementById("bandMemberLocation1");
			var bandMemberImage1 = document.getElementById("bandMemberImage1");

			bandMembers__info.style.display = "block";
			eachBandMemberInfo1.style.display = "block";
			bandMemberLocation1.innerHTML = bandMemberName1.value +"'s location";
			bandMemberImage1.innerHTML = bandMemberName1.value +"'s Image";
		}
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

		confirmationMessage.innerHTML = albumTitle.value + " by " + albumArtist.value;

	});

	homeButton.addEventListener('click', function(){

		window.location.reload();

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

// ####################################### Code for Add Band Member Code ##################################### 

	addBandMember.addEventListener('click', function(){

		var newMember = eachBandMember.length-1;
		newMember++;
		var previousMember = newMember-1;
		var newBandMember = document.createElement('div');
		newBandMember.setAttribute("class", "eachBandMember");
		newBandMember.innerHTML = '<input type="text" class="bandMemberName" id="bandMemberName'+newMember+'" name="bandMember" placeholder="Name"><input type="text" class="bandMember__insturment" id="bandMember__insturment'+newMember+'" name="bandMemberInsturment" placeholder="Insturment(s)"><p>Seperate multiple insturments with a comma.</p>';
		bandMemberNames.appendChild(newBandMember);

		bandMemberBackButton.style.display = "block";

		var hideMember = eachBandMember[previousMember];
		hideMember.style.display = "none";

	// ##################################### Code for Back to Previous Band Member Code ########################### -WIP!!!

		// 	bandMemberBackButton.addEventListener('click', function(){

		// 	hideMember.style.display = "block";
		// 	newBandMember.style.display = "none";
		// });
	});



});