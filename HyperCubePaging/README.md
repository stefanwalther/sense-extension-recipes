# HyperCube Paging
> Example how to get more than 10.000 data-points using a hypercube and data-paging.

## Purpose and Description

This example demonstrates how you can fetch more data using a hypercube and its data pages.

## Sample Load-Script to Generate Some Data

´´´bash
Data:
Load
	round(rand()*1000) as [Measure 1],
	round(rand()*1000000) as [Measure 2],
    'Dimension ' & id as Product;
Load
	RecNo() as id
AutoGenerate 10000;

´´´

## Author

**Stefan Walther**
* http://www.yourwebsite.com
* http://github.com/yourname


## Change Log

See [CHANGELOG.md](CHANGELOG.md)

## License & Copyright
The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See [Additional license information for this solution.](LICENSE.md)




