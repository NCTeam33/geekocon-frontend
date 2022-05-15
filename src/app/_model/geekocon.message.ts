export class GeekoconMessage{
  status: Response;
  string: string;
  constructor(status?: Response, string?: string) {
    this.status = status ?? new Response();
    this.string = string ?? "";
  }
}
