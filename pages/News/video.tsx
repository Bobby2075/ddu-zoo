import React from "react";
import ReactPlayer from "react-player/lazy";

function animation() {
  return (
    <div className="mx-32 my-10">
      <h1 className="text-center text-3xl mb-10">Tjek den her video</h1>
      <ReactPlayer
        url="https://youtu.be/HIdDhycjZuU"
        controls={true}
        height="100vh"
        width="100%"
      />
    </div>
  );
}

export default animation;
