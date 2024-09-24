const ImageContainer = ({ onImageSelect }) => {
  const images = [
    "https://cdn-icons-png.freepik.com/512/6055/6055946.png",
    "https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/number_2_green-512.png",
    "https://www.whitestone-gallery.com/cdn/shop/articles/Portrait_three_1200x1200.jpg?v=1679902121",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiHJy-OiXF4E3Nc9Zw8Wor_kQXSSlF0goXA&s",
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
