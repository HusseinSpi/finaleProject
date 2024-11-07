const ImageContainer = ({ onImageSelect }) => {
  const images = [
    "https://static.dw.com/image/47968464_1006.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasWrj-4MQvaXruTpc1z8XHMqnpwN5UufwxA&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/CZZSVg018348-07.jpg/260px-CZZSVg018348-07.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1OmYCaQSVue9vgn35zXjIrsOhTpn6dgOKg&s",
  ];

  return (
    <div className="image-container">
      <div className="image-row">
        <img
          src={images[0]}
          alt="Image 1"
          onClick={() => onImageSelect(images[0])}
        />
        <img
          src={images[1]}
          alt="Image 2"
          onClick={() => onImageSelect(images[1])}
        />
      </div>
      <div className="image-row">
        <img
          src={images[2]}
          alt="Image 3"
          onClick={() => onImageSelect(images[2])}
        />
        <img
          src={images[3]}
          alt="Image 4"
          onClick={() => onImageSelect(images[3])}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
