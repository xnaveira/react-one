import React from "react";
import Video from "react-videojs";

export default class Player extends React.Component {

   render() {
      return (
          <div>
             <Video
                 src="http://ipfs.io/ipfs/QmX4ZZSGA6HLtwGkDmaEBmTyqZhWjcJQcoydrdmiBmnxXZ"
                 type="video/mp4"
                 onPlay={this.handlePlay}
             />
          </div>

      );
   }
}
