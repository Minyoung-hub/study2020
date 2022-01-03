package spring.web.ch04.home.domain;

import java.sql.Date;

import org.apache.ibatis.type.Alias;

@Alias("emp")
public class Employee {
	private String lastName;
	private int salary;
	private Date hireDate;
	
	public String getLastName() {
		return lastName;
	}
	
	public int getSalary() {
		return salary;
	}
	
	public Date getHireDate() {
		return hireDate;
	}
}