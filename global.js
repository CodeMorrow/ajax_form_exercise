window.addEventListener("load", function() {

	var next = document.getElementsByClassName("nextButton");
	var album = document.getElementById("album");
	var bandMembers = document.getElementById("bandMembers");
	var bandName = document.getElementById("bandName");
	var bandMembers__info = document.getElementById("bandMembers__info");
	var back = document.getElementsByClassName("backButton");
	var addBandMember = document.getElementsByClassName("addBandMember");

	next[0].addEventListener('click', function(){

		var albumArtist = document.getElementById("albumArtist");
		var bandMemberBackButton = document.getElementById("bandMemberBackButton");

		album.style.display = "none";
		bandMembers.style.display ="block";
		bandMemberBackButton.style.display = "none";
		bandName.innerHTML = "Add " + albumArtist.value +"'s Members";

		back[0].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});



	});

	next[1].addEventListener('click', function(){

		bandMembers.style.display = "none";
		bandMembers__info.style.display = "block";

	});

});