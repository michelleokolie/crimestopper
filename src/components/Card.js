import Image from "next/image";

export default function Card({ image, title, text, link }) {
  return (
    <div>
      <Image src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        {link && <a href={link}></a>}
      </div>
    </div>
  );
}
