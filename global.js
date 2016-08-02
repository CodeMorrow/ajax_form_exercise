window.addEventListener("load", function() {

	var next = document.getElementsByClassName("nextButton");
	var album = document.getElementById("album");
	var bandMembers = document.getElementById("bandMembers");
	var bandName = document.getElementById("bandName");
	var bandMembers__info = document.getElementById("bandMembers__info");
	var back = document.getElementsByClassName("backButton");
	var addBandMember = document.getElementById("addBandMember");
	var bandMemberBackButton = document.getElementById("bandMemberBackButton");
	var albumArtist = document.getElementById("albumArtist");

	next[0].addEventListener('click', function(){

		album.style.display = "none";
		bandMembers.style.display ="block";
		bandMemberBackButton.style.display = "none";
		bandName.innerHTML = "Add " + albumArtist.value +"'s Members";

	});

	next[1].addEventListener('click', function(){

		bandMembers.style.display = "none";
		bandMembers__info.style.display = "block";

	});

	back[0].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});

	back[1].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});

	back[2].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});

	back[3].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});

	back[4].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});

	back[5].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});

	back[6].addEventListener('click', function(){
			album.style.display = "block";
			bandMembers.style.display ="none";
		});

	addBandMember.addEventListener('click', function(){
		var i = 1;
		i++;
		var newBandMember = document.createElement('div');
		newBandMember.setAttribute("id", "bandMember"+i+"")
		newBandMember.innerHTML = '<input type="text" id="bandMemberName'+i+'" name="bandMember" placeholder="Name"><input type="text" id="bandMember__insturment'+i+'" name="bandMemberInsturment" placeholder="Insturment(s)"><input type="button" id="addBandMember" value="+"><p>Seperate multiple insturments with a comma.</p>';
		bandMembers.appendChild(newBandMember)

		var previousMember = document.getElementById('bandMember'+(i-1)+'')
		previousMember.style.display = "none";
	});

});