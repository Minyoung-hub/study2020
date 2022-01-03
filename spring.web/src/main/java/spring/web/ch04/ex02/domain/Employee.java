package spring.web.ch04.ex02.domain;

import java.sql.Date;

public class Employee {
   private String name;
   private int salary;
   private Date date;

   public String getLastName() {
	   return name;
	}
   public int getSalary() {
	   return salary;
	}
   public Date getHireDate() {
	   return date;
	}
}