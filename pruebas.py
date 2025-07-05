def data_reverse(data):
    array = [x for x in data]
    final = []
    for _ in range(int(len(array) / 8)):
        a = [array.pop(0) for _ in range(8)]
        final.append(a)

    return final


bits = [1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 3, 0, 3, 0, 3, 0, 3, 0]

print(data_reverse(bits))
