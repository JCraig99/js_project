let moon = document.querySelector('#moonphases');

moon.onmouseenter = (e) => {
 e.target.setAttribute('src', 'images/full-moon.jpg');
};

moon.onmouseleave= (e) => {
 e.target.setAttribute('src', 'images/half-moon.jpg');
};

// next

let water = document.querySelector ('#tides');

water.onclick = () => {
  if (water.getAttribute('src') === 'images/high-tide.jpg')
  {
    water.setAttribute('src', 'images/low-tide.jpg');
} else {
water.setAttribute('src', 'images/high-tide.jpg');
}
};
