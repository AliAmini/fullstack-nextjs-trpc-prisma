const bcrypt = require('bcryptjs');

export class PasswordHelper {
    public static hash(plainPassword: string): string {
        return bcrypt.hashSync(plainPassword, 10);
    }

    public static verify(plainPassword: string, password: string): boolean {
        return bcrypt.compareSync(plainPassword, password);
    }
}
