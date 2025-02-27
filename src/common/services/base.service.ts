
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
export class BaseService{
    private salt: string;
    private method: string;

  constructor(salt: string, method: string) {
    this.salt = salt;
    this.method = method;
  }

  hashPassword(password?: string): string {
    if (!password) {
      password = `${Date.now()}-Livia`; // Equivalent to `uniqid().'-Livia'`
    }

    if (this.method === 'md5') {
      return crypto.createHash('md5').update(this.salt + password).digest('hex');
    } else if (this.method === 'sha1') {
      return crypto.createHash('sha1').update(this.salt + password).digest('hex');
    } else if (this.method === 'bcrypt') {
      const saltRounds = 14; // Bcrypt cost
      return bcrypt.hashSync(password, saltRounds);
    } else {
      throw new Error('Invalid hashing method');
    }
  }
}