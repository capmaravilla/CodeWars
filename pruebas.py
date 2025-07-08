def strip_comments(strng, markers):
    lines = strng.split("\n")
    for idx, line in enumerate(lines):
        for mark in markers:
            if lines[idx].count(mark):
                i = lines[idx].find(mark)
                if i == 0:
                    lines[idx] = ""
                elif 1 == -1:
                    lines[idx] = lines[idx][0:-1].rstrip()
                else:
                    lines[idx] = lines[idx][0:i].rstrip()

    return "\n".join(lines)


print(
    strip_comments(
        ", pears watermelons bananas apples @\ncherries @\n! bananas pears\npears watermelons",
        ["?", ",", "!", "@"],
    )
)
