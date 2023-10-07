const img = {
    imageUrl:
        "https://pbs.twimg.com/profile_images/1308835090458443784/EF8RnPVS_400x400.jpg",
    imageSize: 250,
    header: "UCF Soccer",
  };
  
  export default function SoccerHeader() {
    return (
      <>
        <h1>{img.header}</h1>
        <img
          className="avatar"
          src={img.imageUrl}
          alt={"Photo of UCF Soccer Logo"}
          style={{
            width: img.imageSize * 1.4,
            height: img.imageSize / 1.2,
          }}
        />
      </>
    );
  }
  