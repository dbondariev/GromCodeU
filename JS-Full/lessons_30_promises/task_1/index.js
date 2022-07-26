export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    imgElem.width = 200;
    imgElem.height = 100;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });
  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const result = addImage(imgSrc);

console.log(result);
