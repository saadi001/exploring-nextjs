import Image from "next/image";
import NextImage from '../assets/images/next.jpg'
const Album = () => {
  return (
    <div>
      <h3>This is with img tag</h3>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
        alt=""
        width={"50%"}
      ></img>

      <h3>this is with image component</h3>
      <Image src="https://miro.medium.com/v2/resize:fit:1400/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
      width={500}
      height={500}
      layout="responsive"
      ></Image>

      <h3>this is with image component and local image</h3>
      <Image src={NextImage}
      width={500}
      height={500}
      ></Image>
    </div>
  );
};

export default Album;
