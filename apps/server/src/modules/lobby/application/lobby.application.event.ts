export namespace LobbyApplicationEvent {
  export namespace LobbyCreated {
    export const key = 'lobby.application.lobby.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
