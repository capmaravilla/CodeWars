def next_bigger(n):
    sample = [int(d) for d in str(n)]
    for idx, val in enumerate(sample):
        t = len(sample) - idx - 1
        rang = "".join(str(num) for num in sample[t:])
        rangMax = "".join(str(num) for num in sorted(sample[t:], reverse=True))
        pre = "".join(str(num) for num in sample[0:t])
        if rangMax > rang:
            x = rang[0:1]
            suf = sorted(rang)
            uni = sorted(set(rang))
            el = uni.index(x)
            mid = uni[el + 1]
            suf.remove(mid)
            return f"{pre}{mid}{''.join(suf)}"


print(next_bigger(41563))
