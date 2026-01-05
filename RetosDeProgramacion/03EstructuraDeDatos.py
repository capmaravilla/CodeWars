from os import system

listado = {"David": 677557766}


def agenda():
    while True:
        system("cls")
        print(
            """
            Que desea hacer:
            1 - Buscar
            2 - Insertar
            3 - Actualizar
            4 - Eliminar
            5 - Ver el listado

            Otra tecla para salir
            """
        )
        a = input("Opcion: ")
        match a:
            case "1":
                buscar()
            case "2":
                insertar()
            case "3":
                actualizar()
            case "4":
                borrar()
            case "5":
                ver()
            case _:
                system("cls")
                print("Bye")
                break


def buscar():
    system("cls")
    b = input("Nombre a buscar: ")
    if b in listado:
        print(f"\n{b} -> {listado[b]}\n")
    else:
        print("No se encuentra")
    input("Pulsa enter... ")


def insertar():
    system("cls")
    b = input("Nombre a insertar: ")
    c = input("telefono a insertar: ")
    while len(c) > 9 or not c.isdigit():
        c = input("vuelva a insertar: ")

    listado[b] = int(c)
    print(f"\nInsertado {b} -> {c}\n")
    input("Pulsa enter... ")


def actualizar():
    system("cls")
    b = input("Nombre a actualizar: ")
    if b in listado:
        c = int(input("Nuevo telefono: "))
        listado[b] = c
        print(f"\nActualizado: {b} -> {c}\n")
    else:
        print("Nombre no encontrado")
    input("Pulsa enter... ")


def borrar():
    system("cls")
    b = input("Elemento a borrar: ")
    if b in listado:
        del listado[b]
        print(f"\nBorrado {b}\n")
    else:
        print("No encuentro nombre")
    input("Pulsa enter... ")


def ver():
    system("cls")
    print("------------------------\n")
    for valor in listado:
        n = 10 - len(valor)
        print(f"{valor}{' '*n}-> {listado[valor]}")
    print("\n------------------------")
    input("\nPulsa enter... ")


agenda()
