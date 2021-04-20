weatherAPI =
  "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=8cd5dfb23d55498d08746622747f28e1";

let container = document.getElementById("map");
let options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  lever: 3,
};

let map = new kakao.maps.Map(container, options);
let geocoder = new kakao.maps.services.Geocoder();
let latlng = {};
let coords = {};
let url = "";
const btn = document.getElementById("submit");
const weatheBtn = document.getElementById("weatherA");
// 지도 클릭시 좌표 값을 얻고 마킹을 함
kakao.maps.event.addListener(map, "click", function (e) {
  latlng = e.latLng;
  marker.setPosition(latlng);
});
// 마커를 표함
var marker = new kakao.maps.Marker({
  position: map.getCenter(),
});
marker.setMap(map);
//검색 시 해당 위치로 가는 것
btn.addEventListener("click", (e) => {
  e.preventDefault();
  geocoder.addressSearch(
    e.target.previousElementSibling.value,
    (result, status) => {
      console.log(e.target.previousElementSibling.value);
      if (status === kakao.maps.services.Status.OK) {
        coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        map.setCenter(coords);
        marker.setPosition(coords);
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${coords.Ma}&lon=${coords.La}&appid=8cd5dfb23d55498d08746622747f28e1`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("data", JSON.stringify(data));
          });
      }
    }
  );
});
