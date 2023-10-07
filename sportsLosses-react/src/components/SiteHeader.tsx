const img = {
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Knightro.jpg",
  imageSize: 250,
  header: "The Worst Sports Losses in UCF History",
};

export default function SiteHeader() {
  return (
    <>
      <h1>{img.header}</h1>
      <img
        className="avatar"
        src={img.imageUrl}
        alt={"Photo of Knightro"}
        style={{
          width: img.imageSize,
          height: img.imageSize,
        }}
      />
    </>
  );
}
