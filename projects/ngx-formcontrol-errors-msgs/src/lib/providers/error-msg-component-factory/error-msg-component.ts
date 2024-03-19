export interface ErrorMessage {
  message: string;
  value?: unknown;
}

export interface ErrorMsgComponent {
  messages: ErrorMessage[] | null;
}
