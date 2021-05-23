-- sample "seed" data to populate the tables to the return of results when queries are run

-- sample data to populate the department table 
INSERT INTO department(dept_name, department_id)
VALUES
("Sales", 1), 
("Human Resources", 2), 
("Research & Development", 3), 
("Marketing", 4), 
("Legal", 5), 
("Finance", 6), 
("Manufacturing", 7);

-- sample data to populate the role table 
INSERT INTO role(title, salary, department_id)
VALUES
("Vice President", 900,000, 1), 
("Senior Director", 600,000, 2), 
("Director", 250,000, 3), 
("Senior Manager", 125,000, 4), 
("Manager", 150,000, 5), 
("Senior Analyst", 89,000, 6), 
("Analyst", 79,000, 7), 

-- sample data to populate the employee table 
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('Maxine', 'Smith', 1, null), 
('John', 'Alexander', 2, null), 
('Fred', 'Brown', 3, 682), 
('Joanna', 'Albertson', 4, 342), 
('Nicholas', 'Dars', 5, 845), 
('Burzin', 'Ferguson', 6, 345), 
('Cindy', 'Ritts', 7, 652), 
('Malory', 'Henrickson', 1, null), 
('Tom', 'Reading', 2, null), 
('Anna', 'Ellings', 3, null), 
('Martin', 'Montana', 4, 209), 
('Mary', 'Jones', 5, 892), 
('Sally', 'Roberts', 6, 123), 
('Samantha', 'Wells', 7, 225), 
('Kelly', 'King', 1, 346), 
('Peony', 'Lu', 2, 123), 
('Yolonda', 'Billingsworth', 3, 234);

