export interface IPasswordCrypto {
    hash(password: string): Promise<string>;
}