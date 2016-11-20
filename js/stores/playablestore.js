import EventEmitter from "events";
import dispatcher from "../dispatcher"

class PlayableStore extends EventEmitter {
  constructor() {
    super()
    this.playable = {}
    this.playables = []
  }

  getPlayable() {
    console.log("playablestore::getplayable returns", this.playable)
    return this.playable
  }

  getAllPlayables() {
    return this.playables
  }

  updatePlayable(p) {
    this.playable = p
    this.emit("playableupdated")
  }

  updateAllPlayables(playables) {
    this.playables = playables
    this.emit("allplayablesupdated")
  }


  handleActions(action) {
    switch (action.type) {
      case "FIND_PLAYABLE" :
        //console.log("playablestore::FIND_PLAYABLE",action.data)
        this.updatePlayable(action.data)
        break
      case "GET_ALL_PLAYABLES" :
        this.updateAllPlayables(action.data)
        break
    }
  }

}

const playablestore = new PlayableStore;
dispatcher.register(playablestore.handleActions.bind(playablestore))

export default playablestore;