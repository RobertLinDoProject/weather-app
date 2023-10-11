import { password } from "./URL.mjs";

export async function hashPassword() {
  // password trans to ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  // built a SHA-256 Hash object
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // trans hash value to Hexadecimal
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedPassword = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashedPassword;
}
