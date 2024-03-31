export namespace PromptApplicationEvent {
  export namespace PromptCreated {
    export const key = 'prompt.application.prompt.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
