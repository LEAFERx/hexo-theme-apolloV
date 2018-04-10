const loadAniTemplate =
`<div class="sk-double-bounce">
   <div class="sk-child sk-double-bounce1"></div>
   <div class="sk-child sk-double-bounce2"></div>
 </div>`;

export default () => {
  const imgList = document.querySelectorAll('img');
  imgList.forEach((image) => {
    if (!image.complete && image.id !== 'logo') {
      const img = image;
      img.style.display = 'none';
      const loadAni = document.createElement('div');
      loadAni.className = 'img-load-animation';
      loadAni.innerHTML = loadAniTemplate;
      img.parentNode.insertBefore(loadAni, img);
      img.onload = () => {
        loadAni.parentNode.removeChild(loadAni);
        img.style.display = 'block';
      };
    }
  });
};
