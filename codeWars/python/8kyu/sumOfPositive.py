# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

# not mine
# sum() an iterable as an argument and returns the sum
def positive_sum(arr):
    return sum(x for x in arr if x > 0)

# dis mines
def positive_sum(arr):
    sum = 0
    for n in arr:
        if n > 0:
            sum += n
    return sum