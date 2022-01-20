import React, { useState } from "react";
import Heart from "react-animated-heart";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="App">
      <Heart isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
      {isLiked && <ul>You liked this photo!</ul>}
    </div>
  );
}

export default LikeButton;
