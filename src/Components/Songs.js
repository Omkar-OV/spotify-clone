const Songs = [

  {
    id: 1,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2FHeyMamaRingtone.mp3?alt=media&token=3db3e094-2621-4d6e-a103-2e4131675f97",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=63e31361-a826-4731-9bf9-ed20663ab59a",
  },
  
  {
    id:2,
    favourite: false,
    songName: "Beast",
    artist: "Anirudh Ravichander",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2Fbeast.mp3?alt=media&token=1bc3f12f-1aa9-4c5a-8a65-fceb19a5f750",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fbeast.jpg?alt=media&token=f76cc636-1fef-4db2-81a9-55a2555d9421",
  },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      artist: "Hildur Guðnadóttir",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2Fjoker.mp3?alt=media&token=e7fefb07-0cdb-4b72-b996-b6d3383c76db",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fjoker.jpg?alt=media&token=1b3510fe-3654-4033-b378-02d89cd62516",
    },
    {
      id: 4,
      favourite: false,
      songName: "I Am A Peaky Blinder",
      artist: "Otnicka",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2Fpeaky-blinder.mp3?alt=media&token=f2e78601-b6ca-48e1-8f5a-995820a4d492",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fpeakyblinder.jpg?alt=media&token=ed80c84b-960e-44ba-96d6-06e9aef3a3b5",
    },
    {
      id: 5,
      favourite: false,
      songName: "Naanga Vera Maari",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2Fvalimai.mp3?alt=media&token=79eef7a1-1715-40cb-bd6d-34762351601c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fvalimai.jpg?alt=media&token=81663320-67a7-4d36-a600-064a037402e6",
    },
    {
      id: 6,
      songName: "Your Woman",
      artist: "White Town",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2FWhite-Town-Your-Women.mp3?alt=media&token=79d8795f-ec2c-4277-8f49-2821cc97560c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=85fb1595-4856-4ab0-b962-d99a7d3dd17f",
    },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2FCharlie.mp3?alt=media&token=01d6be52-e1f0-44fe-963e-d43618cdd3d2",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=5f62fb0a-e11a-4886-ad82-7294114b8d1c",
    },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2FFuture-Mask-Off.mp3?alt=media&token=e7df182d-ad05-4e97-91b6-9afb1ae6722d",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fmask.jpg?alt=media&token=669968de-c6d5-4f38-ac05-bcd855e8dc98",
    },
    {
      id: 9,
      favourite: false,
      songName: "Bella Ciao",
      artist: "El Profesor",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2Fbellaciao.mp3?alt=media&token=856dc4a6-19ac-4df2-aacd-ecaedfa387af",
      imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fmoneyheist.jpg?alt=media&token=e64632b6-b7c5-4bbb-b749-b0b0887ef12a",
    },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Songs%2FPlevne-turkish.mp3?alt=media&token=a52eeb3d-11ad-432d-94e2-e2b5c3f17840",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-af2f0.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=159e8e56-deb4-4738-a128-6eab2f11e492",
    },
  ];
  
  export { Songs };
  