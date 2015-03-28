# HyperCube Paging
> Example how to get more than 10.000 data-points using a hypercube and data-paging.

## Purpose and Description

This example demonstrates how you can fetch more data using a hypercube and its data pages.

## Sample Load-Script to Generate Some Data

```
Data:
Load
	round(rand()*1000) as [Measure 1],
	round(rand()*1000000) as [Measure 2],
    'Dimension ' & id as Product;
Load
	RecNo() as id
AutoGenerate 10000;
```