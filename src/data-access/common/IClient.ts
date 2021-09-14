export interface IClient<C> {
    client: C;
    initialize(): void;
}
