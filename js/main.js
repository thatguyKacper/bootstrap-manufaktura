const navbar = document.getElementById('mainNavbar');

document.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FjcGVyZGV2IiwiYSI6ImNsMmM2dmNjMDBpazEzY25jN3l6emhubXgifQ.NxxDGmuXNKsDCdNKCOGQDw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/kacperdev/cl2c79rqc000k14pcgve33eq0',
  center: [19.948716, 49.297494],
  zoom: 18,
});
