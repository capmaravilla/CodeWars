a = ("10", "Q")
print(tuple(sorted(a, reverse=True)))


def otro(a: str, b: str):
    return (a, b)


print(otro("F", "10"))
from typing import Union

amigo = "David"
edad = 98
direccion: dict[str, Union[str, int]] = {"calle": "uno", "numero": 9}


def quien(a: str, b: str, c: dict[str, Any]):
    return f"{amigo} de {edad} y {direccion}"


def otromas(a, b):
    return amigo + edad


print(otromas(amigo, edad))
