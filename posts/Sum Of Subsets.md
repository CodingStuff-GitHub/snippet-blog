---
title: "Sum of Subsets"
date: "2022-08-15"
description: "Subset sum problem is to find subset of elements that are selected from a given set whose sum adds up to a given number K. "
language: "Python"
categories: ["Python", "Backtracking"]
---

Subset sum problem is to find subset of elements that are selected from a given set whose sum adds up to a given number K.

```python
from pprint import pprint
from copy import deepcopy

arr = [5, 10, 12, 13, 15, 18]
n = 6
m = 30

inc = [0 for _ in range(n)]
sol = []
sol_show = []


def sum_subset(total, remain_total, index):
    if (total == m):
        sol.append(deepcopy(inc))
        sol_show.append(deepcopy([arr[i] for i in range(n) if inc[i] == 1]))
        return
    if index < n:
        if (total <= m and total + remain_total >= m):
            # Included
            inc[index] = 1
            sum_subset(total + arr[index],
                       remain_total - arr[index], index + 1)

        # Not included
        inc[index] = 0
        sum_subset(total, remain_total - arr[index], index + 1)


sum_subset(0, sum(arr), 0)
pprint(sol)
pprint(sol_show)

```
