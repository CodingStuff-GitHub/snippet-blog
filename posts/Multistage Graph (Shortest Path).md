---
title: "Multistage Graph (Shortest Path)"
date: "2022-10-31"
description: "A Multistage graph is a directed, weighted graph in which the nodes can be divided into a set of stages such that all edges are from a stage to next stage only "
language: "Python"
categories: ["Python", "Graph", "Shortest path"]
---

A Multistage graph is a directed, weighted graph in which the nodes can be divided into a set of stages such that all edges are from a stage to next stage only. (In other words there is no edge between vertices of same stage and from a vertex of current stage to previous stage).

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
