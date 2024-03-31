export namespace DrawingApplicationEvent {
  export namespace DrawingCreated {
    export const key = 'drawing.application.drawing.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
