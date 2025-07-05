def sum_of_intervals(intervals):
    # Ordenar los intervalos por su inicio
    intervals = sorted(intervals, key=lambda x: x[0])
    total = 0
    if not intervals:
        return 0
    # Inicializar el primer intervalo
    start, end = intervals[0]
    for current_start, current_end in intervals[1:]:
        if current_start <= end:  # Solapado o adyacente
            # Extender el final si es necesario
            end = max(end, current_end)
        else:
            # Sumar la longitud del intervalo anterior
            total += end - start
            # Comenzar un nuevo intervalo
            start, end = current_start, current_end
    # Sumar la longitud del último intervalo
    total += end - start
    return total


# Ejemplos de prueba
print(sum_of_intervals([(1, 5), (6, 10)]))  # 8
print(sum_of_intervals([(1, 4), (7, 10), (3, 5)]))  # 7
print(sum_of_intervals([[1,4],[7,9],[23,68],[45,78]]))  # 56