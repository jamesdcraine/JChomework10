INSERT INTO employees (first, last, role, manager) VALUES   
("ted", "jeffords", "forensics_ manager", "big_boss"),
("diante", "michaels", "coroner", "ted jeffords"),
("mike", "diamond", "coroner", "ted jeffords"),
("janice", "portnoy", "glamdoc", "ted jeffords"),
("laneice", "pompeo", "glamdoc", "ted jeffords"),
("guy", "lequa", "host", "ted jeffords"),
("glen", "grind", "host", "ted jeffords"),
("alan", "prince", "penmanship_manager", "big_boss"),
("florence", "davies", "manicurist", "alan prince"),
("bonnie", "ranks", "manicurist", "alan prince"),
("tremaine", "bolton", "coach", "alan prince"),
("percy", "slats", "coach", "alan prince"),
("davis", "penelope", "calligrapher", "alan prince"),
("yoni", "parpose", "calligrapher", "alan prince"),
("nan", "moon", "karate_manager", "big_boss"),
("fred", "peoples", "sensei", "nan moon"),
("artist", "lee", "sensei", "nan moon"),
("dorothy", "mack", "senpai", "nan moon"),
("jeremy", "hampurs", "senpai", "nan moon"),
("justice", "milner", "janitor", "nan moon"),
("katie", "barner", "janitor", "nan moon"),
("alice", "fackler", "finance_manager", "big_boss"),
("alberto", "frunce", "accountant", "alice fackler"),
("juniper", "sales", "accountant", "alice fackler"),
("goldero", "moses", "apprentice", "alice fackler"),
("shadrick", "reyes", "apprentice", "alice fackler"),
("kinsey", "molts", "secretary", "alice fackler"),
("paisley", "venison", "secretary", "alice fackler"),
("jessica", "rosenbaum", "mycology_manager", "big_boss"),
("tom", "wains", "picker", "jessica rosenbaum"),
("dally", "pinchers", "picker", "jessica rosenbaum"),
("richard", "kneal", "hunter", "jessica rosenbaum"),
("griff", "lumbermunt", "hunter", "jessica rosenbaum"),
("ordance", "simon", "mycologist", "jessica rosenbaum"),
("dauphin", "flack", "mycologist", "jessica rosenbaum");

INSERT INTO departments (name) VALUES 
("forensics"),
("operations"),
("penmanship"),
("karate"),
("finance"),
("mycology");
   
INSERT INTO roles (title, salary) VALUES 
("forensics_manager", 65000), 
("coroner", 50000),
("glamdoc", 35000),
("host", 45000),
("penmanship_manager", 65000),
("manicurist", 35000),
("coach", 40000),
("calligrapher", 50000),
("karate_manager", 65000),
("sensei", 50000),
("senpai", 30000),
("janitor", 20000),
("finance_manager", 65000),
("accountant", 55000),
("apprentice", 25000),
("secretary", 30000),
("mycology_manager", 65000),
("picker", 15000),
("hunter", 25000),
("mycologist", 30000),
("big_boss", 75000); 

































SELECT * FROM departments, roles, employees;