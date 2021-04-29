let previous = document.querySelector('#pre');
console.log(previous);
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let now = document.querySelector('#now');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay ;

let index_no = 0;
let Playing_song = false;

// tạo phần tử audio
let track = document.createElement('audio');

// Tạo danh sách bài hát
let All_song = [
	{
		name: "Chiếc Khăn Gió ấm",
		path: "music/ChiecKhanGioAm.mp3",
		img: "img/anh1.jpg",
		singer: "Khánh Phương"
	},
	{
		name: "Chỉ Là Không Cùng nhau",
		path: "music/ChiLaKhongCungNhau.mp3",
		img: "img/anh2.jpg",
		singer: "Tăng Phúc - Trương Thảo Nhi"
	},
	{
		name: "Every Day I Love You",
		path: "music/EveryDayILoveYou.mp3",
		img: "img/anh3.jpg",
		singer: "BoyZone"
	}
];


// Tải bài hát
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	now.innerHTML = index_no + 1;
}

load_track(index_no);

// reset  thanh tua
function reset_slider(){
	slider.value = 0;
}
function range_slider(){
	let position = 0;
	}

// câm
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// Check xem chạy bài hát không
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }



// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" ></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" ></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}

// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}

// Thay đổi volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// Thay đổi vị trí thanh tua
function change_duration(){
	 let slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// auto play
function autoplay_switch(){
	let random = All_song[Math.floor(Math.random()*All_song.length)];
	load_track(random);
	playsong();
	auto_play.style.background="rgba(255,255,300,0.2)";
}


