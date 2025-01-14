3. Exercise on retrieving records from a table

-- select query:-

a. Find out the names of all the clients.

 mysql>select name from client_master;
+----------------+
| name           |
+----------------+
| Ivan Bayross   |
| Mamta Muzumdar |
| Chhaya Bankar  |
| Ashwini Joshi  |
| Hansel Colaco  |
| Deepak Sharma  |
+----------------+

b. Retrieve the entire contents of the Client Master table.

 select * from client_master;
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| clientno | name           | address1     | address2   | city      | pincode | state       | baldue   |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| C00001   | Ivan Bayross   | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002   | Mamta Muzumdar | vijaybger    | yogichok   | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003   | Chhaya Bankar  | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004   | Ashwini Joshi  | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |     0.00 |
| C00005   | Hansel Colaco  | varj bhumi   | katargam   | Mumbai    |  400060 | Maharashtra |  2000.00 |
| C00006   | Deepak Sharma  | deepmala     | bhutbhvani | Mangalore |  560050 | Karnatka    |     0.00 |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+

c. Retrieve the list of names, city and the sate of all the clients.

mysql> select name ,city ,state from client_master;
+----------------+-----------+-------------+
| name           | city      | state       |
+----------------+-----------+-------------+
| Ivan Bayross   | Mumbai    | Maharashtra |
| Mamta Muzumdar | Madras    | Tamil Nadu  |
| Chhaya Bankar  | Mumbai    | Maharashtra |
| Ashwini Joshi  | Bangalore | Karnatka    |
| Hansel Colaco  | Mumbai    | Maharashtra |
| Deepak Sharma  | Mangalore | Karnatka    |
+----------------+-----------+-------------+

d. List the various products available from the Product Master table.

mysql> select description from product_master;
+--------------+
| description  |
+--------------+
| T-Shirt      |
| Shirt        |
| T-Shirt      |
| Cotton Jeans |
| Jeans        |
| Trousers     |
| Pull Overs   |
| Denim Shirts |
| Lycra Tops   |
| Skirts       |
+--------------+

e. List all the clients who are located in Mumbai.

mysql> select name , city from client_master where city= "mumbai";
+---------------+--------+
| name          | city   |
+---------------+--------+
| Ivan Bayross  | Mumbai |
| Chhaya Bankar | Mumbai |
| Hansel Colaco | Mumbai |
+---------------+--------+

f. Find the names of salesmen who have a salary equal to Rs.3000.
mysql> select salesmanname, salamt from salesman_master where salamt=3000;
+--------------+---------+
| salesmanname | salamt  |
+--------------+---------+
| Aman         | 3000.00 |
| Omkar        | 3000.00 |
| Raj          | 3000.00 |
+--------------+---------+

//////////////////////////////////////////

-- upadte query:-

4. Exercise on updating records in a table

a. Change the city of ClientNo 'C00005' to 'Bangalore'.

mysql>update client_master set city= "bangalore" where clientno="C00006";
Query OK, 1 row affected (0.03 sec)
mysql> select *from client_master;
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| clientno | name           | address1     | address2   | city      | pincode | state       | baldue   |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+
| C00001   | Ivan Bayross   | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 15000.00 |
| C00002   | Mamta Muzumdar | vijaybger    | yogichok   | Madras    |  780001 | Tamil Nadu  |     0.00 |
| C00003   | Chhaya Bankar  | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra |  5000.00 |
| C00004   | Ashwini Joshi  | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |     0.00 |
| C00005   | Hansel Colaco  | varj bhumi   | katargam   | bangalore |  400060 | Maharashtra |  2000.00 |
| C00006   | Deepak Sharma  | deepmala     | bhutbhvani | bangalore |  560050 | Karnatka    |     0.00 |
+----------+----------------+--------------+------------+-----------+---------+-------------+----------+


b. Change the BalDue of ClientNo 'C00001' to Rs. 1000. 

mysql> update client_master set baldue=1000 where clientno ="C00001";
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select *from client_master;
+----------+----------------+--------------+------------+-----------+---------+-------------+---------+
| clientno | name           | address1     | address2   | city      | pincode | state       | baldue  |
+----------+----------------+--------------+------------+-----------+---------+-------------+---------+
| C00001   | Ivan Bayross   | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 1000.00 |
| C00002   | Mamta Muzumdar | vijaybger    | yogichok   | Madras    |  780001 | Tamil Nadu  |    0.00 |
| C00003   | Chhaya Bankar  | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra | 5000.00 |
| C00004   | Ashwini Joshi  | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |    0.00 |
| C00005   | Hansel Colaco  | varj bhumi   | katargam   | bangalore |  400060 | Maharashtra | 2000.00 |
| C00006   | Deepak Sharma  | deepmala     | bhutbhvani | bangalore |  560050 | Karnatka    |    0.00 |
+----------+----------------+--------------+------------+-----------+---------+-------------+---------+


c. Change the cost price of Trousers to Rs. 950.00. 

mysql> update product_master set costprice=950 where description ="Trousers";
Query OK, 1 row affected (0.03 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql>  select *from product_master;
+-----------+--------------+---------------+------------+-----------+-----------+-----------+-----------+
| productno | description  | profitpercent | unitmesure | qtyonhand | reoderlvl | sellprice | costprice |
+-----------+--------------+---------------+------------+-----------+-----------+-----------+-----------+
| P00001    | T-Shirt      |          5.00 | Piece      |       200 |        50 |    350.00 |    250.00 |
| P0345     | Shirt        |          6.00 | Piece      |       150 |        50 |    500.00 |    350.00 |
| P03453    | T-Shirt      |          5.00 | Piece      |       250 |        50 |    500.00 |    350.00 |
| P06734    | Cotton Jeans |          5.00 | Piece      |       100 |        20 |    600.00 |    450.00 |
| P07865    | Jeans        |          5.00 | Piece      |       100 |        20 |    750.00 |    500.00 |
| P07868    | Trousers     |          2.00 | Piece      |       150 |        50 |    850.00 |    950.00 |
| P07885    | Pull Overs   |          2.50 | Piece      |        80 |        30 |    700.00 |    450.00 |
| P07965    | Denim Shirts |          4.00 | Piece      |       100 |        40 |    350.00 |    250.00 |
| P07975    | Lycra Tops   |          5.00 | Piece      |        70 |        30 |    300.00 |    175.00 |
| P08865    | Skirts       |          5.00 | Piece      |        75 |        30 |    450.00 |    300.00 |
+-----------+--------------+---------------+------------+-----------+-----------+-----------+-----------+

d. Change the city of the salesman to Pune.

mysql> update salesman_master set city="pune";
Query OK, 4 rows affected (0.03 sec)
Rows matched: 4  Changed: 4  Warnings: 0

mysql>  select *from salesman_master;
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| salesmanno | salesmanname | address1 | address2 | city | pincode | state       | salamt  | tgttoget | ytdsales | remarks |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| S00001     | Aman         | A/14     | Wordi    | pune |  400002 | Maharashtra | 3000.00 |   100.00 |    50.00 | Good    |
| S00002     | Omkar        | 65       | Nariman  | pune |  400001 | Maharashtra | 3000.00 |   100.00 |   100.00 | Good    |
| S00003     | Raj          | P-7      | Bandra   | pune |  400032 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good    |
| S00004     | Ashish       | A/5      | Juhu     | pune |  400044 | Maharashtra | 3500.00 |   200.00 |   150.00 | Good    |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+

////////////////////////////////////////////////////////////////


-- delete query:-

5. Exercise on deleting records in a table

a. Delete all salesmen from the Salesman_Master whose salaries are equal to Rs. 3500. 

mysql> delete from salesman_master where salamt = 3500;
Query OK, 1 row affected (0.02 sec)

mysql>  select *from salesman_master;
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| salesmanno | salesmanname | address1 | address2 | city | pincode | state       | salamt  | tgttoget | ytdsales | remarks |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+
| S00001     | Aman         | A/14     | Wordi    | pune |  400002 | Maharashtra | 3000.00 |   100.00 |    50.00 | Good    |
| S00002     | Omkar        | 65       | Nariman  | pune |  400001 | Maharashtra | 3000.00 |   100.00 |   100.00 | Good    |
| S00003     | Raj          | P-7      | Bandra   | pune |  400032 | Maharashtra | 3000.00 |   200.00 |   100.00 | Good    |
+------------+--------------+----------+----------+------+---------+-------------+---------+----------+----------+---------+

b. Delete all products from Product_Master where the quantity on hand is equal to 100. 

mysql> delete from product_master where qtyonhand = 100;
Query OK, 3 rows affected (0.03 sec)

mysql>  select *from product_master;
+-----------+-------------+---------------+------------+-----------+-----------+-----------+-----------+
| productno | description | profitpercent | unitmesure | qtyonhand | reoderlvl | sellprice | costprice |
+-----------+-------------+---------------+------------+-----------+-----------+-----------+-----------+
| P00001    | T-Shirt     |          5.00 | Piece      |       200 |        50 |    350.00 |    250.00 |
| P0345     | Shirt       |          6.00 | Piece      |       150 |        50 |    500.00 |    350.00 |
| P03453    | T-Shirt     |          5.00 | Piece      |       250 |        50 |    500.00 |    350.00 |
| P07868    | Trousers    |          2.00 | Piece      |       150 |        50 |    850.00 |    950.00 |
| P07885    | Pull Overs  |          2.50 | Piece      |        80 |        30 |    700.00 |    450.00 |
| P07975    | Lycra Tops  |          5.00 | Piece      |        70 |        30 |    300.00 |    175.00 |
| P08865    | Skirts      |          5.00 | Piece      |        75 |        30 |    450.00 |    300.00 |
+-----------+-------------+---------------+------------+-----------+-----------+-----------+-----------+
 
c. Delete from Client Master where the column state holds the value 'Tamil Nadu'.

mysql> delete from client_master where state= "Tamil Nadu";
Query OK, 1 row affected (0.03 sec)

mysql>  select *from client_master;
+----------+---------------+--------------+------------+-----------+---------+-------------+---------+
| clientno | name          | address1     | address2   | city      | pincode | state       | baldue  |
+----------+---------------+--------------+------------+-----------+---------+-------------+---------+
| C00001   | Ivan Bayross  | mota varacha | surat      | Mumbai    |  400054 | Maharashtra | 1000.00 |
| C00003   | Chhaya Bankar | gitanger     | punagam    | Mumbai    |  400057 | Maharashtra | 5000.00 |
| C00004   | Ashwini Joshi | shrdha       | kamrej     | Bangalore |  560001 | Karnatka    |    0.00 |
| C00005   | Hansel Colaco | varj bhumi   | katargam   | bangalore |  400060 | Maharashtra | 2000.00 |
| C00006   | Deepak Sharma | deepmala     | bhutbhvani | bangalore |  560050 | Karnatka    |    0.00 |
+----------+---------------+--------------+------------+-----------+---------+-------------+---------+


