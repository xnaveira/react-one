import dispatcher from "../dispatcher"

const playables = Array.of(
  { id: 1,
    img : "Qmdqyy7uD8mC9Y56ukZLH9TmrjDjaTVnfC9tWZ6J9Twz8D",
    link : "QmPpPo93PoYcouA4qnFbsccVyEkHtuf19dSYjfK47xAkgA",
    title : "A história da SpaceX!",
    description: "Description for A história da SpaceX!",
    uploaded_by: "Toby",
    created: "16/11/2016",
    creator_comment: "I love this stuff man, totally awesomesauce!!!!!!!"},
  { id: 2,
    img : "QmXDK1i7hUB49XJFoT1LqSAgeGiep7avKNpYxc758fFH44",
    link : "QmZQc4LruAXjpv6wK87KFXWnufBXD43FsRdLgzEP5meynJ",
    title : "Brian & Andrew Watch Spacex's 1st Falcon 9 Landing",
    description: "Description for Brian & Andrew Watch Spacex's 1st Falcon 9 Landing",
    uploaded_by: "Xavier",
    created: "17/11/2016",
    creator_comment: "Tonight, I'm gonna have myself" },
  { id : 3,
    img : "QmapNtaxdrusTqkJwzi2X2gDh65ms3XHLqvUod8q5Fdth7",
    link : "QmVSAfQG6TnFFF22JjMu17zuezvFHW5twXC9bVn6toTKuh",
    title : "KSPRO - SpaceX ITS Basics and First Thoughts",
    description: "Description for KSPRO - SpaceX ITS Basics and First Thoughts",
    uploaded_by: "Petter",
    created: "18/11/2016",
    creator_comment: "A real good time!" },
  { id : 4,
    img : "QmRPbSx9nan2id2EPkyKczpvXYXMiN4PPiWijYF3yff95u",
    link : "QmSCZvdTncpe5T9uKX6n4gX3FFWVbkwDBAFw5cMfxX9YPq",
    title : "New Footage Proof UFO Destroyed SPACEX Rocket",
    description: "Description for New Footage Proof UFO Destroyed SPACEX Rocket",
    uploaded_by: "Lovisa",
    created: "19/11/2016",
    creator_comment: "I feel alive, ive, ive, iiiiive." },
  { id : 5,
    img : "QmPzTBKPicv7gfTAcFxuYkcYaww3mBTZQiTiSUxX7anmWP",
    link : "QmdAKp5fF8iQPXk6u28GriGXzorhMmPmH5T6duWeUshCnp",
    title : "Scott Manley landing an actual SpaceX rocket",
    description: "Description for Scott Manley landing an actual SpaceX rocket",
    uploaded_by: "Tom",
    created: "20/11/2016",
    creator_comment: "And the woooorld, is turning" },
  { id : 6,
    img : "QmNbEECg5yqLAGUgcrzerwE7HA5qJF9YbgYFqfdz6PfKXW",
    link : "QmUhP8M3ayEdvr1FcHdAjs9LTXVPHACEdfDuShVheBMLTA",
    title : "The SpaceX Interplanetary Transport System - 9.31",
    description: "Description for The SpaceX Interplanetary Transport System - 9.31",
    uploaded_by: "Ben",
    created: "21/11/2016",
    creator_comment: "Inside out yeah, and floating around" },
  { id : 7,
    img : "QmNj93BKYeFvVZvqLoXKH8ktqGs8ebvFZ581FJ7DaxKJX4",
    link : "QmX49Fp1EV7H4oGnLUZCDnAKptjqb2wgoSxrkXMHyN7M5y",
    title : "The Story of SpaceX's Falcon 9 Rocket",
    description: "Description for The Story of SpaceX's Falcon 9 Rocket",
    uploaded_by: "Marc",
    created: "22/11/2016",
    creator_comment: "In ecstacy so don't stop me now." }
)

function getAllPlayables() {
  return playables
}

function findPlayable(id) {
  //console.log("playableactions::findplayable",id)
  return playables.find( (p) => {
    return p.id == id
  })
}


export function loadPlayable(id) {
  //console.log("playableactions::loadPlayable",id)
  const playable = findPlayable(id)
  dispatcher.dispatch({ type: "FIND_PLAYABLE", data: playable})
}

export function loadAllPlayables() {
  const playables = getAllPlayables()
  //console.log("playableactions::loadAllPlayables",playables)
  dispatcher.dispatch({type: "GET_ALL_PLAYABLES", data: playables})
}
