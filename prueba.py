def list_fibo_normal(n):
    """
    The function `list_fibo_normal` generates a list of Fibonacci numbers up to a specified limit using
    a normal iterative approach.

    :param n: The parameter `n` in the `list_fibo_normal` function represents the number of Fibonacci
    numbers to generate in the list
    :return: The function `list_fibo_normal(n)` returns a list of the first `n` Fibonacci numbers.
    """
    cache = []
    for i in range(n):
        if i < 2:
            cache.append(i)
        else:
            cache.append(cache[-1] + cache[-2])
    return cache


print(list_fibo_normal(10))


def fibonacci_recursive(n):
    cache = []

    def fib(num):
        if num < 2:
            return num
        else:
            return fib(num - 1) + fib(num - 2)

    for i in range(n):
        cache.append(fib(i))
    return cache


print(fibonacci_recursive(10))
