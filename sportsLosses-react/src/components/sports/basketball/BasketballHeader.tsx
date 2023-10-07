const img = {
  imageUrl:
    "https://s7d2.scene7.com/is/image/TWCNews/UCF%20Basketball%20web%20GFX",
  imageSize: 250,
  header: "UCF Basketball",
};

export default function BasketballHeader() {
  return (
    <>
      <h1>{img.header}</h1>
      <img
        className="avatar"
        src={img.imageUrl}
        alt={"Photo of Basketball with UCF Logo"}
        style={{
          width: img.imageSize * 1.4,
          height: img.imageSize / 1.2,
        }}
      />
    </>
  );
}
