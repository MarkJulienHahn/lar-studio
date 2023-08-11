import Link from "next/link";

const GalleryMarkeEntry = ({ marke, i, setImageIndex }) => {
  console.log(marke)
  return (
    <Link href={{ pathname: `/showroom/${marke.slug.current}`, query: { id: i } }}>
      <p
        className="teamEntry"
        onMouseEnter={() => setImageIndex(i)}
        onMouseLeave={() => setImageIndex(null)}
        key={i}
        style={{cursor: "pointer"}}
      >
        {marke.title}
      </p>
    </Link>
  );
};

export default GalleryMarkeEntry;
