n = 2

def square(n):
    if n == 1:
        return 1
    else:
        return n*n + square(n-1)
    
# 3 * 3 + 2*2 + 1*1 
print(square(n))