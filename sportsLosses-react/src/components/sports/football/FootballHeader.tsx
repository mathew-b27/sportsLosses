const img = {
  imageUrl:
    "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/02/USAT/70752009007-ap-kent-st-ucf-football.jpg?crop=5391,3047,x0,y272&width=3200&height=1809&format=pjpg&auto=webp",
  imageSize: 250,
  header: "UCF Football",
};

export default function FootballHeader() {
  return (
    <>
      <h1>{img.header}</h1>
      <img
        className="avatar"
        src={img.imageUrl}
        alt={"Photo of Football Helmet with UCF Logo"}
        style={{
          width: img.imageSize * 1.4,
          height: img.imageSize / 1.2,
        }}
      />
    </>
  );
}
