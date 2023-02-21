import hashlib

def pwHash(password):
    salt = "random#&@()"
    password = salt+password

    result = hashlib.sha256(password.encode())
    
    return result.hexdigest()

#User Password is never stored, password is hashed and stored.
#Upon log in, the password is hashed and compared with the previous stored value.