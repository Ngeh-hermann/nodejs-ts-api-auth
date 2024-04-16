import crypto from 'crypto';

const SECRET = 'MOJAVELI-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string): string => {
    const hash = crypto.createHmac('sha256', salt)
                     .update(password + SECRET)
                     .digest('hex'); // Specify 'hex' encoding for digest
    return hash;
};
