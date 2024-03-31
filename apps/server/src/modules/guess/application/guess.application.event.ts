export namespace GuessApplicationEvent {
  export namespace GuessCreated {
    export const key = 'guess.application.guess.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
