$(document).ready(function(){
	
	
	//global variables
	var thisAudio;
	var thisPlayPause;
	var thisVisibleRange;
	var thisInvisibleRange;
	var thisDuration;
	var curTime;
	var audioDuration;
	var thisLoading;
	var musicCode = '<div class="music"><div class="music_img" style="background-image: url(assets/images/instruments/INSTRUMENT.JPG)"></div><img src="assets/images/loading.gif" class="loading"><img src="assets/images/play.png" class="play_pause"><h1 class="music_name">MUSICNAME</h1><p class="duration">DURATION</p><p class="visible_range"></p><input type="range" max="100" min="0" value="0" class="invisible_range"><audio src="assets/musics/AUDIO.mp3" class="audio" controls preload="none"></audio></div>';
	
	var music = [
		{
			name: "Alyssa",
			genre: "country & folk",
			mood: "inspirational",
			artist: "the mini vandals",
			instrument: "acoustic_guitar",
			duration: "1:51",
			popularity: "not_popular"
		},
		{
			name: "Campfire_Song",
			genre: "country & folk",
			mood: "happy",
			artist: "chris haugen",
			instrument: "acoustic_guitar",
			duration: "2:44",
			popularity: "not_popular"
		},
		{
			name: "Distant_Lands",
			genre: "cinematic",
			mood: "calm",
			artist: "hanu dixit",
			instrument: "acoustic_guitar",
			duration: "2:23",
			popularity: "not_popular"
		},
		{
			name: "Kick_the_Can",
			genre: "country & folk",
			mood: "happy",
			artist: "the mini vandals",
			instrument: "acoustic_guitar",
			duration: "1:58",
			popularity: "not_popular"
		},
		{
			name: "Swoop",
			genre: "country & folk",
			mood: "happy",
			artist: "the mini vandals",
			instrument: "acoustic_guitar",
			duration: "1:43",
			popularity: "not_popular"
		},
		{
			name: "Three_Kinds_of_Suns",
			genre: "cinematic",
			mood: "dramatic",
			artist: "norma rockwell",
			instrument: "acoustic_guitar",
			duration: "3:16",
			popularity: "not_popular"
		},
		{
			name: "Wishful_Thinking",
			genre: "country & folk",
			mood: "bright",
			artist: "dan lebowitz",
			instrument: "acoustic_guitar",
			duration: "1:39",
			popularity: "not_popular"
		},
		{
			name: "Under_the_Wire",
			genre: "country & folk",
			mood: "happy",
			artist: "the mini vandals",
			instrument: "acoustic_guitar",
			duration: "1:43",
			popularity: "not_popular"
		},
		{
			name: "Acoustic_Circles",
			genre: "country & folk",
			mood: "bright",
			artist: "unicorn heads",
			instrument: "acoustic_guitar",
			duration: "1:46",
			popularity: "not_popular"
		},
		{
			name: "Vaculator_Blues",
			genre: "jazz & blues",
			mood: "dark",
			artist: "the mini vandals",
			instrument: "acoustic_guitar",
			duration: "1:38",
			popularity: "not_popular"
		},
		{
			name: "Pick_Up_On_This",
			genre: "rock",
			mood: "bright",
			artist: "the mini vandals",
			instrument: "bass",
			duration: "1:32",
			popularity: "popular"
		},
		{
			name: "Pop_Killer",
			genre: "dance & electronic",
			mood: "funky",
			artist: "the mini vandals",
			instrument: "bass",
			duration: "2:42",
			popularity: "popular"
		},
		{
			name: "Swoop",
			genre: "country & folk",
			mood: "happy",
			artist: "the mini vandals",
			instrument: "bass",
			duration: "1:43",
			popularity: "not_popular"
		},
		{
			name: "You_re_There",
			genre: "rock",
			mood: "bright",
			artist: "the mini vandals",
			instrument: "bass",
			duration: "1:56",
			popularity: "not_popular"
		},
		{
			name: "7th_Floor_Tango",
			genre: "cinematic",
			mood: "romantic",
			artist: "silent partner",
			instrument: "bass",
			duration: "2:21",
			popularity: "popular"
		},
		{
			name: "Afterimage",
			genre: "cinematic",
			mood: "romantic",
			artist: "silent partner",
			instrument: "bass",
			duration: "2:04",
			popularity: "not_popular"
		},
		{
			name: "Move_Up_to_the_Mountains",
			genre: "jazz & blues",
			mood: "funky",
			artist: "aaron lieberman",
			instrument: "trumpet",
			duration: "2:16",
			popularity: "not_popular"
		},
		{
			name: "You_re_There",
			genre: "rock",
			mood: "bright",
			artist: "the mini vandals",
			instrument: "drums",
			duration: "1:56",
			popularity: "not_popular"
		},
		{
			name: "California_Wind",
			genre: "alternative & punk",
			mood: "bright",
			artist: "bruno e.",
			instrument: "bass",
			duration: "4:36",
			popularity: "not_popular"
		},
		{
			name: "Ella_Vater",
			genre: "jazz & blues",
			mood: "happy",
			artist: "the mini vandals",
			instrument: "bass",
			duration: "1:34",
			popularity: "not_popular"
		},
		{
			name: "How_it_Began",
			genre: "pop",
			mood: "bright",
			artist: "silent partner",
			instrument: "bass",
			duration: "3:02",
			popularity: "popular"
		},
		{
			name: "Joy_to_the_World_Instrumental",
			genre: "holiday",
			mood: "inspirational",
			artist: "jingle punks",
			instrument: "bass",
			duration: "2:26",
			popularity: "popular"
		},
		{
			name: "Move_Out",
			genre: "hip hop & rap",
			mood: "angry",
			artist: "mk2",
			instrument: "bass",
			duration: "2:15",
			popularity: "not_popular"
		},
		{
			name: "Pick_Up_On_This",
			genre: "rock",
			mood: "bright",
			artist: "the mini vandals",
			instrument: "drums",
			duration: "1:32",
			popularity: "not_popular"
		},
		{
			name: "Psychic_Need",
			genre: "dance & electronic",
			mood: "dramatic",
			artist: "chasms",
			instrument: "drums",
			duration: "3:40",
			popularity: "not_popular"
		},
		{
			name: "Rebound",
			genre: "dance & electronic",
			mood: "funky",
			artist: "odonis odonis",
			instrument: "drums",
			duration: "3:07",
			popularity: "not_popular"
		},
		{
			name: "New_Tires",
			genre: "hip hop & rap",
			mood: "bright",
			artist: "silent partner",
			instrument: "bass",
			duration: "2:06",
			popularity: "not_popular"
		},
		{
			name: "Observer",
			genre: "dance & electronic",
			mood: "dark",
			artist: "chasms",
			instrument: "drums",
			duration: "2:25",
			popularity: "not_popular"
		},
		{
			name: "Shoulder_Closures",
			genre: "hip hop & rap",
			mood: "dramatic",
			artist: "gunnar olsen",
			instrument: "drums",
			duration: "2:38",
			popularity: "not_popular"
		},
		{
			name: "Stacy_and_George",
			genre: "rock",
			mood: "bright",
			artist: "the mini vandals",
			instrument: "drums",
			duration: "1:41",
			popularity: "not_popular"
		},
		{
			name: "The_Bywater",
			genre: "r&b & soul",
			mood: "funky",
			artist: "the mini vandals",
			instrument: "drums",
			duration: "3:18",
			popularity: "not_popular"
		},
		{
			name: "Vampire_Cop",
			genre: "dance & electronic",
			mood: "dramatic",
			artist: "odonis odonis",
			instrument: "drums",
			duration: "1:33",
			popularity: "not_popular"
		},
		{
			name: "Who_s_Using_Who",
			genre: "jazz & blues",
			mood: "funky",
			artist: "the mini vandals",
			instrument: "drums",
			duration: "2:50",
			popularity: "not_popular"
		},
		{
			name: "7th_Floor_Tango",
			genre: "cinematic",
			mood: "romantic",
			artist: "slient panther",
			instrument: "electric_guitar",
			duration: "2:21",
			popularity: "not_popular"
		},
		{
			name: "Country_Gentleman",
			genre: "rock",
			mood: "calm",
			artist: "endless love",
			instrument: "electric_guitar",
			duration: "2:15",
			popularity: "not_popular"
		},
		{
			name: "Dark_Thoughts",
			genre: "dance & electronic",
			mood: "funky",
			artist: "silent partner",
			instrument: "electric_guitar",
			duration: "4:30",
			popularity: "not_popular"
		},
		{
			name: "Hear_the_Noise",
			genre: "R&B & soul",
			mood: "inspirational",
			artist: "john deley and the 41 players",
			instrument: "electric_guitar",
			duration: "3:13",
			popularity: "not_popular"
		},
		{
			name: "How_it_Began",
			genre: "pop",
			mood: "bright",
			artist: "silent partner",
			instrument: "electric_guitar",
			duration: "3:02",
			popularity: "not_popular"
		},
		{
			name: "Mirror_Mirror",
			genre: "R&B & Soul",
			mood: "happy",
			artist: "diamond ortiz",
			instrument: "electric_guitar",
			duration: "3:05",
			popularity: "not_popular"
		},
		{
			name: "Prizefighter",
			genre: "pop",
			mood: "happy",
			artist: "norma rockwell",
			instrument: "electric_guitar",
			duration: "3:16",
			popularity: "not_popular"
		},
		{
			name: "Scratch_the_Itch",
			genre: "hip hop & rap",
			mood: "funky",
			artist: "quincas moreira",
			instrument: "electric_guitar",
			duration: "2:24",
			popularity: "not_popular"
		},
		{
			name: "Ticker",
			genre: "ambient",
			mood: "calm",
			artist: "silent partner",
			instrument: "electric_guitar",
			duration: "3:03",
			popularity: "not_popular"
		},
		{
			name: "Upsetter",
			genre: "rock",
			mood: "bright",
			artist: "the mini vandals",
			instrument: "electric_guitar",
			duration: "2:15",
			popularity: "not_popular"
		},
		{
			name: "Bluesed_and_Abused",
			genre: "R&B & Soul",
			mood: "happy",
			artist: "quincas moreira",
			instrument: "organ",
			duration: "2:17",
			popularity: "not_popular"
		},
		{
			name: "Cemetary_Clown",
			genre: "cinematic",
			mood: "funky",
			artist: "sir cubworth",
			instrument: "organ",
			duration: "2:09",
			popularity: "not_popular"
		},
		{
			name: "Happy_Haunts",
			genre: "cinematic",
			mood: "happy",
			artist: "aaron kenny",
			instrument: "organ",
			duration: "2:07",
			popularity: "not_popular"
		},
		{
			name: "In_The_Trees",
			genre: "cinematic",
			mood: "calm",
			artist: "sir cunworth",
			instrument: "organ",
			duration: "2:22",
			popularity: "not_popular"
		},
		{
			name: "Lusciousness",
			genre: "dance & electronic",
			mood: "romantic",
			artist: "asher fulero",
			instrument: "organ",
			duration: "3:24",
			popularity: "not_popular"
		},
		{
			name: "Motel_Rock",
			genre: "rock",
			mood: "funky",
			artist: "hanu dixit",
			instrument: "organ",
			duration: "1:46",
			popularity: "not_popular"
		},
		{
			name: "Philly_Crew",
			genre: "R&B & soul",
			mood: "funky",
			artist: "danny kean/doug maxwell",
			instrument: "organ",
			duration: "1:42",
			popularity: "not_popular"
		},
		{
			name: "Roots_of_Legend",
			genre: "hip hop & rap",
			mood: "angry",
			artist: "density & time",
			instrument: "organ",
			duration: "2:08",
			popularity: "not_popular"
		},
		{
			name: "The_Farmer_In_The_Dell_Instrumental",
			genre: "childrens",
			mood: "happy",
			artist: "the green orbs",
			instrument: "organ",
			duration: "1:50",
			popularity: "not_popular"
		},
		{
			name: "You_re_There",
			genre: "rock",
			mood: "bright",
			artist: "the mini vandals",
			instrument: "organ",
			duration: "1:56",
			popularity: "not_popular"
		},
		{
			name: "Distant_Lands",
			genre: "cinematic",
			mood: "calm",
			artist: "hanu dixit",
			instrument: "piano",
			duration: "2:23",
			popularity: "not_popular"
		},
		{
			name: "Eyes_of_Glory",
			genre: "cinematic",
			mood: "dramatic",
			artist: "aakash gandhi",
			instrument: "piano",
			duration: "2:31",
			popularity: "not_popular"
		},
		{
			name: "If_I_Had_a_Chicken",
			genre: "cinematic",
			mood: "happy",
			artist: "kevin macleod",
			instrument: "piano",
			duration: "2:30",
			popularity: "popular"
		},
		{
			name: "Jazz_con_Cajon",
			genre: "jazz & Blues",
			mood: "happy",
			artist: "jimmy fontanez/Doug maxwell",
			instrument: "piano",
			duration: "1:38",
			popularity: "not_popular"
		},
		{
			name: "Magical_Dirt",
			genre: "cinematic",
			mood: "dark",
			artist: "sir cubworth",
			instrument: "piano",
			duration: "2:15",
			popularity: "not_popular"
		},
		{
			name: "Nimbus",
			genre: "dance & electronic",
			mood: "happy",
			artist: "eveningland",
			instrument: "piano",
			duration: "4:40",
			popularity: "not_popular"
		},
		{
			name: "Outcast",
			genre: "cinematic",
			mood: "calm",
			artist: "myuu",
			instrument: "piano",
			duration: "2:10",
			popularity: "not_popular"
		},
		{
			name: "Redwood",
			genre: "rock",
			mood: "inspirational",
			artist: "quincas moreira",
			instrument: "piano",
			duration: "2:08",
			popularity: "not_popular"
		},
		{
			name: "The_Farmer_In_The_Dell_Instrumental",
			genre: "childrens",
			mood: "happy",
			artist: "the green orbs",
			instrument: "piano",
			duration: "1:50",
			popularity: "not_popular"
		},
		{
			name: "Touch_Tone",
			genre: "anbient",
			mood: "dramatic",
			artist: "the mini vandals",
			instrument: "piano",
			duration: "3:16",
			popularity: "not_popular"
		},
		{
			name: "A_Quiet_Thought",
			genre: "cinematic",
			mood: "calm",
			artist: "wayne jones",
			instrument: "strings",
			duration: "1:56",
			popularity: "not_popular"
		},
		{
			name: "Apprehensive_at_Best",
			genre: "cinematic",
			mood: "dark",
			artist: "biz baz studio",
			instrument: "strings",
			duration: "1:42",
			popularity: "not_popular"
		},
		{
			name: "Desert_Caravan",
			genre: "cinematic",
			mood: "dramatic",
			artist: "aaron kenny",
			instrument: "strings",
			duration: "2:01",
			popularity: "not_popular"
		},
		{
			name: "Drums_of_Apocalypse",
			genre: "cinematic",
			mood: "dramatic",
			artist: "the mini vandals",
			instrument: "strings",
			duration: "1:38",
			popularity: "not_popular"
		},
		{
			name: "Happy_Haunts",
			genre: "cinematic",
			mood: "happy",
			artist: "aaron kenny",
			instrument: "strings",
			duration: "2:07",
			popularity: "not_popular"
		},
		{
			name: "Joy_to_the_World_Instrumental",
			genre: "holiday",
			mood: "inspirational",
			artist: "jingle punks",
			instrument: "strings",
			duration: "2:26",
			popularity: "not_popular"
		},
		{
			name: "Night_Theme",
			genre: "pop",
			mood: "funky",
			artist: "roljui",
			instrument: "strings",
			duration: "1:59",
			popularity: "not_popular"
		},
		{
			name: "Cat_Circus",
			genre: "cinematic",
			mood: "happy",
			artist: "doug maxwell",
			instrument: "trumpet",
			duration: "1:34",
			popularity: "not_popular"
		},
		{
			name: "Official_National_Anthem",
			genre: "classical",
			mood: "inspirational",
			artist: "jingle punks",
			instrument: "strings",
			duration: "1:47",
			popularity: "not_popular"
		},
		{
			name: "Swoop",
			genre: "country & folk",
			mood: "happy",
			artist: "the mini vandals",
			instrument: "strings",
			duration: "1:43",
			popularity: "not_popular"
		},
		{
			name: "TipToes",
			genre: "cinematic",
			mood: "dramatic",
			artist: "myuu",
			instrument: "strings",
			duration: "2:28",
			popularity: "not_popular"
		},
		{
			name: "A_Chase",
			genre: "dance & electronic",
			mood: "dark",
			artist: "houses of heaven",
			instrument: "synth",
			duration: "2:46",
			popularity: "not_popular"
		},
		{
			name: "Dark_Forest",
			genre: "cinematic",
			mood: "dramatic",
			artist: "odonis odonis",
			instrument: "synth",
			duration: "2:20",
			popularity: "not_popular"
		},
		{
			name: "Dark_Matter",
			genre: "dance & electronic",
			mood: "sad",
			artist: "chasms",
			instrument: "synth",
			duration: "2:57",
			popularity: "not_popular"
		},
		{
			name: "Descent",
			genre: "ambient",
			mood: "calm",
			artist: "houses of heaven",
			instrument: "synth",
			duration: "2:41",
			popularity: "not_popular"
		},
		{
			name: "Escape",
			genre: "dance & electronic",
			mood: "dramatic",
			artist: "houses of heaven",
			instrument: "synth",
			duration: "3:18",
			popularity: "not_popular"
		},
		{
			name: "Incidental",
			genre: "cinematic",
			mood: "romantic",
			artist: "chasms",
			instrument: "synth",
			duration: "1:58",
			popularity: "not_popular"
		},
		{
			name: "It_Devours",
			genre: "dance & electronic",
			mood: "romantic",
			artist: "chasms",
			instrument: "synth",
			duration: "1:52",
			popularity: "not_popular"
		},
		{
			name: "Materialize",
			genre: "ambient",
			mood: "clam",
			artist: "chasms",
			instrument: "synth",
			duration: "1:46",
			popularity: "not_popular"
		},
		{
			name: "Scanner",
			genre: "dance & electronic",
			mood: "dark",
			artist: "houses of heaven",
			instrument: "synth",
			duration: "2:42",
			popularity: "not_popular"
		},
		{
			name: "Slow_Mo",
			genre: "dance & electronic",
			mood: "inspirational",
			artist: "houses of heaven",
			instrument: "synth",
			duration: "1:33",
			popularity: "not_popular"
		},
		{
			name: "Turn_Up_Let_s_Go",
			genre: "dance & electronic",
			mood: "dark",
			artist: "jeremy blake",
			instrument: "trumpet",
			duration: "4:26",
			popularity: "not_popular"
		},
		{
			name: "The_Premier",
			genre: "classical",
			mood: "happy",
			artist: "united states marine band anchors aweigh",
			instrument: "trumpet",
			duration: "4:06",
			popularity: "not_popular"
		},
		{
			name: "Spy_Funk",
			genre: "R&B & soul",
			mood: "funky",
			artist: "quincas moreira",
			instrument: "trumpet",
			duration: "3:46",
			popularity: "not_popular"
		},
		{
			name: "Party_Waltz",
			genre: "classical",
			mood: "happy",
			artist: "sir cubworth",
			instrument: "trumpet",
			duration: "2:30",
			popularity: "not_popular"
		},
		{
			name: "Palms",
			genre: "reggae",
			mood: "inspirational",
			artist: "text me records / bobby renz",
			instrument: "trumpet",
			duration: "3:08",
			popularity: "not_popular"
		},
		{
			name: "Official_National_Anthem",
			genre: "classical",
			mood: "inspirational",
			artist: "jingle punks",
			instrument: "trumpet",
			duration: "1:47",
			popularity: "not_popular"
		},
		{
			name: "Corporate_Mellow_Groove",
			genre: "rock",
			mood: "calm",
			artist: "doug maxwell",
			instrument: "trumpet",
			duration: "1:45",
			popularity: "not_popular"
		},
		{
			name: "City_of_Jewels",
			genre: "hip hop & rap",
			mood: "dark",
			artist: "density & time",
			instrument: "trumpet",
			duration: "1:39",
			popularity: "not_popular"
		}
	];
	
	
	
	
	
	
	//home page change functions relative to navigation
	var genreCode = '<h1 id=title>Genre</h1><div class="page" id="genre"><a href="#category=ambient"><div class="category" style="background-image: url(assets/images/genre/ambient.JPG)"><button>Ambient</button></div></a><a href="#category=childrens"><div class="category" style="background-image: url(assets/images/genre/childrens.JPG)"><button>Childrens</button></div></a><a href="#category=cinematic"><div class="category" style="background-image: url(assets/images/genre/cinematic.JPG)"><button>Cinematic</button></div></a><a href="#category=country_&_folk"><div class="category" style="background-image: url(assets/images/genre/country&folk.JPG)"><button>Country<br>&amp; Folk</button></div></a><a href="#category=dance_&_electronic"><div class="category" style="background-image: url(assets/images/genre/dance&electronic.JPG)"><button>Dance &amp;<br>Electronic</button></div></a><a href="#category=hip_hop_&_rap"><div class="category" style="background-image: url(assets/images/genre/hiphop&rap.JPG)"><button>Hip Hop<br>&amp; Rap</button></div></a><a href="#category=holiday"><div class="category" style="background-image: url(assets/images/genre/holiday.JPG)"><button>Holiday</button></div></a><a href="#category=jazz_&_blues"><div class="category" style="background-image: url(assets/images/genre/jazz&blues.JPG)"><button>Jazz &amp; Blues</button></div></a><a href="#category=pop"><div class="category" style="background-image: url(assets/images/genre/pop.JPG)"><button>Pop</button></div></a><a href="#category=r&b_&_soul"><div class="category" style="background-image: url(assets/images/genre/r&b&soul.JPG)"><button>R&amp;B &amp; Soul</button></div></a><a href="#category=reggae"><div class="category" style="background-image: url(assets/images/genre/reggae.JPG)"><button>Reggae</button></div></a><a href="#category=rock"><div class="category" style="background-image: url(assets/images/genre/rock.JPG)"><button>Rock</button></div></a></div>';
	
	var instrumentsCode = '<h1 id=title>Instruments</h1><div class="page" id="instruments"><a href="#category=acoustic_guitar"><div class="category" style="background-image: url(assets/images/instruments/acoustic_guitar.JPG)"><button>Acoustic<br>Guitar</button></div></a><a href="#category=electric_guitar"><div class="category" style="background-image: url(assets/images/instruments/electric_guitar.JPG)"><button>Electric<br>Guitar</button></div></a><a href="#category=drums"><div class="category" style="background-image: url(assets/images/instruments/drums.JPG)"><button>Drums</button></div></a><a href="#category=piano"><div class="category" style="background-image: url(assets/images/instruments/piano.JPG)"><button>Piano</button></div></a><a href="#category=bass"><div class="category" style="background-image: url(assets/images/instruments/bass.JPG)"><button>Bass</button></div></a><a href="#category=organ"><div class="category" style="background-image: url(assets/images/instruments/organ.JPG)"><button>Organ</button></div></a><a href="#category=strings"><div class="category" style="background-image: url(assets/images/instruments/strings.JPG)"><button>Strings</button></div></a><a href="#category=synth"><div class="category" style="background-image: url(assets/images/instruments/synth.JPG)"><button>Synth</button></div></a></div>';
	
	var moodCode = '<h1 id=title>Mood</h1><div class="page" id="mood"><a href="#category=angry"><div class="category" style="background-image: url(assets/images/mood/angry.JPG)"><button>Angry</button></div></a><a href="#category=bright"><div class="category" style="background-image: url(assets/images/mood/bright.JPG)"><button>Bright</button></div></a><a href="#category=calm"><div class="category" style="background-image: url(assets/images/mood/calm.JPG)"><button>Calm</button></div></a><a href="#category=dark"><div class="category" style="background-image: url(assets/images/mood/dark.JPG)"><button>Dark</button></div></a><a href="#category=dramatic"><div class="category" style="background-image: url(assets/images/mood/dramatic.JPG)"><button>Dramatic</button></div></a><a href="#category=funky"><div class="category" style="background-image: url(assets/images/mood/funky.JPG)"><button>Funky</button></div></a><a href="#category=happy"><div class="category" style="background-image: url(assets/images/mood/happy.JPG)"><button>Happy</button></div></a><a href="#category=inspirational"><div class="category" style="background-image: url(assets/images/mood/inspirational.JPG)"><button>Inspirational</button></div></a><a href="#category=romantic"><div class="category" style="background-image: url(assets/images/mood/romantic.JPG)"><button>Romantic</button></div></a><a href="#category=sad"><div class="category" style="background-image: url(assets/images/mood/sad.JPG)"><button>Sad</button></div></a></div>';
	
	var artistsCode = '<h1 id=title>Artists</h1><div class="page" id="artists"><a href="#category=aaron_kenny"><div class="category" style="background-image: url(assets/images/artists/aaronkenny.JPG)"><button>Aaron Kenny</button></div></a><a href="#category=diamond_ortiz"><div class="category" style="background-image: url(assets/images/artists/diamondortiz.JPG)"><button>Diamond Ortiz</button></div></a><a href="#category=doug_maxwell"><div class="category" style="background-image: url(assets/images/artists/dougmaxwell.JPG)"><button>Doug Maxwell</button></div></a><a href="#category=jingle_punks"><div class="category" style="background-image: url(assets/images/artists/jinglepunks.JPG)"><button>Jingle Punks</button></div></a><a href="#category=myuu"><div class="category" style="background-image: url(assets/images/artists/myuu.JPG)"><button>Myuu</button></div></a><a href="#category=odonis_odonis"><div class="category" style="background-image: url(assets/images/artists/odonisodonis.JPG)"><button>Odonis Odonis</button></div></a><a href="#category=sir_cubworth"><div class="category" style="background-image: url(assets/images/artists/sircubworth.jpg)"><button>Sir Cubworth</button></div></a><a href="#category=the_mini_vandals"><div class="category" style="background-image: url(assets/images/artists/theminivandals.JPG)"><button>The Mini<br>Vandals</button></div></a></div>';
	
	
	//load gerne initially
	$("main").html(genreCode);
	
	
	$("#genre_button").on("click", function(){
		$("main").html(genreCode);//load genre
		
		//mark this page
		$(".nav").removeClass("active");//remove all active class
		$(this).addClass("active");
		
		//scroll to top
		$(window).scrollTop(0);
	});
	
	$("#instruments_button").on("click", function(){
		$("main").html(instrumentsCode);//load instruments
		
		//mark this page
		$(".nav").removeClass("active");//remove all active class
		$(this).addClass("active");
		
		//scroll to top
		$(window).scrollTop(0);
	});
	
	$("#mood_button").on("click", function(){
		$("main").html(moodCode);//load mood
		
		//mark this page
		$(".nav").removeClass("active");//remove all active class
		$(this).addClass("active");
		
		//scroll to top
		$(window).scrollTop(0);
	});
	
	$("#artists_button").on("click", function(){
		$("main").html(artistsCode);//load artists
		
		//mark this page
		$(".nav").removeClass("active");//remove all active class
		$(this).addClass("active");
		
		//scroll to top
		$(window).scrollTop(0);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	//upload section
	$("#choose").on("click", function(){
		//when the choose audio button is clicked
		$("#choose_file").click();
	});
	
	$("#submit").on("click", function(){
		//when the submit button is clicked
		alert("This is just an example! File upload is not possible!");
	});
	
	
	//set header position to fixed on window scroll
	$(window).on("scroll", function(){
		if (window.innerWidth > 500){
			if ($(this).scrollTop() >= (window.innerWidth / 40)){
				$("header").css({"position" : "fixed", "top" : "-" + (window.innerWidth / 40) + "px"});
			}
			else {
				$("header").css({"position" : "absolute", "top" : "0px"});
			}
		}
		else {
			if ($(this).scrollTop() >= (window.innerWidth / 5.9)){
				$("header").css({"position" : "fixed", "top" : "-" + (window.innerWidth / 5.9) + "px"});
				
				//change header background color
				$("header").css({"background" : "brown"});
				$("#nav button").css({"color" : "#eee"});
			}
			else {
				$("header").css({"position" : "absolute", "top" : "0px"});
				
				//change header background color
				$("header").css({"background" : "#eee"});
				$("#nav button").css({"color" : "#111"});
			}
		}
	});
	
	
	
	//play and pause funtion
	playPause();
	
	function playPause(){		
		
		//execute the following function when play paue button is clicked
		$(".play_pause").on("click", function(){
			thisPlayPause = $(this).get(0);//select this button
			thisAudio = $(this).parent().find(".audio").get(0);//select this audio
			thisVisibleRange = $(this).parent().find(".visible_range").get(0);//select this visible range
			thisInvisibleRange = $(this).parent().find(".invisible_range").get(0);//select this invisible range
			thisDuration = $(this).parent().find(".duration").get(0);//get this duration
			thisLoading = $(this).parent().find(".loading").get(0);//get this loading
			
			
			curTime = Math.floor(thisAudio.currentTime);//get this audio current time
			
			if (thisAudio.paused & curTime < 0.1 || curTime === NaN || curTime === undefined){
				//run this program if this audio is paused and time is less than 0.1
				
				thisLoading.style.display = "block";//show this loading
				
				thisDuration.innerHTML = ".. ..";//assign audio time to calculating state
			}
			
			
			if (thisAudio.paused === true){
				pauseAll();//pause all audio
				
				thisPlayPause.setAttribute("src", "assets/images/pause.png");//set this play pause button to playing state
				thisAudio.play();//play this audio
			}
			else if (thisAudio.paused === false){
				pauseAll();//pause all audio
			}
			
			function pauseAll(){
				//pause all audio and set all play pause button to pause state
				
				//set all play pause button to pause state
				$(".play_pause").attr("src", "assets/images/play.png")
				//pause all audio
				$(".audio").trigger("pause");
			}
			
			
			
			//execuite the following function when a certain audio is played
			thisAudio.ontimeupdate = function(){
				curTime = Math.floor(thisAudio.currentTime);//get this audio current time
				audioDuration = Math.floor(thisAudio.duration);//get this audio duration
				
				if (curTime >= 0.1){
					//run the below program when audio time is greater than or equal to 0.1
					
					thisLoading.style.display = "none";//hide this loading
					
					thisInvisibleRange.style.display = "block";//show this invisible range
					
					updateDuration();//update this audio time stamp
					controlVisibleRange();//control visible range
					updateInvisibleRange();//update invisible range
				}
			}
			
			//change audio time when invisible range value changes
			thisInvisibleRange.onchange = function(){
				var seekTo = audioDuration * (this.value / 100);//set the time to which the audio should be sheeked to
				
				//seek audio relative to seekTo value
				thisAudio.currentTime = seekTo;
			}
			
			
			//reset audio when it ended
			thisAudio.onended = function(){
				thisPlayPause.setAttribute("src", "assets/images/play.png");
			}
			
			
			function updateDuration(){
				//let x be the difference between audioDuration and curTime
				var x = audioDuration - curTime;
				
				var curMins = Math.floor(x / 60);//get current minutes
				var curSecs = Math.floor(x - (curMins * 60));//get current seconds
				
				//execute the following code if curmins and sursec are NaN
				if (curMins === NaN || curSecs === NaN){
					thisDuration.innerHTML = thisDuration.innerHTML;
				}
				else {
					//execute the following code if curmins and sursec are lesser than 10
					if (curMins < 10){
						curMins = "0" + curMins;
					}
					if (curSecs < 10){
						curSecs = "0" + curSecs;
					}

					//update thisAudio time stamp
					thisDuration.innerHTML = curMins + ":" + curSecs;
				}
			}
			
			function controlVisibleRange(){
				//control visible range according to audio time
				
				var vrp = Math.floor(curTime * (100 / audioDuration));//get visible range position
				
				thisVisibleRange.style.width = vrp + "%";
			}
			
			function updateInvisibleRange(){
				//update inviible range when audio time changes
				var newRangeValue = Math.floor(curTime * (100 / audioDuration));//set new range value
				
				thisInvisibleRange.value = newRangeValue;//assign new range value
			}
			
			
			//click this play pause button when space and pause button is clicked on the keyboard
			window.onkeyup = function(){
				if (event.keyCode === 179){
					thisPlayPause.click();
				}
				else if (event.keyCode === 32){
					thisPlayPause.click();
				}
				
			}
			
			
			
			
		});
		
	};
	
	
	
	
	
	
	
	
	//music horizontal scroll
	$('#music').on("wheel", function(delta){
		var y = delta.originalEvent.deltaY;
		
		if (y < 0){
			$("#music").scrollLeft($("#music").scrollLeft() - window.innerWidth/20);
		}
		else {
			$("#music").scrollLeft($("#music").scrollLeft() + window.innerWidth/20);
		}
	});
	
	$(window).on("keydown", function(){
		$("#music").focus();
		if (event.keyCode === 39){
			$("#music").scrollLeft($("#music").scrollLeft() + window.innerWidth/50);
		}
		else if (event.keyCode === 37){
			$("#music").scrollLeft($("#music").scrollLeft() - window.innerWidth/50);
		}
	});
	
	
	
	
	
	
	//page change functions
	window.onhashchange = function(){
		if (location.hash === ""){
			$("#music").css({"display" : "none"});
			
			//set header, main, and footer position back to its original one
			$("header").css({"position" : "absolute"});
			$("main, footer").css({"position" : "relative"});
		}
		else if (location.hash.indexOf("#category=") > -1){
			//set header, main, and footer position fixed
			$("header, main, footer").css({"position" : "fixed"});
			
			
			//scroll music page to initial position
			setTimeout(function(){
				$("#music").scrollTop(0);
				$("#music").scrollLeft(0);
			}, 100);
			
			
			
			var category = location.hash.split("#category=").join("").toLowerCase();
			
			$("#music").html("<h1 id='music_name'>" + category.split("_").join(" "));//assign music category
			
			
			
			//select music and add them to music page
			for (var i = 0; i < music.length; i++){
				
				var thisMusicName = music[i].name.toLowerCase();
				var thisDuration = music[i].duration;
				var thisInstrument = music[i].instrument.toLowerCase();
				var thisGenre = music[i].genre.toLowerCase().split(" ").join("_");
				var thisMood = music[i].mood.toLowerCase().split(" ").join("_");
				var thisArtist = music[i].artist.toLowerCase().split(" ").join("_");
				var thisPopularity = music[i].popularity.toLowerCase();
				
				if (category === thisInstrument.toLowerCase()){
					
					$("#music").html($("#music").html() + musicCode.split("INSTRUMENT").join(thisInstrument).split("MUSICNAME").join(thisMusicName.split("_").join(" ").split(" re").join("'re").split(" s").join("'s")).split("DURATION").join(thisDuration).split("AUDIO").join(thisMusicName));
					
				}
				
				else if (category === thisGenre.toLowerCase()){
					
					$("#music").html($("#music").html() + musicCode.split("INSTRUMENT").join(thisInstrument).split("MUSICNAME").join(thisMusicName.split("_").join(" ").split(" re").join("'re").split(" s").join("'s")).split("DURATION").join(thisDuration).split("AUDIO").join(thisMusicName));
					
				}
				
				else if (category === thisMood.toLowerCase()){
					
					$("#music").html($("#music").html() + musicCode.split("INSTRUMENT").join(thisInstrument).split("MUSICNAME").join(thisMusicName.split("_").join(" ").split(" re").join("'re").split(" s").join("'s")).split("DURATION").join(thisDuration).split("AUDIO").join(thisMusicName));
					
				}
				
				else if (category === thisArtist.toLowerCase()){
					
					$("#music").html($("#music").html() + musicCode.split("INSTRUMENT").join(thisInstrument).split("MUSICNAME").join(thisMusicName.split("_").join(" ").split(" re").join("'re").split(" s").join("'s")).split("DURATION").join(thisDuration).split("AUDIO").join(thisMusicName));
					
				}
				
				else if (category === thisPopularity.toLowerCase()){
					
					$("#music").html($("#music").html() + musicCode.split("INSTRUMENT").join(thisInstrument).split("MUSICNAME").join(thisMusicName.split("_").join(" ").split(" re").join("'re").split(" s").join("'s")).split("DURATION").join(thisDuration).split("AUDIO").join(thisMusicName));
					
				}
			}
			
			
			//control audio
			playPause();
			
			
			
			
			$("#music").css({"display" : "block"});//make music page visible
		}
	}
	
	
	
	//go back if hash is present when window loads
	$(window).on("load", function(){
		if (location.hash !== ""){
			window.history.back();
		}
	});
	
	
});