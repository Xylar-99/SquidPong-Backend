import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string>
{
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);
  return hashed;
}


export async function VerifyPassword(password: string , hashedPassword:string): Promise<boolean>
{
    const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
}


