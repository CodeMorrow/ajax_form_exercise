window.addEventListener("load", function() {

	var addAlbumImage = document.getElementById("addAlbumImage");
	var addAlbumTrack = document.getElementById("addAlbumTrack");
	var addBandMember = document.getElementById("addBandMember");
	var album = document.getElementById("album");
	var albumArtist = document.getElementById("albumArtist");
	var albumImages = document.getElementById("albumImages");
	var albumImageDiv = document.getElementById("albumImageDiv");
	var albumInfo = document.getElementById("albumInfo");
	var albumMessage = document.getElementById("albumMessage");
	var albumTitle = document.getElementById("albumTitle");
	var albumTracks = document.getElementById("albumTracks");
	var artistMessage = document.getElementById("artistMessage");
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


	var albumImages__backButton = document.getElementsByClassName("albumImages__backButton");
	var albumTracks__backButton = document.getElementsByClassName("albumTracks__backButton");
	var backButton = document.getElementsByClassName("backButton");
	var eachAlbumImage = document.getElementsByClassName("eachAlbumImage");
	var eachAlbumTrack = document.getElementsByClassName("eachAlbumTrack");
	var eachBandMember = document.getElementsByClassName("eachBandMember");
	var nextButton = document.getElementsByClassName("nextButton");


// ############################################## Code of all my Next Buttons #############################################

	nextButton[0].addEventListener('click', function(){

		album.style.display = "none";
		bandMembers.style.display ="flex";
		bandMemberBackButton.style.display = "none";
		bandName.innerHTML = "Add " + albumArtist.value +"'s Members";

	});

	nextButton[1].addEventListener('click', function(){

		bandMembers.style.display ="none";
debugger;
			for (var i = 0; i < eachBandMember.length; i++) {
				
				var newBandMemberInfo = document.createElement('div');
				
				newBandMemberInfo.setAttribute("class", "BandMemberInfo");
				newBandMemberInfo.innerHTML = '<div style="display:none;" class="eachBandMemberInfo" id="eachBandMemberInfo'+i+'"><p id="bandMemberLocation'+i+'">--</p><input type="text" id="bandMember__location'+i+'" name="bandMember__location"><p id="bandMemberImageMessage'+i+'">--</p><input type="file" id="bandMemberImage'+i+'" name="bandMemberImage" accept="image/*"></div>';
				bandMembers__info.insertBefore(newBandMemberInfo, backButton[1]);

			}

			var eachBandMemberInfo0 = document.getElementById("eachBandMemberInfo0")
			var bandMemberName0 = document.getElementById("bandMemberName0");
			var bandMemberLocation0 = document.getElementById("bandMemberLocation0");
			var bandMemberImageMessage0 = document.getElementById("bandMemberImageMessage0");

			var bandMemberInfoForwardButton = document.getElementById("bandMemberInfoForwardButton");

			bandMembers__info.style.display = "flex";
			eachBandMemberInfo0.style.display = "flex";
			bandMemberInfoForwardButton.style.display = "flex";
			bandMemberLocation0.innerHTML = bandMemberName0.value +"'s location";
			bandMemberImageMessage0.innerHTML = bandMemberName0.value +"'s Image";

				bandMemberInfoForwardButton.addEventListener('click', function(){

					var eachBandMemberNumber = 0
					eachBandMemberNumber++
debugger;
					var eachBandMemberInfo = document.getElementById("eachBandMemberInfo"+eachBandMemberNumber);
					var bandMemberLocation = document.getElementById("bandMemberLocation"+eachBandMemberNumber);
					var bandMemberImageMessage = document.getElementById("bandMemberImageMessage"+eachBandMemberNumber);

					eachBandMemberInfo0.style.display = "none";
					eachBandMemberInfo1.style.display = "flex";
					bandMemberLocation1.innerHTML = bandMemberName1.value +"'s location";
					bandMemberImageMessage1.innerHTML = bandMemberName1.value +"'s Image";

				});
		
	});

	nextButton[2].addEventListener('click', function(){

		bandMembers__info.style.display ="none";
		albumImages.style.display = "flex";
		albumImages__backButton[0].style.display = "none";
		bandMemberInfoForwardButton.style.display = "flex";

	});

	nextButton[3].addEventListener('click', function(){

		albumImages.style.display = "none";
		albumInfo.style.display = "flex";

	});

	nextButton[4].addEventListener('click', function(){

		albumInfo.style.display = "none";
		albumTracks.style.display = "flex";

		albumTracks__backButton[0].style.display = "none";

	});

	submitButton.addEventListener('click', function(){

		albumTracks.style.display = "none";
		confirmation.style.display = "flex";

		confirmationMessage.innerHTML = albumTitle.value + " by " + albumArtist.value;

	});

	homeButton.addEventListener('click', function(){

		window.location.reload();

	});

// ############### Code of all my Back Buttons ##################

	backButton[0].addEventListener('click', function(){
		
		bandMembers.style.display ="none";
		album.style.display = "flex";
		
	});

	backButton[1].addEventListener('click', function(){
		
		bandMembers__info.style.display = "none";
		bandMembers.style.display ="flex";
		eachBandMember[0].style.display ="flex";
		
		if (eachBandMember.length > 1){
			eachBandMember[eachBandMember.length-1].style.display ="none";    // This works for only two band members
		}

	});

	backButton[2].addEventListener('click', function(){

		albumImages.style.display = "none";
		bandMembers__info.style.display ="flex";

	});

	backButton[3].addEventListener('click', function(){
		
		albumInfo.style.display = "none";
		albumImages.style.display = "flex";
		
	});

	backButton[4].addEventListener('click', function(){

		albumTracks.style.display = "none";
		albumInfo.style.display = "flex";

	});

// ####################################### Code for Check if Album or Artist Exist ##################################### 

	albumTitle.addEventListener("keyup", function(){
		
		var checker = new XMLHttpRequest();

		checker.addEventListener('load', function(e){
debugger;
			var albumDB = JSON.parse(e.target.repsonseText);

			for (var i = 0; i < albumDB.albumTitle.length; i++) {
				if (albumDB.albumTitle == albumTitle.value){
					albumMessage.style.display = "flex";
					albumMessage.innerHTML = "This album already exists.";
					nextButton[0].disabled = true;
				}
			}

		});

		checker.open('get', 'check_if_album_exists.json');
		checker.send();
	});

// ####################################### Code for Add Band Member Code ##################################### 

	addBandMember.addEventListener('click', function(){
debugger;
		var newMemberNumber = eachBandMember.length-1;
		newMemberNumber++;
		var previousMember = newMemberNumber-1;
		var newBandMember = document.createElement('div');
		newBandMember.setAttribute("class", "eachBandMember");
		newBandMember.innerHTML = '<input type="text" class="bandMemberName" id="bandMemberName'+newMemberNumber+'" name="bandMember" placeholder="Name"><input type="text" class="bandMember__insturment" id="bandMember__insturment'+newMemberNumber+'" name="bandMemberInsturment" placeholder="Insturment(s)"><p>Seperate multiple insturments with a comma.</p>';
		bandMemberNames.appendChild(newBandMember);

		bandMemberBackButton.style.display = "flex";

		var hideMember = eachBandMember[previousMember];
		hideMember.style.display = "none";

	// ##################################### Code for Back to Previous Band Member Code ########################### -WIP!!!

		// 	bandMemberBackButton.addEventListener('click', function(){

		// 	hideMember.style.display = "flex";
		// 	newBandMember.style.display = "none";
		// });
	});

// ####################################### Code to Add New Album Image ##################################### 

	addAlbumImage.addEventListener('click', function(){
debugger;		
		var newImageNumber = eachAlbumImage.length-1;
		newImageNumber++;
		var previousImage = newImageNumber-1;
		var newAlbumImage = document.createElement('div');
		newAlbumImage.setAttribute("class", "eachAlbumImage");
		newAlbumImage.innerHTML = '<input type="button" class="albumImages__backButton" value="<"><p>Album images</p><select name="albumImage"><option value="albumCover">Album Cover</option><option value="insertFront">Insert Front</option><option value="insertBack">Insert Back</option><option value="albumBack">Album Back</option></select><input type="file" id="albumImage'+newImageNumber+'" name="pic" accept="image/*">';
		albumImages.insertBefore(newAlbumImage, backButton[2]);

		var hideImage = eachAlbumImage[previousImage];
		hideImage.style.display = "none";

	});

// ####################################### Code to Add New Album Track ##################################### 	
	
	addAlbumTrack.addEventListener('click', function(){
debugger;
		var newTrackNumber = eachAlbumTrack.length-1;
		newTrackNumber++;
		var previousTrack = newTrackNumber-1;
		var actualTrackNumber = newTrackNumber+1;
		var newAlbumTrack = document.createElement('div');
		newAlbumTrack.setAttribute("class", "eachAlbumTrack");
		newAlbumTrack.innerHTML = '<p id="trackNumber'+newTrackNumber+'">Track #</p><input type="button" class="albumTracks__backButton" id="albumTracks__backButton'+newTrackNumber+'" value="<"><input type="text" class="albumTrack" id="albumTrack'+newTrackNumber+'" name="albumTrack" placeholder="Track Title"><p>Upload Song</p><input type="file" name="song" accept="audio/*">'
		albumTracks.insertBefore(newAlbumTrack, backButton[4]);
		var trackId= 'trackNumber'+String(newTrackNumber);
		var trackNumber = document.getElementById(trackId);
		
		trackNumber.innerHTML = 'Track '+actualTrackNumber;

		var hideTrack = eachAlbumTrack[previousTrack];
		hideTrack.style.display = "none";
	});

});