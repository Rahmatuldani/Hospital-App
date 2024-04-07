import config from '../config/config';
import * as jose from 'jose';

const JWTToken = (() => {
    const key = config.secretKey;

    async function GenerateToken(payload: string) {
        const token = await new jose.CompactSign(
            new TextEncoder().encode(payload)
        )
            .setProtectedHeader({ alg: 'ES256' })
            .sign(key);
        return token;
    }

    async function Verify(token: string) {
        const { payload } = await jose.compactVerify(token, key);
        const result = new TextDecoder().decode(payload);
        return result;
    }

    return {
        GenerateToken,
        Verify
    };
})();

export default JWTToken;