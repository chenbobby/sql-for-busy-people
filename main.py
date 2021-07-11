import random

if __name__ == "__main__":
    num_rows = 500
    table_name = 'table1'
    for _ in range(num_rows):
        x = random.randint(0, 100)
        print(f'INSERT INTO table2 VALUES ({x});')
