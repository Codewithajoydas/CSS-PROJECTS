const chips = document.querySelector(".main-content .chips");
let isDown = false;
let startX;
let scrollLeft;

chips.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - chips.offsetLeft;
  scrollLeft = chips.scrollLeft;
});

chips.addEventListener("mouseleave", () => {
  isDown = false;
});

chips.addEventListener("mouseup", () => {
  isDown = false;
});

chips.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - chips.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  chips.scrollLeft = scrollLeft - walk;
});



let data = [
  {
    img: "./assets/1.png",
    title: "Mountain Sunrise in 4K",
    description: "Nature Channel",
    views: "2.3M views",
    time: "2 weeks ago",
    channelLogo: "./assets/1.png",
  },
  {
    img: "./assets/2.png",
    title: "Peaceful Forest Walk ASMR",
    description: "Green Earth",
    views: "1.1M views",
    time: "1 month ago",
    channelLogo: "./assets/2.png",
  },
  {
    img: "./assets/3.png",
    title: "City Lights Timelapse",
    description: "UrbanScope",
    views: "980K views",
    time: "3 days ago",
    channelLogo: "./assets/3.png",
  },
  {
    img: "./assets/4.png",
    title: "Relaxing Beach Sounds",
    description: "Ocean Life",
    views: "3.4M views",
    time: "4 months ago",
    channelLogo: "./assets/4.png",
  },
  {
    img: "./assets/5.png",
    title: "Snowy Mountains Drone ",
    description: "ChillWorld",
    views: "877K views",
    time: "1 week ago",
    channelLogo: "./assets/5.png",
  },
  {
    img: "./assets/6.png",
    title: " Mountains Drone View",
    description: "ChillWorld",
    views: "877K views",
    time: "1 week ago",
    channelLogo: "./assets/6.png",
  },
  {
    img: "./assets/7.png",
    title: "Snowy Mountains  View",
    description: "ChillWorld",
    views: "877K views",
    time: "1 week ago",
    channelLogo: "./assets/7.png",
  },
  {
    img: "./assets/8.png",
    title: "Snowy Mountains  View",
    description: "ChillWorld",
    views: "877K views",
    time: "1 week ago",
    channelLogo: "./assets/8.png",
  },
  {
    img: "./assets/9.png",
    title: "Snowy  Drone View",
    description: "ChillWorld",
    views: "877K views",
    time: "1 week ago",
    channelLogo: "./assets/9.png",
  },
];
  
let items = document.querySelector(".videos");

data.forEach((item) => {
  const div = document.createElement("div");
  div.className = "video-card";

  div.innerHTML = `
    <img class="thumbnail" src="${item.img}" alt="Video Thumbnail" />
    <div class="video-info">
      <img class="channel-logo" src="${item.channelLogo}" alt="Channel Logo" />
      <div class="video-text">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <p>${item.views} • ${item.time}</p>
      </div>
    </div>
  `;

  items.appendChild(div);
});
