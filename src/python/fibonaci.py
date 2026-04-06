def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


num = fibonacci(8)
print(num)


def SecFibo(n):
    cache = [0, 1]
    for _ in range(n - 2):
        cache.append(cache[-1] + cache[-2])
    return cache


print(SecFibo(10))
