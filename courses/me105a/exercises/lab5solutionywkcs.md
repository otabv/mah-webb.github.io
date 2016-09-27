---
layout: instructions
code: me105a
title: Laboration 5 lösning
---

# Laboration 5 lösning

## Uppgift 1

### SQL-kod

SQL-kod för att skapa tabeller:

```sql
CREATE TABLE customers
(
  cust_id CHAR(10) PRIMARY KEY NOT NULL,
  cust_name TEXT,
  cust_address TEXT,
  cust_city TEXT,
  cust_state TEXT,
  cust_zip TEXT,
  cust_country TEXT,
  cust_contact TEXT,
  cust_email TEXT
);


CREATE TABLE orderitems
(
  order_num INT NOT NULL,
  order_item INT,
  prod_id CHAR(10) NOT NULL,
  quantity INT,
  item_price DECIMAL(8,2),
  PRIMARY KEY (order_num,prod_id)
);

CREATE TABLE orders
(
  order_num INT PRIMARY KEY NOT NULL,
  order_date DATETIME,
  cust_id CHAR(10)
);

CREATE TABLE products
(
  prod_id CHAR(10) PRIMARY KEY NOT NULL,
  vend_id CHAR(10),
  prod_name TEXT,
  prod_price DECIMAL(8,2),
  prod_desc TEXT
);

CREATE TABLE vendors
(
  vend_id CHAR(10) PRIMARY KEY NOT NULL,
  vend_name TEXT,
  vend_address TEXT,
  vend_city TEXT,
  vend_state TEXT,
  vend_zip TEXT,
  vend_country TEXT
);
```

## Uppgift 2

Använd koden från handledningen för att lägga till data i de fem tabellerna.
## Uppgift 3

### SQL-kod

```sql
SELECT prod_name,vend_country FROM products INNER JOIN vendors 
ON products.vend_id = vendors.vend_id```

### Sökresultat

```
'8 inch teddy bear','USA'
'12 inch teddy bear','USA'
'18 inch teddy bear','USA'
'Fish bean bag toy','USA'
'Bird bean bag toy','USA'
'Rabbit bean bag toy','USA'
'Raggedy Ann','USA'
'King doll','England'
'Queen doll','England'
```
## Uppgift  4

### SQL-kod

```sql
SELECT cust_name,order_date FROM customers INNER JOIN orders 
ON customers.cust_id=orders.cust_id
WHERE order_date < '2001-02-01'
```

### Sökresultat

```
'Fun4All','2001-01-12 00:00:00'
'Fun4All','2001-01-30 00:00:00'
```
## Uppgift  5### SQL-kod```sql
SELECT cust_name FROM customers INNER JOIN orders 
ON customers.cust_id = orders.cust_id 
WHERE order_num = 20007```

### Sökresultat

```
'Fun4All'
```

## Uppgift 6### SQL-kod```sql
SELECT order_num FROM orders INNER JOIN customers 
ON orders.cust_id=customers.cust_id WHERE cust_name='Village Toys'```

### Sökresultat

```
20005
20009
```
## Uppgift 7### SQL-kod```sql
SELECT COUNT(order_num) FROM customers INNER JOIN orders 
ON orders.cust_id=customers.cust_id WHERE cust_name='Village Toys'```

### Sökresultat

```
2
```

Village Toys har alltså gjort 2 ordrar. 
## Uppgift 8### SQL-kod```sql
SELECT orderitems.order_num,prod_desc,order_date 
FROM products INNER JOIN orderitems 
ON products.prod_id=orderitems.prod_id INNER JOIN orders 
ON orders.order_num=orderitems.order_num```

### Sökresultat

```
20005,'8 inch teddy bear, comes with cap and jacket','2001-05-01 00:00:00'
20005,'18 inch teddy bear, comes with cap and jacket','2001-05-01 00:00:00'
20006,'8 inch teddy bear, comes with cap and jacket','2001-01-12 00:00:00'
20006,'12 inch teddy bear, comes with cap and jacket','2001-01-12 00:00:00'
20006,'18 inch teddy bear, comes with cap and jacket','2001-01-12 00:00:00'
20007,'Fish bean bag toy, complete with bean bag worms with which to feed it','2001-01-30 00:00:00'
20007,'Bird bean bag toy, eggs are not included','2001-01-30 00:00:00'
20007,'Rabbit bean bag toy, comes with bean bag carrots','2001-01-30 00:00:00'
20007,'18 inch teddy bear, comes with cap and jacket','2001-01-30 00:00:00'
20007,'18 inch Raggedy Ann doll','2001-01-30 00:00:00'
20008,'Fish bean bag toy, complete with bean bag worms with which to feed it','2001-02-03 00:00:00'
20008,'Bird bean bag toy, eggs are not included','2001-02-03 00:00:00'
20008,'Rabbit bean bag toy, comes with bean bag carrots','2001-02-03 00:00:00'
20008,'18 inch teddy bear, comes with cap and jacket','2001-02-03 00:00:00'
20008,'18 inch Raggedy Ann doll','2001-02-03 00:00:00'
20009,'Fish bean bag toy, complete with bean bag worms with which to feed it','2001-02-08 00:00:00'
20009,'Bird bean bag toy, eggs are not included','2001-02-08 00:00:00'
20009,'Rabbit bean bag toy, comes with bean bag carrots','2001-02-08 00:00:00'
```
## Uppgift 9### SQL-kod```sql
SELECT cust_name FROM customers INNER JOIN orders 
ON customers.cust_id=orders.cust_id INNER JOIN orderitems 
ON orders.order_num=orderitems.order_num INNER JOIN products 
ON orderitems.prod_id=products.prod_id 
WHERE prod_name='Raggedy Ann'
```

### Sökreslutat

```
'Fun4All'
'The Toy Store'
```
## Uppgift 10

### SQL-kod```sql
SELECT prod_name,prod_desc FROM products WHERE prod_desc like '%doll%' 
ORDER BY prod_name```

### Sökresultat

```
'King doll','12 inch king doll with royal garments and crown'
'Queen doll','12 inch queen doll with royal garments and crown'
'Raggedy Ann','18 inch Raggedy Ann doll'
```
