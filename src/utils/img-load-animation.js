/* eslint-disable */

export default () => {
  const imgList = document.querySelectorAll('img');
  for (let img of imgList) {
    if (!img.complete && img.id !== 'logo') {
      img.style.display = 'none';
      let loadAni = document.createElement('div');
      loadAni.className = 'img-load-animation';
      loadAni.innerHTML = `<div class="sk-double-bounce">
                             <div class="sk-child sk-double-bounce1"></div>
                             <div class="sk-child sk-double-bounce2"></div>
                           </div>`;
      img.parentNode.insertBefore(loadAni, img);
      img.onload = () => {
        loadAni.parentNode.removeChild(loadAni);
        img.style.display = 'block';
      };
    }
  }
};
