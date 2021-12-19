import crypto from "crypto-js";
const secretKey = "c9323252af869cd99934bfd1dd77430c";
class secure_storage {
  set(key, data) {
    // set to local storage and encrypt
    localStorage.setItem(
      key,
      crypto.AES.encrypt(JSON.stringify(data), secretKey).toString()
    );
  }

  get(key) {
    // get from local storage and decrypt
    let data = localStorage.getItem(key);
    if (data) {
      data = JSON.parse(
        crypto.AES.decrypt(data, secretKey).toString(crypto.enc.Utf8)
      );
    }
    return data;
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }
}

export default new secure_storage();
