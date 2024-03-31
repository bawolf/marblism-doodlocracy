export namespace UserLobbyApplicationEvent {
  export namespace UserLobbyCreated {
    export const key = 'userLobby.application.userLobby.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
